import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Inter, Cairo } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import SmoothScroll from "@/components/smooth-scroll"
import Preloader from "@/components/preloader"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yahyademeriah.com"),
  title: "Yahya Demeriah | Robotics & AI Engineer",
  description:
    "Eng. Yahya Demeriah — Robotics & AI Engineer, founder and mentor from Damascus, Syria. CEO of Robotronics, founder of 3D Titans and Eyronix. Award-winning innovator in robotics, AI, IoT and 3D printing.",
  keywords: [
    "Yahya Demeriah",
    "Robotics Engineer",
    "AI Engineer",
    "Damascus",
    "Syria",
    "Robotronics",
    "3D Titans",
    "Eyronix",
    "Computer Vision",
    "Embedded Systems",
  ],
  authors: [{ name: "Yahya Demeriah" }],
  openGraph: {
    title: "Yahya Demeriah | Robotics & AI Engineer",
    description:
      "Robotics & AI Engineer, founder and mentor from Damascus, Syria — building practical, production-ready systems.",
    url: "https://yahyademeriah.com",
    siteName: "Yahya Demeriah",
    type: "website",
  },
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <Preloader />
            <SmoothScroll>{children}</SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
