import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Results", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

interface PillLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

const PillLink = ({ href, children, onClick, isMobile = false }: PillLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseStyles: React.CSSProperties = {
    display: isMobile ? "block" : "inline-flex",
    alignItems: "center",
    padding: isMobile ? "11px 16px" : "7px 15px",
    borderRadius: "9999px",
    fontFamily: "'Outfit', sans-serif",
    fontSize: isMobile ? "15px" : "13px",
    fontWeight: 500,
    color: isHovered ? "#ffffff" : "rgba(210, 225, 240, 0.72)",
    background: isHovered ? "rgba(57, 255, 20, 0.06)" : "transparent",
    border: isHovered ? "1px solid rgba(57, 255, 20, 0.30)" : "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 200ms ease",
    whiteSpace: "nowrap",
    userSelect: "none",
    width: isMobile ? "100%" : "auto",
    transform: isPressed ? "translateY(0) scale(0.97)" : isHovered ? "translateY(-2px)" : "translateY(0)",
    boxShadow: isHovered ? "0 0 14px rgba(57, 255, 20, 0.12)" : "none",
  };

  return (
    <a
      href={href}
      style={baseStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

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
              <PillLink key={l.href} href={l.href}>
                {l.label}
              </PillLink>
            ))}
            <a href="https://mail.google.com/mail/?view=cm&to=tiwaribhaveshkumar@gmail.com&su=Hiring%20Inquiry&body=Hi%20Bhavesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity." target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2">
              <span className="pulse-dot"></span>
              Hire Me
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden h-11 w-11 flex items-center justify-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-foreground p-1"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mx-4 mt-2 glass rounded-2xl px-4 py-5 flex flex-col gap-2"
              style={{
                paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))",
              }}
            >
              {navLinks.map(l => (
                <PillLink
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  isMobile
                >
                  {l.label}
                </PillLink>
              ))}
              <a
                href="https://mail.google.com/mail/?view=cm&to=tiwaribhaveshkumar@gmail.com&su=Hiring%20Inquiry&body=Hi%20Bhavesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary text-sm mt-1 flex items-center justify-center gap-2 w-full"
              >
                <span className="pulse-dot"></span>
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
