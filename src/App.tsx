import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

/** The route tree without a router, so the prerenderer can wrap it in a StaticRouter. */
export const AppRoutes = () => (
  <MotionConfig reducedMotion="user">
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </MotionConfig>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
