import type { Metadata } from "next";
import Link from "next/link";
import HeroOrb from "@/components/HeroOrb";

export const metadata: Metadata = {
  title: "Retirement Planning | Innovative Investment Professionals",
  description:
    "Expert retirement planning in Albuquerque and Rio Rancho, NM. 401(k)s, IRAs, Social Security strategy, and income planning since 1996.",
};

const steps = [
  {
    number: "01",
    title: "Discovery & goal mapping",
    description:
      "We start with a deep-dive into your current financial position, lifestyle goals, and target retirement age — no pressure, no products.",
  },
  {
    number: "02",
    title: "Income analysis",
    description:
      "We review your accounts, pensions, Social Security options, and expenses to map out your retirement income picture.",
  },
  {
    number: "03",
    title: "Plan construction",
    description:
      "You receive a personalized plan with specific product and strategy recommendations — every choice explained in plain language.",
  },
  {
    number: "04",
    title: "Ongoing support",
    description:
      "We implement, review annually, and adjust as your life evolves. We're here for the long haul — not just the sale.",
  },
];

const coverage = [
  {
    title: "401(k) & IRA strategy",
    description:
      "Maximize contribution limits, evaluate Roth conversion options, and coordinate your employer accounts with your broader plan.",
  },
  {
    title: "Social Security timing",
    description:
      "Determine the optimal claiming age for your situation. Delaying can significantly increase your lifetime benefit.",
  },
  {
    title: "Pension coordination",
    description:
      "If you have a pension, we help you evaluate your payout options and integrate it cleanly with your other income sources.",
  },
  {
    title: "Tax reduction strategies",
    description:
      "Structure your withdrawals and accounts to minimize taxes owed on retirement income — legally and effectively.",
  },
  {
    title: "Principal protection",
    description:
      "As retirement approaches, we shift your focus to protecting what you've built — not chasing returns that put it at risk.",
  },
  {
    title: "Income you can't outlive",
    description:
      "We build a guaranteed income floor using annuities and other tools so you're never dependent solely on market performance.",
  },
];

export default function RetirementPlanningPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="page-hero relative min-h-[82vh] flex items-center px-6">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[460px] h-[460px] hidden lg:block pointer-events-none">
          <HeroOrb className="w-full h-full" />
        </div>
        <div className="relative max-w-7xl mx-auto w-full pt-28 pb-20">
          <div className="max-w-2xl">
            <p className="section-label text-[rgba(255,255,255,0.7)] mb-5 animate-hero">Retirement Planning</p>
            <h1 className="hero-title text-white mb-2 animate-hero-delay-1">Build a retirement</h1>
            <h1 className="hero-title text-[rgba(255,255,255,0.55)] animate-hero-delay-1">you can live on.</h1>
            <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 max-w-xl leading-snug animate-hero-delay-2">
              IIP has helped New Mexico families build and protect their retirement
              income for over 30 years — with honesty, zero market risk, and a plan
              designed to last as long as you do.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-hero-delay-3">
              <Link href="/contact" className="btn-white">Start the Conversation</Link>
              <Link href="/seminars" className="btn-hero-outline">Attend a Free Seminar</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">How It Works</p>
          <h2 className="section-title mb-2">Our process.</h2>
          <p className="text-body-lg body-text mb-12">
            A clear, four-step path from where you are to where you want to be.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="bg-bg p-8 flex gap-6">
                <span className="text-nav fv-nav text-accent shrink-0 mt-0.5">{number}</span>
                <div>
                  <h3 className="text-card-h fv-body-semi font-semibold text-ink mb-2">{title}</h3>
                  <p className="text-body fv-body body-text leading-snug">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section className="section-border py-20 bg-bg2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">What We Cover</p>
          <h2 className="section-title mb-2">Every dimension of your plan.</h2>
          <p className="text-body-lg body-text mb-12">
            A complete retirement plan covers income, taxes, protection, and legacy.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {coverage.map(({ title, description }) => (
              <div key={title} className="bg-bg p-8">
                <h3 className="text-card-h fv-body-semi font-semibold text-ink mb-2">{title}</h3>
                <p className="text-body fv-body body-text leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why IIP ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Why IIP</p>
            <h2 className="section-title mb-6">Safety first. Always.</h2>
            <p className="text-body fv-body body-text leading-snug mb-4">
              Most advisors are incentivized to keep your money in the market. We
              aren't. Our focus is on building a retirement income plan that
              protects your principal and generates predictable cash flow — without
              exposing you to unnecessary risk.
            </p>
            <p className="text-body fv-body body-text leading-snug mb-8">
              We've been doing this in Albuquerque and Rio Rancho since 1996. We
              know what works for New Mexico families — and we'll tell you if
              something isn't right for your situation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Book a Consultation</Link>
              <Link href="/annuity" className="btn-secondary">Learn About Annuities</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {[
              { label: "Zero market risk", sub: "Principal protected products" },
              { label: "A-rated carriers", sub: "Only the strongest insurers" },
              { label: "30+ years", sub: "Experience in NM" },
              { label: "No obligation", sub: "Free first consultation" },
            ].map(({ label, sub }) => (
              <div key={label} className="bg-bg p-6">
                <p className="text-card-h fv-body-semi font-semibold text-ink">{label}</p>
                <p className="text-nav fv-nav text-ink3 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-border py-20 px-6 bg-bg2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Ready to plan your retirement?</h2>
          <p className="text-body-lg body-text mt-3 max-w-sm mx-auto">
            Call us or attend a free seminar — either way, there&rsquo;s no cost
            and no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">Get Started</Link>
            <a href="tel:5058961348" className="btn-secondary">(505) 896-1348</a>
          </div>
        </div>
      </section>
    </div>
  );
}
