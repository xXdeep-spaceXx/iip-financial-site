import Link from "next/link";

const columns = [
  {
    heading: "Planning",
    links: ["Retirement", "Wealth Management", "Portfolio"],
    hrefs:  ["/retirement-planning", "#", "#"],
  },
  {
    heading: "Products",
    links: ["Annuities", "Bonds", "Funds"],
    hrefs:  ["/annuity", "#", "#"],
  },
  {
    heading: "Learn",
    links: ["Seminars", "Webinars", "Contact"],
    hrefs:  ["#seminars", "#", "#contact"],
  },
];

export default function Footer() {
  return (
    <footer className="section-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-12 justify-between">
          {columns.map(({ heading, links, hrefs }) => (
            <div key={heading} className="flex flex-col gap-3 min-w-[120px]">
              <p className="text-footer fv-foot text-black">{heading}</p>
              {links.map((label, i) => (
                <Link
                  key={label}
                  href={hrefs[i]}
                  className="text-footer fv-foot text-secondary hover:text-black transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
