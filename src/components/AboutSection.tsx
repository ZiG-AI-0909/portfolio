import { motion } from "framer-motion";
import { Bot, ShoppingBag, TrendingUp, Layers } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Designing intelligent workflows that remove manual handoffs and unlock recurring revenue.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Systems",
    desc: "Building React-first storefronts and order pipelines that scale product discovery and conversions.",
  },
  {
    icon: TrendingUp,
    title: "Growth Execution",
    desc: "Aligning product decisions with metrics, analytics, and high-value business outcomes.",
  },
  {
    icon: Layers,
    title: "Product Thinking",
    desc: "Turning business goals into clear UX, scoped features, and fast delivery plans.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-5 block">About Me</span>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                Frontend Developer with <span className="text-gradient">Product Thinking</span> mindset
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  I build premium React experiences with a strong product lens: converting traffic, automating repetitive work, and shipping sustainable web products.
                </p>
                <p>
                  My specialty is bridging UI execution with AI automation and e-commerce flows so teams can launch faster and capture real business results.
                </p>
                <p>
                  From design and requirements to deployment, I focus on clean code, measurable outcomes, and polished product experiences.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "React expertise",
                  "AI automation",
                  "E-commerce experience",
                  "Conversion-focused UX",
                ].map(item => (
                  <div key={item} className="glass rounded-2xl px-5 py-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-2">{item}</p>
                    <p className="text-sm text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="glass glass-hover rounded-3xl p-6"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ background: "rgba(99,102,241,0.12)" }}>
                    <p.icon size={20} className="text-cyan-300" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
