import { Bot, ShoppingBag, TrendingUp, Layers } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { profile } from "@/lib/site";

const pillars = [
  {
    icon: Bot,
    title: "Intelligent Automation",
    desc: "OpenAI API and whatsapp-web.js powering workflows that eliminate manual work and scale operations.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Growth",
    desc: "Meesho and Etsy integrations paired with lead generation pipelines that drive measurable sales growth.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    desc: "Bulk outreach campaigns and WhatsApp automation reaching 300–500 contacts per campaign with fast routing.",
  },
  {
    icon: Layers,
    title: "Growth Execution",
    desc: "Turning business targets into shipped systems, metrics tracking, and weekly analytics reviews.",
  },
];

const AboutSection = () => (
  <section id="about" aria-labelledby="about-title" className="section">
    <div className="container-content grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div>
        <SectionHeading
          id="about-title"
          label="About"
          title={
            <>
              AI automation &amp; growth, with <span className="text-gradient">shipped systems</span> behind it
            </>
          }
          className="mb-8 sm:mb-8"
        />
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I'm Bhavesh Kumar Tiwari, an AI automation engineer in Bengaluru with a BBA and a record of shipped AI work. I
            build AI agents, WhatsApp and Discord chatbots, and automation workflows on LLM APIs, Node.js and React, like
            ZiGBoT AI and the Sudarshan Pipes AI Assistant. I'm looking for roles as an{" "}
            <strong className="font-medium text-foreground">{profile.targetRoles.slice(0, -1).join(", ")}</strong> or in{" "}
            <strong className="font-medium text-foreground">{profile.targetRoles[profile.targetRoles.length - 1]}</strong>.
          </p>
        </div>
      </div>

      <Stagger className="grid content-start gap-4 sm:grid-cols-2">
        {pillars.map(p => (
          <StaggerItem key={p.title} className="h-full">
            <div className="surface card-interactive h-full p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <p.icon size={18} className="text-primary" aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default AboutSection;
