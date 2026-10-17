import { ShieldCheck, Sparkles, TrendingUp, ServerCog } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const stats = [
  { icon: ShieldCheck, value: "40%", label: "Operations reduced", detail: "with automation workflows" },
  { icon: Sparkles, value: "60%", label: "Adoption improved", detail: "with onboarding & automation" },
  { icon: TrendingUp, value: "35%", label: "Engagement growth", detail: "through data-led campaigns" },
  { icon: ServerCog, value: "15+", label: "Automation workflows", detail: "built across products" },
];

const shipped = [
  "100+ leads handled per day",
  "300–500 contacts per campaign",
  "3 hours saved daily at JustHR",
  "50+ SEO listings live on Meesho & Etsy",
];

const ResultsSection = () => (
  <section id="results" aria-labelledby="results-title" className="section border-t border-white/[0.05] bg-surface-1/40">
    <div className="container-content">
      <SectionHeading
        id="results-title"
        label="Results"
        title="High-impact results, not just polished projects"
        lead="How product thinking and automation combine to free teams, improve adoption, and increase revenue velocity."
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(s => (
          <StaggerItem key={s.label} className="h-full">
            <div className="surface h-full p-6">
              <s.icon size={20} className="text-primary" aria-hidden />
              <p className="mt-5 font-display text-4xl font-bold text-foreground">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-foreground/90">{s.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.detail}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-4">
        <div className="surface flex flex-col gap-4 p-6 sm:p-7 lg:flex-row lg:items-center lg:gap-8">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-primary">Shipped impact</p>
          <ul className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {shipped.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ResultsSection;
