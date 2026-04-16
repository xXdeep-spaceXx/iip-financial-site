import type { Metadata } from "next";
import Link from "next/link";
import HeroOrb from "@/components/HeroOrb";

export const metadata: Metadata = {
  title: "Life Insurance | Innovative Investment Professionals",
  description:
    "Life insurance strategies in Albuquerque and Rio Rancho, NM. Protect your beneficiaries and preserve the financial legacy you've built.",
};

const insuranceTypes = [
  {
    tag: "Most affordable",
    title: "Term Life Insurance",
    subtitle: "Fixed coverage for a set period",
    description:
      "The simplest and most affordable form of coverage. You pay a fixed premium for a set term (10, 20, or 30 years). If you die during that term, your beneficiary receives the death benefit.",
    features: [
      "Lowest cost per dollar of coverage",
      "Best for income replacement during working years",
      "Ideal for covering a mortgage or raising children",
      "Can often be converted to permanent coverage",
    ],
    featured: false,
  },
  {
    tag: "Most popular",
    title: "Whole Life Insurance",
    subtitle: "Permanent coverage + cash value",
    description:
      "Permanent coverage that never expires and builds guaranteed cash value over time. Premiums are fixed for life, and the policy accumulates a savings component you can borrow against.",
    features: [
      "Lifetime coverage — no expiration",
      "Guaranteed cash value growth",
      "Death benefit is income-tax-free to beneficiaries",
      "Premiums are level — no surprises",
    ],
    featured: true,
  },
  {
    tag: "Flexible",
    title: "Indexed Universal Life",
    subtitle: "Market-linked growth with floor protection",
    description:
      "A flexible permanent policy that links cash value growth to a market index — similar to fixed index annuities. Growth potential with downside protection.",
    features: [
      "Flexible premium payments",
      "Market-linked cash value growth with floor",
      "Tax-advantaged access to cash value in retirement",
      "Death benefit can be adjusted as needs change",
    ],
    featured: false,
  },
  {
    tag: "Simple",
    title: "Final Expense Insurance",
    subtitle: "End-of-life cost coverage",
    description:
      "A smaller whole life policy designed to cover funeral costs, medical bills, and other end-of-life expenses — so your family isn't left with unexpected financial burdens.",
    features: [
      "No medical exam in most cases",
      "Permanent coverage with level premiums",
      "Typically $5,000–$25,000 in coverage",
      "Fast approval, immediate coverage",
    ],
    featured: false,
  },
];

const useCases = [
  {
    title: "Income replacement",
    description:
      "If your family depends on your income, life insurance replaces that income — paying for housing, education, and daily expenses if you're no longer there.",
  },
  {
    title: "Debt protection",
    description:
      "Ensure your surviving spouse isn't left with a mortgage or outstanding debts they can't afford on a single income.",
  },
  {
    title: "Legacy transfer",
    description:
      "Life insurance proceeds pass to beneficiaries income-tax-free, making it one of the most efficient legacy transfer tools available.",
  },
  {
    title: "Business continuity",
    description:
      "Buy-sell agreements funded by life insurance ensure a business survives the death of a partner without financial chaos.",
  },
];

export default function LifeInsurancePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="page-hero relative min-h-[70vh] flex items-center px-6">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] hidden lg:block pointer-events-none">
          <HeroOrb className="w-full h-full" />
        </div>
        <div className="relative max-w-7xl mx-auto w-full pt-28 pb-20">
          <div className="max-w-2xl">
            <p className="section-label text-[rgba(255,255,255,0.7)] mb-4 animate-hero">Life Insurance</p>
            <h1 className="hero-title text-white leading-tight animate-hero-delay-1">
              Protection that
              <br />
              outlasts you.
            </h1>
            <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 max-w-xl leading-snug animate-hero-delay-2">
              Comprehensive coverage options tailored to protect your beneficiaries
              and preserve the financial legacy you&rsquo;ve worked to build.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-hero-delay-3">
              <Link href="/contact" className="btn-white">Find the Right Coverage</Link>
              <Link href="/seminars" className="btn-hero-outline">Attend a Free Seminar</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why life insurance ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">More Than a Death Benefit</p>
            <h2 className="section-title mb-6">Protection that works in all directions.</h2>
            <div className="space-y-5">
              <p className="text-body fv-body body-text leading-snug">
                Life insurance is one of the most direct ways to ensure that the
                people who depend on you — your spouse, your children, your
                business partner — are protected if something unexpected happens.
              </p>
              <p className="text-body fv-body body-text leading-snug">
                Modern policies can also serve as tax-advantaged savings vehicles,
                supplement retirement income, and protect against the financial
                devastation of chronic illness or long-term care needs.
              </p>
              <p className="text-body fv-body body-text leading-snug">
                At IIP, we help you identify the right type and amount of coverage
                — and make sure it fits cleanly into your broader retirement and
                financial plan.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {useCases.map(({ title, description }) => (
              <div key={title} className="bg-bg p-6">
                <h3 className="text-card-h fv-body-semi font-semibold text-ink mb-1">{title}</h3>
                <p className="text-body fv-body body-text leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product types ── */}
      <section className="section-border py-20 bg-bg2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Coverage Options</p>
          <h2 className="section-title mb-2">Types of life insurance we offer.</h2>
          <p className="text-body-lg body-text mb-12">
            Each type serves a different purpose. We&rsquo;ll help you choose the
            right one — or a combination — based on your goals.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {insuranceTypes.map(({ tag, title, subtitle, description, features, featured }) => (
              <div
                key={title}
                className={`iip-card p-8 flex flex-col gap-5 ${featured ? "ring-2 ring-[var(--accent)]" : ""}`}
              >
                <span className="chip self-start">{tag}</span>
                <div>
                  <h3 className="text-card-h fv-body-semi font-semibold text-ink">{title}</h3>
                  <p className="text-nav fv-nav text-ink3 mt-1">{subtitle}</p>
                </div>
                <p className="text-body fv-body body-text leading-snug flex-1">{description}</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-nav text-ink">
                      <span className="text-accent">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-border py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Let&rsquo;s find the right coverage.</h2>
          <p className="text-body-lg body-text mt-3 max-w-sm mx-auto">
            We compare policies across top-rated carriers to match you with the
            right coverage at the right price.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link href="/retirement-planning" className="btn-secondary">Retirement Planning</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
