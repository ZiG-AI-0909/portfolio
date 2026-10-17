import type { BackgroundConfig } from "./AnimatedBackground";

// Grayscale fractal noise, tiled. Static, so it costs nothing per frame.
const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/** Layer 4: film grain and an edge vignette so the centre of the page stands out. */
const Texture = ({ config }: { config: BackgroundConfig }) => (
  <>
    <div className="absolute inset-0" style={{ backgroundImage: NOISE, backgroundSize: "160px", opacity: config.grain.opacity }} />
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(ellipse 120% 90% at 50% 40%, transparent 50%, hsl(var(--background) / ${config.vignette.strength}) 100%)`,
      }}
    />
  </>
);

export default Texture;
