import { motion } from "framer-motion";
import { Briefcase, Zap, ShoppingBag, TrendingUp } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Product Manager",
    company: "AI Agent Store",
    period: "Nov 2025 – Present",
    impact: "Launched an AI agent marketplace with product-led automation and stakeholder alignment.",
    metrics: ["15+ workflows", "40% ops reduction"],
    bullets: [
      "Defined roadmap, user flows, and go-to-market requirements for AI products.",
      "Reduced manual workload across operations with automation design.",
      "Drove cross-functional delivery with design and engineering teams.",
    ],
  },
  {
    icon: Zap,
    title: "Automation Specialist",
    company: "AI Agent Store",
    period: "Sep 2025 – Present",
    impact: "Delivered intelligent systems that cut manual work and improved adoption.",
    metrics: ["15+ workflows built", "60% adoption boost"],
    bullets: [
      "Built automation pipelines that run across apps and processes.",
      "Created operational documentation for fast team onboarding.",
      "Measured impact with process and adoption metrics.",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Product Manager",
    company: "Karnataka Bangles Store",
    period: "Nov 2025 – Feb 2026",
    impact: "Delivered a mobile-first commerce experience with SEO and order automation.",
    metrics: ["8-week launch", "100% mobile-first"],
    bullets: [
      "Led end-to-end build of a production e-commerce platform.",
      "Designed checkout flows with WhatsApp order integration.",
      "Launched a scalable catalog and order pipeline.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Intern",
    company: "Just HR",
    period: "Jul 2025 – Sep 2025",
    impact: "Scaled campaigns with analytics and conversion-focused optimization.",
    metrics: ["35% engagement", "20% ROI"],
    bullets: [
      "Executed data-driven campaigns that grew audience engagement.",
      "Optimized campaign performance using analytics and A/B testing.",
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
