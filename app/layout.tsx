import type React from "react"
import type { Metadata } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "wavy - Interactive Wave Field",
  description:
    "An interactive wave field visualization built with Next.js and Canvas. Move your mouse to create mesmerizing wave patterns.",
  generator: "v0.app",
  keywords: ["interactive", "waves", "canvas", "visualization", "animation", "nextjs"],
  authors: [{ name: "wavy" }],
  creator: "wavy",
  publisher: "wavy",
  metadataBase: new URL("https://wavy.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "wavy - Interactive Wave Field",
    description:
      "An interactive wave field visualization built with Next.js and Canvas. Move your mouse to create mesmerizing wave patterns.",
    url: "https://wavy.vercel.app",
    siteName: "wavy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "wavy - Interactive Wave Field",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wavy - Interactive Wave Field",
    description:
      "An interactive wave field visualization built with Next.js and Canvas. Move your mouse to create mesmerizing wave patterns.",
    images: ["/twitter-card.jpg"],
    creator: "@wavy",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon-192.jpg", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${interTight.style.fontFamily};
  --font-sans: ${interTight.style.fontFamily};
}
        `}</style>
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={interTight.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
