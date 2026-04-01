import { motion } from "framer-motion";

const groups = [
  {
    label: "AI & Automation",
    color: "rgba(139,92,246,0.15)",
    border: "rgba(139,92,246,0.3)",
    textColor: "#a78bfa",
    skills: ["AI Agent Development", "Workflow Automation", "Cloud Pipelines", "Process Documentation", "n8n / Zapier Logic", "AI Prompt Engineering"],
  },
  {
    label: "Frontend Development",
    color: "rgba(99,102,241,0.15)",
    border: "rgba(99,102,241,0.3)",
    textColor: "#818cf8",
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive Design", "Shopify Liquid"],
  },
  {
    label: "APIs & Integration",
    color: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.3)",
    textColor: "#22d3ee",
    skills: ["REST APIs", "Node.js", "MongoDB", "Vercel", "GoDaddy DNS", "Git & GitHub", "Postman"],
  },
  {
    label: "Analytics & Marketing",
    color: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.3)",
    textColor: "#34d399",
    skills: ["Google Analytics", "A/B Testing", "ROI Optimization", "Lead Generation", "Campaign Analytics", "Conversion Funnels"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 relative" style={{ borderTop: "1px solid hsl(var(--border))" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <span className="section-label mb-5 block">Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-14">
            Core <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium mb-5"
                style={{ background: g.color, border: `1px solid ${g.border}`, color: g.textColor }}>
                {g.label}
              </div>
              <div className="flex flex-col gap-2.5">
                {g.skills.map(s => (
                  <div key={s} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: g.textColor }} />
                    <span className="text-sm text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
