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
    default: "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
    template: "%s | MERCEDES TRADING",
  },
  description:
    "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
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
    title: "MERCEDES TRADING | Africa's fastest growing global trading house.",
    description: "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
    url: "https://mercedestrading.com",
    siteName: "Mercedes Trading",
    images: [
      {
        url: "https://mercedestrading.com/thumbnail.png", // must be absolute URL
        width: 1200,
        height: 630,
        alt: "My Website Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
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
