import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "An exceptional product mind — always thinking about the user while keeping business goals in focus. Delivered results consistently.",
    name: "Coming Soon",
    role: "Startup Founder",
  },
  {
    quote: "Rare combination of technical depth and product instinct. Makes cross-functional collaboration look effortless.",
    name: "Coming Soon",
    role: "Engineering Lead",
  },
  {
    quote: "Brings clarity to complex problems. Their roadmaps and prioritization frameworks helped us ship 2x faster.",
    name: "Coming Soon",
    role: "Product Director",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12">
            What People Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <Quote size={20} className="text-muted-foreground/40 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="text-sm font-medium text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
