import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "AI Automation Workflow Suite",
    company: "AI Agent Store",
    type: "AI Automation",
    typeColor: "#a78bfa",
    typeBg: "rgba(139,92,246,0.12)",
    typeBorder: "rgba(139,92,246,0.3)",
    problem: "Teams were spending hours on manual workflows, handoffs, and reporting instead of core product work.",
    solution: "Built 15+ automation workflows across business processes using OpenAI API and custom Node.js integrations.",
    result: "Achieved 40% operations reduction and 60% team adoption through clear documentation and iterative refinement.",
    metrics: [
      { value: "15+", label: "Workflows" },
      { value: "40%", label: "Ops cut" },
      { value: "60%", label: "Adoption" },
    ],
    stack: ["OpenAI API", "Node.js", "Cloud Integrations", "Process Documentation"],
    links: [],
  },
  {
    number: "02",
    name: "WhatsApp Lead Automation System",
    company: "JustHR",
    type: "AI Automation",
    typeColor: "#a78bfa",
    typeBg: "rgba(139,92,246,0.12)",
    typeBorder: "rgba(139,92,246,0.3)",
    problem: "Team was manually responding to 100+ WhatsApp messages daily, losing 3 hours to repetitive support and unable to scale outreach.",
    solution: "Deployed OpenAI-powered WhatsApp chatbot with automated lead routing and bulk outreach pipeline reaching 300–500 contacts per campaign.",
    result: "Recovered 3 hours daily, enabled 300–500 contact campaigns, and established <15 min lead routing with weekly analytics tracking.",
    metrics: [
      { value: "100+", label: "Leads/day" },
      { value: "3h", label: "Saved daily" },
      { value: "300–500", label: "Per campaign" },
    ],
    stack: ["OpenAI API", "whatsapp-web.js", "Node.js"],
    links: [],
  },
  {
    number: "03",
    name: "Bangle Store (Offline→Online)",
    company: "E-commerce + AI",
    type: "E-commerce & AI",
    typeColor: "#38bdf8",
    typeBg: "rgba(56,189,248,0.1)",
    typeBorder: "rgba(56,189,248,0.3)",
    problem: "Traditional bangle retailer operating offline with zero digital presence or streamlined ordering.",
    solution: "Took business fully online with 50+ optimized product listings on Meesho and Etsy, plus 24/7 WhatsApp AI chatbot for customer support.",
    result: "Live multi-platform storefront with 50+ SEO listings, AI-powered customer support, and measurable online sales growth.",
    metrics: [
      { value: "50+", label: "SEO listings" },
      { value: "24/7", label: "AI support" },
      { value: "Multi", label: "Platforms" },
    ],
    stack: ["OpenAI API", "whatsapp-web.js", "Meesho", "Etsy", "SEO", "Canva", "Claude AI", "GitHub Codex"],
    links: [
      { label: "Live Store", href: "https://karnataka-bangles-store-lac.vercel.app/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/BanglesAffairsOfficial/KarnatakaBanglesStore", icon: Github },
    ],
  },
  {
    number: "04",
    name: "Sales Pipeline & CRM System",
    company: "EdiGlobe",
    type: "Sales Operations",
    typeColor: "#34d399",
    typeBg: "rgba(52,211,153,0.1)",
    typeBorder: "rgba(52,211,153,0.3)",
    problem: "Inside sales team lacked centralized account management and pipeline visibility for 20+ active accounts.",
    solution: "Organized and maintained 50+ CRM records with structured account hierarchy, and built weekly pipeline reporting system.",
    result: "Enabled consistent sales tracking, accurate pipeline forecasting, and improved team accountability through transparent reporting.",
    metrics: [
      { value: "20+", label: "Accounts" },
      { value: "50+", label: "CRM records" },
      { value: "Weekly", label: "Reports" },
    ],
    stack: ["CRM Management", "Sales Ops", "Pipeline Tracking", "Analytics Reporting"],
    links: [],
  },
];

const CaseStudySection = () => {
  return (
    <section id="projects" className="py-28 px-6 relative" style={{ borderTop: "1px solid hsl(var(--border))" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[420px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-5 block">Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-14">
            Case studies built for measurable growth
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass glass-hover rounded-3xl p-7 sm:p-10"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between mb-8">
                <div className="flex items-start gap-5 max-w-xl">
                  <span className="font-display text-5xl font-extrabold leading-none select-none text-white/10"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}>
                    {p.number}
                  </span>
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono font-medium"
                      style={{ background: p.typeBg, border: `1px solid ${p.typeBorder}`, color: p.typeColor }}>
                      {p.type}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-3">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {p.links.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("#") ? undefined : "_blank"}
                      rel={link.href.startsWith("#") ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-muted-foreground transition hover:border-cyan-400/50 hover:text-white"
                    >
                      <link.icon size={14} />
                      {link.label}
                      <ArrowUpRight size={12} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 mb-8">
                {[
                  { label: "Problem", text: p.problem, color: "#f87171" },
                  { label: "Solution", text: p.solution, color: "#818cf8" },
                  { label: "Result", text: p.result, color: "#34d399" },
                ].map(col => (
                  <div key={col.label}>
                    <div className="font-mono text-xs font-medium mb-2" style={{ color: col.color }}>{col.label}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{col.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {p.metrics.map(m => (
                  <div key={m.label} className="glass px-4 py-3 rounded-2xl text-center min-w-[100px]"
                    style={{ border: `1px solid ${p.typeBorder}` }}>
                    <div className="font-display text-xl font-bold" style={{ color: p.typeColor }}>{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {p.stack.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
