import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const steps = [
  {
    title: "Understand the manual bottleneck",
    desc: "Find the workflow eating hours — lead handling, outreach, support or reporting — and map the before-state with real numbers.",
  },
  {
    title: "Design the architecture",
    desc: "Pick the right stack for the job and scope the MVP to the highest-ROI path first.",
  },
  {
    title: "Build & integrate",
    desc: "Connect the APIs and handle the edge cases. Reliability first — a bot handling 100+ messages a day can't drop conversations.",
  },
  {
    title: "Deploy & verify",
    desc: "Ship to production, watch the first 48 hours closely, fix friction, and document it so the team can run it alone.",
  },
  {
    title: "Measure & iterate",
    desc: "Track hours saved, response time, routing speed and reach, then use weekly analytics to find the next bottleneck.",
  },
];

const principles = [
  { label: "Automation > Repetition", desc: "If a human does the same thing 50 times a day, it should be a system." },
  { label: "Shipped > Perfect", desc: "A working bot handling 100 leads beats a perfect one still in development." },
  { label: "Metrics anchor decisions", desc: "Every build starts with a before-state number and ends with an after-state one." },
];

const HowIWorkSection = () => (
  <section id="process" aria-labelledby="process-title" className="section pt-0 sm:pt-0">
    <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <SectionHeading
          id="process-title"
          label="How I work"
          title="From manual workflow to shipped automation"
          lead="Every project follows the same loop: find the bottleneck, build the system, ship it, measure the impact."
          className="mb-8 sm:mb-10"
        />
        <Stagger className="space-y-3">
          {principles.map(p => (
            <StaggerItem key={p.label} className="rounded-xl border-l-2 border-accent/60 bg-white/[0.02] px-4 py-3">
              <p className="text-sm font-semibold text-foreground">{p.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Reveal>
        <ol className="relative ml-[1.15rem] space-y-7 border-l border-white/[0.08] pl-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-background font-mono text-xs text-primary">
                0{i + 1}
              </span>
              <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  </section>
);

export default HowIWorkSection;
