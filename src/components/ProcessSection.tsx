import { motion } from "framer-motion";
import { Search, Lightbulb, ListOrdered, Rocket, BarChart } from "lucide-react";

const steps = [
  { icon: Search, title: "Identify Core Problem", desc: "User research, business requirement gathering, and opportunity analysis." },
  { icon: Lightbulb, title: "Define MVP", desc: "Scope minimum viable solution for fastest validated learning." },
  { icon: ListOrdered, title: "Prioritize Strategically", desc: "Use structured frameworks to balance impact and engineering effort." },
  { icon: Rocket, title: "Execute & Deploy", desc: "Collaborate with engineering, implement solutions, deploy to production, and ensure stability." },
  { icon: BarChart, title: "Measure & Iterate", desc: "Track performance metrics and continuously refine product direction." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Process</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-14">
            How I Work
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="relative z-10 flex items-center justify-center h-10 w-10 rounded-full bg-foreground text-background shrink-0">
                  <step.icon size={18} />
                </div>
                <div className="pt-1">
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    <span className="text-muted-foreground mr-2 text-sm">0{i + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
