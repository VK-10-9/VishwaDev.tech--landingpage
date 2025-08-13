"use client"

import DotLogo from "@/components/ui/dot-logo"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              VishwaDev Dot Logo
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A beautiful dot-matrix logo component inspired by modern design aesthetics. 
              Perfect for creating stunning visual identity elements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Logo Display */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <DotLogo 
              text="VishwaDev"
              width={1200}
              height={300}
              dotRadius={6}
              gridGap={16}
              fillColor="#F2F0E6"
              bgColor="#0E0E0E"
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight={900}
              letterSpacing={0.1}
            />
          </div>
        </div>
      </section>

      {/* Variations */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Logo Variations</h2>
            
            <div className="grid gap-8 mb-8">
              {/* Compact Version */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Compact Version
                  </CardTitle>
                  <CardDescription>
                    Smaller, denser dots for compact layouts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DotLogo 
                    text="VishwaDev"
                    width={800}
                    height={200}
                    dotRadius={4}
                    gridGap={12}
                    fillColor="#E5E7EB"
                    bgColor="#1F2937"
                    fontWeight={800}
                  />
                </CardContent>
              </Card>

              {/* Colorful Version */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Colorful Version
                  </CardTitle>
                  <CardDescription>
                    Bright colors for dynamic presentations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DotLogo 
                    text="VishwaDev"
                    width={1000}
                    height={250}
                    dotRadius={5}
                    gridGap={14}
                    fillColor="#3B82F6"
                    bgColor="#F8FAFC"
                    fontWeight={900}
                    letterSpacing={0.05}
                  />
                </CardContent>
              </Card>

              {/* Large Dots Version */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Large Dots Version
                  </CardTitle>
                  <CardDescription>
                    Bold, large dots for maximum impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DotLogo 
                    text="VishwaDev"
                    width={1100}
                    height={280}
                    dotRadius={9}
                    gridGap={22}
                    fillColor="#F59E0B"
                    bgColor="#0F172A"
                    fontWeight={900}
                    letterSpacing={0.2}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Information */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How to Use</CardTitle>
                <CardDescription>
                  Simple props-based configuration for endless customization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Basic Usage:</h4>
                  <code className="text-sm">
                    {`<DotLogo text="YourText" width={1200} height={300} />`}
                  </code>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Visual Props:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• <code>dotRadius</code> - Size of each dot</li>
                      <li>• <code>gridGap</code> - Spacing between dots</li>
                      <li>• <code>fillColor</code> - Color of the dots</li>
                      <li>• <code>bgColor</code> - Background color</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Typography Props:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• <code>fontFamily</code> - Font for the text</li>
                      <li>• <code>fontWeight</code> - Bold/thickness</li>
                      <li>• <code>letterSpacing</code> - Space between letters</li>
                      <li>• <code>text</code> - The text to display</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-900">💡 Pro Tip:</h4>
                  <p className="text-blue-800 text-sm">
                    Each logo instance includes a download button to export the SVG. 
                    Perfect for creating brand assets, social media graphics, or print materials.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
