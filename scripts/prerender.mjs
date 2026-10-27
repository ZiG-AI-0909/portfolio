// Renders every route in src/lib/pages.ts to static HTML in dist/, so crawlers that don't run
// JavaScript (most AI crawlers) see the full page text. Also writes dist/sitemap.xml.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, headTags, pages, siteUrl } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const template = readFileSync(join(dist, "index.html"), "utf8");

// /projects/zigbot -> projects/zigbot.html, served at the extensionless URL by Vercel's cleanUrls (and by `vite preview`).
const fileFor = path => (path === "/" ? "index.html" : `${path.slice(1)}.html`);

let failed = false;
for (const page of pages) {
  const app = render(page.path);
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, headTags(page))
    .replace('<div id="root"></div>', `<div id="root">${app}</div>`);

  if (!html.includes(app) || !app) {
    console.error(`prerender: failed to inject ${page.path}`);
    failed = true;
  }
  // Placeholders are meant to stay in the source only; flag any that leak into a page.
  if (/\bTODO\b/.test(app)) console.warn(`prerender: ${page.path} contains "TODO" text`);

  const file = join(dist, fileFor(page.path));
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerender: ${page.path} -> ${fileFor(page.path).replace(/\\/g, "/")} (${(app.length / 1024).toFixed(1)} kB of markup)`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = pages
  .filter(p => !p.noindex)
  .map(p => `  <url>\n    <loc>${siteUrl}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log("prerender: sitemap.xml written");

rmSync(ssrDir, { recursive: true, force: true });
if (failed) process.exit(1);
