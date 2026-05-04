import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#book", label: "Book" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="flex items-center justify-between px-8 py-6 md:px-12">
          <Link to="/" className="text-sm font-bold uppercase tracking-[0.25em] text-white">
            Mac<span>City</span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Menu
            <span className="flex flex-col gap-[3.5px]">
              <span className="block h-[1.5px] w-4 bg-black" />
              <span className="block h-[1.5px] w-4 bg-black" />
              <span className="block h-[1.5px] w-2.5 bg-black" />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-[100] bg-[#141414] flex flex-col transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-6 md:px-12 shrink-0">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-sm font-bold uppercase tracking-[0.25em] text-white"
          >
            MacCity
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Close
            <span className="text-sm leading-none">✕</span>
          </button>
        </div>

        {/* Menu content */}
        <div className="flex flex-1 overflow-auto min-h-0">
          {/* Left — contact info */}
          <div className="hidden md:flex flex-col justify-end p-12 lg:p-16 w-[45%] shrink-0">
            <div className="space-y-5">
              <div className="text-white/40 text-xs uppercase tracking-widest mb-8">
                MacCity Auto Workshop
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Dandenong South, VIC 3175<br />
                Servicing South-East Melbourne
              </p>
              <a
                href="tel:+61XXXXXXXXX"
                className="block text-white/50 text-sm hover:text-white transition-colors"
              >
                (03) XXXX XXXX
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-white text-sm underline underline-offset-4 hover:text-white/70 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="block text-white text-sm underline underline-offset-4 hover:text-white/70 transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Right — nav links */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-8 flex-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-t border-white/10 py-5 text-5xl md:text-6xl lg:text-7xl font-bold text-white transition-colors hover:text-white/50 last:border-b last:border-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
