import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { startAnimatedFavicon } from "./lib/animated-favicon";

createRoot(document.getElementById("root")!).render(<App />);
startAnimatedFavicon();
