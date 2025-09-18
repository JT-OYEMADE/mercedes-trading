import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.scss";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mercedestrading.com"),
  title: {
    default: "Mercedes Trading - Unlocking Africa's Richest Resources",
    template: "%s | Mercedes Trading",
  },
  description:
    "Mercedes Trading specializes in unlocking Africa's richest natural resources through sustainable trading partnerships. Discover premium African commodities and ethical sourcing solutions.",
  keywords: [
    "African trading",
    "natural resources",
    "commodities trading",
    "African exports",
    "sustainable trading",
    "resource extraction",
    "African minerals",
    "international trade",
    "Mercedes Trading",
  ],
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["/favicon.ico"],
  },
  authors: [{ name: "Mercedes Trading" }],
  creator: "Mercedes Trading",
  publisher: "Mercedes Trading",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercedestrading.com",
    title: "Mercedes Trading - Unlocking Africa's Richest Resources",
    description:
      "Mercedes Trading specializes in unlocking Africa's richest natural resources through sustainable trading partnerships. Discover premium African commodities and ethical sourcing solutions.",
    siteName: "Mercedes Trading",
    images: [
      {
        url: "/images/mercedes-blue-logo.svg",
        width: 1200,
        height: 630,
        alt: "Mercedes Trading - African Resources Trading Company",
        type: "image/svg+xml",
      },
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mercedes Trading - Unlocking Africa's Resources",
        type: "image/jpeg",
      },
    ],
  },
  alternates: {
    canonical: "https://mercedestrading.com",
    languages: {
      "en-US": "https://mercedestrading.com",
    },
  },
  category: "business",
  classification: "Trading Company",
  other: {
    "geo.region": "Africa",
    "geo.placename": "Africa",
    "business:contact_data:locality": "Africa",
    "business:contact_data:region": "Africa",
    "business:contact_data:country_name": "Multiple African Countries",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/mercedes-blue-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mercedes Trading",
              description: "Unlocking Africa's Richest Resources through sustainable trading partnerships",
              url: "https://mercedestrading.com",
              logo: "https://mercedestrading.com/images/mercedes-blue-logo.svg",
              foundingDate: "2020",
              industry: "Trading",
              areaServed: {
                "@type": "Place",
                name: "Africa",
              },
              knowsAbout: [
                "Natural Resources Trading",
                "African Commodities",
                "Sustainable Trading",
                "Resource Extraction",
                "International Trade",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
