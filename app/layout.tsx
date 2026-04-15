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

export const metadata: Metadata = {
  title: "Innovative Investment Professionals | Retirement Planning in Rio Rancho, NM",
  description:
    "Retirement planning, annuities, and life insurance for New Mexico families since 1996. Serving Albuquerque and Rio Rancho, NM.",
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
      <body className="bg-bg text-ink" suppressHydrationWarning>
        <Topbar />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
