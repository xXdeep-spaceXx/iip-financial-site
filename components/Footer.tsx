import Link from "next/link";
import Image from "next/image";

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

        {/* Legal links */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-6">
          <a href="/privacy-policy" className="footer-legal-link">Privacy Policy</a>
          <a href="/terms" className="footer-legal-link">Terms &amp; Conditions</a>
          <a href="/sitemap" className="footer-legal-link">Site Map</a>
          <a
            href="https://brokercheck.finra.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FINRA BrokerCheck"
            className="footer-legal-link flex items-center gap-1"
          >
            <Image
              src="/assets/broker-check-logo.png"
              alt="FINRA BrokerCheck"
              width={90}
              height={22}
              className="object-contain"
            />
          </a>
        </div>

        {/* Footnotes */}
        <div className="footer-legal mt-4 space-y-1">
          <p>*Backed by the claims paying ability of the carrier.</p>
          <p>**Our products offer a reasonable rate of return, over time.</p>
        </div>

        {/* Full legal disclaimer */}
        <div className="footer-legal mt-4 space-y-3">
          <p className="font-semibold">IMPORTANT CONSUMER INFORMATION</p>
          <p>
            This site is for informational purposes only and is not intended to be a solicitation
            for or offering of any product or investment. The offer for sale of an insurance product
            may only be conducted in a state where the agent is licensed and the product is approved
            for sale. The providing of investment advice relating to securities may only be done by a
            properly licensed individual operating through a licensed affiliate entity, unless
            otherwise exempt. Comments about past performance are not to be construed as a guarantee
            or assurance of future performance. This website may contain concepts that have legal,
            accounting and tax implications. We do not provide specific legal or tax advice, nor
            promote, market or recommend any tax plan or arrangement. Consult a tax/legal
            professional for guidance with your individual situation. No representations are made as
            to the accuracy or completeness of the information contained herein or any information
            contained in any link provided herein, nor does a consumer visiting the web site create
            an agent-client relationship.
          </p>
          <p>
            By contacting Innovative Investment Professionals you may be offered information
            regarding the purchase of insurance products, including fixed index annuities and life.
          </p>
          <p>
            Securities offered through World Equity Group, Inc., member{" "}
            <a href="https://www.finra.org/" target="_blank" rel="noopener noreferrer" className="footer-legal-link">FINRA</a>
            {" "}and{" "}
            <a href="https://www.sipc.org/" target="_blank" rel="noopener noreferrer" className="footer-legal-link">SIPC</a>
            , a Registered Investment Adviser.
          </p>
          <p>
            Innovative Investment Professionals is not owned or controlled by World Equity Group, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
