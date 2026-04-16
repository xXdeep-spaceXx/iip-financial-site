import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Innovative Investment Professionals",
  description:
    "Terms and conditions for Innovative Investment Professionals, including SMS communications consent and opt-out information.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="page-hero pt-44 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[rgba(255,255,255,0.7)] mb-4">Legal</p>
          <h1 className="hero-title text-white leading-tight">Terms &amp; Conditions</h1>
        </div>
      </section>

      <section className="section-border py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-5 text-body fv-body body-text leading-relaxed list-disc list-inside">
            <li>
              By contacting us you consent to receiving SMS communications regarding news, events, products, scheduling or office updates.
            </li>
            <li>
              You can cancel the SMS service at any time. Just text &ldquo;STOP&rdquo; to the short code. After you send the SMS message &ldquo;STOP&rdquo; to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
            </li>
            <li>
              If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly by telephoning us.
            </li>
            <li>
              Carriers are not liable for delayed or undelivered messages.
            </li>
            <li>
              As always, message and data rates may apply for any messages sent to you from us and to us from you. The frequency with which we may text you may vary. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
            </li>
            <li>
              If you have any questions regarding privacy, please read our{" "}
              <Link href="/privacy-policy" className="footer-legal-link">privacy policy</Link>.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
