import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";
import type { BackgroundConfig } from "./AnimatedBackground";

interface ConstellationProps {
  config: BackgroundConfig;
  scrollY: MotionValue<number>;
  reduced: boolean;
}

interface Node {
  x: number;
  y: number;
  vx: number; // base drift
  vy: number;
  ox: number; // extra velocity from the cursor, eased back to 0
  oy: number;
  r: number;
  glow: number; // 0..1, near the cursor
  flash: number; // 0..1, a signal just arrived
}

interface Pulse {
  from: number;
  to: number;
  t: number; // 0..1 along the link
  hops: number; // links left to travel after this one
}

const readHsl = (name: string, fallback: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Layer 2: drifting nodes linked to their neighbours, with signals hopping
 * across links. Neighbour lookups use a spatial grid (cell = link distance),
 * so each node only checks the 9 cells around it instead of every other node.
 */
const Constellation = ({ config, scrollY, reduced }: ConstellationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const nodeColor = readHsl(config.colors.node, "196 100% 60%");
    const pulseColor = readHsl(config.colors.pulse, "258 90% 74%");
    const L = config.linkDistance;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const mouseOn = config.mouse.enabled && canHover && !reduced;

    let w = 0;
    let h = 0;
    let target = 0;
    const nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let cols = 0;
    let rows = 0;
    let cells: number[][] = [];
    let frame = 0;
    let last = 0;
    let nextPulse = 0;
    let lastScroll = scrollY.get();
    const mouse = { x: 0, y: 0, active: false };

    // Adaptive quality: if frames run long early on, drop nodes once.
    let slowFrames = 0;
    let sampled = 0;
    let degraded = false;

    const makeNode = (): Node => {
      const angle = Math.random() * Math.PI * 2;
      const speed = config.speed * rand(0.4, 1);
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        ox: 0,
        oy: 0,
        r: rand(config.nodes.minRadius, config.nodes.maxRadius),
        glow: 0,
        flash: 0,
      };
    };

    const nodeCount = () => {
      const byArea = Math.round((w * h) / config.nodes.areaPerNode);
      return Math.max(config.nodes.mobile, Math.min(config.nodes.desktop, byArea));
    };

    const syncCount = () => {
      while (nodes.length < target) nodes.push(makeNode());
      if (nodes.length > target) {
        nodes.length = target;
        pulses = pulses.filter(p => p.from < target && p.to < target);
      }
    };

    const buildGrid = () => {
      cols = Math.max(1, Math.ceil(w / L));
      rows = Math.max(1, Math.ceil(h / L));
      cells = Array.from({ length: cols * rows }, () => []);
      nodes.forEach((n, i) => {
        const cx = Math.min(cols - 1, Math.max(0, Math.floor(n.x / L)));
        const cy = Math.min(rows - 1, Math.max(0, Math.floor(n.y / L)));
        cells[cy * cols + cx].push(i);
      });
    };

    /** Calls fn for every node index in the 3×3 block of cells around (x, y). */
    const forNear = (x: number, y: number, fn: (j: number) => void) => {
      const cx = Math.floor(x / L);
      const cy = Math.floor(y / L);
      for (let gy = cy - 1; gy <= cy + 1; gy++) {
        if (gy < 0 || gy >= rows) continue;
        for (let gx = cx - 1; gx <= cx + 1; gx++) {
          if (gx < 0 || gx >= cols) continue;
          for (const j of cells[gy * cols + gx]) fn(j);
        }
      }
    };

    const neighbours = (i: number, exclude = -1) => {
      const out: number[] = [];
      const a = nodes[i];
      forNear(a.x, a.y, j => {
        if (j !== i && j !== exclude && Math.hypot(nodes[j].x - a.x, nodes[j].y - a.y) < L) out.push(j);
      });
      return out;
    };

    const spawnPulse = () => {
      for (let tries = 0; tries < 8; tries++) {
        const from = Math.floor(Math.random() * nodes.length);
        const options = neighbours(from);
        if (options.length) {
          pulses.push({ from, to: options[Math.floor(Math.random() * options.length)], t: 0, hops: config.pulse.hops });
          return;
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      buildGrid();

      // Links (each pair once: only j > i)
      ctx.lineWidth = 1;
      nodes.forEach((a, i) => {
        forNear(a.x, a.y, j => {
          if (j <= i) return;
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d >= L) return;
          const boost = 1 + Math.max(a.glow, b.glow) * 1.6;
          ctx.strokeStyle = `hsl(${nodeColor} / ${config.linkOpacity * (1 - d / L) * boost})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        });
      });

      // Cursor links
      if (mouse.active) {
        forNear(mouse.x, mouse.y, j => {
          const n = nodes[j];
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d >= config.mouse.radius) return;
          ctx.strokeStyle = `hsl(${nodeColor} / ${0.28 * (1 - d / config.mouse.radius)})`;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        });
      }

      // Signals: a short bright trail behind a glowing head
      for (const p of pulses) {
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const tail = Math.max(0, p.t - 0.35);
        const tx = a.x + (b.x - a.x) * tail;
        const ty = a.y + (b.y - a.y) * tail;
        const grad = ctx.createLinearGradient(tx, ty, x, y);
        grad.addColorStop(0, `hsl(${pulseColor} / 0)`);
        grad.addColorStop(1, `hsl(${pulseColor} / 0.75)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.lineWidth = 1;

        ctx.fillStyle = `hsl(${pulseColor} / 0.18)`;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `hsl(${pulseColor} / 0.95)`;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Nodes
      for (const n of nodes) {
        const light = Math.max(n.glow, n.flash);
        ctx.fillStyle = `hsl(${nodeColor} / ${0.45 + light * 0.5})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (1 + light * 0.7), 0, Math.PI * 2);
        ctx.fill();
        if (n.flash > 0.05) {
          ctx.fillStyle = `hsl(${pulseColor} / ${n.flash * 0.25})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const step = (now: number) => {
      const elapsed = last ? now - last : 16.7;
      last = now;
      const dt = Math.min(elapsed / 16.7, 3); // 1 = one 60fps frame

      if (!degraded && sampled < 120) {
        sampled++;
        if (elapsed > 24) slowFrames++;
        if (sampled === 120 && slowFrames > 40) {
          degraded = true;
          target = Math.max(config.nodes.mobile, Math.round(target * 0.6));
          syncCount();
        }
      }

      // Scroll parallax: shift the field by a fraction of the scroll delta and wrap it
      const sy = scrollY.get();
      const shift = (sy - lastScroll) * config.parallax;
      lastScroll = sy;

      const ease = Math.pow(0.94, dt);
      for (const n of nodes) {
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d < config.mouse.radius && d > 1) {
            const f = (1 - d / config.mouse.radius) * config.mouse.force * dt;
            n.ox += (dx / d) * f;
            n.oy += (dy / d) * f;
          }
          n.glow += ((d < config.mouse.radius ? 1 - d / config.mouse.radius : 0) - n.glow) * 0.12 * dt;
        } else {
          n.glow += (0 - n.glow) * 0.08 * dt;
        }
        n.ox *= ease;
        n.oy *= ease;
        n.flash *= Math.pow(0.95, dt);
        n.x += (n.vx + n.ox) * dt;
        n.y += (n.vy + n.oy) * dt - shift;
        if (n.x < -20) n.x += w + 40;
        else if (n.x > w + 20) n.x -= w + 40;
        if (n.y < -20) n.y += h + 40;
        else if (n.y > h + 20) n.y -= h + 40;
      }

      if (now >= nextPulse) {
        spawnPulse();
        nextPulse = now + rand(config.pulse.minInterval, config.pulse.maxInterval);
      }
      const advance = elapsed / config.pulse.travelMs;
      const next: Pulse[] = [];
      for (const p of pulses) {
        p.t += advance;
        if (p.t < 1) {
          next.push(p);
          continue;
        }
        const arrived = nodes[p.to];
        if (arrived) arrived.flash = 1;
        if (p.hops > 0 && arrived) {
          const options = neighbours(p.to, p.from);
          if (options.length) next.push({ from: p.to, to: options[Math.floor(Math.random() * options.length)], t: 0, hops: p.hops - 1 });
        }
      }
      pulses = next;

      draw();
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (reduced || frame || document.hidden) return;
      last = 0;
      frame = requestAnimationFrame(step);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (const n of nodes) {
        n.x = Math.min(n.x, w);
        n.y = Math.min(n.y, h);
      }
      target = degraded ? Math.max(config.nodes.mobile, Math.round(nodeCount() * 0.6)) : nodeCount();
      syncCount();
      if (reduced) draw();
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onPointerLeave = () => (mouse.active = false);

    resize();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    if (mouseOn) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }
    start();

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [config, scrollY, reduced]);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

export default Constellation;
