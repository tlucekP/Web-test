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
    default: "Peter Tlučhoř | Technologický nadšenec a obchodník",
    template: "%s | Peter Tlučhoř",
  },
  description:
    "Směr určuje obchod. Technologie ho umožňují. Osobní portfolio Petera Tlučhoře.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: "Peter Tlučhoř - portfolio",
    title: "Peter Tlučhoř | Technologický nadšenec a obchodník",
    description:
      "Směr určuje obchod. Technologie ho umožňují. Osobní portfolio Petera Tlučhoře.",
    images: [
      {
        url: "/profile-photo.svg",
        width: 900,
        height: 720,
        alt: "Náhled portfolio webu",
      },
    ],
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
