import { AppWindow, Bot, Cable, Sparkles, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const services = [
  {
    icon: Sparkles,
    title: "AI applications",
    problem: "Someone reads documents by hand to pull out the data that matters.",
    outcome: "An app that extracts it and hands it back structured — like turning a BOQ into an RFQ list.",
  },
  {
    icon: Bot,
    title: "AI chatbots & assistants",
    tag: "WhatsApp · Discord",
    problem: "The same questions arrive all day and wait for a free person to answer.",
    outcome: "An assistant that replies from your own knowledge base, at any hour.",
  },
  {
    icon: Workflow,
    title: "Business process automation",
    problem: "Follow-ups, outreach and reporting eat the team's day.",
    outcome: "Scheduled campaigns and workflows that run without manual sends.",
  },
  {
    icon: Cable,
    title: "API & third-party integrations",
    problem: "Tools that don't talk to each other, so data gets copied by hand.",
    outcome: "LLM APIs, WhatsApp, Discord, Supabase and your CRM wired together.",
  },
  {
    icon: AppWindow,
    title: "Web applications",
    problem: "A business or idea with no usable web presence.",
    outcome: "A fast React app or storefront, deployed and ready for users.",
  },
];

const ServicesSection = () => (
  <section id="services" aria-labelledby="services-title" className="section border-t border-white/[0.05]">
    <div className="container-content">
      <SectionHeading
        id="services-title"
        label="Services"
        title="What I can build for you"
        lead="Practical AI and automation, scoped to the bottleneck that costs you the most time."
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => (
          <StaggerItem key={s.title} className={i < 3 ? "h-full lg:col-span-2" : "h-full lg:col-span-3"}>
            <div className="surface card-interactive flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <s.icon size={20} aria-hidden />
                </span>
                {s.tag && <span className="chip font-mono text-[10px]">{s.tag}</span>}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Problem</dt>
                  <dd className="mt-1 text-muted-foreground">{s.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-primary">Outcome</dt>
                  <dd className="mt-1 text-foreground/90">{s.outcome}</dd>
                </div>
              </dl>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default ServicesSection;
