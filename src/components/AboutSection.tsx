import { Bot, ShoppingBag, TrendingUp, Layers } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

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
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I have a BBA in business and a track record of shipped AI work: WhatsApp automation handling 100+ leads per
            day, bulk outreach reaching 300–500 contacts per campaign, and a live e-commerce store on Meesho and Etsy.
          </p>
          <p>
            I automate manual workflows with the OpenAI API, whatsapp-web.js and custom integrations, then measure the
            impact in operations reduced, lead-routing speed and revenue growth — from problem definition to deployed
            system and weekly analytics.
          </p>
        </Reveal>
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
