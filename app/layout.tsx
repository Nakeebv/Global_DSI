import type React from "react"
import type { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "DAMCO SPACE INC - Software Development & AI Solutions",
  description:
    "Professional software development services including SaaS, MVP development, and AI automation solutions by DAMCO SPACE INC.",
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/images/favicon.ico", sizes: "96x96", type: "image/x-icon" },
      { url: "/images/favicon.ico", sizes: "192x192", type: "image/x-icon" },
    ],
    apple: [
      { url: "/images/favicon.ico", sizes: "180x180", type: "image/x-icon" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
