import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ClickToCall } from "@/components/click-to-call";
import { business } from "@/lib/data/business";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://extlighting.com"),
  title: {
    default: "Permanent Exterior LED Lighting Sacramento | EXT Lighting",
    template: "%s | EXT Lighting",
  },
  description:
    "Sacramento's premier permanent exterior LED lighting installation. Transform your home or business with year-round elegance. App-controlled colors, lifetime warranty. Free quotes!",
  keywords: [
    "permanent exterior lighting",
    "LED lighting installation",
    "Sacramento lighting",
    "outdoor lighting",
    "holiday lighting",
    "architectural lighting",
    "landscape lighting",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://extlighting.com",
    siteName: business.name,
    title: "Permanent Exterior LED Lighting Sacramento | EXT Lighting",
    description:
      "Sacramento's premier permanent exterior LED lighting installation. Transform your home or business with year-round elegance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Permanent Exterior LED Lighting Sacramento | EXT Lighting",
    description:
      "Sacramento's premier permanent exterior LED lighting installation. Transform your home or business with year-round elegance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://extlighting.com",
    name: business.name,
    legalName: business.legalName,
    description:
      "Professional permanent exterior LED lighting installation for homes and businesses in the Sacramento region.",
    url: "https://extlighting.com",
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    areaServed: business.serviceArea.counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    priceRange: "$$",
    sameAs: [business.social.facebook, business.social.instagram],
  };

  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ClickToCall variant="floating" />
      </body>
    </html>
  );
}
