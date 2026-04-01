import { motion } from "framer-motion";
import { Bot, ShoppingBag, TrendingUp, Layers } from "lucide-react";

const pillars = [
  { icon: Bot, title: "AI Automation", desc: "Building intelligent workflows that replace repetitive manual tasks and scale business operations." },
  { icon: ShoppingBag, title: "Shopify Development", desc: "End-to-end e-commerce platforms with React frontends, API integrations, and conversion-optimized UX." },
  { icon: TrendingUp, title: "Lead Generation", desc: "Data-driven campaigns and analytics systems that grow pipelines and improve ROI measurably." },
  { icon: Layers, title: "Technical PM", desc: "Bridging business goals with engineering execution — from MVP scoping to production deployment." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <span className="section-label mb-5 block">About Me</span>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                I turn complex business problems into{" "}
                <span className="text-gradient">automated solutions</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Technical Product Manager turned AI Automation Developer. I specialize in building systems that cut manual work, 
                  generate leads, and deploy e-commerce platforms that convert — from first line of code to production.
                </p>
                <p>
                  With hands-on experience in React.js, REST APIs, cloud automation pipelines, and AI agent tools, 
                  I bring both the product instinct and technical depth needed to ship things that actually work.
                </p>
                <p>
                  My work spans AI automation at AI Agent Store, full-stack e-commerce at Karnataka Bangle Store, 
                  and performance marketing at Just HR — always focused on measurable outcomes.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {["React.js", "Node.js", "AI Workflows", "Shopify", "REST APIs", "MongoDB"].map(t => (
                  <span key={t} className="glass px-3 py-1.5 rounded-lg text-xs font-mono text-muted-foreground border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass glass-hover rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.2))", border: "1px solid rgba(99,102,241,0.3)" }}>
                    <p.icon size={18} className="text-primary" style={{ color: "hsl(188 94% 56%)" }} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
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
