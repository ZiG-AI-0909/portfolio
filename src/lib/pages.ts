import { products, type Product } from "@/lib/products";
import { skillGroups } from "@/lib/skills";
import { solutionTabs } from "@/lib/solutions";
import { contact, isFilled, profile, siteUrl } from "@/lib/site";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** Extra schema.org objects for this page, besides the site-wide Person */
  schema?: object[];
  noindex?: boolean;
}

const personId = `${siteUrl}/#person`;

const description =
  "AI Automation Engineer in Bengaluru, India, building AI agents, WhatsApp and Discord chatbots, and business automation. Creator of ZiGBoT AI and the Sudarshan Pipes AI Assistant.";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  jobTitle: profile.jobTitle,
  description,
  knowsAbout: [
    "AI agents",
    "Chatbot development",
    "Workflow automation",
    "Large language models",
    ...solutionTabs[0].groups.map(g => g.name),
    ...skillGroups.flatMap(g => g.items),
  ],
  // Category names only, to keep the schema concise; llms.txt lists every solution.
  makesOffer: solutionTabs.flatMap(tab =>
    tab.groups.map(g => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: tab.id === "automation" ? `${g.name} automation` : g.name },
    })),
  ),
  email: `mailto:${contact.email}`,
  url: siteUrl,
  image: `${siteUrl}/User.jpeg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.city,
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [contact.linkedin, contact.github],
};

const applicationCategory: Record<string, string> = {
  zigbot: "CommunicationApplication",
  "sudarshan-pipes-ai-assistant": "BusinessApplication",
};

const softwareApplication = (p: Product) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: p.name,
  description: p.overview,
  applicationCategory: applicationCategory[p.slug],
  operatingSystem: "Web",
  url: p.cta.href,
  mainEntityOfPage: `${siteUrl}/projects/${p.slug}`,
  image: `${siteUrl}/og-image.png`,
  keywords: p.tech.join(", "),
  creator: { "@id": personId },
  ...(isFilled(p.github) && { codeRepository: p.github }),
});

/** Every route that gets prerendered to static HTML. All but noindex pages are listed in sitemap.xml. */
export const pages: PageMeta[] = [
  {
    path: "/",
    title: `${profile.name} — ${profile.jobTitle} | AI Agents, Chatbots & Automation`,
    description,
  },
  ...products.map(p => ({
    path: `/projects/${p.slug}`,
    title: `${p.name} — ${p.kind} | ${profile.name}`,
    description: p.overview,
    schema: [softwareApplication(p)],
  })),
  {
    path: "/404",
    title: `Page not found | ${profile.name}`,
    description: "This page doesn't exist.",
    noindex: true,
  },
];

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// "</script>" inside JSON would end the tag early, so "<" is escaped.
const jsonLd = (data: object) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

/** The <head> tags that make a page unique: title, description, canonical, Open Graph, Twitter and JSON-LD. */
export const headTags = (page: PageMeta) => {
  const url = siteUrl + (page.path === "/" ? "/" : page.path);
  const image = `${siteUrl}/og-image.png`;
  const title = escape(page.title);
  const desc = escape(page.description);
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${desc}" />`,
    page.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${page.path.startsWith("/projects/") ? "article" : "profile"}" />`,
    `<meta property="og:site_name" content="${escape(profile.name)}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${desc}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escape(`${profile.name}, ${profile.jobTitle}`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${desc}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    jsonLd(person),
    ...(page.schema ?? []).map(jsonLd),
  ].join("\n    ");
};
