import type { CSSProperties } from "react";
import type { BackgroundConfig } from "./AnimatedBackground";

interface GridFloorProps {
  config: BackgroundConfig;
  reduced: boolean;
}

/**
 * Layer 3: a faint perspective grid floor scrolling toward the viewer, plus a
 * light beam sweeping down the screen. Both animate transform/opacity only.
 */
const GridFloor = ({ config, reduced }: GridFloorProps) => {
  const { grid, scanLine } = config;

  return (
    <>
      {grid.enabled && (
        <div className="bg-floor">
          <div
            className="bg-floor-plane"
            style={
              {
                "--bg-cell": `${grid.cell}px`,
                "--bg-line": `hsl(var(--primary) / ${grid.opacity})`,
                animation: reduced ? "none" : `floor-scroll ${grid.seconds}s linear infinite`,
              } as CSSProperties
            }
          />
        </div>
      )}
      {scanLine.enabled && !reduced && (
        <div className="bg-scan" style={{ animation: `scan-sweep ${scanLine.seconds}s linear infinite` }} />
      )}
    </>
  );
};

export default GridFloor;
