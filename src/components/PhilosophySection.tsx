import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Philosophy</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Product Philosophy
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I believe strong products are built through clarity, disciplined prioritization,
            and technical alignment. Ship focused solutions, validate with real users, and
            iterate based on data.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
