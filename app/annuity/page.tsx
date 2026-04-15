import type { Metadata } from "next";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import ThreeDAtom from "@/components/ThreeDAtom";

export const metadata: Metadata = {
  title: "Modern Annuities | Innovative Investment",
  description: "Explore cutting-edge annuity products that maximize security and growth.",
};

const products = [
  {
    tag: "Most popular",
    title: "Fixed Index Annuity",
    subtitle: "Security + upside potential",
    description: "Earn interest linked to a market index with zero downside risk. Your principal is protected while participating in market gains.",
    features: ["Principal protection", "Indexed growth potential", "Tax-deferred accumulation", "Optional income rider"],
    featured: true,
  },
  {
    tag: "Predictable",
    title: "Fixed Annuity",
    subtitle: "Guaranteed growth rate",
    description: "Lock in a guaranteed interest rate for a set term — similar to a CD but with tax deferral and typically higher rates.",
    features: ["Guaranteed rate (2–5%)", "No market risk", "Flexible payout options", "Carrier-backed protection"],
    featured: false,
  },
  {
    tag: "Income for life",
    title: "Income Annuity",
    subtitle: "Guaranteed lifetime income",
    description: "Convert a lump sum into a guaranteed income stream that cannot be outlived — the financial equivalent of a personal pension.",
    features: ["Lifetime income guarantee", "Inflation-adjusted options", "Survivor benefit riders", "Immediate or deferred start"],
    featured: false,
  },
];

const steps = [
  { step: "01", title: "Premium deposit", body: "You deposit a lump sum or series of premiums into the annuity contract with the insurance carrier." },
  { step: "02", title: "Accumulation phase", body: "Your money grows tax-deferred. Depending on type, growth is fixed, indexed, or variable." },
  { step: "03", title: "Income activation", body: "At your chosen date, you activate the income phase — receiving regular payments for life or a set period." },
  { step: "04", title: "Legacy distribution", body: "Any remaining balance passes to named beneficiaries outside of probate." },
];

const faqs = [
  { q: "Are annuities safe?", a: "Annuities are backed by the claims-paying ability of the issuing insurance company. We only work with A-rated or higher carriers." },
  { q: "What fees should I expect?", a: "Fixed and fixed-index annuities typically carry no explicit fees. Income riders may have annual charges of 0.5–1.5%, disclosed before signing." },
  { q: "Can I access my money early?", a: "Most annuities allow 10% penalty-free withdrawals annually. Full liquidity is restored after the surrender period (typically 5–10 years)." },
  { q: "How are annuity payments taxed?", a: "Growth is tax-deferred. Payments are taxed as ordinary income only on the earnings portion via the exclusion ratio." },
];

export default function AnnuityPage() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <VideoBackground
        videoSrc="/videos/hero-bg.mp4"
        fallbackSrc="/images/hero-fallback.jpg"
        fallbackAlt="Annuity background"
        overlayOpacity={58}
        className="min-h-[85vh] flex items-center"
      >
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <ThreeDAtom size={520} />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex items-center">
          <div className="animate-fade-up max-w-lg">
            <p className="text-nav fv-nav text-white-60 mb-4 uppercase tracking-widest">
              Modern Annuities
            </p>
            <h1 className="text-hero fv-body-bold font-bold text-white leading-tight">
              Income you cannot
            </h1>
            <h1 className="text-hero fv-body-bold font-bold text-white-50 leading-tight">
              outlive.
            </h1>
            <p className="text-body fv-body text-white-65 mt-6 max-w-sm">
              Cutting-edge annuity products engineered to maximize security and
              growth — without sacrificing flexibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#products" className="btn-primary">View Products</Link>
              <Link href="#contact" className="fv-nav-semi inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white text-nav font-semibold rounded-full hover:bg-white/10 transition-colors duration-150">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* ── Products ── */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-section fv-body-bold font-bold text-black mb-2">Modern annuities.</h2>
        <p className="text-body-lg fv-body text-secondary mb-12">The right product for every goal and timeline.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map(({ tag, title, subtitle, description, features, featured }) => (
            <div key={title} className={`card p-8 flex flex-col gap-5 ${featured ? "ring-1 ring-black" : ""}`}>
              <span className="fv-nav text-nav self-start px-3 py-1 rounded-full bg-muted text-secondary">{tag}</span>
              <div>
                <h3 className="text-card-h fv-body-semi font-semibold text-black">{title}</h3>
                <p className="text-nav fv-nav mt-1 text-secondary">{subtitle}</p>
              </div>
              <p className="text-body fv-body text-secondary leading-snug flex-1">{description}</p>
              <ul className="space-y-1.5">
                {features.map((f) => (
                  <li key={f} className="fv-nav flex items-center gap-2 text-nav text-black">
                    <span className="text-secondary">—</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className={featured ? "btn-primary justify-center" : "btn-secondary justify-center"}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-section fv-body-bold font-bold text-black mb-2">How annuities work.</h2>
            <p className="text-body-lg fv-body text-secondary mb-10">Four simple phases from deposit to lifetime income.</p>
            <div className="space-y-8">
              {steps.map(({ step, title, body }) => (
                <div key={step} className="flex gap-6">
                  <span className="text-nav fv-nav text-secondary shrink-0 mt-0.5">{step}</span>
                  <div>
                    <h3 className="text-card-h fv-body-semi font-semibold text-black mb-1">{title}</h3>
                    <p className="text-body fv-body text-secondary leading-snug">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <ThreeDAtom size={380} />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-section fv-body-bold font-bold text-black mb-2">Common questions.</h2>
          <p className="text-body-lg fv-body text-secondary mb-12">Everything you need to know before getting started.</p>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white p-8">
                <h3 className="text-card-h fv-body-semi font-semibold text-black mb-2">{q}</h3>
                <p className="text-body fv-body text-secondary leading-snug">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="section-border py-20 px-6 text-center">
        <h2 className="text-section fv-body-bold font-bold text-black">Plan your future.</h2>
        <p className="text-body-lg fv-body text-secondary mt-3 max-w-sm mx-auto">
          Our specialists compare 30+ A-rated carriers to find you the best rate and terms.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="#" className="btn-primary">Get Started</Link>
          <Link href="/retirement-planning" className="btn-secondary">Retirement Planning</Link>
        </div>
      </section>
    </div>
  );
}
