import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Client Appreciation Events | Innovative Investment Professionals",
  description:
    "IIP client appreciation events — Albuquerque Isotopes games at Isotopes Park. Call (505) 896-1348 to reserve your tickets.",
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
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
        <p className="text-nav fv-nav text-secondary uppercase tracking-widest mb-4">
          Client Appreciation
        </p>
        <h1 className="text-hero fv-body-bold font-bold text-black leading-tight">
          An evening at the ballpark.
        </h1>
        <p className="text-body-lg fv-body text-secondary mt-6 max-w-xl mx-auto leading-snug">
          A small thank-you from our family to yours. Join Chris Rael and the
          IIP team for an Albuquerque Isotopes game — on us.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="tel:5058961348" className="btn-primary">Call to Reserve — (505) 896-1348</a>
          <Link href="/contact" className="btn-secondary">Send a Message</Link>
        </div>
        <p className="text-nav fv-nav text-secondary mt-4">
          Space is limited — call early to secure your spot.
        </p>
      </section>

      {/* ── Game dates ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-nav fv-nav text-secondary uppercase tracking-widest mb-2">
            2026 Schedule
          </p>
          <h2 className="text-section fv-body-bold font-bold text-black mb-2">
            Game dates &amp; details.
          </h2>
          <p className="text-body fv-body text-secondary mb-12">
            Rio Grande Credit Union Field at Isotopes Park &nbsp;·&nbsp; 1601
            Avenida Cesar Chavez SE, Albuquerque, NM 87106
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {games.map(({ date, day, status }) => (
              <div key={date} className="bg-white p-8 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/isotopes-ball.png"
                    alt="Albuquerque Isotopes"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="text-nav fv-nav px-2.5 py-1 rounded-full bg-muted text-secondary text-xs">
                    {status}
                  </span>
                </div>
                <div>
                  <p className="text-card-h fv-body-semi font-semibold text-black">{date}</p>
                  <p className="text-nav fv-nav text-secondary mt-0.5">{day}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-nav fv-nav text-secondary">
                    Rio Grande Credit Union Field
                  </p>
                  <p className="text-nav fv-nav text-secondary">at Isotopes Park</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to attend ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-section fv-body-bold font-bold text-black mb-2">
            Three easy steps.
          </h2>
          <p className="text-body-lg fv-body text-secondary mb-12">
            Reserving your spot takes two minutes.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="bg-white p-8 flex flex-col gap-4">
                <span className="text-nav fv-nav text-secondary">{number}</span>
                <h3 className="text-card-h fv-body-semi font-semibold text-black">{title}</h3>
                <p className="text-body fv-body text-secondary leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-border py-20 px-6 text-center">
        <h2 className="text-section fv-body-bold font-bold text-black">
          Ready to reserve your spot?
        </h2>
        <p className="text-body-lg fv-body text-secondary mt-3 max-w-sm mx-auto">
          Call the office to claim your tickets. These events fill up fast —
          don&rsquo;t wait.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="tel:5058961348" className="btn-primary">(505) 896-1348</a>
          <Link href="/contact" className="btn-secondary">Send Us a Message</Link>
        </div>
      </section>
    </div>
  );
}
