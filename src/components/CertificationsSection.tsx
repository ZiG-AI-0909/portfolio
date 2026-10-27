import { Award, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { external, isFilled } from "@/lib/site";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  /** Optional link to the credential */
  url?: string;
}

// An entry whose name still starts with "TODO" isn't rendered; with no real entries the whole section is hidden.
const certifications: Certification[] = [
  {
    name: "TODO: certification name, e.g. Generative AI with Large Language Models",
    issuer: "TODO: issuer, e.g. DeepLearning.AI / Coursera",
    year: "TODO: year",
    url: "TODO: credential URL",
  },
];

const CertificationsSection = () => {
  const items = certifications.filter(c => isFilled(c.name));
  if (!items.length) return null;

  return (
    <section id="certifications" aria-labelledby="certifications-title" className="section border-t border-white/[0.05]">
      <div className="container-content">
        <SectionHeading id="certifications-title" label="Certifications" title="Courses and credentials" />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(c => (
            <StaggerItem key={c.name} className="h-full">
              <article className="surface flex h-full flex-col p-6">
                <Award size={20} className="text-primary" aria-hidden />
                <h3 className="mt-4 text-base font-semibold text-foreground">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer}
                  {isFilled(c.year) && ` · ${c.year}`}
                </p>
                {isFilled(c.url) && (
                  <a href={c.url} {...external} className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                    View credential <ArrowUpRight size={14} aria-hidden />
                  </a>
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default CertificationsSection;
