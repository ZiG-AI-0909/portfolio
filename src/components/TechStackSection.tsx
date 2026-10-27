import type { LucideIcon } from "lucide-react";
import { Bot, Database, Layout, Rocket, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { skillGroups } from "@/lib/skills";

const icons: Record<string, LucideIcon> = {
  "AI & LLMs": Bot,
  "Automation & Integrations": Workflow,
  Backend: Database,
  Frontend: Layout,
  Tools: Rocket,
};

const SkillGroup = ({ label, items }: { label: string; items: string[] }) => {
  const Icon = icons[label];
  return (
    <div className="surface h-full p-6">
      <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-foreground">
        <Icon size={16} className="text-primary" aria-hidden />
        {label}
      </h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map(item => (
          <li key={item} className="chip text-foreground/85">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TechStackSection = () => (
  <section id="skills" aria-labelledby="skills-title" className="section border-t border-white/[0.05]">
    <div className="container-content">
      <SectionHeading id="skills-title" label="Skills" title="Tools I ship with" />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(g => (
          <StaggerItem key={g.label} className="h-full">
            <SkillGroup {...g} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default TechStackSection;
