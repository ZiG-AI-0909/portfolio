import { motion } from "framer-motion";

const groups = [
  {
    label: "Frontend",
    color: "rgba(99,102,241,0.16)",
    border: "rgba(99,102,241,0.3)",
    textColor: "#818cf8",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Responsive UI", "Animations & Motion", "Accessibility"],
  },
  {
    label: "Tools",
    color: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.3)",
    textColor: "#22d3ee",
    skills: ["Git & GitHub", "REST APIs", "Vercel", "Postman", "Figma-ready handoff", "Shopify/Headless"],
  },
  {
    label: "Product Skills",
    color: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.3)",
    textColor: "#34d399",
    skills: ["Product discovery", "Roadmap planning", "Conversion optimization", "Analytics-driven decisions", "AI automation strategy", "Stakeholder alignment"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 relative" style={{ borderTop: "1px solid hsl(var(--border))" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-5 block">Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-14">
            Core <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-3xl p-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium mb-6"
                style={{ background: g.color, border: `1px solid ${g.border}`, color: g.textColor }}>
                {g.label}
              </div>
              <div className="space-y-3">
                {g.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: g.textColor }} />
                    <span className="text-sm text-muted-foreground">{skill}</span>
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
