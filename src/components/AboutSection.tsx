import { motion } from "framer-motion";
import { Bot, ShoppingBag, TrendingUp, Layers } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "Intelligent Automation",
    desc: "OpenAI API and whatsapp-web.js powering workflows that eliminate manual work and scale operations.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Growth",
    desc: "Meesho and Etsy integrations paired with lead generation pipelines that drive measurable sales growth.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    desc: "Bulk outreach campaigns and WhatsApp automation reaching 300–500 contacts per campaign with fast routing.",
  },
  {
    icon: Layers,
    title: "Growth Execution",
    desc: "Turning business targets into shipped systems, metrics tracking, and weekly analytics reviews.",
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
                AI Automation & Growth Specialist with <span className="text-gradient">shipped systems</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  I have a BBA in business and four months of shipped AI work: WhatsApp automation handling 100+ leads per day, bulk outreach campaigns reaching 300–500 contacts, and a live e-commerce store on Meesho and Etsy.
                </p>
                <p>
                  My focus is automating manual workflows using OpenAI API, whatsapp-web.js, and custom integrations—measuring impact through operations reduction, lead routing speed, and revenue growth.
                </p>
                <p>
                  From problem definition to deployed systems and weekly analytics, I ship work that delivers measurable business outcomes.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "AI Automation", value: "OpenAI API, Claude AI, whatsapp-web.js" },
                  { label: "Lead Generation", value: "Bulk outreach, lead routing pipelines" },
                  { label: "E-commerce", value: "Meesho & Etsy operations + AI chatbot" },
                  { label: "Background", value: "BBA degree + 4 months shipped AI" },
                ].map(item => (
                  <div key={item.label} className="glass rounded-2xl px-5 py-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-2">{item.label}</p>
                    <p className="text-sm text-foreground font-medium">{item.value}</p>
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
