import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Client Appreciation Events | IIP",
  description:
    "IIP client appreciation events — Albuquerque Isotopes games at Isotopes Park. Call (505) 896-1348 to reserve your tickets.",
  alternates: { canonical: "https://innovativeinvpro.com/appreciation" },
  openGraph: {
    url: "https://innovativeinvpro.com/appreciation",
    title: "Client Appreciation Events | IIP",
    description:
      "IIP client appreciation events — Albuquerque Isotopes games at Isotopes Park. Call (505) 896-1348 to reserve your tickets.",
  },
};

const games = [
  { date: "June 27, 2026", day: "Saturday", status: "Open" },
  { date: "July 18, 2026", day: "Saturday", status: "Open" },
  { date: "August 21, 2026", day: "Friday", status: "Open" },
  { date: "September 18, 2026", day: "Friday", status: "Open" },
];

const steps = [
  {
    number: "01",
    title: "Call the office.",
    description:
      "Call us at (505) 896-1348 to let us know which game you'd like to attend. Space is limited, so call early.",
  },
  {
    number: "02",
    title: "Reserve your spot.",
    description:
      "We'll add you to the list and confirm your reservation. One ticket per household — bring a guest if spots are available.",
  },
  {
    number: "03",
    title: "Show up and enjoy.",
    description:
      "Arrive by 5:30 PM. Food and drinks are on us. Remember — clear bags only are permitted at the park.",
  },
];

export default function AppreciationPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="page-hero pt-44 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[rgba(255,255,255,0.7)] mb-4">Client Appreciation</p>
          <h1 className="hero-title text-white leading-tight">An evening at the ballpark.</h1>
          <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 max-w-xl mx-auto leading-snug">
            A small thank-you from our family to yours. Join Chris Rael and the
            IIP team for an Albuquerque Isotopes game — on us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="tel:5058961348" className="btn-white">Call to Reserve — (505) 896-1348</a>
            <Link href="/contact" className="btn-hero-outline">Send a Message</Link>
          </div>
          <p className="text-nav text-[rgba(255,255,255,0.6)] mt-4">
            Space is limited — call early to secure your spot.
          </p>
        </div>
      </section>

      {/* ── Game dates ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-2">2026 Schedule</p>
          <h2 className="section-title mb-2">Game dates &amp; details.</h2>
          <p className="text-body fv-body body-text mb-12">
            Rio Grande Credit Union Field at Isotopes Park &nbsp;·&nbsp; 1601
            Avenida Cesar Chavez SE, Albuquerque, NM 87106
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {games.map(({ date, day, status }) => (
              <div key={date} className="bg-bg p-8 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/isotopeslogo.png"
                    alt="Albuquerque Isotopes"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                  <span className="chip">{status}</span>
                </div>
                <div>
                  <p className="text-card-h fv-body-semi font-semibold text-ink">{date}</p>
                  <p className="text-nav fv-nav text-ink3 mt-0.5">{day}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-nav fv-nav text-ink3">Rio Grande Credit Union Field</p>
                  <p className="text-nav fv-nav text-ink3">at Isotopes Park</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to attend ── */}
      <section className="section-border py-20 bg-bg2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">How to Attend</p>
          <h2 className="section-title mb-2">Three easy steps.</h2>
          <p className="text-body-lg body-text mb-12">Reserving your spot takes two minutes.</p>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="bg-bg p-8 flex flex-col gap-4">
                <span className="text-nav fv-nav text-accent">{number}</span>
                <h3 className="text-card-h fv-body-semi font-semibold text-ink">{title}</h3>
                <p className="text-body fv-body body-text leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-border py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Ready to reserve your spot?</h2>
          <p className="text-body-lg body-text mt-3 max-w-sm mx-auto">
            Call the office to claim your tickets. These events fill up fast —
            don&rsquo;t wait.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="tel:5058961348" className="btn-primary">(505) 896-1348</a>
            <Link href="/contact" className="btn-secondary">Send Us a Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
