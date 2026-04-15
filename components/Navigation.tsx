"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { label: "Retirement Planning", href: "/retirement-planning" },
  { label: "Annuities",           href: "/annuity" },
  { label: "Life Insurance",      href: "/life-insurance" },
];

const navLinks = [
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services", children: services },
  { label: "Seminars", href: "/seminars" },
  { label: "Contact",  href: "/contact" },
];

const mobileLinks = [
  { label: "About",              href: "/about" },
  { label: "Services",           href: "/services" },
  { label: "Retirement Planning",href: "/retirement-planning" },
  { label: "Annuities",          href: "/annuity" },
  { label: "Life Insurance",     href: "/life-insurance" },
  { label: "Seminars",           href: "/seminars" },
  { label: "Client Appreciation",href: "/appreciation" },
  { label: "Contact",            href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);
  const dropRef                   = useRef<HTMLLIElement>(null);
  const pathname                  = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
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
        {/* Logo */}
        <Link href="/" className="text-nav fv-nav-semi font-semibold text-black tracking-tight">
          Innovative Investment Professionals
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href, children }) =>
            children ? (
              <li key={label} className="relative" ref={dropRef}>
                <button
                  type="button"
                  onClick={() => setDropOpen((o) => !o)}
                  className={`text-nav fv-nav transition-colors duration-150 flex items-center gap-1 ${
                    pathname.startsWith("/services") ||
                    children.some((c) => pathname === c.href)
                      ? "nav-link-active"
                      : "nav-link-inactive"
                  }`}
                >
                  {label}
                  <svg
                    width="10" height="6" viewBox="0 0 10 6" fill="none"
                    className={`transition-transform duration-150 ${dropOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {dropOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-border rounded-xl shadow-lg py-1 z-50">
                    <Link
                      href={href}
                      onClick={() => setDropOpen(false)}
                      className="block px-4 py-2.5 text-nav fv-nav text-secondary hover:text-black hover:bg-muted transition-colors duration-100"
                    >
                      All Services
                    </Link>
                    <div className="h-px bg-border mx-4 my-1" />
                    {children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropOpen(false)}
                        className={`block px-4 py-2.5 text-nav fv-nav hover:bg-muted transition-colors duration-100 ${
                          pathname === child.href ? "text-black" : "text-secondary hover:text-black"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
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
            )
          )}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/appreciation" className="btn-secondary">Client Events</Link>
          <a href="tel:5058961348" className="btn-primary">(505) 896-1348</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2"
          type="button"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-5 flex flex-col gap-1">
          {mobileLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-nav fv-nav py-2.5 border-b border-border last:border-0 ${
                pathname === href ? "nav-link-active" : "nav-link-inactive"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4">
            <a href="tel:5058961348" className="btn-primary justify-center">
              Call (505) 896-1348
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
