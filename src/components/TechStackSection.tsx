import { Bot, Database, Layout, Rocket, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

// Only tools used in this portfolio's own code or in the shipped work described above.
const groups = [
  {
    label: "AI",
    icon: Bot,
    items: ["OpenAI API", "Claude AI", "NVIDIA NIM", "Prompt Engineering", "GitHub Codex"],
  },
  {
    label: "Frontend",
    icon: Layout,
    items: ["React", "TypeScript", "Vite", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    label: "Backend & Data",
    icon: Database,
    items: ["Node.js", "Express", "Supabase (Postgres · Auth · Storage)", "MongoDB"],
  },
  {
    label: "Automation & Growth",
    icon: Workflow,
    items: ["whatsapp-web.js", "discord.js", "Lead Routing Pipelines", "Bulk Outreach", "CRM Management", "Meesho", "Etsy", "SEO"],
  },
  {
    label: "Deploy & Tools",
    icon: Rocket,
    items: ["Vercel", "Render", "GitHub", "Google Analytics", "Canva"],
  },
];

const TechStackSection = () => (
  <section id="skills" aria-labelledby="skills-title" className="section border-t border-white/[0.05]">
    <div className="container-content">
      <SectionHeading id="skills-title" label="Tech stack" title="Tools I ship with" />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(g => (
          <StaggerItem key={g.label} className="h-full">
            <div className="surface h-full p-6">
              <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-foreground">
                <g.icon size={16} className="text-primary" aria-hidden />
                {g.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map(item => (
                  <li key={item} className="chip text-foreground/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default TechStackSection;
