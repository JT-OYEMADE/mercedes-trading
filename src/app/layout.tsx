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
    icon: ["/favicon.ico"],
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
    title: "MERCEDES TRADING | Africa's fastest growing global trading house.",
    description:
      "MERCEDES TRADING | Africa's fastest growing global trading house | Powering African Exports with ease.",
    url: "https://mercedestrading.com",
    siteName: "Mercedes Trading",
    images: [
      {
        url: "https://mercedestrading.com/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Mercedes Trading - Africa's fastest growing global trading house",
      },
    ],
    locale: "en_US",
    type: "website",
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
