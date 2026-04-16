import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const BASE_URL = "https://innovativeinvpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Innovative Investment Professionals | Retirement Planning in Rio Rancho, NM",
    template: "%s | Innovative Investment Professionals",
  },
  description:
    "Retirement planning, annuities, and life insurance for New Mexico families since 1996. Serving Albuquerque and Rio Rancho, NM.",
  openGraph: {
    type: "website",
    siteName: "Innovative Investment Professionals",
    locale: "en_US",
    url: BASE_URL,
    title: "Innovative Investment Professionals | Retirement Planning in Rio Rancho, NM",
    description:
      "Retirement planning, annuities, and life insurance for New Mexico families since 1996. Serving Albuquerque and Rio Rancho, NM.",
    images: [
      {
        url: "/assets/Grandparents-granddaughter-walking-on-beach-winter-retirement.jpg",
        width: 1200,
        height: 630,
        alt: "Innovative Investment Professionals — Retirement Planning in Rio Rancho, NM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Investment Professionals | Retirement Planning in Rio Rancho, NM",
    description:
      "Retirement planning, annuities, and life insurance for New Mexico families since 1996. Serving Albuquerque and Rio Rancho, NM.",
    images: ["/assets/Grandparents-granddaughter-walking-on-beach-winter-retirement.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialPlanningService",
  name: "Innovative Investment Professionals",
  url: BASE_URL,
  telephone: "+15058961348",
  email: "crael@iip.services",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4101 Barbara Loop SE Ste B",
    addressLocality: "Rio Rancho",
    addressRegion: "NM",
    postalCode: "87124",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.2333,
    longitude: -106.6625,
  },
  openingHours: "Mo-Fr 09:00-17:00",
  priceRange: "$$",
  description:
    "Retirement planning, annuities, and life insurance for New Mexico families since 1996.",
  foundingDate: "1996",
  areaServed: [
    { "@type": "City", name: "Rio Rancho", containedInPlace: { "@type": "State", name: "New Mexico" } },
    { "@type": "City", name: "Albuquerque", containedInPlace: { "@type": "State", name: "New Mexico" } },
  ],
  sameAs: [
    "https://www.bbb.org/us/nm/albuquerque/profile/financial-planning/innovative-investment-professionals-1096-90082",
    "https://brokercheck.finra.org/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retirement Planning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annuities" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Life Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Educational Seminars" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-bg text-ink" suppressHydrationWarning>
        <Topbar />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
