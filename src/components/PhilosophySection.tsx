import { motion } from "framer-motion";

const beliefs = [
  { label: "Automation > Repetition", desc: "If a human is doing the same thing 50 times a day, it should be a system. I build the system." },
  { label: "Shipped > Perfect", desc: "A working chatbot handling 100 leads is worth more than a perfect one still in development." },
  { label: "Metrics anchor decisions", desc: "Every build starts with a before-state number and ends with an after-state measurement." },
];

const PhilosophySection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-5">Philosophy</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12">
            What I actually believe about automation
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass rounded-3xl p-7"
              >
                <p className="font-display font-semibold text-foreground mb-3">{b.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
