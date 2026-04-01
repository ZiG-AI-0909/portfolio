import { motion } from "framer-motion";
import { ArrowRight, Zap, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full animate-orb-pulse"
          style={{ background: "radial-gradient(circle, rgba(57,255,20,0.18) 0%, transparent 70%)" }} />
        <div className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] rounded-full animate-orb-pulse"
          style={{ background: "radial-gradient(circle, rgba(255,45,120,0.14) 0%, transparent 70%)", animationDelay: "3s" }} />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full animate-orb-pulse"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)", animationDelay: "5s" }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground tracking-wider">Available for work · Bengaluru, India</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] tracking-tight mb-6"
          >
            <span className="text-foreground">Bhavesh</span>
            <br />
            <span className="text-gradient">Kumar Tiwari</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="font-mono text-sm font-medium" style={{ color: "#39ff14" }}>AI Automation Developer</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-mono text-sm font-medium" style={{ color: "#ff2d78" }}>Shopify Developer</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-mono text-sm font-medium" style={{ color: "#00e5ff" }}>Lead Generation</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
          >
            I build <span className="text-foreground font-medium">AI systems</span> that generate leads and{" "}
            <span className="text-foreground font-medium">automate business workflows</span> — cutting manual work and scaling revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              <Zap size={15} />
              View Projects
              <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={15} />
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-border"
          >
            {[
              { value: "15+", label: "Automation Workflows" },
              { value: "40%", label: "Ops Reduction" },
              { value: "35%", label: "Engagement Growth" },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
