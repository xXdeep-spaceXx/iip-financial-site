import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Innovative Investment Professionals",
  description:
    "Retirement planning, annuities, life insurance, and educational seminars in Albuquerque and Rio Rancho, NM. Comprehensive financial planning since 1996.",
};

const services = [
  {
    title: "Retirement Planning",
    description:
      "Navigate 401(k)s, IRAs, pensions, and Social Security with precision. We build income plans designed to sustain your lifestyle throughout retirement — and beyond.",
    href: "/retirement-planning",
  },
  {
    title: "Annuities",
    description:
      "Structured income products that deliver guaranteed, predictable cash flow — certainty in an uncertain market. Fixed and fixed index annuities with principal protection backed by the carrier.",
    href: "/annuity",
  },
  {
    title: "Life Insurance",
    description:
      "Comprehensive coverage options tailored to protect your beneficiaries and preserve the financial legacy you've worked to build. Term, whole life, IUL, and final expense coverage.",
    href: "/life-insurance",
  },
  {
    title: "Educational Seminars",
    description:
      "Free community seminars covering retirement strategies, annuities, tax reduction, and protecting your wealth. Held in Albuquerque and Rio Rancho — no cost, no obligation, with a complimentary gourmet meal.",
    href: "/seminars",
  },
];

const principles = [
  {
    number: "01",
    title: "Safety first.",
    description:
      "Protecting what you've saved is the top priority. As retirement gets closer, your priorities shift — and so should your strategy. We help you transition from growth-focused to protection-focused in a way that makes sense for your timeline.",
  },
  {
    number: "02",
    title: "Reasonable rate of return.",
    description:
      "You don't need to chase returns to have a secure retirement. There are products that offer reasonable growth without putting your principal at risk — and we know exactly which ones match your situation.",
  },
  {
    number: "03",
    title: "Keep it simple.",
    description:
      "If you can't explain your retirement plan in plain English, it's too complicated. Every strategy we build is designed to be clear, predictable, and easy to understand — so you always know where you stand.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    body: "We learn your goals, timeline, current situation, and concerns. No pressure, no products — just a real conversation.",
  },
  {
    step: "02",
    title: "Analysis",
    body: "We review your accounts, income sources, expenses, and risk exposure to identify gaps and opportunities.",
  },
  {
    step: "03",
    title: "Strategy",
    body: "You receive a personalized plan with specific recommendations — every choice explained in plain language.",
  },
  {
    step: "04",
    title: "Ongoing support",
    body: "We implement, review annually, and adjust as your life evolves. We're here for the long haul.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
        <p className="text-nav fv-nav text-secondary uppercase tracking-widest mb-4">
          What We Do
        </p>
        <h1 className="text-hero fv-body-bold font-bold text-black leading-tight">
          Every service grounded in safety.
        </h1>
        <p className="text-body-lg fv-body text-secondary mt-6 max-w-xl mx-auto leading-snug">
          From retirement income to life protection — everything we offer is built
          around safety, reasonable growth, and simplicity.
        </p>
      </section>

      {/* ── Services grid ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-section fv-body-bold font-bold text-black mb-2">
            Comprehensive financial planning.
          </h2>
          <p className="text-body-lg fv-body text-secondary mb-12">
            We cover every dimension of your financial future.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {services.map(({ title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="bg-white p-8 flex flex-col gap-4 hover:bg-muted transition-colors duration-150 group"
              >
                <h3 className="text-card-h fv-body-semi font-semibold text-black group-hover:underline underline-offset-2">
                  {title} →
                </h3>
                <p className="text-body fv-body text-secondary leading-snug">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three principles ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-section fv-body-bold font-bold text-black mb-2">
            Three principles behind every recommendation.
          </h2>
          <p className="text-body-lg fv-body text-secondary mb-12">
            Not just talking points — the framework we apply to every client's situation.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {principles.map(({ number, title, description }) => (
              <div key={number} className="bg-white p-8 flex flex-col gap-4">
                <span className="text-nav fv-nav text-secondary">{number}</span>
                <h3 className="text-card-h fv-body-semi font-semibold text-black">{title}</h3>
                <p className="text-body fv-body text-secondary leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-section fv-body-bold font-bold text-black mb-2">
            From first call to confident retirement.
          </h2>
          <p className="text-body-lg fv-body text-secondary mb-12">
            A transparent, four-step process focused entirely on your goals.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {process.map(({ step, title, body }) => (
              <div key={step} className="bg-white p-8 flex gap-6">
                <span className="text-nav fv-nav text-secondary shrink-0 mt-0.5">{step}</span>
                <div>
                  <h3 className="text-card-h fv-body-semi font-semibold text-black mb-2">{title}</h3>
                  <p className="text-body fv-body text-secondary leading-snug">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-border py-20 px-6 text-center">
        <h2 className="text-section fv-body-bold font-bold text-black">
          Not sure where to start?
        </h2>
        <p className="text-body-lg fv-body text-secondary mt-3 max-w-sm mx-auto">
          Attend a free seminar or call us directly — we'll point you in the
          right direction at no charge.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/seminars" className="btn-primary">See Free Seminars</Link>
          <Link href="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
