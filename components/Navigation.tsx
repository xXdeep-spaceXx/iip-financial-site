"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  { label: "About",               href: "/about" },
  { label: "Services",            href: "/services" },
  { label: "Retirement Planning", href: "/retirement-planning" },
  { label: "Annuities",           href: "/annuity" },
  { label: "Life Insurance",      href: "/life-insurance" },
  { label: "Seminars",            href: "/seminars" },
  { label: "Client Appreciation", href: "/appreciation" },
  { label: "Contact",             href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef                  = useRef<HTMLLIElement>(null);
  const pathname                 = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-white/95 backdrop-blur-md shadow-md border-b border-[var(--border)]"
          : "top-9 nav-bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="nav-logo">
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
                  className={`nav-link flex items-center gap-1 ${
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
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {dropOpen && (
                  <div className="nav-dropdown-panel absolute top-full left-0 mt-2 w-56 py-2 z-50">
                    <Link
                      href={href}
                      onClick={() => setDropOpen(false)}
                      className="nav-dropdown-item"
                    >
                      All Services
                    </Link>
                    <div className="h-px bg-[var(--border)] mx-4 my-1" />
                    {children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropOpen(false)}
                        className={`nav-dropdown-item ${
                          pathname === child.href ? "nav-link-active" : ""
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
                  className={`nav-link ${
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
          <Link href="/" className="nav-logo-pill">
            <Image
              src="/assets/iip-logo.png"
              alt="Innovative Investment Professionals"
              width={90}
              height={38}
              className="object-contain"
            />
          </Link>
          <a
            href="https://brokercheck.finra.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FINRA BrokerCheck"
            className="flex items-center"
          >
            <Image
              src="/assets/broker-check-logo.png"
              alt="FINRA BrokerCheck"
              width={120}
              height={32}
              className="object-contain"
            />
          </a>
          <Link href="/appreciation" className="btn-secondary">
            Client Events
          </Link>
          <a href="tel:5058961348" className="btn-primary">
            (505) 896-1348
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`nav-hamburger-line ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`nav-hamburger-line ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`nav-hamburger-line ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu md:hidden px-6 py-5 flex flex-col gap-0">
          {mobileLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`nav-mobile-link ${
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
            <a
              href="https://brokercheck.finra.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center py-2"
              aria-label="FINRA BrokerCheck"
            >
              <Image
                src="/assets/broker-check-logo.png"
                alt="FINRA BrokerCheck"
                width={110}
                height={28}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
