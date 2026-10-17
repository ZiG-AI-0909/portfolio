import { useEffect, useRef } from "react";

const NODE_COUNT = 42;
const LINK_DISTANCE = 150;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Pulse {
  from: number;
  to: number;
  t: number;
}

const readToken = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

/**
 * Connected-nodes "agent workflow" backdrop: drifting nodes, faint links between
 * neighbours, and occasional pulses travelling along a link.
 */
const HeroNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const primary = readToken("--primary") || "196 100% 60%";
    const accent = readToken("--accent") || "258 90% 74%";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let frame = 0;
    let visible = true;

    const seed = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1.2 + Math.random() * 1.6,
      }));
      pulses = [];
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = `hsl(${primary} / ${0.16 * (1 - d / LINK_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of pulses) {
        const a = nodes[p.from];
        const b = nodes[p.to];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.fillStyle = `hsl(${accent} / 0.9)`;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const n of nodes) {
        ctx.fillStyle = `hsl(${primary} / 0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const spawnPulse = () => {
      const from = Math.floor(Math.random() * nodes.length);
      let best = -1;
      let bestD = LINK_DISTANCE;
      nodes.forEach((n, i) => {
        if (i === from) return;
        const d = Math.hypot(n.x - nodes[from].x, n.y - nodes[from].y);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      if (best >= 0) pulses.push({ from, to: best, t: 0 });
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      pulses = pulses.filter(p => (p.t += 0.012) < 1);
      if (pulses.length < 4 && Math.random() < 0.03) spawnPulse();
      draw();
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (reduced || frame || !visible || document.hidden) return;
      frame = requestAnimationFrame(step);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let io: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      });
      io.observe(canvas);
    }

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      ro.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
};

export default HeroNetwork;
