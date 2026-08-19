import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#111214",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Saksham Chauhan — Product Engineer & Founder",
  description:
    "Product Engineer at OmniDimension, ex-Spyne, Founder of Ajnabee. Building voice AI agents, LLM workflows, and shipped full-stack products.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${interTight.variable} ${spaceMono.variable} font-sans antialiased grain-overlay`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
