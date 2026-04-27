import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Results", href: "#achievements" },
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
    <>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .nav-pill {
          border-radius: 9999px;
          padding: 7px 15px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(210, 225, 240, 0.72);
          background: transparent;
          border: 1px solid transparent;
          transition: all 200ms ease;
          cursor: pointer;
          position: relative;
          font-family: 'Outfit', sans-serif;
          text-decoration: none;
          display: inline-block;
        }
        
        .nav-pill:hover {
          color: #ffffff;
          border: 1px solid rgba(57, 255, 20, 0.30);
          background: rgba(57, 255, 20, 0.06);
          transform: translateY(-2px);
          box-shadow: 0 0 14px rgba(57, 255, 20, 0.12);
        }
        
        .nav-pill:active {
          transform: translateY(0) scale(0.97);
        }
        
        .pulse-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: #39ff14;
          border-radius: 50%;
          margin-right: 6px;
          animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        <div className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${scrolled ? "glass glow-blue py-3 mx-4 sm:mx-8" : ""}`}>
          <a href="#" className="font-display font-bold text-lg tracking-tight">
            <span className="text-gradient">Bhavesh</span>
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav-pill">
                {l.label}
              </a>
            ))}
            <a href="https://mail.google.com/mail/?view=cm&to=tiwaribhaveshkumar@gmail.com&su=Hiring%20Inquiry&body=Hi%20Bhavesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity." target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2">
              <span className="pulse-dot"></span>
              Hire Me
            </a>
          </nav>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-1">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mx-4 mt-2 glass rounded-2xl px-6 py-5 flex flex-col gap-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-pill">
                {l.label}
              </a>
            ))}
            <a href="https://mail.google.com/mail/?view=cm&to=tiwaribhaveshkumar@gmail.com&su=Hiring%20Inquiry&body=Hi%20Bhavesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity." target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-primary text-sm mt-1 flex items-center justify-center gap-2 w-full">
              <span className="pulse-dot"></span>
              Hire Me
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
