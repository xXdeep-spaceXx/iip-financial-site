import Link from "next/link";

function SquarePlaceholder() {
  return (
    <svg viewBox="0 0 96 96" width={96} height={96} aria-hidden="true">
      <path d="M0 6C0 2.686 2.686 0 6 0h84c3.314 0 6 2.686 6 6v84c0 3.314-2.686 6-6 6H6C2.686 96 0 93.314 0 90Z" fill="rgb(245,245,245)" />
    </svg>
  );
}
function CirclePlaceholder() {
  return (
    <svg viewBox="0 0 102 102" width={102} height={102} aria-hidden="true">
      <circle cx={51} cy={51} r={51} fill="rgb(245,245,245)" />
    </svg>
  );
}
function TrianglePlaceholder() {
  return (
    <svg viewBox="0 0 114 96" width={114} height={96} aria-hidden="true">
      <path d="M54.42 4.345c1.163-1.958 3.997-1.958 5.16 0l51.729 87.123C112.497 93.468 111.056 96 108.73 96H5.27C2.944 96 1.503 93.468 2.691 91.468Z" fill="rgb(245,245,245)" />
    </svg>
  );
}

const services = [
  { title: "Retirement planning.", description: "Future-proof your financial independence with expert retirement strategies.", href: "/retirement-planning", Icon: SquarePlaceholder },
  { title: "Modern annuities.", description: "Explore cutting-edge annuity products that maximize security and growth.", href: "/annuity", Icon: CirclePlaceholder },
  { title: "Tech seminars.", description: "Attend interactive, modern seminars on advanced investment solutions.", href: "#seminars", Icon: TrianglePlaceholder },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-hero fv-body-bold font-bold text-black">Innovative Investment</h1>
        <h1 className="text-hero fv-body-bold font-bold text-secondary mt-0.5">Professionals in finance.</h1>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/retirement-planning" className="btn-primary">Start Planning</Link>
          <Link href="#seminars" className="btn-secondary">See Seminars</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ title, description, href, Icon }) => (
            <Link key={title} href={href} className="card p-8 flex flex-col gap-6 hover:shadow-md transition-shadow duration-200">
              <div className="w-fit"><Icon /></div>
              <div>
                <h3 className="text-card-h fv-body-semi font-semibold text-black">{title}</h3>
                <p className="text-body fv-body text-secondary mt-2 leading-snug">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="seminars" className="section-border py-20 px-6 text-center">
        <h2 className="text-section fv-body-bold font-bold text-black">Plan your future.</h2>
        <p className="text-body-lg fv-body text-secondary mt-3 max-w-md mx-auto">Talk to our experts and reinvent your strategies.</p>
        <Link href="#contact" className="btn-primary mt-8 inline-flex">Get Started</Link>
      </section>
    </div>
  );
}
