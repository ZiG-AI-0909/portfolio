const Footer = () => (
  <footer style={{ borderTop: "1px solid hsl(var(--border))" }} className="py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-display font-bold text-sm text-gradient">Bhavesh Kumar Tiwari</span>
        <span className="font-mono text-xs text-muted-foreground">· AI Automation & Growth · Bengaluru, India</span>
      </div>
      <div className="flex items-center gap-6">
        {[
          { label: "LinkedIn", href: "https://www.linkedin.com/in/bhavesh-kumar-tiwari-5043862b4/" },
          { label: "GitHub", href: "https://github.com/ZiG-AI-0909" },
          { label: "Email", href: "mailto:tiwaribhaveshkumar@gmail.com" },
        ].map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
        <span className="font-mono text-xs text-muted-foreground">© 2026</span>
      </div>
    </div>
  </footer>
);

export default Footer;
