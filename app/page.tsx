import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollAtom from "@/components/ScrollAtom";

export const metadata: Metadata = {
  title: "Retirement Planning in Rio Rancho, NM | IIP",
  description:
    "Retirement planning, annuities, and life insurance for New Mexico families since 1996. Serving Albuquerque and Rio Rancho, NM.",
  alternates: { canonical: "https://innovativeinvpro.com/" },
  openGraph: {
    url: "https://innovativeinvpro.com/",
    title: "Retirement Planning in Rio Rancho, NM | IIP",
    description:
      "Retirement planning, annuities, and life insurance for New Mexico families since 1996. Serving Albuquerque and Rio Rancho, NM.",
  },
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

const reviews = [
  {
    name: "Tom Plummer",
    stars: 5,
    text: "Chris is one of the most knowledgeable financial advisors I have ever worked with. He truly cares about his clients and goes above and beyond to make sure they are taken care of.",
  },
  {
    name: "Richard Valdez",
    stars: 5,
    text: "Christopher Rael is very professional and knowledgeable. He explained everything thoroughly and was patient with all our questions. We feel confident in our retirement plan.",
  },
  {
    name: "Carol Bellows",
    stars: 5,
    text: "IIP has been managing our retirement for years. Chris always has our best interest at heart and we could not be more satisfied with the results.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center px-6 overflow-hidden">
        {/* Background photo */}
        <Image
          src="/assets/Grandparents-granddaughter-walking-on-beach-winter-retirement.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Purple overlay */}
        <div className="absolute inset-0 hero-photo-overlay" aria-hidden="true" />

<div className="relative max-w-7xl mx-auto w-full pt-28 pb-24">
          <div className="max-w-2xl">
            <p className="section-label text-[rgba(255,255,255,0.7)] mb-5 animate-hero">
              Rio Rancho &amp; Albuquerque, NM · Since 1996
            </p>
            <h1 className="hero-title text-white mb-2 animate-hero-delay-1">
              Retire with more
            </h1>
            <h1 className="hero-title text-[rgba(255,255,255,0.55)] animate-hero-delay-1">
              than you planned on.
            </h1>
            <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 max-w-xl leading-snug animate-hero-delay-2">
              Innovative Investment Professionals has helped New Mexico families build
              and protect their retirement income for over 30 years — with honesty,
              clarity, and zero market risk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-hero-delay-3">
              <Link href="/retirement-planning" className="btn-white">Start Planning</Link>
              <Link href="/seminars" className="btn-hero-outline">See Free Seminars</Link>
            </div>
            <a href="tel:5058961348" className="inline-block mt-5 text-nav text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-150 animate-hero-delay-4">
              (505) 896-1348 — call anytime
            </a>
          </div>
        </div>
      </section>

      {/* ── Scroll-driven atom animation ── */}
      <ScrollAtom />

      {/* ── Stats ── */}
      <ScrollReveal>
        <section className="section-border bg-bg2">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border)]">
              {stats.map(({ stat, label }) => (
                <div key={label} className="px-8 py-10 text-center">
                  <p className="stat-number">{stat}</p>
                  <p className="text-nav fv-nav text-ink2 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Services ── */}
      <ScrollReveal>
        <section className="section-border py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="section-title mb-2">Everything you need to retire well.</h2>
            <p className="text-body-lg body-text mb-12">Four services. One team. All built around your goals.</p>
            <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
              {services.map(({ number, title, description, href }) => (
                <Link
                  key={number}
                  href={href}
                  className="bg-bg p-8 flex flex-col gap-4 hover:bg-bg2 transition-colors duration-150 group"
                >
                  <span className="text-nav fv-nav text-accent">{number}</span>
                  <h3 className="text-card-h fv-body-semi font-semibold text-ink group-hover:underline underline-offset-2">
                    {title} →
                  </h3>
                  <p className="text-body fv-body body-text leading-snug">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Principles ── */}
      <ScrollReveal>
        <section className="section-border py-20 bg-bg2">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label mb-3">Our Approach</p>
            <h2 className="section-title mb-2">How we think.</h2>
            <p className="text-body-lg body-text mb-12">Three principles behind every recommendation we make.</p>
            <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
              {principles.map(({ title, description }) => (
                <div key={title} className="bg-bg p-8">
                  <h3 className="text-card-h fv-body-semi font-semibold text-ink mb-2">{title}</h3>
                  <p className="text-body fv-body body-text leading-snug">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── About Christopher ── */}
      <ScrollReveal>
        <section className="section-border py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Meet the Founder</p>
              <h2 className="section-title mb-6">Christopher Rael</h2>
              <p className="text-body fv-body body-text leading-snug mb-4">
                Christopher started Innovative Investment Professionals in 1996 with
                one intention: help people solve their investment problems through an
                honest, straightforward approach.
              </p>
              <p className="text-body fv-body body-text leading-snug mb-8">
                He&rsquo;ll get you not only to retirement — but through it. He
                goes the extra mile, takes individual situations into account, and
                has never sold a product he wouldn&rsquo;t recommend to his own family.
              </p>
              <Link href="/about" className="btn-secondary">Meet the Full Team</Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
              {[
                { label: "Fiduciary", sub: "Always acts in your interest" },
                { label: "Fee-transparent", sub: "No hidden charges" },
                { label: "Local", sub: "Rio Rancho, NM based" },
                { label: "30+ years", sub: "In business since 1996" },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-bg p-6">
                  <p className="text-card-h fv-body-semi font-semibold text-ink">{label}</p>
                  <p className="text-nav fv-nav text-ink3 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Reviews ── */}
      <ScrollReveal>
        <section className="section-border py-20 bg-bg2">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label mb-3">Client Reviews</p>
            <h2 className="section-title mb-12">What our clients say.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map(({ name, stars, text }) => (
                <div key={name} className="review-card">
                  <div className="stars mb-3">{"★".repeat(stars)}</div>
                  <p className="text-body fv-body body-text leading-snug mb-4">&ldquo;{text}&rdquo;</p>
                  <p className="text-nav fv-nav-semi font-semibold text-ink">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Seminar CTA ── */}
      <ScrollReveal>
        <section className="section-border py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-3">Plan your future.</h2>
            <p className="text-body-lg body-text mt-3 max-w-md mx-auto">
              Start with a free retirement seminar — or call us directly. Either way,
              there&rsquo;s no cost and no obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href="/seminars" className="btn-primary">See Free Seminars</Link>
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
