import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";import { initFaviconLoader } from "./utils/favicon-loader";

// Initialize favicon loader animation
initFaviconLoader();
createRoot(document.getElementById("root")!).render(<App />);
