import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, ExternalLink, FileText, Github, Globe } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { external } from "@/lib/site";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  company: string;
  type: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  links: { label: string; href: string; icon: LucideIcon }[];
}

const projects: Project[] = [
  {
    name: "AI Automation Workflow Suite",
    company: "AI Agent Store",
    type: "AI Automation",
    problem: "Teams were spending hours on manual workflows, handoffs, and reporting instead of core product work.",
    solution: "Built 15+ automation workflows across business processes using OpenAI API and custom Node.js integrations.",
    result: "Achieved 40% operations reduction and 60% team adoption through clear documentation and iterative refinement.",
    metrics: [
      { value: "15+", label: "Workflows" },
      { value: "40%", label: "Ops cut" },
      { value: "60%", label: "Adoption" },
    ],
    stack: ["OpenAI API", "Node.js", "Cloud Integrations", "Process Documentation"],
    links: [{ label: "Visit Website", href: "https://www.aiagentstore.io/", icon: ExternalLink }],
  },
  {
    name: "WhatsApp Lead Automation System",
    company: "JustHR",
    type: "AI Automation",
    problem:
      "Team was manually responding to 100+ WhatsApp messages daily, losing 3 hours to repetitive support and unable to scale outreach.",
    solution:
      "Deployed OpenAI-powered WhatsApp chatbot with automated lead routing and bulk outreach pipeline reaching 300–500 contacts per campaign.",
    result:
      "Recovered 3 hours daily, enabled 300–500 contact campaigns, and established <15 min lead routing with weekly analytics tracking.",
    metrics: [
      { value: "100+", label: "Leads/day" },
      { value: "3h", label: "Saved daily" },
      { value: "300–500", label: "Per campaign" },
    ],
    stack: ["OpenAI API", "whatsapp-web.js", "Node.js"],
    links: [],
  },
  {
    name: "Bangle Store (Offline→Online)",
    company: "Karnataka Bangle Store",
    type: "E-commerce & AI",
    problem: "Traditional bangle retailer operating offline with zero digital presence or streamlined ordering.",
    solution:
      "Took business fully online with 50+ optimized product listings on Meesho and Etsy, plus 24/7 WhatsApp AI chatbot for customer support.",
    result: "Live multi-platform storefront with 50+ SEO listings, AI-powered customer support, and measurable online sales growth.",
    metrics: [
      { value: "50+", label: "SEO listings" },
      { value: "24/7", label: "AI support" },
      { value: "Multi", label: "Platforms" },
    ],
    stack: ["OpenAI API", "whatsapp-web.js", "Meesho", "Etsy", "SEO", "Canva", "Claude AI", "GitHub Codex"],
    links: [
      { label: "Live Store", href: "https://karnatakabanglestore.com/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/BanglesAffairsOfficial/KarnatakaBanglesStore", icon: Github },
    ],
  },
  {
    name: "Sales Pipeline & CRM System",
    company: "EdiGlobe",
    type: "Sales Operations",
    problem: "Inside sales team lacked centralized account management and pipeline visibility for 20+ active accounts.",
    solution:
      "Organized and maintained 50+ CRM records with structured account hierarchy, and built weekly pipeline reporting system.",
    result:
      "Enabled consistent sales tracking, accurate pipeline forecasting, and improved team accountability through transparent reporting.",
    metrics: [
      { value: "20+", label: "Accounts" },
      { value: "50+", label: "CRM records" },
      { value: "Weekly", label: "Reports" },
    ],
    stack: ["CRM Management", "Sales Ops", "Pipeline Tracking", "Analytics Reporting"],
    links: [{ label: "Visit Website", href: "https://ediglobe.com/", icon: Globe }],
  },
  {
    name: "AI-Assisted Product Catalogue Design",
    company: "Sudarshan Pipes",
    type: "AI Content & Design",
    problem:
      "Sudarshan Pipes needed a professional, standards-compliant product catalogue for their Underground Drainage (UGD) pipe range to support sales and dealer outreach, without an in-house design team.",
    solution:
      "Designed and wrote an 8-page product catalogue — company profile, brand journey, Solid Wall vs. Foam Core comparison, and technical specifications aligned to IS 15328 and IS 16098 — using AI to structure and draft the copy, built out in Canva.",
    result:
      "Delivered a print-ready catalogue used directly in sales and dealer communications, later reused as source content for the WhatsApp AI assistant's product knowledge base.",
    metrics: [
      { value: "8", label: "Pages" },
      { value: "2", label: "IS standards" },
      { value: "AI+Canva", label: "Workflow" },
    ],
    stack: ["Canva", "AI Content Generation", "Technical Copywriting", "Brand Design"],
    links: [{ label: "View PDF", href: "/UGD_catalogue.pdf", icon: FileText }],
  },
];

const MoreWorkSection = () => (
  <section id="more-work" aria-labelledby="more-work-title" className="section border-t border-white/[0.05]">
    <div className="container-content">
      <SectionHeading
        id="more-work-title"
        label="More work"
        title="Case studies built for measurable growth"
        lead="Client and employer projects across automation, e-commerce, sales operations and AI-assisted content."
      />

      <Stagger className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => {
          // An odd last card spans both columns instead of leaving an empty slot.
          const wide = projects.length % 2 === 1 && i === projects.length - 1;
          return (
            <StaggerItem key={p.name} className={wide ? "h-full lg:col-span-2" : "h-full"}>
              <article className="surface card-interactive flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
                      <span className="text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-primary">{p.type}</span>
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-snug text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.company}</p>
                  </div>
                </div>
  
                <dl className={cn("mt-6 space-y-4 text-sm leading-relaxed", wide && "lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0")}>
                  {[
                    { label: "Problem", text: p.problem },
                    { label: "Solution", text: p.solution },
                    { label: "Result", text: p.result },
                  ].map(row => (
                    <div key={row.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-accent">{row.label}</dt>
                      <dd className="mt-1 text-muted-foreground">{row.text}</dd>
                    </div>
                  ))}
                </dl>
  
                <div className={cn("mt-6 grid grid-cols-3 gap-2", wide && "lg:max-w-md")}>
                  {p.metrics.map(m => (
                    <div key={m.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-3 text-center">
                      <p className="font-display text-lg font-bold text-foreground">{m.value}</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
  
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${p.name} tech stack`}>
                  {p.stack.map(t => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
  
                {p.links.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {p.links.map(link => (
                      <a
                        key={link.label}
                        href={link.href}
                        {...external}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-foreground/90 transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        <link.icon size={13} aria-hidden /> {link.label} <ArrowUpRight size={12} aria-hidden />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </div>
  </section>
);

export default MoreWorkSection;
