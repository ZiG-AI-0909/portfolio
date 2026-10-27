import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Github, MessagesSquare, PlayCircle } from "lucide-react";
import ZigbotMockup from "@/components/mockups/ZigbotMockup";
import SudarshanMockup from "@/components/mockups/SudarshanMockup";
import BangleStoreMockup from "@/components/mockups/BangleStoreMockup";
import { isFilled, productLinks } from "@/lib/site";

export interface Product {
  id: string;
  /** URL segment of the product's own page: /projects/{slug} */
  slug: string;
  index: string;
  name: string;
  kind: string;
  /** CSS custom property holding this product's accent, e.g. "--zig" */
  accentVar: string;
  /** The problem the product solves, shown first on its case-study card */
  problem: string;
  summary: ReactNode;
  /** Longer plain-text introduction for the product's own page and its meta description */
  overview: string;
  features: string[];
  tech: string[];
  /** Results and impact; entries starting with "TODO" are hidden until filled in */
  results: string[];
  /** Public source code; "TODO" or empty hides the link */
  github?: string;
  /** Demo video or GIF; "TODO" or empty hides the link */
  video?: string;
  /** Optional long-form breakdown shown in a collapsible panel below the showcase */
  details?: { title: string; points: string[] }[];
  cta: { label: string; href: string };
  secondary: { label: string; href: string; icon: LucideIcon }[];
  mockup: ReactNode;
}

export const products: Product[] = [
  {
    id: "sudarshan",
    slug: "sudarshan-pipes-ai-assistant",
    index: "01",
    name: "Sudarshan Pipes AI Assistant",
    kind: "Multi-tenant WhatsApp business automation suite",
    accentVar: "--sud",
    problem:
      "Sudarshan Pipes (SEPL) needed one place to run WhatsApp outreach and customer replies, read tender BOQs, prepare GST quotations and onboard vendors and technicians, instead of spreading that work across phones, spreadsheets and paper forms.",
    summary: (
      <>
        Built for Sudarshan Pipes (SEPL), a PVC and HDPE pipe manufacturer in Bengaluru. It began as a WhatsApp
        bulk-messaging tool with an AI chatbot and grew into an internal operations suite: campaigns, an AI-powered inbox,
        reading tender BOQs, generating quotations, vendor KYC, and staff and technician registration.
      </>
    ),
    overview:
      "The Sudarshan Pipes AI Assistant is a multi-tenant WhatsApp business automation suite built by Bhavesh Kumar Tiwari as AI Marketing Agents Engineer at Sudarshan Pipes (SEPL), a PVC and HDPE pipe manufacturer in Bengaluru. It combines bulk WhatsApp campaigns, an AI inbox that answers from the company knowledge base, tender BOQ extraction into GST quotations, AI tools for sales staff, and vendor KYC and staff registration forms.",
    features: [
      "Two WhatsApp providers: a QR-linked WhatsApp Web session per user, or the official Business Cloud API with templates and delivery receipts",
      "AI inbox: Hinglish-aware opt-outs, human handoff, and replies grounded in an uploaded Knowledge Base (internal-only docs never reach customers)",
      "Bulk campaigns from Excel with per-contact fields, randomised pacing, hourly/daily caps, business-hours sending in the recipient's time zone, and automatic safety stops",
      "BOQ → quotation: OCR and LLM extraction of tender documents, row repair and checks, pipe-line detection, GST quotations, and Excel / PDF / WhatsApp export",
      "AI tools for staff: Ask AI, a sales Copilot, an Image Lead Extractor and photo-based pipe identification",
      "Public Vendor KYC, multi-language technician registration, and an employee self-registration and staff directory",
      "Secrets encrypted with AES-256-GCM, every query scoped to one user, and shared workspaces with owner-only settings",
    ],
    results: [
      "One platform covering campaigns, the AI inbox, BOQ-to-quotation, vendor KYC and staff registration",
      "About 60 smoke-test scripts plus a dedicated campaign-reliability suite",
      "Automatic safety stops and business-hours sending protect the company's WhatsApp account",
      "TODO: measurable impact, e.g. messages sent per month, hours saved per quotation, reply time",
    ],
    github: "TODO: GitHub link, if the client allows the code to be public",
    video: "TODO: link to a demo video or GIF walkthrough",
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
  {
    id: "zigbot",
    slug: "zigbot",
    index: "02",
    name: "ZiGBoT AI",
    kind: "AI Discord bot + web dashboard",
    accentVar: "--zig",
    problem:
      "Most Discord servers run one bot for moderation, another for music and maybe a separate AI chatbot, each configured differently, and none of them feel like part of the community.",
    summary: (
      <>
        ZiGBoT is all of those in one bot with a personality. It began as a stress-relief companion that hangs out in chat, makes people
        laugh and supports them on bad days, and has grown into a full server assistant any server can add and configure.
      </>
    ),
    overview:
      "ZiGBoT AI is an AI Discord bot and web dashboard designed and built end to end by Bhavesh Kumar Tiwari. One bot covers AI chat with configurable personalities, user-controlled memory, reputation, moderation, music and Hindi/English voice chat, with safety rules enforced in code. The bot runs on Node.js and discord.js, the dashboard on Next.js, and replies are generated with Groq with an automatic NVIDIA fallback.",
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
    results: [
      "Live and open to any server: Add to Discord, then configure everything from the web dashboard",
      "627 automated tests run on every change",
      "Free and Premium plans with Razorpay subscriptions built in",
      "TODO: usage numbers, e.g. servers installed, active members, messages handled per day",
    ],
    video: "TODO: link to a demo video or GIF of ZiGBoT in a Discord server",
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
    id: "bangles",
    slug: "karnataka-bangle-store",
    index: "03",
    name: "Karnataka Bangle Store",
    kind: "Full-stack B2C + B2B e-commerce platform",
    accentVar: "--kbs",
    problem:
      "A traditional bangle retailer sold only offline, with no way for retail or wholesale buyers to browse stock, order, pay or track orders online.",
    summary: (
      <>
        A mobile-first store for both retail (B2C) and wholesale (B2B) customers, which I built on my own: requirements,
        UI/UX, frontend, database schema, security policies and deployment. It has a 10-language interface, Google
        sign-in, a UPI QR payment flow with proof upload, stock-aware ordering and an admin console with analytics and
        Excel export.
      </>
    ),
    overview:
      "Karnataka Bangle Store is a full-stack, mobile-first e-commerce platform for a bangle retailer, serving both retail (B2C) and wholesale (B2B) customers, built single-handedly by Bhavesh Kumar Tiwari. It runs on React 18, TypeScript and Vite with a Supabase backend (PostgreSQL, Auth, Storage, RPC and Row-Level Security) on Vercel, and includes a 10-language UI, Google sign-in, a UPI QR payment flow with proof upload, stock-aware ordering and an admin console with analytics and Excel export.",
    features: [
      "Size × colour selection board: pick quantities for every combination with a live total",
      "Stock-aware ordering with urgency badges (out of stock, last few left, limited) and stock decremented in the database",
      "UPI QR payment with transaction ID (UTR) capture and payment-proof upload to private storage, served through signed URLs",
      "Email and Google sign-in with verification and password reset, plus a wholesale (B2B) sign-up path with business proof",
      "10-language interface (English, Hindi, Kannada, Tamil, Telugu, Malayalam, Marathi, Gujarati, Bengali, Punjabi) with live machine translation",
      "Admin console: products, categories, B2B requests, order verification, hero slides, video reels and broadcasts to users",
      "Sales dashboard comparing B2B and B2C orders, with Excel export of all orders, a date range or a month",
      "Row-Level Security on every table, with admin access checked by a Postgres has_role() function",
    ],
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase (Postgres · Auth · Storage · RLS)", "TanStack Query", "Zod", "i18next", "Recharts", "SheetJS", "Cloudinary", "Vercel"],
    results: [
      "Live at karnatakabanglestore.com on a custom domain",
      "29 routes, 17 database tables and 16 versioned SQL migrations, built single-handedly",
      "Retail and wholesale customers served from one store, in 10 languages",
      "TODO: business impact, e.g. orders per month, wholesale customers onboarded, share of sales now online",
    ],
    github: productLinks.bangles.github,
    video: "TODO: link to a demo video or GIF of the store and admin console",
    details: [
      {
        title: "Storefront and checkout",
        points: [
          "Home page with a hero carousel, featured products and video reels; shop with category and occasion filters.",
          "Product pages with a size × colour quantity board, cart and wishlist; the cart is saved in localStorage.",
          "Checkout leads to a UPI QR payment page where the customer enters the UTR and uploads a screenshot.",
          "Order history and order detail pages, with cancellation of a whole order or a single item.",
        ],
      },
      {
        title: "Accounts and auth",
        points: [
          "Sign-up and login with email and password or Google OAuth, with email verification and password reset.",
          "A B2B option at sign-up: wholesale buyers upload business proof, which admins review.",
          "Profile, saved delivery addresses and an inbox for notifications and broadcasts.",
          "Admin routes are protected and checked against the user's role in the database.",
        ],
      },
      {
        title: "Admin console",
        points: [
          "Manage products, categories, colours and B2B requests; upload images to Supabase Storage and reels to Cloudinary.",
          "Sales dashboard (Recharts) comparing B2B and B2C orders.",
          "Order management with payment verification and Excel export (all orders, a date range or a month) via SheetJS.",
          "Edit hero slides and site settings, and send broadcast announcements to users.",
        ],
      },
      {
        title: "Database and security",
        points: [
          "17 tables in Supabase Postgres, including products, orders, order items, payments, invoices, profiles, roles and B2B requests.",
          "A read-only bangles_public view for visitors and an app_role enum for admin and user roles.",
          "Row-Level Security on every table; Postgres functions for has_role, decrement_stock, cancel_order, cancel_order_item and update_b2b_proof.",
          "Public URLs for catalogue images; signed URLs for private files such as payment proofs and invoices.",
          "16 versioned SQL migrations covering the schema, roles, seed data, stock, secondary images, B2B requests and the public view.",
        ],
      },
      {
        title: "Languages",
        points: [
          "i18next with 10 locales: English, Hindi, Kannada, Tamil, Telugu, Malayalam, Marathi, Gujarati, Bengali and Punjabi.",
          "Dynamic text is translated live through the LibreTranslate API, with an in-memory cache and a fallback endpoint.",
        ],
      },
      {
        title: "Forms, UX and SEO",
        points: [
          "React Hook Form with Zod validation; drafts saved locally and an unsaved-changes guard before leaving a page.",
          "Urgency badges, toasts, carousels and drawers built on shadcn/ui and Radix UI.",
          "SEO metadata with Open Graph, Twitter Cards and JSON-LD structured data.",
          "Deployed on Vercel with SPA rewrites, a custom domain and environment-based configuration.",
        ],
      },
    ],
    cta: { label: "Visit the store", href: productLinks.bangles.live },
    secondary: [],
    mockup: <BangleStoreMockup />,
  },
];

export const findProduct = (slug: string | undefined) => products.find(p => p.slug === slug);

/** Links shown after the main call to action, leaving out any GitHub or video link still marked TODO. */
export const secondaryLinks = (p: Product) => [
  ...p.secondary,
  ...(isFilled(p.github) ? [{ label: "GitHub", href: p.github, icon: Github }] : []),
  ...(isFilled(p.video) ? [{ label: "Demo video", href: p.video, icon: PlayCircle }] : []),
];
