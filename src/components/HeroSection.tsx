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
            className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
                  BK
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Frontend Developer</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Bhavesh Kumar Tiwari</h2>
                  <p className="text-sm text-muted-foreground">React | AI Automation | Product Thinking</p>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-foreground shadow-lg shadow-slate-950/30">
                Built 15+ automation workflows reducing manual work by 40% and improving adoption by 60%
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
              React + Product Thinking + AI Automation
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mt-10 text-white"
          >
            I build AI-powered web products & automation systems that generate leads and revenue
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            High-conversion React experiences, intelligent workflows, and SaaS-grade frontend systems designed to move metrics, not just launch features.
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
            <a href="/Resume.pdf" download className="btn-outline inline-flex items-center gap-2">
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
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {highlights.map(item => (
              <div key={item} className="glass rounded-3xl px-5 py-5 border border-white/10 hover:-translate-y-1 transition-transform duration-300">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-3">Result</p>
                <p className="text-sm text-foreground font-semibold">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
