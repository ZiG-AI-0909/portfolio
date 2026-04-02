import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Download, Mail } from "lucide-react";

const HeroSection = () => {
  const highlights = useMemo(
    () => ["React-first interfaces", "AI-powered automation", "Product-led revenue"],
    []
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[620px] h-[620px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 55%)" }} />
        <div className="absolute top-[10%] right-[-15%] w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.16) 0%, transparent 55%)" }} />
        <div className="absolute bottom-[8%] left-[30%] w-[380px] h-[380px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 60%)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
            Available for frontend and product roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mt-8 text-white"
          >
            I build revenue-driven web products using <span className="text-gradient">React</span> & <span className="text-gradient">AI automation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Product-focused frontend systems that reduce manual work, improve conversion, and scale revenue for e-commerce and B2B businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary inline-flex items-center gap-2">
              <Zap size={16} /> View Projects <ArrowRight size={16} />
            </a>
            <a
              href="mailto:tiwaribhaveshkumar@gmail.com?subject=Resume%20Request"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="btn-outline inline-flex items-center gap-2">
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-10 grid gap-3 sm:grid-cols-3"
          >
            {highlights.map(item => (
              <div key={item} className="glass rounded-3xl px-5 py-4">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-2">{item}</p>
                <p className="text-sm text-foreground font-medium">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
