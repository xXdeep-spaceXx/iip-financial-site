import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Annuities | Innovative Investment Professionals",
  description:
    "Fixed index annuities and guaranteed income strategies in Albuquerque and Rio Rancho, NM. Predictable cash flow. No market risk.",
};

const products = [
  {
    tag: "Most popular",
    title: "Fixed Index Annuity",
    subtitle: "Security + upside potential",
    description:
      "Earn interest linked to a market index with zero downside risk. Your principal is protected while participating in market gains.",
    features: [
      "Principal protection",
      "Indexed growth potential",
      "Tax-deferred accumulation",
      "Optional income rider",
    ],
    featured: true,
  },
  {
    tag: "Predictable",
    title: "Fixed Annuity",
    subtitle: "Guaranteed growth rate",
    description:
      "Lock in a guaranteed interest rate for a set term — similar to a CD but with tax deferral and typically higher rates.",
    features: [
      "Guaranteed rate (2–5%)",
      "No market risk",
      "Flexible payout options",
      "Carrier-backed protection",
    ],
    featured: false,
  },
  {
    tag: "Income for life",
    title: "Income Annuity",
    subtitle: "Guaranteed lifetime income",
    description:
      "Convert a lump sum into a guaranteed income stream that cannot be outlived — the financial equivalent of a personal pension.",
    features: [
      "Lifetime income guarantee",
      "Inflation-adjusted options",
      "Survivor benefit riders",
      "Immediate or deferred start",
    ],
    featured: false,
  },
];

const steps = [
  {
    step: "01",
    title: "Premium deposit",
    body: "You deposit a lump sum or series of premiums into the annuity contract with the insurance carrier.",
  },
  {
    step: "02",
    title: "Accumulation phase",
    body: "Your money grows tax-deferred. Depending on type, growth is fixed or indexed to a market benchmark.",
  },
  {
    step: "03",
    title: "Income activation",
    body: "At your chosen date, you activate the income phase — receiving regular payments for life or a set period.",
  },
  {
    step: "04",
    title: "Legacy distribution",
    body: "Any remaining balance passes to named beneficiaries outside of probate.",
  },
];

const faqs = [
  {
    q: "Are annuities safe?",
    a: "Annuities are backed by the claims-paying ability of the issuing insurance company. We only work with A-rated or higher carriers.",
  },
  {
    q: "What fees should I expect?",
    a: "Fixed and fixed-index annuities typically carry no explicit fees. Income riders may have annual charges of 0.5–1.5%, disclosed before signing.",
  },
  {
    q: "Can I access my money early?",
    a: "Most annuities allow 10% penalty-free withdrawals annually. Full liquidity is restored after the surrender period (typically 5–10 years).",
  },
  {
    q: "How are annuity payments taxed?",
    a: "Growth is tax-deferred. Payments are taxed as ordinary income only on the earnings portion via the exclusion ratio.",
  },
];

export default function AnnuityPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="page-hero pt-44 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[rgba(255,255,255,0.7)] mb-4">Annuities</p>
          <h1 className="hero-title text-white leading-tight">Income you cannot outlive.</h1>
          <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 max-w-xl mx-auto leading-snug">
            Guaranteed, predictable cash flow backed by A-rated carriers. Principal
            protection with zero market risk — certainty in an uncertain world.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-white">Get a Quote</Link>
            <Link href="/seminars" className="btn-hero-outline">Attend a Free Seminar</Link>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Our Products</p>
          <h2 className="section-title mb-2">The right annuity for your goals.</h2>
          <p className="text-body-lg body-text mb-12">
            Three product types. One goal: guaranteed income you can count on.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map(({ tag, title, subtitle, description, features, featured }) => (
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
                <Link
                  href="/contact"
                  className={featured ? "btn-primary justify-center" : "btn-secondary justify-center"}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-border py-20 bg-bg2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">How It Works</p>
          <h2 className="section-title mb-2">Four phases from deposit to lifetime income.</h2>
          <p className="text-body-lg body-text mb-12">
            Annuities are straightforward. Here&rsquo;s what happens to your money.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {steps.map(({ step, title, body }) => (
              <div key={step} className="bg-bg p-8 flex gap-6">
                <span className="text-nav fv-nav text-accent shrink-0 mt-0.5">{step}</span>
                <div>
                  <h3 className="text-card-h fv-body-semi font-semibold text-ink mb-1">{title}</h3>
                  <p className="text-body fv-body body-text leading-snug">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Common Questions</p>
          <h2 className="section-title mb-2">Everything you need to know.</h2>
          <p className="text-body-lg body-text mb-12">
            Honest answers before you get started.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-bg p-8">
                <h3 className="text-card-h fv-body-semi font-semibold text-ink mb-2">{q}</h3>
                <p className="text-body fv-body body-text leading-snug">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-border py-20 px-6 bg-bg2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Ready to explore annuities?</h2>
          <p className="text-body-lg body-text mt-3 max-w-sm mx-auto">
            We compare options across 30+ A-rated carriers to find the best fit for
            your goals and timeline.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">Get Started</Link>
            <Link href="/retirement-planning" className="btn-secondary">Retirement Planning</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
