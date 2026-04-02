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
    problem: "Teams were spending hours on manual workflows, handoffs, and reporting instead of product work.",
    solution: "Built a React dashboard and automation layer that connected business apps, triggered AI workflows, and eliminated repetitive tasks.",
    result: "Delivered 40% process reduction and enabled 24/7 automation for operations teams.",
    metrics: [
      { value: "15+", label: "Workflows" },
      { value: "40%", label: "Ops cut" },
      { value: "24/7", label: "Automation" },
    ],
    stack: ["React.js", "AI Agents", "Workflow APIs", "Automation", "Dashboard UX"],
    links: [
      { label: "Live Demo", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/ZiG-AI-0909", icon: Github },
    ],
  },
  {
    number: "02",
    name: "Karnataka Bangle Store",
    company: "E-commerce Platform",
    type: "Shopify / React",
    typeColor: "#38bdf8",
    typeBg: "rgba(56,189,248,0.1)",
    typeBorder: "rgba(56,189,248,0.3)",
    problem: "A traditional retailer had no digital storefront or streamlined product ordering flow.",
    solution: "Launched a mobile-first React storefront with Shopify integration, SEO-optimized pages, and WhatsApp order flow.",
    result: "Live in 8 weeks with a scalable order pipeline and measurable uplift in digital sales.",
    metrics: [
      { value: "8w", label: "Launch" },
      { value: "100%", label: "Mobile-ready" },
      { value: "↑", label: "Reach" },
    ],
    stack: ["React.js", "Shopify", "REST APIs", "Tailwind CSS", "Vercel"],
    links: [
      { label: "Live Demo", href: "https://karnataka-bangles-store-lac.vercel.app/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/BanglesAffairsOfficial/KarnatakaBanglesStore", icon: Github },
    ],
  },
  {
    number: "03",
    name: "Lead Generation & Campaign System",
    company: "Just HR",
    type: "Marketing Analytics",
    typeColor: "#34d399",
    typeBg: "rgba(52,211,153,0.1)",
    typeBorder: "rgba(52,211,153,0.3)",
    problem: "Campaigns lacked tracking, optimization, and a reliable reporting loop.",
    solution: "Implemented an analytics-first campaign engine with audience segmentation, tracking, and A/B testing.",
    result: "Increased engagement by 35% and improved campaign ROI by 20%.",
    metrics: [
      { value: "35%", label: "Engagement" },
      { value: "20%", label: "ROI" },
      { value: "3x", label: "Insights" },
    ],
    stack: ["Analytics", "A/B Testing", "Campaign Tools", "Data Strategy", "Reporting"],
    links: [
      { label: "Live Demo", href: "#contact", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/ZiG-AI-0909", icon: Github },
    ],
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
