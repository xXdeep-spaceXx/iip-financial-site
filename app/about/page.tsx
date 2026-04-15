import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Innovative Investment Professionals",
  description:
    "Meet the team at Innovative Investment Professionals — serving New Mexico families with honest, straightforward financial guidance since 1996.",
};

const team = [
  {
    name: "Christopher Rael",
    title: "Founder & President",
    bio: [
      "Christopher Rael started Innovative Investment Professionals in 1996 with one intention: help people solve their investment problems through an honest, straightforward approach.",
      "Chris goes into every client relationship entirely focused on helping — taking individual situations into account, getting clients not only to retirement but through it. He'll go the extra mile to help you achieve your goals.",
      "Christopher is honest, compassionate, and generous. When not in the office, he coaches high school basketball and enjoys traveling, reading, movies, and spending time outdoors.",
    ],
  },
  {
    name: "Jerry Baca",
    title: "Partner",
    bio: [
      "Jerry Baca, a lifelong resident of Santa Fe, NM, has been in the financial services business for over 24 years. He earned a bachelor's degree in finance in 1998 and spent three years with New York Life before joining Allstate Financial.",
      "Partnering with Innovative Investment Professionals allows Jerry to offer his clients access to more choices — top insurance carriers and innovative financial products he couldn't bring to the table elsewhere.",
      "Jerry's emphasis has always been on personal relationships. He enjoys meeting people and educating them on the importance of a secure future — and helping them choose strategies that fit their lives.",
    ],
  },
  {
    name: "Kobi Worling",
    title: "Partner",
    bio: [
      "Kobi Worling has been an accounting professional in Albuquerque and the surrounding area since 1999, with her focus on business planning, budgeting, and forecasting.",
      "She partnered with Innovative Investment Professionals to bring the expertise of a Financial Services and Insurance Industry leader to her existing client base — combining her accounting background with IIP's retirement planning depth.",
      "Her goal is to help as many people plan and set up their future goals so that their next chapter of life is as easy and enjoyable as possible.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="page-hero pt-44 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[rgba(255,255,255,0.7)] mb-4">About Us</p>
          <h1 className="hero-title text-white leading-tight">Built on honest advice.</h1>
          <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 max-w-xl mx-auto leading-snug">
            A team of dedicated financial professionals serving New Mexico families
            since 1996 — with honesty, clarity, and a genuine commitment to your future.
          </p>
        </div>
      </section>

      {/* ── Company story ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="section-title mb-6">Nearly three decades serving New Mexico.</h2>
            <div className="space-y-5">
              <p className="text-body fv-body body-text leading-snug">
                Innovative Investment Professionals was founded in 1996 with one
                mission: help people solve their investment problems through an
                honest, straightforward approach.
              </p>
              <p className="text-body fv-body body-text leading-snug">
                Over nearly three decades, we've grown into a team of experienced
                professionals serving families across Albuquerque, Rio Rancho,
                Santa Fe, and throughout New Mexico. What hasn't changed is our
                core belief — that every client deserves a plan as unique as their life.
              </p>
              <p className="text-body fv-body body-text leading-snug">
                We don't sell products. We build relationships, ask the right
                questions, and design strategies around your goals — not ours.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {[
              { stat: "1996", label: "Founded" },
              { stat: "500+", label: "Families served" },
              { stat: "3", label: "Team members" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg p-8 text-center">
                <p className="stat-number">{stat}</p>
                <p className="text-nav fv-nav text-ink3 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-border py-20 bg-bg2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">The Team</p>
          <h2 className="section-title mb-2">Meet the team.</h2>
          <p className="text-body-lg body-text mb-12">Real people. Real experience. No call centers.</p>

          <div className="space-y-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {team.map(({ name, title, bio }) => (
              <div key={name} className="bg-bg p-8 md:p-10 grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-card-h fv-body-semi font-semibold text-ink">{name}</h3>
                  <p className="text-nav fv-nav text-ink3 mt-1">{title}</p>
                </div>
                <div className="md:col-span-2 space-y-4">
                  {bio.map((paragraph, i) => (
                    <p key={i} className="text-body fv-body body-text leading-snug">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Giving back ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Community</p>
            <h2 className="section-title mb-4">Giving back.</h2>
            <p className="text-body fv-body body-text leading-snug mb-4">
              Community matters to us. Many of our seminar events double as
              fundraisers for local charities — we believe in giving back to the
              New Mexico communities that have trusted us for nearly 30 years.
            </p>
            <p className="text-body fv-body body-text leading-snug">
              Think there's a charitable organization we should support? Reach
              out to Jerry — he coordinates our community calendar and is always
              looking for ways to make a difference.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {[
              { label: "Albuquerque", sub: "Primary office area" },
              { label: "Rio Rancho", sub: "Serving families here" },
              { label: "Santa Fe", sub: "Regular client base" },
              { label: "New Mexico", sub: "Statewide coverage" },
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
          <h2 className="section-title">Ready to meet the team?</h2>
          <p className="text-body-lg body-text mt-3 max-w-sm mx-auto">
            Start with a free consultation — no obligation, no pressure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
            <Link href="/seminars" className="btn-secondary">See Free Seminars</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
