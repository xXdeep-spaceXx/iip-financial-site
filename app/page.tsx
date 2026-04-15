import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Innovative Investment Professionals | Retirement Planning in Rio Rancho, NM",
  description:
    "Retirement planning, annuities, and life insurance for New Mexico families since 1996. Serving Albuquerque and Rio Rancho, NM.",
};

const services = [
  {
    number: "01",
    title: "Retirement planning.",
    description:
      "Navigate 401(k)s, IRAs, pensions, and Social Security with precision. Income plans built to sustain your lifestyle throughout retirement — and beyond.",
    href: "/retirement-planning",
  },
  {
    number: "02",
    title: "Annuities.",
    description:
      "Guaranteed, predictable cash flow backed by A-rated carriers. Fixed and fixed index annuities with principal protection — certainty in an uncertain market.",
    href: "/annuity",
  },
  {
    number: "03",
    title: "Life insurance.",
    description:
      "Comprehensive coverage options tailored to protect your beneficiaries and preserve the financial legacy you've worked to build.",
    href: "/life-insurance",
  },
  {
    number: "04",
    title: "Free seminars.",
    description:
      "Educational dinner events in Albuquerque and Rio Rancho — no cost, no obligation. Learn retirement strategies over a complimentary gourmet meal.",
    href: "/seminars",
  },
];

const stats = [
  { stat: "1996", label: "Founded" },
  { stat: "500+", label: "Families served" },
  { stat: "30+", label: "Years of experience" },
  { stat: "A+", label: "BBB rated" },
];

const principles = [
  { title: "Safety first.", description: "Protecting what you've saved is the top priority — especially as retirement approaches." },
  { title: "Reasonable returns.", description: "You don't need to chase the market to retire well. We find products that grow safely." },
  { title: "Keep it simple.", description: "If you can't explain your plan in plain English, it's too complicated. Ours aren't." },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-24 px-6 text-center max-w-3xl mx-auto">
        <p className="text-nav fv-nav text-secondary uppercase tracking-widest mb-5">
          Rio Rancho &amp; Albuquerque, NM · Since 1996
        </p>
        <h1 className="text-hero fv-body-bold font-bold text-black leading-tight">
          Retire with more
        </h1>
        <h1 className="text-hero fv-body-bold font-bold text-secondary leading-tight">
          than you planned on.
        </h1>
        <p className="text-body-lg fv-body text-secondary mt-6 max-w-xl mx-auto leading-snug">
          Innovative Investment Professionals has helped New Mexico families build
          and protect their retirement income for over 30 years — with honesty,
          clarity, and zero market risk.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/retirement-planning" className="btn-primary">Start Planning</Link>
          <Link href="/seminars" className="btn-secondary">See Free Seminars</Link>
        </div>
        <a href="tel:5058961348" className="inline-block mt-5 text-nav fv-nav text-secondary hover:text-black transition-colors duration-150">
          (505) 896-1348 — call anytime
        </a>
      </section>

      {/* ── Stats ── */}
      <section className="section-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {stats.map(({ stat, label }) => (
              <div key={label} className="px-8 py-10 text-center">
                <p className="text-section fv-body-bold font-bold text-black">{stat}</p>
                <p className="text-nav fv-nav text-secondary mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-section fv-body-bold font-bold text-black mb-2">
            Everything you need to retire well.
          </h2>
          <p className="text-body-lg fv-body text-secondary mb-12">
            Four services. One team. All built around your goals.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {services.map(({ number, title, description, href }) => (
              <Link
                key={number}
                href={href}
                className="bg-white p-8 flex flex-col gap-4 hover:bg-muted transition-colors duration-150 group"
              >
                <span className="text-nav fv-nav text-secondary">{number}</span>
                <h3 className="text-card-h fv-body-semi font-semibold text-black group-hover:underline underline-offset-2">
                  {title} →
                </h3>
                <p className="text-body fv-body text-secondary leading-snug">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-section fv-body-bold font-bold text-black mb-2">
            Our approach.
          </h2>
          <p className="text-body-lg fv-body text-secondary mb-12">
            Three principles behind every recommendation we make.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {principles.map(({ title, description }) => (
              <div key={title} className="bg-white p-8">
                <h3 className="text-card-h fv-body-semi font-semibold text-black mb-2">{title}</h3>
                <p className="text-body fv-body text-secondary leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Christopher ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-nav fv-nav text-secondary uppercase tracking-widest mb-4">
              Meet the founder
            </p>
            <h2 className="text-section fv-body-bold font-bold text-black mb-6">
              Christopher Rael
            </h2>
            <p className="text-body fv-body text-secondary leading-snug mb-4">
              Christopher started Innovative Investment Professionals in 1996 with
              one intention: help people solve their investment problems through an
              honest, straightforward approach.
            </p>
            <p className="text-body fv-body text-secondary leading-snug mb-8">
              He&rsquo;ll get you not only to retirement — but through it. He
              goes the extra mile, takes individual situations into account, and
              has never sold a product he wouldn&rsquo;t recommend to his own family.
            </p>
            <Link href="/about" className="btn-secondary">Meet the Full Team</Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              { label: "Fiduciary", sub: "Always acts in your interest" },
              { label: "Fee-transparent", sub: "No hidden charges" },
              { label: "Local", sub: "Rio Rancho, NM based" },
              { label: "30+ years", sub: "In business since 1996" },
            ].map(({ label, sub }) => (
              <div key={label} className="bg-white p-6">
                <p className="text-card-h fv-body-semi font-semibold text-black">{label}</p>
                <p className="text-nav fv-nav text-secondary mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seminar CTA ── */}
      <section className="section-border py-20 px-6 text-center">
        <h2 className="text-section fv-body-bold font-bold text-black">
          Plan your future.
        </h2>
        <p className="text-body-lg fv-body text-secondary mt-3 max-w-md mx-auto">
          Start with a free retirement seminar — or call us directly. Either way,
          there&rsquo;s no cost and no obligation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/seminars" className="btn-primary">See Free Seminars</Link>
          <Link href="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
