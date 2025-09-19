import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://mercedestrading.com"),
  title: {
    default: "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
    template: "%s | MERCEDES TRADING",
  },
  description: "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
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
    description:
      "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
    url: "https://mercedestrading.com",
    siteName: "Mercedes Trading",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Mercedes Trading - Africa's fastest growing global trading house",
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
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
