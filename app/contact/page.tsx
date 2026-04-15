"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section className="page-hero pt-44 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[rgba(255,255,255,0.7)] mb-4">Contact</p>
          <h1 className="hero-title text-white leading-tight">Get in touch.</h1>
          <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 max-w-xl mx-auto leading-snug">
            No forms that feel like tax filings. Just tell us where you&rsquo;re at
            — we&rsquo;ll take it from there.
          </p>
        </div>
      </section>

      {/* ── Contact info + form ── */}
      <section className="section-border py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Left — contact details */}
          <div>
            <h2 className="section-title mb-8">Let&rsquo;s talk.</h2>
            <div className="space-y-px bg-[var(--border)] rounded-2xl overflow-hidden">
              <div className="bg-bg p-6">
                <p className="text-nav fv-nav text-ink3 mb-1">Phone</p>
                <a
                  href="tel:5058961348"
                  className="text-card-h fv-body-semi font-semibold text-ink hover:text-accent transition-colors underline-offset-2"
                >
                  (505) 896-1348
                </a>
                <p className="text-nav fv-nav text-ink3 mt-1">Call during business hours — we pick up</p>
              </div>
              <div className="bg-bg p-6">
                <p className="text-nav fv-nav text-ink3 mb-1">Email</p>
                <a
                  href="mailto:crael@iip.services"
                  className="text-card-h fv-body-semi font-semibold text-ink hover:text-accent transition-colors underline-offset-2"
                >
                  crael@iip.services
                </a>
                <p className="text-nav fv-nav text-ink3 mt-1">We respond within one business day</p>
              </div>
              <div className="bg-bg p-6">
                <p className="text-nav fv-nav text-ink3 mb-1">Office</p>
                <p className="text-card-h fv-body-semi font-semibold text-ink">
                  Rio Rancho &amp; Albuquerque, NM
                </p>
                <a
                  href="https://maps.google.com/?q=4101+Barbara+Loop+SE+Ste+B+Rio+Rancho+NM+87124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav fv-nav text-ink3 mt-1 block hover:text-accent transition-colors"
                >
                  4101 Barbara Loop SE Ste B, Rio Rancho, NM 87124 →
                </a>
              </div>
              <div className="bg-bg p-6">
                <p className="text-nav fv-nav text-ink3 mb-1">Hours</p>
                <p className="text-card-h fv-body-semi font-semibold text-ink">Monday – Friday</p>
                <p className="text-nav fv-nav text-ink3 mt-1">9:00 AM – 5:00 PM MT</p>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            <h2 className="section-title mb-8">Start the conversation.</h2>

            {submitted ? (
              <div className="iip-card p-10 text-center">
                <p className="text-card-h fv-body-semi font-semibold text-ink mb-2">We got it!</p>
                <p className="text-body fv-body body-text leading-snug">
                  Expect to hear from us within one business day. In the meantime,
                  feel free to call us at{" "}
                  <a href="tel:5058961348" className="text-accent underline underline-offset-2">
                    (505) 896-1348
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-nav fv-nav text-ink3 mb-1.5">First name</label>
                    <input
                      type="text"
                      required
                      className="contact-input"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-nav fv-nav text-ink3 mb-1.5">Last name</label>
                    <input
                      type="text"
                      required
                      className="contact-input"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-nav fv-nav text-ink3 mb-1.5">Phone number</label>
                  <input
                    type="tel"
                    className="contact-input"
                    placeholder="(505) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-nav fv-nav text-ink3 mb-1.5">Email address</label>
                  <input
                    type="email"
                    required
                    className="contact-input"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-nav fv-nav text-ink3 mb-1.5">
                    What&rsquo;s on your mind?
                  </label>
                  <textarea
                    rows={4}
                    className="contact-input resize-none"
                    placeholder="Tell us where you're at — retirement timeline, questions, anything."
                  />
                </div>
                <p className="text-nav fv-nav text-ink3">
                  We&rsquo;ll never share your information or add you to a list without asking first.
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
      <section className="section-border py-20 px-6 bg-bg2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Prefer to learn in person?</h2>
          <p className="text-body-lg body-text mt-3 max-w-md mx-auto">
            Attend one of our free educational seminars — with a complimentary
            gourmet meal and zero obligation.
          </p>
          <div className="mt-8">
            <Link href="/seminars" className="btn-primary">See Upcoming Seminars</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
