import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { startAnimatedFavicon } from "./lib/animated-favicon";

const root = document.getElementById("root")!;
// Production pages arrive prerendered (scripts/prerender.mjs); the dev server serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
startAnimatedFavicon();
