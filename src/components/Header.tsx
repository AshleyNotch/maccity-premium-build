import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#testimonials", label: "Reviews" },
  ];

  const textBase = scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white";
  const logoColor = scrolled ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/"
          className={`text-sm font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${logoColor}`}
        >
          Mac<span className={scrolled ? "text-primary" : "text-white"}>City</span>
        </Link>

        {/* Nav — centered */}
        <nav className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[11px] font-medium uppercase tracking-widest transition-colors duration-300 ${textBase}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#contact"
            className={`text-[11px] font-medium uppercase tracking-widest transition-colors duration-300 ${textBase}`}
          >
            Contact
          </a>
          <a
            href="#book"
            className={`text-[11px] font-medium uppercase tracking-widest transition-colors duration-300 ${textBase}`}
          >
            Book
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-1 p-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-white/20 px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
