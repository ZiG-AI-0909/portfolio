import { motion } from "framer-motion";
import { Briefcase, Zap, ShoppingBag, TrendingUp } from "lucide-react";

const experiences = [
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
    icon: Zap,
    title: "AI Automation & Marketing Intern",
    company: "JustHR",
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
    icon: TrendingUp,
    title: "Inside Sales Intern",
    company: "EdiGlobe",
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

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-6 bg-[#040712]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-5 block">Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Timeline of product impact and delivery
          </h2>
        </motion.div>

        <div className="relative pl-8">
          <div className="absolute left-3 top-6 h-full w-px bg-border" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
              >
                <div className="absolute left-[-1px] top-2 flex items-center justify-center">
                  <span className="h-5 w-5 rounded-full bg-cyan-400 ring-8 ring-slate-950" />
                </div>
                <div className="glass rounded-3xl p-8 pl-10 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-2 text-xs text-muted-foreground mb-4">
                        <exp.icon size={16} className="text-cyan-400" />
                        {exp.company}
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{exp.impact}</p>
                      <div className="mt-3 flex flex-wrap justify-end gap-2">
                        {exp.metrics.map(metric => (
                          <span key={metric} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {exp.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
