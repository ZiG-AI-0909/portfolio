import { motion } from "framer-motion";

const experiences = [
  {
    title: "Product Manager",
    type: "Full-time",
    company: "AI Agent Store",
    period: "Nov 2025 – Present",
    bullets: [
      "Spearheading product roadmap and feature prioritization for an AI agent marketplace",
      "Defined requirements and acceptance criteria with engineering and design teams",
      "Drove iterative Agile releases for fast delivery and continuous improvement",
      "Identified growth opportunities through user feedback and competitive research",
    ],
  },
  {
    title: "Automation Specialist",
    type: "Full-time",
    company: "AI Agent Store",
    period: "Sep 2025 – Present",
    metrics: ["15+ workflows built", "40% ops reduction", "60% adoption boost"],
    bullets: [
      "Designed 15+ automation workflows reducing manual operations by 40%",
      "Built scalable automation pipelines aligned with cloud-based infrastructure",
      "Created documentation improving system adoption by 60%",
    ],
  },
  {
    title: "Product Manager",
    type: "Full-time",
    company: "Karnataka Bangles Store",
    period: "Nov 2025 – Feb 2026",
    bullets: [
      "Led end-to-end e-commerce platform development from discovery to production",
      "Defined product features, user stories, and acceptance criteria",
      "Architected UI using React.js and integrated REST APIs for catalog, cart, and checkout",
      "Launched in 8 weeks — mobile-first, SEO-optimized, WhatsApp-integrated ordering",
    ],
  },
  {
    title: "Digital Marketing Intern",
    type: "Internship",
    company: "Just HR",
    period: "Jul 2025 – Sep 2025",
    metrics: ["35% engagement increase", "20% ROI improvement"],
    bullets: [
      "Executed data-driven campaigns improving audience engagement by 35%",
      "Leveraged analytics insights to improve campaign ROI by 20%",
    ],
  },
  {
    title: "Inside Sales Executive",
    type: "Full-time",
    company: "EdiGlobe",
    period: "Sep 2024 – Nov 2024",
    bullets: [
      "Developed consultative selling skills through direct client engagement",
      "Identified client-fit solutions through problem-solving and discovery conversations",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-12">Work Experience</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-foreground font-medium text-base">{exp.title}</h3>
                  <p className="text-accent text-sm font-mono">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground font-mono">{exp.period}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{exp.type}</p>
                </div>
              </div>

              {exp.metrics && (
                <div className="flex flex-wrap gap-2 my-3">
                  {exp.metrics.map(m => (
                    <span key={m} className="font-mono text-xs px-2 py-1 rounded border border-accent/30 text-accent bg-accent/5">
                      {m}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-3 space-y-2">
                {exp.bullets.map(b => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1.5 text-xs leading-none">•</span>
                    {b}
                  </li>
                ))}
              </ul>

              {i < experiences.length - 1 && (
                <div className="mt-12 border-b border-border" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6">Education</p>
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-foreground font-medium text-base">Bachelor of Business Administration</h3>
              <p className="text-accent text-sm font-mono">Bangalore University</p>
              <p className="text-xs text-muted-foreground mt-1">Human Resources Management & Finance</p>
            </div>
            <p className="text-xs text-muted-foreground font-mono">Apr 2022 – Jul 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
