import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site Map | Innovative Investment Professionals",
  description:
    "Site map for Innovative Investment Professionals — a complete list of all pages on our website.",
};

const sections = [
  {
    heading: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Seminars", href: "/seminars" },
      { label: "Client Appreciation Events", href: "/appreciation" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Retirement Planning", href: "/retirement-planning" },
      { label: "Annuities", href: "/annuity" },
      { label: "Life Insurance", href: "/life-insurance" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "XML Site Map", href: "/sitemap.xml" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div>
      <section className="page-hero pt-44 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[rgba(255,255,255,0.7)] mb-4">Navigation</p>
          <h1 className="hero-title text-white leading-tight">Site Map</h1>
          <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 leading-snug">
            A complete list of all pages on the Innovative Investment Professionals website.
          </p>
        </div>
      </section>

      <section className="section-border py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {sections.map(({ heading, links }) => (
              <div key={heading} className="bg-bg p-8 flex flex-col gap-4">
                <p className="text-nav fv-nav-semi font-semibold text-accent uppercase tracking-wider">{heading}</p>
                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className="text-body fv-body text-ink hover:text-accent transition-colors duration-150">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
