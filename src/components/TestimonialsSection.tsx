import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, TrendingUp, ServerCog } from "lucide-react";

const stats = [
  { icon: ShieldCheck, value: "40%", label: "Operations reduced", detail: "with automation workflows" },
  { icon: Sparkles, value: "60%", label: "Adoption improved", detail: "with onboarding & automation" },
  { icon: TrendingUp, value: "35%", label: "Engagement growth", detail: "through data-led campaigns" },
  { icon: ServerCog, value: "15+", label: "Automation workflows", detail: "built across products" },
];

const TestimonialsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-secondary/10">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Key Achievements</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            High-impact results, not just polished projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            These metrics show how product thinking and automation combine to free teams, improve adoption, and increase revenue velocity.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass rounded-3xl p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950/70 text-cyan-300">
                <item.icon size={24} />
              </div>
              <div className="text-4xl font-semibold text-white">{item.value}</div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
