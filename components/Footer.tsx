import Link from "next/link";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Retirement Planning", href: "/retirement-planning" },
      { label: "Annuities",           href: "/annuity" },
      { label: "Life Insurance",      href: "/life-insurance" },
      { label: "All Services",        href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",            href: "/about" },
      { label: "Free Seminars",       href: "/seminars" },
      { label: "Client Appreciation", href: "/appreciation" },
      { label: "Contact",             href: "/contact" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "(505) 896-1348",     href: "tel:5058961348" },
      { label: "crael@iip.services", href: "mailto:crael@iip.services" },
      { label: "Rio Rancho, NM",     href: "https://maps.google.com/?q=4101+Barbara+Loop+SE+Ste+B+Rio+Rancho+NM+87124" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-wrap gap-12 justify-between mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="nav-logo">
              Innovative Investment Professionals
            </Link>
            <p className="footer-body">
              Serving New Mexico families with honest financial guidance since 1996.
            </p>
          </div>

          {/* Link columns */}
          {columns.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-3 min-w-[140px]">
              <p className="footer-heading">{heading}</p>
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="footer-link"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-wrap gap-4 items-center justify-between">
          <p className="footer-meta">
            © {new Date().getFullYear()} Innovative Investment Professionals. All rights reserved.
          </p>
          <p className="footer-meta">
            4101 Barbara Loop SE Ste B · Rio Rancho, NM 87124
          </p>
        </div>

        {/* Legal */}
        <p className="footer-legal mt-6">
          Securities and investment advisory services offered through licensed professionals. Fixed
          index annuities are insurance products — not securities — and are not subject to investment
          risk. Guarantees are backed by the claims-paying ability of the issuing insurance company.
          This website is for informational purposes only and does not constitute investment, legal,
          or tax advice.{" "}
          <a
            href="https://brokercheck.finra.org/firm/summary/4123912"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-legal-link"
          >
            Check FINRA BrokerCheck →
          </a>
        </p>
      </div>
    </footer>
  );
}
