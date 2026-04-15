"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form submission handler — wire to your backend or a service like Formspree
    setSubmitted(true);
  }

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
        <p className="text-nav fv-nav text-secondary uppercase tracking-widest mb-4">
          Contact
        </p>
        <h1 className="text-hero fv-body-bold font-bold text-black leading-tight">
          Get in touch.
        </h1>
        <p className="text-body-lg fv-body text-secondary mt-6 max-w-xl mx-auto leading-snug">
          No forms that feel like tax filings. Just tell us where you&rsquo;re at
          — we&rsquo;ll take it from there.
        </p>
      </section>

      {/* ── Contact info + form ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Left — contact details */}
          <div>
            <h2 className="text-section fv-body-bold font-bold text-black mb-8">
              Let&rsquo;s talk.
            </h2>
            <div className="space-y-px bg-border rounded-2xl overflow-hidden">
              <div className="bg-white p-6">
                <p className="text-nav fv-nav text-secondary mb-1">Phone</p>
                <a
                  href="tel:5058961348"
                  className="text-card-h fv-body-semi font-semibold text-black hover:underline underline-offset-2"
                >
                  (505) 896-1348
                </a>
                <p className="text-nav fv-nav text-secondary mt-1">
                  Call during business hours — we pick up
                </p>
              </div>
              <div className="bg-white p-6">
                <p className="text-nav fv-nav text-secondary mb-1">Email</p>
                <a
                  href="mailto:crael@iip.services"
                  className="text-card-h fv-body-semi font-semibold text-black hover:underline underline-offset-2"
                >
                  crael@iip.services
                </a>
                <p className="text-nav fv-nav text-secondary mt-1">
                  We respond within one business day
                </p>
              </div>
              <div className="bg-white p-6">
                <p className="text-nav fv-nav text-secondary mb-1">Office</p>
                <p className="text-card-h fv-body-semi font-semibold text-black">
                  Rio Rancho &amp; Albuquerque, NM
                </p>
                <a
                  href="https://maps.google.com/?q=4101+Barbara+Loop+SE+Ste+B+Rio+Rancho+NM+87124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav fv-nav text-secondary mt-1 block hover:underline underline-offset-2"
                >
                  4101 Barbara Loop SE Ste B, Rio Rancho, NM 87124 →
                </a>
              </div>
              <div className="bg-white p-6">
                <p className="text-nav fv-nav text-secondary mb-1">Hours</p>
                <p className="text-card-h fv-body-semi font-semibold text-black">
                  Monday – Friday
                </p>
                <p className="text-nav fv-nav text-secondary mt-1">9:00 AM – 5:00 PM MT</p>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            <h2 className="text-section fv-body-bold font-bold text-black mb-8">
              Start the conversation.
            </h2>

            {submitted ? (
              <div className="card p-10 text-center">
                <p className="text-card-h fv-body-semi font-semibold text-black mb-2">
                  We got it!
                </p>
                <p className="text-body fv-body text-secondary leading-snug">
                  Expect to hear from us within one business day. In the meantime,
                  feel free to call us at{" "}
                  <a href="tel:5058961348" className="text-black underline">
                    (505) 896-1348
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-nav fv-nav text-secondary mb-1.5">
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl text-body fv-body text-black placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-black"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-nav fv-nav text-secondary mb-1.5">
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl text-body fv-body text-black placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-black"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-nav fv-nav text-secondary mb-1.5">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-xl text-body fv-body text-black placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="(505) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-nav fv-nav text-secondary mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl text-body fv-body text-black placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-nav fv-nav text-secondary mb-1.5">
                    What&rsquo;s on your mind?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-xl text-body fv-body text-black placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-black resize-none"
                    placeholder="Tell us where you're at — retirement timeline, questions, anything."
                  />
                </div>
                <p className="text-nav fv-nav text-secondary">
                  We&rsquo;ll never share your information or add you to a list
                  without asking first.
                </p>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Seminar callout ── */}
      <section className="section-border py-20 px-6 text-center">
        <h2 className="text-section fv-body-bold font-bold text-black">
          Prefer to learn in person?
        </h2>
        <p className="text-body-lg fv-body text-secondary mt-3 max-w-md mx-auto">
          Attend one of our free educational seminars — with a complimentary
          gourmet meal and zero obligation.
        </p>
        <div className="mt-8">
          <Link href="/seminars" className="btn-primary">See Upcoming Seminars</Link>
        </div>
      </section>
    </div>
  );
}
