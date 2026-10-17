import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { contact, external, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;
    // The active section is the last one whose top has passed a line 35% down the viewport.
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
};

const sectionIds = navLinks.map(l => l.id);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled || open ? "border-white/[0.06] bg-background/75 backdrop-blur-xl" : "border-transparent",
        )}
      >
        <nav aria-label="Primary" className="container-content flex h-[var(--nav-height)] items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-foreground">
            <img src="/favicon.svg" alt="" width={28} height={28} className="h-7 w-7" />
            Bhavesh
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(l => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "location" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-px bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a href={contact.hireMeGmail} {...external} className="btn-primary hidden px-4 py-2.5 md:inline-flex">
            Let's work together <ArrowUpRight size={15} aria-hidden />
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(o => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="border-t border-white/[0.06] md:hidden"
            >
              <ul className="container-content flex flex-col gap-1 py-4">
                {navLinks.map(l => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === l.id ? "location" : undefined}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium",
                        active === l.id ? "bg-white/[0.05] text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={contact.hireMeGmail}
                    {...external}
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Let's work together <ArrowUpRight size={15} aria-hidden />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
