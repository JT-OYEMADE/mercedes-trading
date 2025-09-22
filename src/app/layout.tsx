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
    icon: ["/images/thumbnail.jpg"],
    apple: ["/apple-touch-icon.jpg"],
    shortcut: ["/apple-touch-icon.jpg"],
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
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Mercedes Trading - Africa's fastest growing global trading house",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MERCEDES TRADING | Africa's fastest growing global trading house",
    description: "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
    images: ["/thumbnail.jpg"],
  },
  other: {
    'fb:app_id': '61577912139596',
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
        {/* Facebook App ID */}
        <meta property="fb:app_id" content="61577912139596" />

        {/* OpenGraph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mercedestrading.com" />
        <meta property="og:title" content="MERCEDES TRADING | Africa's fastest growing global trading house" />
        <meta property="og:description" content="MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease." />
        <meta property="og:site_name" content="Mercedes Trading" />
        <meta property="og:locale" content="en_US" />

        {/* Image meta tags */}
        <meta property="og:image" content="https://mercedestrading.com/thumbnail.jpg" />
        <meta property="og:image:url" content="https://mercedestrading.com/thumbnail.jpg" />
        <meta property="og:image:secure_url" content="https://mercedestrading.com/thumbnail.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Mercedes Trading - Africa's fastest growing global trading house" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mercedestrading" />
        <meta name="twitter:creator" content="@mercedestrading" />
        <meta name="twitter:title" content="MERCEDES TRADING | Africa's fastest growing global trading house" />
        <meta name="twitter:description" content="MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease." />
        <meta name="twitter:image" content="https://mercedestrading.com/thumbnail.jpg" />
        <meta name="twitter:image:alt" content="Mercedes Trading - Africa's fastest growing global trading house" />

        {/* Additional meta tags for better sharing */}
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  )
}