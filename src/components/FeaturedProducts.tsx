import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check, MessagesSquare } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import ZigbotMockup from "@/components/mockups/ZigbotMockup";
import SudarshanMockup from "@/components/mockups/SudarshanMockup";
import { external, productLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  index: string;
  name: string;
  kind: string;
  /** CSS custom property holding this product's accent, e.g. "--zig" */
  accentVar: string;
  summary: ReactNode;
  features: string[];
  tech: string[];
  cta: { label: string; href: string };
  secondary: { label: string; href: string; icon: LucideIcon }[];
  mockup: ReactNode;
}

const products: Product[] = [
  {
    id: "zigbot",
    index: "01",
    name: "ZiGBoT AI",
    kind: "AI Discord bot + web dashboard",
    accentVar: "--zig",
    summary: (
      <>
        My own AI Discord bot. It started in my own server and is becoming a multi-server bot: each server gets its own
        personality, rules, role behaviour and channel settings, managed from a web dashboard — and changes in one server
        never affect another.
      </>
    ),
    features: [
      "AI chat on mention or reply, with short per-channel conversation memory",
      "Role-aware personas — savage by default, gentle for the roles you choose",
      "Moderation (kick, ban, timeout, warn, message cleanup) behind Confirm/Cancel buttons, with an audit log",
      "Safety layer: a crisis check runs first and every AI reply passes a moderation check",
      "Music playback and push-to-talk voice in voice channels",
      "Dashboard: sign in with Discord, see only servers you manage, write a custom prompt — every save is re-checked against your live permissions",
    ],
    tech: ["Node.js", "discord.js", "NVIDIA NIM (OpenAI-compatible)", "MongoDB", "Next.js", "Supabase", "Vercel"],
    cta: { label: "Visit ZigBot AI", href: productLinks.zigbot.live },
    secondary: [
      { label: "Add to Discord", href: productLinks.zigbot.discord, icon: MessagesSquare },
    ],
    mockup: <ZigbotMockup />,
  },
  {
    id: "sudarshan",
    index: "02",
    name: "Sudarshan Pipes AI Assistant",
    kind: "Multi-tenant WhatsApp business automation SaaS",
    accentVar: "--sud",
    summary: (
      <>
        Business automation built for Sudarshan Pipes, a PVC/HDPE pipe manufacturer in Bengaluru. It answers WhatsApp
        enquiries from the company's knowledge base, runs scheduled bulk campaigns, and turns customer documents into RFQ
        lists — with every user's data, WhatsApp session and API keys kept separate.
      </>
    ),
    features: [
      "WhatsApp AI auto-replies grounded in a business Knowledge Base",
      "Bulk WhatsApp campaigns from an Excel contact upload, with scheduled and recurring sends",
      "Contacts, message Templates and Analytics",
      "Image Lead Extractor",
      "Document Intelligence: turns BOQ / requirement documents into RFQ lists",
      "Salesperson Copilot and an internal “Ask AI” tool",
      "Multi-tenant: per-user data isolation with Supabase row-level security, per-user WhatsApp sessions and API keys",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "Supabase (Postgres · Auth · Storage)", "Vercel", "Render"],
    cta: { label: "Explore Sudarshan AI", href: productLinks.sudarshan.live },
    secondary: [],
    mockup: <SudarshanMockup />,
  },
];

const ProductShowcase = ({ product, reverse }: { product: Product; reverse?: boolean }) => {
  const accent = (alpha = 1) => `hsl(var(${product.accentVar}) / ${alpha})`;

  return (
    <article
      id={product.id}
      aria-labelledby={`${product.id}-title`}
      className="relative scroll-mt-[calc(var(--nav-height)+1rem)] overflow-hidden rounded-3xl border border-white/[0.07] bg-surface-1/60 p-5 sm:p-8 lg:p-12"
      style={{ "--glow": `var(${product.accentVar})` } as CSSProperties}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 h-80 w-[36rem] rounded-full blur-3xl"
        style={{ background: accent(0.12), [reverse ? "left" : "right"]: "-8rem" }}
      />

      <div className={cn("relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14", reverse && "lg:[&>*:first-child]:order-2")}>
        <Reveal className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs" style={{ color: accent() }}>
              {product.index}
            </span>
            <span
              className="rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider"
              style={{ borderColor: accent(0.3), background: accent(0.08), color: accent() }}
            >
              {product.kind}
            </span>
          </div>

          <h3 id={`${product.id}-title`} className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {product.name}
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{product.summary}</p>

          <Stagger className="mt-7 space-y-3" gap={0.05}>
            {product.features.map(f => (
              <StaggerItem key={f} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                  style={{ background: accent(0.12), color: accent() }}
                >
                  <Check size={12} strokeWidth={3} aria-hidden />
                </span>
                {f}
              </StaggerItem>
            ))}
          </Stagger>

          <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${product.name} tech stack`}>
            {product.tech.map(t => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={product.cta.href}
              {...external}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: accent(), boxShadow: `0 10px 30px -12px ${accent(0.8)}` }}
            >
              {product.cta.label} <ArrowUpRight size={16} aria-hidden />
            </a>
            {product.secondary.map(link => (
              <a key={link.label} href={link.href} {...external} className="btn-outline">
                <link.icon size={16} aria-hidden /> {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 lg:pt-8">
          {product.mockup}
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
            Illustrative interface, not a screenshot
          </p>
        </Reveal>
      </div>
    </article>
  );
};

const FeaturedProducts = () => (
  <section id="projects" aria-labelledby="projects-title" className="section">
    <div className="container-content">
      <SectionHeading
        id="projects-title"
        label="Featured products"
        title="Two AI products, built end to end"
        lead="An AI Discord bot with its own management dashboard, and a multi-tenant WhatsApp automation platform for a manufacturing business."
      />
      <div className="space-y-10 sm:space-y-14">
        {products.map((p, i) => (
          <ProductShowcase key={p.id} product={p} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
