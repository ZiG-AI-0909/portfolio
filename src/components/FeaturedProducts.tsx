import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { products, secondaryLinks, type Product } from "@/lib/products";
import { external, isFilled } from "@/lib/site";
import { cn } from "@/lib/utils";

const ProductShowcase = ({ product, reverse }: { product: Product; reverse?: boolean }) => {
  const accent = (alpha = 1) => `hsl(var(${product.accentVar}) / ${alpha})`;
  const label = (text: string) => (
    <h4 className="font-mono text-[11px] uppercase tracking-widest" style={{ color: accent() }}>
      {text}
    </h4>
  );

  return (
    <article
      id={product.id}
      aria-labelledby={`${product.id}-title`}
      className="relative scroll-mt-[calc(var(--nav-height)+1rem)] overflow-hidden rounded-3xl border border-white/[0.07] bg-surface-1/60 p-5 sm:p-8 lg:p-12"
      style={{ "--glow": `var(${product.accentVar})` } as CSSProperties}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 h-80 w-[36rem] rounded-full blur-3xl"
        style={{ background: accent(0.12), [reverse ? "left" : "right"]: "-8rem" }}
      />

      <div className={cn("relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14", reverse && "lg:[&>*:first-child]:order-2")}>
        <Reveal className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs" style={{ color: accent() }}>
              {product.index}
            </span>
            <span
              className="rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider"
              style={{ borderColor: accent(0.3), background: accent(0.08), color: accent() }}
            >
              {product.kind}
            </span>
          </div>

          <h3 id={`${product.id}-title`} className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {product.name}
          </h3>

          <div className="mt-6">
            {label("Problem")}
            <p className="mt-2 leading-relaxed text-muted-foreground">{product.problem}</p>
          </div>

          <div className="mt-6">
            {label("What I built")}
            <p className="mt-2 leading-relaxed text-muted-foreground">{product.summary}</p>
          </div>

          <Stagger className="mt-5 space-y-3" gap={0.05}>
            {product.features.map(f => (
              <StaggerItem key={f} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                  style={{ background: accent(0.12), color: accent() }}
                >
                  <Check size={12} strokeWidth={3} aria-hidden />
                </span>
                {f}
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-7">
            {label("Tech stack")}
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.tech.map(t => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            {label("Results")}
            <ul className="mt-3 space-y-2">
              {product.results.filter(isFilled).map(r => (
                <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent() }} aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={product.cta.href}
              {...external}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: accent(), boxShadow: `0 10px 30px -12px ${accent(0.8)}` }}
            >
              {product.cta.label} <ArrowUpRight size={16} aria-hidden />
            </a>
            {secondaryLinks(product).map(link => (
              <a key={link.label} href={link.href} {...external} className="btn-outline">
                <link.icon size={16} aria-hidden /> {link.label}
              </a>
            ))}
            <a href={`/projects/${product.slug}`} className="btn-outline">
              Full case study <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 lg:pt-8">
          {product.mockup}
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
            Illustrative interface, not a screenshot
          </p>
        </Reveal>
      </div>

      {product.details && (
        <details className="group relative mt-10 rounded-2xl border border-white/[0.07] bg-surface-1/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden sm:px-6">
            <span>{product.name}, in detail</span>
            <ChevronDown size={18} className="shrink-0 transition-transform duration-200 group-open:rotate-180" style={{ color: accent() }} aria-hidden />
          </summary>
          <div className="grid gap-x-10 gap-y-8 border-t border-white/[0.07] px-5 py-6 sm:px-6 lg:grid-cols-2">
            {product.details.map(section => (
              <section key={section.title} className="min-w-0">
                <h4 className="font-mono text-xs uppercase tracking-wider" style={{ color: accent() }}>
                  {section.title}
                </h4>
                <ul className="mt-3 space-y-2">
                  {section.points.map(point => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: accent() }} aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </details>
      )}
    </article>
  );
};

const FeaturedProducts = () => (
  <section id="projects" aria-labelledby="projects-title" className="section">
    <div className="container-content">
      <SectionHeading
        id="projects-title"
        label="Featured products"
        title="Three products, built end to end"
        lead="A multi-tenant WhatsApp automation platform for a manufacturing business, an AI Discord bot with its own management dashboard, and a 10-language e-commerce store for retail and wholesale buyers."
      />
      <div className="space-y-10 sm:space-y-14">
        {products.map((p, i) => (
          <ProductShowcase key={p.id} product={p} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
