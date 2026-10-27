import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { isFilled } from "@/lib/site";

interface Testimonial {
  quote: string;
  name: string;
  /** e.g. "Director, Sudarshan Pipes" */
  role: string;
}

// An entry whose quote still starts with "TODO" isn't rendered; with no real entries the whole section is hidden.
// Only add quotes the person has agreed to have published.
const testimonials: Testimonial[] = [
  {
    quote: "TODO: a short quote from a client or manager, e.g. someone at Sudarshan Pipes about the WhatsApp AI Assistant",
    name: "TODO: their name",
    role: "TODO: their role and company",
  },
];

const TestimonialsSection = () => {
  const items = testimonials.filter(t => isFilled(t.quote));
  if (!items.length) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section border-t border-white/[0.05]">
      <div className="container-content">
        <SectionHeading id="testimonials-title" label="Testimonials" title="What people I've worked with say" />
        <Stagger className="grid gap-4 lg:grid-cols-2">
          {items.map(t => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="surface flex h-full flex-col p-6 sm:p-8">
                <Quote size={22} className="text-accent" aria-hidden />
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  {isFilled(t.role) && <span className="text-muted-foreground"> · {t.role}</span>}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default TestimonialsSection;
