import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.scss"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  metadataBase: new URL('https://mercedestrading.com'),
  title: {
    default: "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
    template: "%s | MERCEDES TRADING",
  },
  description: "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
  icons: {
    icon: ["/images/thumbnail.png"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercedestrading.com",
    siteName: "Mercedes Trading",
    title: "MERCEDES TRADING | Africa's fastest growing global trading house",
    description: "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Mercedes Trading - Africa's fastest growing global trading house",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MERCEDES TRADING | Africa's fastest growing global trading house",
    description: "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
    images: ["/thumbnail.png"],
    creator: "@mercedestrading",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification if you have it
    // google: "your-verification-code",
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
        {/* Additional explicit meta tags for WhatsApp */}
        <meta property="og:image" content="https://mercedestrading.com/thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Mercedes Trading - Africa's fastest growing global trading house" />
        <meta name="twitter:image" content="https://mercedestrading.com/thumbnail.jpg" />
        <meta name="twitter:image:alt" content="Mercedes Trading - Africa's fastest growing global trading house" />

        {/* Additional cache control for social media crawlers */}
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  )
}