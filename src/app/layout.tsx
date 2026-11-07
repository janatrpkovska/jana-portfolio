import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://jana-portfolio-sigma.vercel.app";
const title = "Jana Trpkovska вЂ” Junior Full-Stack Developer";
const description =
  "Creative developer building full-stack web applications across frontend, server logic and databases, and integrating AI where it helps. Selected projects: Lit Candle, Evidence AI, OpenDataScope, Mona Mayhem, RoadWatch.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Jana Trpkovska вЂ” Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased selection:bg-accent-soft/40 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
