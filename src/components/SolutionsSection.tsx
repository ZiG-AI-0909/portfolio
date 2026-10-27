import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { findProduct } from "@/lib/products";
import { solutionTabs, type Solution } from "@/lib/solutions";
import { cn } from "@/lib/utils";

const SolutionCard = ({ icon: Icon, title, value, tags, builtIn }: Solution) => {
  const caseStudy = findProduct(builtIn);
  return (
    <li className="surface card-interactive flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          <Icon size={18} aria-hidden />
        </span>
        {caseStudy && (
          <a
            href={`/projects/${caseStudy.slug}`}
            className="inline-flex items-center gap-1 rounded-full border border-success/30 bg-success/[0.08] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-success transition-colors hover:bg-success/[0.16]"
            aria-label={`Built: see the ${caseStudy.name} case study`}
          >
            Built <Check size={12} strokeWidth={3} aria-hidden />
          </a>
        )}
      </div>
      <h4 className="mt-4 text-base font-semibold leading-snug text-foreground">{title}</h4>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{value}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech">
        {tags.map(tag => (
          <li key={tag} className="chip font-mono text-[10px]">
            {tag}
          </li>
        ))}
      </ul>
    </li>
  );
};

const SolutionsSection = () => {
  const [active, setActive] = useState(solutionTabs[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs, as in the WAI-ARIA tabs pattern.
  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (index + step + solutionTabs.length) % solutionTabs.length;
    setActive(solutionTabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="solutions" aria-labelledby="solutions-title" className="section border-t border-white/[0.05]">
      <div className="container-content">
        <SectionHeading
          id="solutions-title"
          label="Solutions"
          title="Solutions I Build"
          lead="AI agents and automation systems for sales, support, operations and HR — built end to end, from idea to deployment."
          className="mb-8 sm:mb-10"
        />

        <div role="tablist" aria-label="Solution type" className="inline-flex rounded-xl border border-white/[0.08] bg-white/[0.03] p-1">
          {solutionTabs.map((tab, i) => (
            <button
              key={tab.id}
              ref={el => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`solutions-tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`solutions-panel-${tab.id}`}
              tabIndex={active === tab.id ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={e => onKeyDown(e, i)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                active === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Both panels are always rendered so the prerendered HTML holds every solution; the inactive one is just hidden. */}
        {solutionTabs.map(tab => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`solutions-panel-${tab.id}`}
            aria-labelledby={`solutions-tab-${tab.id}`}
            hidden={active !== tab.id}
            className="mt-10 space-y-10"
          >
            {tab.groups.map(group => (
              <div key={group.name}>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{group.name}</h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map(item => (
                    <SolutionCard key={item.title} {...item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <div className="surface mt-12 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="text-base font-medium text-foreground">
            Need something not listed? I build custom AI and automation solutions.
          </p>
          <a href="/#contact" className="btn-primary shrink-0">
            Let's talk <ArrowRight size={16} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
