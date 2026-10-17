import { contact, external, navLinks, productLinks } from "@/lib/site";

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

const Footer = () => (
  <footer className="border-t border-white/[0.06] bg-surface-1/50">
    <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold text-foreground">
          <img src="/logo.png" alt="" width={28} height={28} className="h-7 w-7 rounded-md" />
          Bhavesh Kumar Tiwari
        </a>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
          AI applications, assistants and business automation · Bengaluru, India
        </p>
      </div>

      <nav aria-label="Footer">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/80">Navigate</p>
        <ul className="mt-4 space-y-2.5">
          {navLinks.map(l => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/80">Products</p>
        <ul className="mt-4 space-y-2.5">
          <li>
            <a href={productLinks.zigbot.live} {...external} className={linkClass}>
              ZiGBoT AI
            </a>
          </li>
          <li>
            <a href={productLinks.sudarshan.live} {...external} className={linkClass}>
              Sudarshan Pipes AI Assistant
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/80">Connect</p>
        <ul className="mt-4 space-y-2.5">
          <li>
            <a href={contact.linkedin} {...external} className={linkClass}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={contact.github} {...external} className={linkClass}>
              GitHub
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className={linkClass}>
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/[0.05]">
      <p className="container-content py-6 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bhavesh Kumar Tiwari
      </p>
    </div>
  </footer>
);

export default Footer;
