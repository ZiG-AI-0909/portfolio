import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check, ChevronDown, MessagesSquare } from "lucide-react";
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
  /** Optional long-form breakdown shown in a collapsible panel below the showcase */
  details?: { title: string; points: string[] }[];
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
        Most Discord servers run one bot for moderation, another for music and maybe a separate AI chatbot. ZiGBoT is all
        of them in one bot with a personality. It began as a stress-relief companion that hangs out in chat, makes people
        laugh and supports them on bad days, and has grown into a full server assistant any server can add and configure.
      </>
    ),
    features: [
      "Talks on mention, reply or in open-chat channels: it reads the room, acts on requests (“play Believer”, “warn @spammer”) or just chats",
      "Personalities per server and per role: Gentle, Savage (mild / spicy / savage roasts with hard limits enforced in code), Neutral, or a Premium custom persona; in English or Hinglish",
      "User-controlled memory with /memory: view, search, correct, export or forget, with 30-day expiry, private by default",
      "30-day reputation that warms or cools how ZiGBoT treats each member",
      "Moderation in plain language or slash commands, checked against real Discord permissions, with Confirm buttons and an audit log",
      "Premium music (YouTube, SoundCloud backup) and voice chat that understands Hindi and English speech",
      "Safety no setting can turn off: crisis helplines, no roasting for under-18 roles, no pings, never asks for Administrator",
      "Web dashboard at zigbotai.vercel.app: configure persona, roles, channels, music, voice and GIFs, test replies, and subscribe via Razorpay",
    ],
    tech: ["Node.js", "discord.js", "Groq", "NVIDIA (fallback)", "MongoDB", "Next.js", "Supabase", "Razorpay", "Vercel", "Render"],
    details: [
      {
        title: "How a conversation works",
        points: [
          "You get its attention by mentioning @ZiGBoT, replying to it, or talking in a channel admins set up for open chat.",
          "It works out what you want: an action (“play Believer”, “warn @spammer”) gets carried out, anything else gets a conversational reply.",
          "It reads the room: the last few messages, the server's personality and language, and your roles.",
          "It checks any memory you've allowed it to keep.",
          "The AI writes a reply and code checks it before sending. Anything unsafe, or a generic “I can't help with that”, is rewritten or replaced.",
          "It replies like a person: typing indicator, natural pacing, and long answers split cleanly across messages.",
        ],
      },
      {
        title: "Personalities",
        points: [
          "Gentle: warm, kind and encouraging, with cute emojis.",
          "Savage: a Gen-Z / desi roast comedian that roasts what you said, never who you are. Mild (friendly teasing), Spicy (default, desi slang and attitude) or Savage (brutal, mild swearing allowed).",
          "At every level: no sexual jokes, family insults, slurs, or jokes about caste, religion, gender, looks or disability. Enforced in code, not just the prompt.",
          "Neutral: a plain, helpful assistant with no persona.",
          "Custom persona (Premium): write your own, or start from Hype Gamer Coach 🎮, Chill Bestie 🌸 or Pirate Captain 🏴‍☠️.",
          "A real question always gets a real answer first; the personality only flavours how it's said.",
          "Language: English (international humour) or Hinglish (Sharma ji ka beta, board exams, chai, cricket).",
          "Swear at it in Savage mode and it fires back a comeback; sexual, family or violent abuse gets a refusal instead.",
        ],
      },
      {
        title: "Memory, with you in control",
        points: [
          "Short-term: remembers the last few messages in a channel for 15 minutes, so follow-ups make sense.",
          "Long-term: you choose what it keeps, e.g. /memory remember “I'm preparing for JEE”, and can view, search, correct, export, forget, clear or switch memory off.",
          "Memories expire after 30 days and stay private unless you share one with the server.",
          "Server owners see only how many memories you have, never what they say.",
          "Saved text is treated as data, so nobody can hide instructions in a memory.",
          "Optional summaries note short facts if the server enables them and you opt in. It never reads threads or age-restricted channels.",
        ],
      },
      {
        title: "Reputation",
        points: [
          "A 30-day record of each member's behaviour: helpful and kind messages versus toxic or spammy ones.",
          "A good record gets a warmer ZiGBoT; a toxic streak gets a colder one.",
          "Ask “what's my reputation?” and it shows the actual record rather than guessing.",
        ],
      },
      {
        title: "Moderation",
        points: [
          "Warn, timeout, kick, ban, unban and bulk-delete, in plain language or with slash commands.",
          "Checks your real Discord permissions every time; destructive actions need a Confirm click.",
          "Every admin action goes to an audit log.",
          "Stands up for members who get insulted; repeat offenders are suggested to mods, never punished automatically.",
        ],
      },
      {
        title: "Music, voice and GIFs",
        points: [
          "Music (Premium): YouTube with SoundCloud backup, queue, pause / skip / stop / loop buttons, volume, shuffle and search; leaves when the channel empties.",
          "Voice chat (Premium): joins your voice channel, understands Hindi and English speech, and talks back in a natural voice.",
          "Reaction GIFs: the occasional hug, cheer or mic drop. Roast GIFs only in Savage mode, all rated G, searched with the bot's own style words, never member text. Admins set rare, normal, often or off.",
        ],
      },
      {
        title: "Safety no setting can switch off",
        points: [
          "Crisis: if someone sounds suicidal or in crisis, it drops every joke and shares real helplines (Tele-MANAS 14416 in India, 988 in the US).",
          "Members with the under-18 role are never roasted, whatever the server's settings.",
          "It can't mass-ping or ping anyone.",
          "It never asks for Administrator permission.",
        ],
      },
      {
        title: "Website and dashboard",
        points: [
          "Landing page with a demo chat, Free vs Premium comparison and an Add to Discord button.",
          "Commands page listing every command with examples.",
          "Dashboard (sign in with Discord): personality, language, roast intensity, custom persona, role behaviours, free-chat and silent channels, music, voice and GIF settings.",
          "Test tab to preview exactly how it would reply, History tab for the audit log, and Premium checkout through Razorpay.",
          "Privacy and Terms pages.",
        ],
      },
      {
        title: "Free vs Premium (per server)",
        points: [
          "Free: chat in all personalities, English or Hinglish, memory and summaries, reputation, moderation, GIFs, up to 3 role mappings.",
          "Premium (₹399/month or ₹3,999/year): higher AI reply limits, custom persona and templates, up to 50 role mappings, music and voice chat.",
          "Extra: the owner can connect ZiGBoT to a YouTube live stream's chat with /watch, where it greets viewers and joins in.",
        ],
      },
      {
        title: "Behind the scenes",
        points: [
          "Bot: Node.js and discord.js on Render. Website: Next.js on Vercel.",
          "AI: Groq, with automatic NVIDIA fallback.",
          "Data: memories and reputation in MongoDB; server settings and billing in Supabase.",
          "627 automated tests run on every change.",
        ],
      },
    ],
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
    kind: "Multi-tenant WhatsApp business automation suite",
    accentVar: "--sud",
    summary: (
      <>
        Built for Sudarshan Pipes (SEPL), a PVC and HDPE pipe manufacturer in Bengaluru. It began as a WhatsApp
        bulk-messaging tool with an AI chatbot and grew into an internal operations suite: campaigns, an AI-powered inbox,
        reading tender BOQs, generating quotations, vendor KYC, and staff and technician registration.
      </>
    ),
    features: [
      "Two WhatsApp providers: a QR-linked WhatsApp Web session per user, or the official Business Cloud API with templates and delivery receipts",
      "AI inbox: Hinglish-aware opt-outs, human handoff, and replies grounded in an uploaded Knowledge Base (internal-only docs never reach customers)",
      "Bulk campaigns from Excel with per-contact fields, randomised pacing, hourly/daily caps, business-hours sending in the recipient's time zone, and automatic safety stops",
      "BOQ → quotation: OCR and LLM extraction of tender documents, row repair and checks, pipe-line detection, GST quotations, and Excel / PDF / WhatsApp export",
      "AI tools for staff: Ask AI, a sales Copilot, an Image Lead Extractor and photo-based pipe identification",
      "Public Vendor KYC, multi-language technician registration, and an employee self-registration and staff directory",
      "Secrets encrypted with AES-256-GCM, every query scoped to one user, and shared workspaces with owner-only settings",
    ],
    tech: ["React 19", "Vite", "Tailwind CSS", "Node.js", "Express", "Socket.IO", "Supabase (Postgres · Storage)", "Baileys", "WhatsApp Cloud API", "NVIDIA (OpenAI-compatible)", "Resend", "Vercel", "Render"],
    details: [
      {
        title: "Architecture",
        points: [
          "React 19 + Vite frontend on Vercel talks to a Node/Express backend over HTTPS and Socket.IO for live updates.",
          "Supabase Postgres and Storage hold all data and files. The browser never reads tables directly; the backend scopes every query to one user.",
          "AI runs on any OpenAI-compatible endpoint, NVIDIA by default (Llama, DeepSeek, Nemotron OCR, vision models), with a separate key and model per feature.",
          "The server refuses to start without an encryption key, and warns at startup if a required SQL migration hasn't been run.",
          "Public forms (KYC, technician, employee registration) need no login; the WhatsApp webhook is public but verifies its HMAC signature.",
        ],
      },
      {
        title: "AI inbox and auto-reply",
        points: [
          "Opt-out check that understands Hinglish: “STOP”, “unsubscribe”, “bandh karo”, “mat bhejo”. “START” opts back in.",
          "Human handoff: “talk to a human”, “call me” or “manager” flags the conversation and sends a holding reply.",
          "AI replies grounded in a Knowledge Base built from uploaded TXT, MD, PDF or DOCX files, split into chunks for lookup.",
          "New messages and unread counts are pushed to the dashboard as they arrive.",
        ],
      },
      {
        title: "Campaigns",
        points: [
          "Four-step builder: Audience → Message → Safety → Review, with {{name}} / {{company}} fields filled per contact from Excel.",
          "Recipients are claimed atomically, so nobody gets the same message twice.",
          "Randomised delays (0.7×–1.4×), hourly and daily caps, and optional pauses every N messages.",
          "Messages go out only during business hours in both your country and the recipient's, using the phone's country code.",
          "Each WhatsApp error maps to an action: pause, retry with exponential backoff, fail permanently, or record an opt-out.",
          "Automatic stops: pause if 50% of the last 20 sends failed, or after 5 identical errors in a row.",
          "Sent → delivered → read tracking, scheduled sends, duplicate, retry failed and media attachments.",
        ],
      },
      {
        title: "BOQ extraction and quotations",
        points: [
          "Upload a tender BOQ as PDF or Excel; scanned PDFs go through OCR, then an LLM extracts structured rows in chunks within a time budget.",
          "Row repair checks qty × rate = amount, compares against the rate in words, and fixes OCR decimal errors (“45398 80” → 45398.80). Every change is logged and flagged rows must be reviewed.",
          "Rule-based detection sorts each line into plastic pipe (HDPE, PVC, IS 4984…), other pipe, or not a pipe.",
          "Quotations with your own rates, server-side GST (CGST + SGST or IGST), amount in words, and sequential numbers like SP/2026-27/0001.",
          "Export as Excel with live formulas, a customer PDF, or send the PDF straight over WhatsApp.",
        ],
      },
      {
        title: "AI tools for staff",
        points: [
          "Ask AI: an employee assistant answering from built-in knowledge, so a broken Knowledge Base can't break it.",
          "Copilot: summarises a contact or conversation for a sales rep, with open questions, products discussed and talking points.",
          "Image Extractor: reads business cards or lead lists with OCR / vision models into exportable lead rows.",
          "Product Identification: identifies a pipe from a photo of it and its printed markings.",
        ],
      },
      {
        title: "Forms, HR and admin",
        points: [
          "Vendor KYC form with document uploads, staff review and export.",
          "Multi-language technician registration, plus employee self-registration and a staff directory with target progress and summary stats.",
          "Storage monitor that emails alerts at 70 / 85 / 95 / 100% capacity, with a download-ZIP-then-clean-up tool.",
          "Analytics: messages per day, campaign sent / delivered / read / failed, replies and opt-outs. Email via Resend.",
          "Shared workspaces let one account open another's data after a share-list check; settings and WhatsApp stay owner-only.",
        ],
      },
      {
        title: "Data, security and testing",
        points: [
          "API keys, WhatsApp tokens and sessions encrypted at rest with AES-256-GCM.",
          "Schema built from 21 ordered Supabase migrations.",
          "Security smoke tests for AI-key leaks, encryption at rest, JWT claims, internal-knowledge isolation and shared-access rules.",
          "About 60 smoke-test scripts run against a fake Supabase client, plus a dedicated campaign-reliability suite.",
        ],
      },
    ],
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

      {product.details && (
        <details className="group relative mt-10 rounded-2xl border border-white/[0.07] bg-surface-1/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden sm:px-6">
            <span>{product.name}, in detail</span>
            <ChevronDown size={18} className="shrink-0 transition-transform duration-200 group-open:rotate-180" style={{ color: accent() }} aria-hidden />
          </summary>
          <div className="grid gap-x-10 gap-y-8 border-t border-white/[0.07] px-5 py-6 sm:px-6 lg:grid-cols-2">
            {product.details.map(section => (
              <section key={section.title} className="min-w-0">
                <h4 className="font-mono text-xs uppercase tracking-wider" style={{ color: accent() }}>
                  {section.title}
                </h4>
                <ul className="mt-3 space-y-2">
                  {section.points.map(point => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: accent() }} aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </details>
      )}
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
