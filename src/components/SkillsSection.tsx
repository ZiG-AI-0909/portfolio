import { motion } from "framer-motion";
import { Bot, ShoppingBag, BarChart3 } from "lucide-react";

const groups = [
  {
    label: "AI Automation",
    icon: Bot,
    color: "rgba(99,102,241,0.16)",
    border: "rgba(99,102,241,0.3)",
    textColor: "#818cf8",
    skills: ["OpenAI API", "Claude AI", "Prompt Engineering", "whatsapp-web.js", "GitHub Codex", "Node.js"],
  },
  {
    label: "E-commerce & Growth",
    icon: ShoppingBag,
    color: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.3)",
    textColor: "#22d3ee",
    skills: ["Store Deployment", "SEO Optimization", "Meesho", "Etsy", "Bulk Outreach", "Lead Generation Pipelines"],
  },
  {
    label: "Marketing & Tools",
    icon: BarChart3,
    color: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.3)",
    textColor: "#34d399",
    skills: ["Campaign Analytics", "Lead Routing", "Canva", "Google Analytics", "CRM Management", "GitHub"],
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
            AI automation, e-commerce, and growth tools
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass glass-hover rounded-3xl p-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium mb-6"
                style={{ background: group.color, border: `1px solid ${group.border}`, color: group.textColor }}>
                <group.icon size={16} />
                {group.label}
              </div>
              <div className="space-y-3">
                {group.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: group.textColor }} />
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
