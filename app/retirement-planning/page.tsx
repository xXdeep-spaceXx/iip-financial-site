import type { Metadata } from "next";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import ThreeDAtom from "@/components/ThreeDAtom";

export const metadata: Metadata = {
  title: "Retirement Planning | Innovative Investment",
  description: "Future-proof your financial independence with expert retirement strategies.",
};

const steps = [
  { number: "01", title: "Discovery & goal mapping", description: "We start with a deep-dive into your current financial position, lifestyle goals, and target retirement age." },
  { number: "02", title: "Portfolio construction", description: "Our advisors design a diversified, tax-efficient portfolio spanning equities, bonds, and alternatives." },
  { number: "03", title: "Ongoing optimization", description: "We rebalance quarterly, adjust for tax law changes, and meet annually to keep your plan on track." },
  { number: "04", title: "Retirement execution", description: "We manage your drawdown strategy to maximize income longevity while minimizing your tax burden." },
];

const benefits = [
  { title: "401(k) & IRA optimization", description: "Maximize contribution limits, employer matches, and Roth conversion ladders to reduce lifetime tax exposure." },
  { title: "Social Security strategy", description: "Determine the optimal claiming age — delaying two years can increase your lifetime benefit significantly." },
  { title: "Healthcare bridge planning", description: "Structure assets to cover the gap between early retirement and Medicare eligibility at 65." },
  { title: "Estate & legacy planning", description: "Ensure your wealth transfers efficiently with beneficiary designations, trusts, and gifting strategies." },
  { title: "Inflation-resistant income", description: "Build a diversified income floor with TIPS, dividend equities, and real assets that maintain purchasing power." },
  { title: "Sequence-of-returns protection", description: "Bucket strategies and dynamic withdrawal rules guard against a bad market year devastating early retirement." },
];

export default function RetirementPlanningPage() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <VideoBackground
        videoSrc="/videos/hero-bg.mp4"
        fallbackSrc="/images/hero-fallback.jpg"
        fallbackAlt="Retirement planning"
        overlayOpacity={58}
        className="min-h-[85vh] flex items-center"
      >
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <ThreeDAtom size={520} />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex items-center">
          <div className="animate-fade-up max-w-lg">
            <p className="text-nav fv-nav text-white-60 mb-4 uppercase tracking-widest">
              Retirement Planning
            </p>
            <h1 className="text-hero fv-body-bold font-bold text-white leading-tight">
              Build a retirement
            </h1>
            <h1 className="text-hero fv-body-bold font-bold text-white-50 leading-tight">
              you can live on.
            </h1>
            <p className="text-body fv-body text-white-65 mt-6 max-w-sm">
              Future-proof your financial independence with strategies designed
              to last as long as you do — and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#process" className="btn-primary">See Our Process</Link>
              <Link href="#contact" className="fv-nav-semi inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white text-nav font-semibold rounded-full hover:bg-white/10 transition-colors duration-150">
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* ── Process ── */}
      <section id="process" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-section fv-body-bold font-bold text-black mb-2">How it works.</h2>
        <p className="text-body-lg fv-body text-secondary mb-12">A four-step process from discovery to execution.</p>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="bg-white p-8 flex gap-6">
              <span className="text-nav fv-nav text-secondary shrink-0 mt-1">{number}</span>
              <div>
                <h3 className="text-card-h fv-body-semi font-semibold text-black mb-2">{title}</h3>
                <p className="text-body fv-body text-secondary leading-snug">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-section fv-body-bold font-bold text-black mb-2">What we cover.</h2>
          <p className="text-body-lg fv-body text-secondary mb-12">Every dimension of a modern retirement plan.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {benefits.map(({ title, description }) => (
              <div key={title} className="bg-white p-8">
                <h3 className="text-card-h fv-body-semi font-semibold text-black mb-2">{title}</h3>
                <p className="text-body fv-body text-secondary leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D Atom ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-section fv-body-bold font-bold text-black mb-2">Visualize your future.</h2>
            <p className="text-body-lg fv-body text-secondary">
              Interactive 3D modeling of portfolio structures and asset allocation scenarios.
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <ThreeDAtom size={380} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="section-border py-20 px-6 text-center">
        <h2 className="text-section fv-body-bold font-bold text-black">Plan your future.</h2>
        <p className="text-body-lg fv-body text-secondary mt-3 max-w-sm mx-auto">
          Talk to our experts and reinvent your strategies.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="#" className="btn-primary">Get Started</Link>
          <Link href="/annuity" className="btn-secondary">Explore Annuities</Link>
        </div>
      </section>
    </div>
  );
}
