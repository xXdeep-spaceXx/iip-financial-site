import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Innovative Investment Professionals",
  description:
    "Contact Innovative Investment Professionals in Rio Rancho, NM. Call (505) 896-1348 or send a message to schedule a free consultation.",
  alternates: { canonical: "https://innovativeinvpro.com/contact" },
  openGraph: {
    url: "https://innovativeinvpro.com/contact",
    title: "Contact | Innovative Investment Professionals",
    description:
      "Contact Innovative Investment Professionals in Rio Rancho, NM. Call (505) 896-1348 or send a message to schedule a free consultation.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
