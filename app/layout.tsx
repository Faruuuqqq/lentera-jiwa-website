import type React from "react"
import type { Metadata } from "next"
import { Lora, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "Lentera Jiwa - Ruang Aman Anti-Perundungan",
  description:
    "Ruang aman untuk edukasi, pencegahan, dan penanganan perundungan (anti-bullying) dari Lentera Jiwa.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${lora.variable} antialiased bg-[#FFFDF9] text-[#2c3e50] relative min-h-screen font-sans`}>
        {/* SVG Noise Grain Overlay */}
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-multiply">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
