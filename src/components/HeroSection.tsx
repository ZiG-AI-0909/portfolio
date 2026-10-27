import { ArrowRight, Download, MapPin } from "lucide-react";
import { contact, profile } from "@/lib/site";

const focusAreas = ["AI agents & chatbots", "WhatsApp & Discord assistants", "Business automation"];

// The hero is the first thing on screen, so it renders fully visible: no entrance animation can hide its text.
const HeroSection = () => (
  <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-[var(--nav-height)]">
    <div className="container-content grid min-h-[calc(100svh-var(--nav-height))] items-center gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
      <div>
        <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-success/30 bg-success/[0.08] px-3.5 py-1.5 text-sm text-foreground sm:rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <strong className="font-semibold">Open to work</strong>
          <span aria-hidden className="text-muted-foreground">·</span>
          <span>{profile.workTypes.join(" / ")}</span>
          <span aria-hidden className="text-muted-foreground">·</span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={13} aria-hidden /> {profile.city}, {profile.country}
          </span>
        </p>

        <h1 id="hero-title" className="mt-6 text-[2.5rem] font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-semibold leading-snug text-foreground sm:text-2xl lg:text-3xl">
          <span className="text-gradient">{profile.jobTitle}</span> — {profile.headline}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I design and ship AI-powered applications, chatbots and automation workflows that turn slow manual processes into
          simple, reliable systems.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRight size={16} aria-hidden />
          </a>
          <a href={contact.resume} download className="btn-outline">
            <Download size={16} aria-hidden /> Download Resume
          </a>
        </div>
      </div>

      <aside
        aria-label="Profile"
        className="surface relative mx-auto w-full max-w-sm p-6 backdrop-blur-xl sm:p-8"
      >
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br from-primary to-accent p-px">
            <img
              src="/User.jpeg"
              alt="Portrait of Bhavesh Kumar Tiwari"              width={96}
              height={96}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="font-display text-xl font-bold leading-tight text-foreground">Bhavesh Kumar Tiwari</p>
            <p className="mt-1 text-sm text-muted-foreground">{profile.jobTitle} · {profile.city}, {profile.country}</p>
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

        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-6">
          <a href="#sudarshan" className="rounded-xl border border-sud/25 bg-sud/[0.06] px-2.5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-sud/[0.12]">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-sud">Product</span>
            Sudarshan AI
          </a>
          <a href="#zigbot" className="rounded-xl border border-zig/25 bg-zig/[0.06] px-2.5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-zig/[0.12]">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-zig">Product</span>
            ZiGBoT AI
          </a>
          <a href="#bangles" className="rounded-xl border border-kbs/25 bg-kbs/[0.06] px-2.5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-kbs/[0.12]">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-kbs">Product</span>
            Bangle Store
          </a>
        </div>
      </aside>
    </div>
  </section>
);

export default HeroSection;
