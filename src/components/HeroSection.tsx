import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Download, Mail } from "lucide-react";

const HeroSection = () => {
  const highlights = useMemo(
    () => [
      "100+ leads handled per day",
      "40% operations reduction achieved",
      "300–500 contacts per campaign",
      "15+ automation workflows shipped",
      "3 hours saved daily at JustHR",
      "50+ SEO listings live on Meesho & Etsy",
    ],
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
            className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-12 sm:p-16"
          >
            <div className="flex flex-col gap-8 items-center justify-center sm:items-center sm:justify-start sm:flex-row">
              <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 shadow-lg shadow-cyan-500/20 overflow-hidden">
                <img src="/User.jpeg" alt="Bhavesh Kumar Tiwari" className="h-full w-full object-cover" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">AI Automation & Growth Specialist</p>
                <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-white">Bhavesh Kumar Tiwari</h2>
                <p className="mt-3 text-lg text-muted-foreground">OpenAI API · WhatsApp Bots · E-commerce · Lead Generation</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm text-muted-foreground w-fit">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
              I am available to join immediately
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-gothic text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mt-10 text-white"
          >
            I build AI-powered web products & automation systems that generate leads and revenue
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Automation that reduces manual work. I build WhatsApp chatbots, lead generation systems, and e-commerce automation using OpenAI API and custom integrations—shipped, measured, and live.
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
            <a href="/Resume.docx" download className="btn-outline inline-flex items-center gap-2">
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
            className="mt-10 glass rounded-3xl px-8 py-8 border border-white/10"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-6">Shipped Impact</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <p className="text-sm text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
