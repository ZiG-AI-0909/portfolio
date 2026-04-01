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
    problem: "Business teams drowning in repetitive manual tasks — data entry, reporting, and cross-tool syncs consuming hours daily.",
    solution: "Designed and deployed 15+ intelligent automation workflows connecting cloud services, with comprehensive documentation for team adoption.",
    result: "Cut manual operations by 40%. Improved system adoption by 60% through structured onboarding docs. Pipelines running 24/7 without human input.",
    metrics: [
      { value: "15+", label: "Workflows Built" },
      { value: "40%", label: "Ops Reduced" },
      { value: "60%", label: "Adoption Boost" },
    ],
    stack: ["Workflow Automation", "Cloud Pipelines", "AI Agents", "Process Docs", "REST APIs"],
    links: [],
  },
  {
    number: "02",
    name: "Karnataka Bangle Store",
    company: "E-commerce Platform",
    type: "Shopify / React",
    typeColor: "#38bdf8",
    typeBg: "rgba(56,189,248,0.1)",
    typeBorder: "rgba(56,189,248,0.3)",
    problem: "Traditional bangle retailer with zero digital presence, no structured product catalog, and manual order-taking via phone.",
    solution: "Built a full mobile-first e-commerce platform — React frontend, REST API integration, WhatsApp order flow, SEO-optimized product pages, and Vercel deployment.",
    result: "Launched in 8 weeks. Enabled digital ordering across expanded geographies. Reduced manual coordination and built a scalable order pipeline.",
    metrics: [
      { value: "8wks", label: "Time to Launch" },
      { value: "100%", label: "Mobile-first" },
      { value: "↑", label: "Geographic Reach" },
    ],
    stack: ["React.js", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS", "Vercel"],
    links: [
      { label: "Live Site", href: "https://karnataka-bangles-store-lac.vercel.app/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/BanglesAffairsOfficial/KarnatakaBanglesStore", icon: Github },
    ],
  },
  {
    number: "03",
    name: "Lead Generation & Campaign System",
    company: "Just HR",
    type: "Marketing & Analytics",
    typeColor: "#34d399",
    typeBg: "rgba(52,211,153,0.1)",
    typeBorder: "rgba(52,211,153,0.3)",
    problem: "Digital campaigns running on guesswork — no tracking, no optimization loop, and flat engagement across channels.",
    solution: "Implemented data-driven campaign architecture with analytics tracking, A/B testing, audience segmentation, and ROI-focused content strategy.",
    result: "35% increase in audience engagement. 20% improvement in campaign ROI. Established repeatable optimization framework.",
    metrics: [
      { value: "35%", label: "Engagement Up" },
      { value: "20%", label: "ROI Improved" },
      { value: "↑", label: "Pipeline Quality" },
    ],
    stack: ["Google Analytics", "A/B Testing", "Campaign Management", "ROI Tracking", "Audience Segmentation"],
    links: [],
  },
];

const CaseStudySection = () => {
  return (
    <section id="projects" className="py-28 px-6 relative" style={{ borderTop: "1px solid hsl(var(--border))" }}>
      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <span className="section-label mb-5 block">Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-14">
            Work That <span className="text-gradient">Ships Results</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass glass-hover rounded-3xl p-7 sm:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div className="flex items-start gap-5">
                  <span className="font-display text-5xl font-extrabold leading-none select-none"
                    style={{ color: "rgba(255,255,255,0.06)", WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}>
                    {p.number}
                  </span>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono mb-2"
                      style={{ background: p.typeBg, border: `1px solid ${p.typeBorder}`, color: p.typeColor }}>
                      {p.type}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{p.company}</p>
                  </div>
                </div>
                {p.links.length > 0 && (
                  <div className="flex items-center gap-3">
                    {p.links.map(l => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 glass px-3 py-2 rounded-xl text-xs text-muted-foreground hover:text-foreground transition-colors font-mono">
                        <l.icon size={12} />
                        {l.label}
                        <ArrowUpRight size={10} />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Problem / Solution / Result */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
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

              {/* Metrics */}
              <div className="flex flex-wrap gap-3 mb-6">
                {p.metrics.map(m => (
                  <div key={m.label} className="glass px-4 py-3 rounded-xl text-center min-w-[90px]"
                    style={{ border: `1px solid ${p.typeBorder}` }}>
                    <div className="font-display text-xl font-bold" style={{ color: p.typeColor }}>{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {p.stack.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-lg font-mono"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "hsl(215 20% 50%)" }}>
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
