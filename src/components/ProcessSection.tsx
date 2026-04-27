import { motion } from "framer-motion";
import { Search, Cpu, Zap, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understand the Manual Bottleneck",
    desc: "Identify exactly which workflow is eating hours — lead handling, outreach, customer support, or reporting. Map the before-state with real numbers.",
  },
  {
    icon: Cpu,
    title: "Design the Automation Architecture",
    desc: "Choose the right stack: OpenAI API for intelligence, whatsapp-web.js for messaging, Node.js for glue. Scope the MVP to the highest-ROI path first.",
  },
  {
    icon: Zap,
    title: "Build & Integrate",
    desc: "Write the integration, connect APIs, handle edge cases. Emphasis on reliability — the bot must handle 100+ messages/day without dropping conversations.",
  },
  {
    icon: Rocket,
    title: "Deploy & Verify",
    desc: "Ship to production, monitor first 48 hours closely, fix friction points. Document so the team can run it independently.",
  },
  {
    icon: BarChart,
    title: "Measure & Iterate",
    desc: "Track the delta: hours saved, response time, lead routing speed, campaign reach. Use weekly analytics to find the next bottleneck and repeat.",
  },
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
          <p className="section-label mb-5">How I Work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From manual workflow to shipped automation
          </h2>
          <p className="text-muted-foreground text-base mb-14 max-w-xl leading-relaxed">
            Every automation project follows the same loop — find the bottleneck, build the system, ship it, measure the impact.
          </p>
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
