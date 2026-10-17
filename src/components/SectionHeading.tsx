import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  className?: string;
}

const SectionHeading = ({ label, title, lead, id, className }: SectionHeadingProps) => (
  <Reveal className={cn("mb-12 max-w-2xl sm:mb-16", className)}>
    <span className="section-label">{label}</span>
    <h2 id={id} className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
      {title}
    </h2>
    {lead && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>}
  </Reveal>
);

export default SectionHeading;
