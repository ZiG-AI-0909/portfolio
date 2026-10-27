import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";

export { headTags, pages } from "./lib/pages";
export { siteUrl } from "./lib/site";

export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
