import { motion } from "framer-motion";
import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { contact } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

const focusAreas = ["AI applications", "WhatsApp & Discord assistants", "Business automation"];

const HeroSection = () => (
  <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-[var(--nav-height)]">
    <div className="container-content grid min-h-[calc(100svh-var(--nav-height))] items-center gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
      <div>
        <motion.div {...rise(0)} className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/[0.08] px-3.5 py-1.5 text-sm text-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {contact.availability}
        </motion.div>

        <motion.h1
          id="hero-title"
          {...rise(0.08)}
          className="mt-6 text-[2.5rem] font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
        >
          Building Intelligent Systems for the <span className="text-gradient">Future.</span>
        </motion.h1>

        <motion.p {...rise(0.16)} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I design and develop AI-powered applications, intelligent automation workflows, and business solutions that turn
          complex processes into simpler, smarter experiences.
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#projects" className="btn-primary">
            Explore My Work <ArrowRight size={16} aria-hidden />
          </a>
          <a href="#contact" className="btn-outline">
            <MessageSquare size={16} aria-hidden /> Let's Work Together
          </a>
          <a href={contact.resume} download className="btn-outline">
            <Download size={16} aria-hidden /> Download Resume
          </a>
        </motion.div>
      </div>

      <motion.aside
        {...rise(0.2)}
        aria-label="Profile"
        className="surface relative mx-auto w-full max-w-sm p-6 backdrop-blur-xl sm:p-8"
      >
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 rounded-2xl bg-gradient-to-br from-primary to-accent p-px">
            <img
              src="/User.jpeg"
              alt="Portrait of Bhavesh Kumar Tiwari"
              width={80}
              height={80}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="font-display text-xl font-bold leading-tight text-foreground">Bhavesh Kumar Tiwari</p>
            <p className="mt-1 text-sm text-muted-foreground">AI Automation & Growth · Bengaluru, India</p>
          </div>
        </div>

        <ul className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-6">
          {focusAreas.map(area => (
            <li key={area} className="flex items-center gap-3 text-sm text-foreground/90">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-6">
          <a href="#zigbot" className="rounded-xl border border-zig/25 bg-zig/[0.06] px-3 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-zig/[0.12]">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-zig">Product</span>
            ZiGBoT AI
          </a>
          <a href="#sudarshan" className="rounded-xl border border-sud/25 bg-sud/[0.06] px-3 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-sud/[0.12]">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-sud">Product</span>
            Sudarshan AI
          </a>
        </div>
      </motion.aside>
    </div>
  </section>
);

export default HeroSection;
