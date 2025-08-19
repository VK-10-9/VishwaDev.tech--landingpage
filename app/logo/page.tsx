"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Download, Palette, Settings } from "lucide-react"

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button variant="neutral" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/vishwa-logo.jpg"
                alt="VishwaDev Logo"
                width={120}
                height={120}
                className="rounded-xl bg-white"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              VishwaDev
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}
