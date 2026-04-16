import type { Metadata } from "next";
import Link from "next/link";
import HeroOrb from "@/components/HeroOrb";

export const metadata: Metadata = {
  title: "Free Retirement Seminars in Albuquerque | IIP",
  description:
    "Free retirement planning dinners in Albuquerque and Rio Rancho, NM. No cost, no obligation — learn about annuities, taxes, and income for life.",
  alternates: { canonical: "https://innovativeinvpro.com/seminars" },
  openGraph: {
    url: "https://innovativeinvpro.com/seminars",
    title: "Free Retirement Seminars in Albuquerque | IIP",
    description:
      "Free retirement planning dinners in Albuquerque and Rio Rancho, NM. No cost, no obligation — learn about annuities, taxes, and income for life.",
  },
};

const expectations = [
  {
    number: "01",
    title: "Complimentary gourmet meal.",
    description:
      "Throughout the year, we hold educational seminar presentations that include a no-cost gourmet dinner. Come hungry — for knowledge and for dinner.",
  },
  {
    number: "02",
    title: "Real financial education.",
    description:
      "We cover topics that actually matter to people approaching retirement — not jargon, not sales pitches. Plain language, real numbers, and honest conversation.",
  },
  {
    number: "03",
    title: "No obligation, ever.",
    description:
      "You can attend, learn everything, and walk out — no follow-up required. We believe the right way to earn your business is to earn your trust first.",
  },
];

const topics = [
  "How to safeguard your retirement savings from market losses — so you keep what you've earned.",
  "How to continue growing your money safely — without taking on stock market risk.",
  "What it means when a product is 'guaranteed' — and how to evaluate those guarantees with confidence.",
  "Strategies to reduce how much of your retirement income goes to taxes — legally and effectively.",
  "How to think about market risk as you approach and enter retirement — and when it matters most.",
];

export default function SeminarsPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="page-hero relative min-h-[70vh] flex items-center px-6">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] hidden lg:block pointer-events-none">
          <HeroOrb className="w-full h-full" />
        </div>
        <div className="relative max-w-7xl mx-auto w-full pt-28 pb-20">
          <div className="max-w-2xl">
            <p className="section-label text-[rgba(255,255,255,0.7)] mb-4 animate-hero">Free Seminars</p>
            <h1 className="hero-title text-white leading-tight animate-hero-delay-1">
              An evening of honest
              <br />
              financial education.
            </h1>
            <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 max-w-xl leading-snug animate-hero-delay-2">
              No products pushed, no pressure applied. Just the information you need
              to plan a confident retirement — over a complimentary dinner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-hero-delay-3">
              <Link href="/contact" className="btn-white">Reserve Your Seat</Link>
              <a href="tel:5058961348" className="btn-hero-outline">(505) 896-1348</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">What to Expect</p>
          <h2 className="section-title mb-2">What to expect.</h2>
          <p className="text-body-lg body-text mb-12">
            Every seminar is designed to be informative, comfortable, and completely pressure-free.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {expectations.map(({ number, title, description }) => (
              <div key={number} className="bg-bg p-8 flex flex-col gap-4">
                <span className="text-nav fv-nav text-accent">{number}</span>
                <h3 className="text-card-h fv-body-semi font-semibold text-ink">{title}</h3>
                <p className="text-body fv-body body-text leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Topics ── */}
      <section className="section-border py-20 bg-bg2">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">Topics Covered</p>
            <h2 className="section-title mb-2">Seminar topics.</h2>
            <p className="text-body-lg body-text">
              Each seminar covers a range of relevant subjects. Bring your
              questions — we leave time for Q&amp;A at every event.
            </p>
          </div>
          <ul className="space-y-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {topics.map((topic, i) => (
              <li key={i} className="bg-bg px-8 py-5 flex gap-3">
                <span className="text-accent shrink-0 mt-0.5">✓</span>
                <p className="text-body fv-body body-text leading-snug">{topic}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Venue ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Venue</p>
            <h2 className="section-title mb-4">Hosted at Ruth&rsquo;s Chris Steak House.</h2>
            <p className="text-body fv-body body-text leading-snug mb-4">
              Our seminars are held at one of Albuquerque&rsquo;s premier dining
              destinations. A complimentary gourmet meal is included — no strings
              attached.
            </p>
            <p className="text-body fv-body body-text leading-snug mb-8">
              Seminars fill up quickly. Call or email us to confirm your spot at
              the next event near you.
            </p>
            <Link href="/contact" className="btn-primary">Reserve Your Seat</Link>
          </div>
          <div className="iip-card p-8 text-center">
            <p className="text-card-h fv-body-semi font-semibold text-ink mb-2">
              Ruth&rsquo;s Chris Steak House
            </p>
            <p className="text-body fv-body body-text mb-1">Albuquerque, NM</p>
            <p className="chip mx-auto mt-3">Complimentary dinner included</p>
          </div>
        </div>
      </section>

      {/* ── Community ── */}
      <section className="section-border py-20 bg-bg2">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-card-h fv-body-semi font-semibold text-ink mb-3">
              Charity fundraisers.
            </h3>
            <p className="text-body fv-body body-text leading-snug">
              Many of our seminar events double as fundraisers for local charities.
              Not everyone is as fortunate as we are — for this reason, we do what
              we can to give back to our community, and we invite our clients to
              join us.
            </p>
          </div>
          <div>
            <h3 className="text-card-h fv-body-semi font-semibold text-ink mb-3">
              Help us help you.
            </h3>
            <p className="text-body fv-body body-text leading-snug">
              Think there&rsquo;s a charitable organization that could use our
              help? We&rsquo;d be happy to look into it. Reach out to Jerry — he
              coordinates our community event calendar and is always looking for
              ways to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-border py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Join our next free seminar.</h2>
          <p className="text-body-lg body-text mt-3 max-w-md mx-auto">
            Learn the fundamentals of retirement planning and protecting your
            financial future — at no cost, no obligation, with a complimentary dinner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">Reserve My Seat</Link>
            <a href="tel:5058961348" className="btn-secondary">(505) 896-1348</a>
          </div>
        </div>
      </section>
    </div>
  );
}
