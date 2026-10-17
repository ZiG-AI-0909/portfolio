import type { CSSProperties } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import type { BackgroundConfig } from "./AnimatedBackground";

interface AuroraProps {
  config: BackgroundConfig;
  progress: MotionValue<number>;
  reduced: boolean;
}

/**
 * Layer 1: large soft radial gradients drifting on independent loops.
 * Each blob stacks three colour versions (top / middle / bottom of the page) and
 * cross-fades between them with scroll, so the hue shift is opacity-only.
 * The softness comes from the gradient itself; no filter: blur() is used.
 */
const Aurora = ({ config, progress, reduced }: AuroraProps) => {
  const top = useTransform(progress, [0, 0.45], [1, 0]);
  const middle = useTransform(progress, [0.1, 0.5, 0.88], [0, 1, 0]);
  const bottom = useTransform(progress, [0.55, 0.95], [0, 1]);

  const phases = [
    { colors: config.colors.aurora.top, opacity: reduced ? 1 : top },
    { colors: config.colors.aurora.middle, opacity: reduced ? 0 : middle },
    { colors: config.colors.aurora.bottom, opacity: reduced ? 0 : bottom },
  ];

  return (
    <div className="absolute inset-0">
      {config.aurora.blobs.map((blob, i) => {
        const { seconds, size, ...position } = blob;
        const style: CSSProperties = {
          ...position,
          width: size,
          height: size,
          animation: reduced ? "none" : `aurora-drift-${i + 1} ${seconds}s ease-in-out infinite alternate`,
        };
        return (
          <div key={i} className="absolute will-change-transform" style={style}>
            {phases.map((phase, p) => (
              <motion.div
                key={p}
                className="absolute inset-0 rounded-full"
                style={{
                  opacity: phase.opacity,
                  background: `radial-gradient(closest-side, hsl(var(${phase.colors[i]}) / ${config.aurora.opacity}), hsl(var(${phase.colors[i]}) / ${config.aurora.opacity * 0.35}) 45%, transparent 72%)`,
                }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Aurora;
