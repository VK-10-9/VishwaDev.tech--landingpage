import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import Header1 from "@/components/ui/header"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VishwaDev - Where Student Innovation Meets the World",
  description:
    "The premier platform for student developers to showcase groundbreaking projects, build meaningful connections, and launch their tech careers with personalized branding.",
  generator: 'vishwadev.tech',
  authors: [{ name: "Disha Raikar", url: "https://disha.vishwadev.tech" },
            { name: "Vishwanath K.", url: "https://vk.vishwadev.tech" } ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Header1 />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
