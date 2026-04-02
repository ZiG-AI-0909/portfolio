import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${scrolled ? "glass glow-blue py-3 mx-4 sm:mx-8" : ""}`}>
        <a href="#" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">Portfolio</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm hover:text-foreground transition-colors font-medium tracking-wide" style={{ color: "hsl(210 40% 80%)" }}>
              {l.label}
            </a>
          ))}
          <a href="https://mail.google.com/mail/?view=cm&to=tiwaribhaveshkumar@gmail.com&su=Hiring%20Inquiry&body=Hi%20Bhavesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity." target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-5 py-2.5">
            Hire Me
          </a>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 glass rounded-2xl px-6 py-5 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm hover:text-foreground transition-colors font-medium" style={{ color: "hsl(210 40% 80%)" }}>
              {l.label}
            </a>
          ))}
          <a href="https://mail.google.com/mail/?view=cm&to=tiwaribhaveshkumar@gmail.com&su=Hiring%20Inquiry&body=Hi%20Bhavesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity." target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-primary text-center text-sm mt-1">
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
