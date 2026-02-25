import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://web-test-two-lovat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tve jmeno | Web developer",
    template: "%s | Tve jmeno",
  },
  description:
    "Moderni osobni portfolio s ukazkami projektu, profilem a kontaktem.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: "Tve jmeno - portfolio",
    title: "Tve jmeno | Web developer",
    description:
      "Moderni osobni portfolio s ukazkami projektu, profilem a kontaktem.",
    images: [
      {
        url: "/profile-photo.svg",
        width: 900,
        height: 720,
        alt: "Nahled portfolio webu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tve jmeno | Web developer",
    description:
      "Moderni osobni portfolio s ukazkami projektu, profilem a kontaktem.",
    images: ["/profile-photo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
