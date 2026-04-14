"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Retirement", href: "/retirement-planning" },
  { label: "Annuities",  href: "/annuity" },
  { label: "Seminars",   href: "#seminars" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-nav fv-nav-semi font-semibold text-black tracking-tight">
          Innovative Investment
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`text-nav fv-nav transition-colors duration-150 ${
                  pathname === href ? "nav-link-active" : "nav-link-inactive"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/retirement-planning" className="btn-secondary">Start Planning</Link>
          <Link href="#contact" className="btn-primary">Contact</Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-black transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-black transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-black transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-5 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="text-nav fv-nav nav-link-inactive" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link href="/retirement-planning" className="btn-secondary justify-center">Start Planning</Link>
            <Link href="#contact" className="btn-primary justify-center">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
