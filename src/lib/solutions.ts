import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  BookOpen,
  Bot,
  Boxes,
  CalendarClock,
  ClipboardCheck,
  Database,
  FileSignature,
  FileText,
  Gauge,
  Headset,
  LifeBuoy,
  LineChart,
  ListChecks,
  Megaphone,
  MessagesSquare,
  Network,
  Landmark,
  PenLine,
  PhoneCall,
  PieChart,
  Receipt,
  Repeat,
  ScanSearch,
  ScanText,
  Send,
  Share2,
  Star,
  Tags,
  Target,
  Ticket,
  TriangleAlert,
  Truck,
  UserCheck,
  UserPlus,
  Wallet,
} from "lucide-react";

export interface Solution {
  icon: LucideIcon;
  title: string;
  /** One line on the business value */
  value: string;
  /** 2–4 tech tags */
  tags: string[];
  /** Slug of the case study (/projects/{slug}) where this has already been built */
  builtIn?: string;
}

export interface SolutionGroup {
  /** Category (AI Solutions) or department (Business Automation) */
  name: string;
  items: Solution[];
}

export interface SolutionTab {
  id: string;
  label: string;
  groups: SolutionGroup[];
}

export const solutionTabs: SolutionTab[] = [
  {
    id: "ai",
    label: "AI Solutions",
    groups: [
      {
        name: "AI Agents",
        items: [
          {
            icon: MessagesSquare,
            title: "Conversational AI agent",
            value: "A chat agent with its own personality, memory and actions, living where your community already talks.",
            tags: ["Groq", "discord.js", "MongoDB"],
            builtIn: "zigbot",
          },
          {
            icon: Target,
            title: "Sales / SDR agent",
            value: "Researches prospects, writes personalised outreach and books meetings, so reps spend time on warm calls.",
            tags: ["LLM agents", "Web research", "Calendar API", "CRM"],
          },
          {
            icon: Headset,
            title: "Customer service agent with actions",
            value: "Handles orders, refunds and bookings end to end through your APIs instead of only answering questions.",
            tags: ["Tool calling", "REST APIs", "WhatsApp"],
          },
          {
            icon: Bot,
            title: "Internal ops agent",
            value: "Employees request leave or look up sales from Slack or WhatsApp, and the agent does the task.",
            tags: ["Slack", "WhatsApp", "Supabase"],
          },
          {
            icon: Network,
            title: "Multi-agent workflows",
            value: "Research → write → review pipelines that draft reports and proposals for a person to approve.",
            tags: ["Multi-agent", "OpenAI API", "Claude"],
          },
        ],
      },
      {
        name: "Knowledge AI (RAG)",
        items: [
          {
            icon: LifeBuoy,
            title: "AI support / chat assistant",
            value: "Answers customers on WhatsApp from your own documents and hands tricky chats to a person.",
            tags: ["RAG", "WhatsApp Cloud API", "Supabase"],
            builtIn: "sudarshan-pipes-ai-assistant",
          },
          {
            icon: BookOpen,
            title: "Company knowledge assistant",
            value: "Answers from your SOPs, policies and manuals, with sources, so staff stop asking around.",
            tags: ["RAG", "Embeddings", "Citations"],
          },
          {
            icon: Tags,
            title: "Sales enablement bot",
            value: "Instant pricing and product-fit answers from your catalogue for every rep.",
            tags: ["RAG", "Product catalogue", "WhatsApp"],
          },
          {
            icon: FileSignature,
            title: "Contract Q&A",
            value: "Clauses, renewal dates and risks pulled from uploaded contracts in seconds.",
            tags: ["RAG", "PDF parsing", "LLM"],
          },
        ],
      },
      {
        name: "Document AI",
        items: [
          {
            icon: ScanText,
            title: "Invoice, KYC and form extraction",
            value: "Turns invoices, KYC documents and forms into clean rows in Sheets or your ERP.",
            tags: ["OCR", "LLM extraction", "Google Sheets"],
          },
          {
            icon: ClipboardCheck,
            title: "Contract review against a checklist",
            value: "Flags missing or risky clauses against your own checklist before anyone signs.",
            tags: ["LLM", "PDF parsing", "Checklists"],
          },
          {
            icon: FileText,
            title: "Long report summarisation",
            value: "Condenses long reports into the decisions, numbers and risks that matter.",
            tags: ["LLM", "Chunking"],
          },
        ],
      },
      {
        name: "Voice AI",
        items: [
          {
            icon: PhoneCall,
            title: "AI calling agent (Hindi + English)",
            value: "Calls customers for bookings, lead follow-ups and payment reminders, in Hindi or English.",
            tags: ["Speech-to-text", "Text-to-speech", "Telephony API"],
          },
          {
            icon: AudioLines,
            title: "Sales call insights",
            value: "Transcribes, scores and summarises sales calls so managers coach on real data.",
            tags: ["Transcription", "LLM scoring"],
          },
        ],
      },
      {
        name: "Vision AI",
        items: [
          {
            icon: ScanSearch,
            title: "Product defect detection",
            value: "Spots defects from product photos before they reach a customer.",
            tags: ["Vision models", "Image classification"],
          },
          {
            icon: Boxes,
            title: "Shelf and stock counting",
            value: "Counts stock and checks shelves from a phone photo for retail teams.",
            tags: ["Object detection", "Mobile camera"],
          },
        ],
      },
      {
        name: "Data AI",
        items: [
          {
            icon: Database,
            title: "Chat with your data",
            value: "Ask questions in plain English and get SQL answers and charts from your own database.",
            tags: ["Text-to-SQL", "Postgres", "Charts"],
          },
          {
            icon: LineChart,
            title: "Sales forecasting and churn prediction",
            value: "Predicts next month's sales and which customers are likely to leave.",
            tags: ["Forecasting", "Machine learning"],
          },
        ],
      },
      {
        name: "Content AI",
        items: [
          {
            icon: PenLine,
            title: "Product descriptions at scale",
            value: "SEO-ready descriptions for hundreds of products, in your brand voice.",
            tags: ["LLM", "SEO", "Bulk generation"],
          },
          {
            icon: Megaphone,
            title: "Ad copy and creative variants",
            value: "Dozens of on-brand ad and creative variants to test, in minutes.",
            tags: ["LLM", "A/B testing"],
          },
        ],
      },
    ],
  },
  {
    id: "automation",
    label: "Business Automation",
    groups: [
      {
        name: "Sales & Leads",
        items: [
          {
            icon: UserPlus,
            title: "Lead capture → CRM with instant WhatsApp reply",
            value: "Every new lead lands in your CRM and gets a WhatsApp reply within seconds.",
            tags: ["Webhooks", "CRM", "WhatsApp"],
          },
          {
            icon: Gauge,
            title: "AI lead qualification and scoring",
            value: "Scores and sorts leads so sales calls the hottest ones first.",
            tags: ["LLM", "CRM"],
          },
          {
            icon: Repeat,
            title: "Automated follow-up sequences",
            value: "Timed follow-ups that stop as soon as the lead replies.",
            tags: ["Scheduler", "WhatsApp", "Email"],
          },
          {
            icon: Receipt,
            title: "Quotation PDF generator",
            value: "Quotations with GST and totals, generated and sent in one click.",
            tags: ["PDF", "GST", "WhatsApp"],
            builtIn: "sudarshan-pipes-ai-assistant",
          },
        ],
      },
      {
        name: "Customer Support",
        items: [
          {
            icon: Truck,
            title: "Order status bot",
            value: "Customers check their order status on WhatsApp without waiting for staff.",
            tags: ["WhatsApp", "Order API"],
          },
          {
            icon: Ticket,
            title: "Complaint ticketing on WhatsApp",
            value: "Complaints become tracked tickets with an owner and follow-ups.",
            tags: ["WhatsApp", "Ticketing", "Supabase"],
          },
        ],
      },
      {
        name: "Operations",
        items: [
          {
            icon: ScanText,
            title: "Invoice extraction to Sheets / Tally",
            value: "Supplier invoices read and entered into Sheets or Tally automatically.",
            tags: ["OCR", "Google Sheets", "Tally"],
          },
          {
            icon: TriangleAlert,
            title: "Low-stock WhatsApp alerts",
            value: "The right person gets a WhatsApp alert before stock runs out.",
            tags: ["Inventory data", "WhatsApp", "Cron"],
          },
          {
            icon: PieChart,
            title: "Automated daily reports",
            value: "Yesterday's numbers in everyone's inbox or WhatsApp every morning.",
            tags: ["SQL", "Email", "Scheduler"],
          },
        ],
      },
      {
        name: "HR",
        items: [
          {
            icon: UserCheck,
            title: "AI resume screening and shortlisting",
            value: "Ranks applicants against the job description so you read the strongest first.",
            tags: ["LLM", "PDF parsing"],
          },
          {
            icon: CalendarClock,
            title: "Interview scheduling",
            value: "Candidates pick a slot themselves; calendars and reminders update automatically.",
            tags: ["Calendar API", "WhatsApp", "Email"],
          },
          {
            icon: ListChecks,
            title: "Employee onboarding",
            value: "Documents, accounts and welcome messages set up from one form.",
            tags: ["Forms", "Supabase", "Email"],
          },
        ],
      },
      {
        name: "Marketing",
        items: [
          {
            icon: Share2,
            title: "Content repurposing across platforms",
            value: "One post or video turned into ready-to-publish content for every platform.",
            tags: ["LLM", "Social APIs"],
          },
          {
            icon: Star,
            title: "AI Google review responder",
            value: "Polite, on-brand replies to every Google review, good or bad.",
            tags: ["Google Business Profile API", "LLM"],
          },
          {
            icon: Send,
            title: "Personalised WhatsApp broadcasts",
            value: "Bulk WhatsApp campaigns with per-contact fields, safe pacing and delivery tracking.",
            tags: ["WhatsApp Cloud API", "Excel"],
            builtIn: "sudarshan-pipes-ai-assistant",
          },
        ],
      },
      {
        name: "Finance",
        items: [
          {
            icon: Wallet,
            title: "Overdue payment reminders with payment links",
            value: "Polite reminders with a payment link until the invoice is paid.",
            tags: ["Razorpay", "WhatsApp", "Scheduler"],
          },
          {
            icon: Landmark,
            title: "Expense categorisation from bank statements",
            value: "Bank statement lines sorted into expense categories automatically.",
            tags: ["LLM", "CSV / PDF parsing"],
          },
        ],
      },
    ],
  },
];
