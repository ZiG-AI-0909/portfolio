import type { LucideIcon } from "lucide-react";
import { Briefcase, Zap, ShoppingBag, TrendingUp, Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { isFilled } from "@/lib/site";

interface Experience {
  icon: LucideIcon;
  title: string;
  company: string;
  /** e.g. "Client work", "Freelance", "Internship" */
  type?: string;
  period: string;
  impact: string;
  metrics: string[];
  bullets: string[];
}

// Newest first. An entry whose title still starts with "TODO" is a template and isn't rendered.
const experiences: Experience[] = [
  {
    icon: Briefcase,
    title: "TODO: role title for your next client or freelance project",
    company: "TODO: client name",
    type: "Freelance",
    period: "TODO: Mon YYYY – Mon YYYY",
    impact: "TODO: one-sentence outcome for the client",
    metrics: ["TODO: metric"],
    bullets: ["TODO: what you built and the result"],
  },
  {
    icon: Building2,
    title: "AI Marketing Agents Engineer",
    company: "Sudarshan Pipes",
    type: "Client work",
    period: "Mar 2026 – Present",
    impact: "Building AI-powered WhatsApp business automation and marketing agents for a pipe manufacturing company.",
    metrics: ["Knowledge-base AI replies", "Auto scheduled campaigns"],
    bullets: [
      "Built a full-stack WhatsApp business automation platform with AI auto-reply grounded in a company knowledge base.",
      "Delivered Excel-driven bulk campaign scheduling with one-time and recurring sends.",
      "Added rate-limiting and business-hours safeguards to protect WhatsApp account health.",
      "Designed and wrote an 8-page AI-assisted product catalogue aligned to IS 15328 / IS 16098 standards, later reused as the chatbot's knowledge base.",
    ],
  },
  {
    icon: Briefcase,
    title: "Automation Specialist",
    company: "AI Agent Store",
    period: "Sep 2025 – Present",
    impact: "Built 15+ automation workflows cutting operational work and boosting team adoption.",
    metrics: ["15+ workflows", "40% ops cut", "60% adoption"],
    bullets: [
      "Designed and deployed 15+ automation workflows across business processes.",
      "Achieved 40% operations reduction through workflow optimization.",
      "Saw 60% adoption boost through clear documentation and iterative refinement.",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Developer",
    company: "Bangle Store (Offline→Online)",
    period: "Nov 2025 – Feb 2026",
    impact: "Took bangle business fully online with 50+ SEO listings and AI chatbot.",
    metrics: ["50+ SEO listings", "24/7 chatbot", "Multi-platform"],
    bullets: [
      "Launched 50+ optimized product listings on Meesho and Etsy with SEO strategy.",
      "Deployed 24/7 WhatsApp AI chatbot using OpenAI API for customer support.",
      "Integrated Canva for bulk design and GitHub Codex for rapid development.",
      "Managed end-to-end storefront setup on two e-commerce platforms.",
    ],
  },
  {
    icon: Zap,
    title: "AI Automation & Marketing Intern",
    company: "JustHR",
    type: "Internship",
    period: "Jul–Sep 2025",
    impact: "Deployed WhatsApp chatbot and bulk outreach handling 100+ leads daily.",
    metrics: ["100+ leads/day", "300–500 outreach/campaign", "<15min routing"],
    bullets: [
      "Built WhatsApp chatbot handling 100+ leads per day with OpenAI API integration.",
      "Created bulk outreach pipeline reaching 300–500 contacts per campaign.",
      "Implemented lead routing system with <15 minute average response time.",
      "Conducted weekly analytics reviews to track and optimize campaign performance.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Inside Sales Intern",
    company: "EdiGlobe",
    type: "Internship",
    period: "Sep–Nov 2024",
    impact: "Managed sales pipeline and CRM systems for B2B inside sales operations.",
    metrics: ["20+ accounts", "50+ CRM records", "Weekly reporting"],
    bullets: [
      "Maintained 20+ active accounts and 50+ CRM records with accurate pipeline tracking.",
      "Prepared weekly pipeline reports tracking sales progression and team performance.",
      "Supported deal management and customer follow-ups for the sales team.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" aria-labelledby="experience-title" className="section border-t border-white/[0.05] bg-surface-1/40">
    <div className="container-content">
      <SectionHeading id="experience-title" label="Experience" title="Timeline of product impact and delivery" />

      <ol className="relative space-y-6 sm:border-l sm:border-white/[0.08] sm:pl-10">
        {experiences.filter(exp => isFilled(exp.title)).map(exp => (
          <li key={`${exp.company}-${exp.title}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[2.85rem] top-8 hidden h-3 w-3 rounded-full border-2 border-primary bg-background sm:block"
            />
            <Reveal>
              <article className="surface card-interactive p-6 sm:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <exp.icon size={15} className="text-primary" aria-hidden />
                      {exp.company}
                      {exp.type && (
                        <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground/80">
                          {exp.type}
                        </span>
                      )}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{exp.period}</p>
                  </div>
                  <ul className="flex flex-wrap gap-1.5 lg:max-w-xs lg:justify-end" aria-label="Highlights">
                    {exp.metrics.map(metric => (
                      <li key={metric} className="chip font-mono text-[11px]">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-5 text-foreground/90">{exp.impact}</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {exp.bullets.map(bullet => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ExperienceSection;
