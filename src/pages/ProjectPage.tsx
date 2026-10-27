import type { CSSProperties, ReactNode } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { findProduct, secondaryLinks } from "@/lib/products";
import { contact, external, isFilled, profile } from "@/lib/site";
import NotFound from "./NotFound";

/** Full case study for one featured product, at /projects/{slug}. */
const ProjectPage = () => {
  const product = findProduct(useParams().slug);
  if (!product) return <NotFound />;

  const accent = (alpha = 1) => `hsl(var(${product.accentVar}) / ${alpha})`;
  const bullet = <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent() }} aria-hidden />;
  const block = (id: string, title: string, children: ReactNode) => (
    <section aria-labelledby={id} className="mt-14 sm:mt-16">
      <h2 id={id} className="text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );

  return (
    <div className="min-h-screen overflow-x-clip">
      <AnimatedBackground />
      <Navbar />
      <main id="main" className="relative z-10 pt-[var(--nav-height)]">
        <article
          aria-labelledby="project-title"
          className="container-content py-12 sm:py-20"
          style={{ "--glow": `var(${product.accentVar})` } as CSSProperties}
        >
          <a href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={16} aria-hidden /> All projects
          </a>

          <header className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <span
                className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider"
                style={{ borderColor: accent(0.3), background: accent(0.08), color: accent() }}
              >
                {product.kind}
              </span>
              <h1 id="project-title" className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-foreground/90">{product.overview}</p>
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
              </div>
            </div>
            <figure className="min-w-0">
              {product.mockup}
              <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                Illustrative interface, not a screenshot
              </figcaption>
            </figure>
          </header>

          {block(
            "problem-title",
            "The problem",
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{product.problem}</p>,
          )}

          {block(
            "built-title",
            "What I built",
            <>
              <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">{product.summary}</p>
              <ul className="mt-6 grid gap-3 lg:grid-cols-2">
                {product.features.map(f => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                      style={{ background: accent(0.12), color: accent() }}
                    >
                      <Check size={12} strokeWidth={3} aria-hidden />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </>,
          )}

          {block(
            "results-title",
            "Results and impact",
            <ul className="mt-5 space-y-2.5">
              {product.results.filter(isFilled).map(r => (
                <li key={r} className="flex gap-3 leading-relaxed text-foreground/90">
                  {bullet}
                  {r}
                </li>
              ))}
            </ul>,
          )}

          {block(
            "tech-title",
            "Tech stack",
            <ul className="mt-5 flex flex-wrap gap-2">
              {product.tech.map(t => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>,
          )}

          {product.details &&
            block(
              "details-title",
              "In detail",
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {product.details.map(section => (
                  <section key={section.title} className="surface min-w-0 p-5 sm:p-7">
                    <h3 className="font-mono text-sm uppercase tracking-wider" style={{ color: accent() }}>
                      {section.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {section.points.map(point => (
                        <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                          {bullet}
                          {point}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>,
            )}

          <section aria-labelledby="hire-title" className="surface mt-14 p-6 sm:mt-16 sm:p-8">
            <h2 id="hire-title" className="text-2xl font-bold text-foreground">
              Need something like this built?
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              I'm {profile.name}, an AI automation engineer in {profile.city}, {profile.country}, open to full-time,
              freelance and remote roles. Email me at{" "}
              <a href={`mailto:${contact.email}`} className="text-primary underline-offset-4 hover:underline">
                {contact.email}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={contact.hireMeGmail} {...external} className="btn-primary">
                Let's work together <ArrowUpRight size={16} aria-hidden />
              </a>
              <a href={contact.resume} download className="btn-outline">
                Download Resume
              </a>
            </div>
          </section>
        </article>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
