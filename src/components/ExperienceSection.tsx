import { motion } from "framer-motion";

const experiences = [
  {
    title: "Product Manager",
    company: "AI Agent Store",
    period: "Nov 2025 – Present",
    bullets: [
      "Defined product roadmap, user flows, and launch milestones for an AI agent marketplace.",
      "Aligned engineering, design, and operations around delivery velocity and quality.",
      "Translated market feedback into prioritized feature releases.",
    ],
  },
  {
    title: "Automation Specialist",
    company: "AI Agent Store",
    period: "Sep 2025 – Present",
    metrics: ["15+ workflows built", "40% ops reduction", "60% adoption boost"],
    bullets: [
      "Designed automation systems that removed repetitive team tasks.",
      "Created scalable processes for AI-powered pipelines and operational workflows.",
      "Produced documentation for rapid internal adoption.",
    ],
  },
  {
    title: "Product Manager",
    company: "Karnataka Bangles Store",
    period: "Nov 2025 – Feb 2026",
    bullets: [
      "Led e-commerce product execution from discovery to production launch.",
      "Scoped React frontend architecture, Shopify integration, and checkout flows.",
      "Delivered a mobile-first experience in 8 weeks.",
    ],
  },
  {
    title: "Digital Marketing Intern",
    company: "Just HR",
    period: "Jul 2025 – Sep 2025",
    metrics: ["35% engagement increase", "20% ROI improvement"],
    bullets: [
      "Built analytics-driven campaign strategies for lead growth.",
      "Optimized performance based on engagement and conversion data.",
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
            Career timeline with product and delivery impact
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
                <div className="glass rounded-3xl p-8 pl-10">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <p>{exp.period}</p>
                      {exp.metrics && (
                        <div className="mt-2 flex flex-wrap justify-end gap-2">
                          {exp.metrics.map(metric => (
                            <span key={metric} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}
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
