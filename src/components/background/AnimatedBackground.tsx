import { useReducedMotion, useScroll } from "framer-motion";
import Aurora from "./Aurora";
import Constellation from "./Constellation";
import GridFloor from "./GridFloor";
import Texture from "./Texture";

/* ─────────────────────────────  Tweak me  ───────────────────────────── */
const BACKGROUND_CONFIG = {
  colors: {
    node: "--primary", // CSS variable for constellation nodes and links
    pulse: "--accent", // CSS variable for the travelling "signal" pulses
    aurora: {
      // CSS variables for the 4 aurora blobs, per scroll phase (order matches `aurora.blobs`)
      top: ["--aurora-blue", "--aurora-cyan", "--aurora-indigo", "--aurora-violet"], // hero: electric blue
      middle: ["--aurora-violet", "--aurora-indigo", "--aurora-magenta", "--aurora-blue"], // mid-page: violet
      bottom: ["--aurora-cyan", "--aurora-teal", "--aurora-blue", "--aurora-violet"], // contact: cyan
    },
  },
  aurora: {
    opacity: 0.17, // peak alpha at each blob's centre (0.15–0.3 keeps text readable)
    blobs: [
      // position + size of each blob, and its drift loop length in seconds (all different so it never visibly repeats)
      { top: "-25%", left: "-20%", size: "75vmax", seconds: 27 },
      { top: "20%", right: "-25%", size: "65vmax", seconds: 34 },
      { bottom: "-30%", left: "15%", size: "70vmax", seconds: 39 },
      { top: "0%", left: "40%", size: "45vmax", seconds: 22 },
    ],
  },
  nodes: {
    desktop: 70, // max node count on large screens
    mobile: 30, // min node count (phones land here)
    areaPerNode: 18000, // px² of viewport per node between those limits
    minRadius: 1.1, // smallest node dot (px)
    maxRadius: 2.4, // largest node dot (px)
  },
  linkDistance: 150, // px: nodes closer than this get a line; also the spatial-grid cell size
  linkOpacity: 0.18, // alpha of a link between two touching nodes (fades to 0 at linkDistance)
  speed: 0.22, // node drift speed (px per frame at 60fps)
  pulse: {
    minInterval: 1000, // ms between new signals (min)
    maxInterval: 2000, // ms between new signals (max)
    travelMs: 900, // ms for a signal to cross one link
    hops: 3, // how many links a signal keeps travelling before it fades
  },
  mouse: {
    enabled: true, // desktop only (fine pointer + hover); ignored on touch devices
    radius: 170, // px around the cursor that nodes react within
    force: 0.04, // >0 drifts nodes toward the cursor, <0 pushes them away
  },
  parallax: 0.12, // how far the constellation moves per px scrolled (0 = fixed)
  grid: {
    enabled: true, // perspective grid floor in the bottom of the viewport
    opacity: 0.08, // line alpha
    cell: 64, // grid cell size (px, before perspective)
    seconds: 4, // time for the floor to scroll one cell toward the viewer
  },
  scanLine: {
    enabled: true, // horizontal light beam sweeping down the screen
    seconds: 8, // one sweep, top to bottom
  },
  grain: { opacity: 0.04 }, // film-grain noise overlay
  vignette: { strength: 0.7 }, // edge darkening (0–1)
};
/* ─────────────────────────────────────────────────────────────────────── */

export type BackgroundConfig = typeof BACKGROUND_CONFIG;

/** Decorative, site-wide animated background. Sits behind all content and never takes clicks. */
const AnimatedBackground = () => {
  const reduced = !!useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const config = BACKGROUND_CONFIG;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
      <Aurora config={config} progress={scrollYProgress} reduced={reduced} />
      <Constellation config={config} scrollY={scrollY} reduced={reduced} />
      <GridFloor config={config} reduced={reduced} />
      <Texture config={config} />
    </div>
  );
};

export default AnimatedBackground;
