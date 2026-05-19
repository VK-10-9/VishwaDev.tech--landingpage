// Next.js imports
import Link from "next/link"

// UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gallery6 } from "@/components/ui/gallery6"
import Footer4Col from "@/components/ui/footer-column"

// Icons
import { ArrowRight, Globe, Star, Users, Zap } from "lucide-react"

// Custom components and data
import { StatsSection } from "@/src/components/sections/StatsSection"
import { FeaturedProjectsSection } from "@/src/components/sections/FeaturedProjectsSection"
import { featuredProjects, galleryProjects } from "@/src/constants/projects"
import { stats } from "@/src/constants/stats"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Clean, Brutalist Design */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white border-2 border-border rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 shadow-sm">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-text" />
              <span className="text-text font-bold text-xs sm:text-sm">A Small But Mighty Dev Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tight text-foreground">
              Where Quality Code
              <br />
              Meets Passionate
              <br />
              Developers
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
              We are an exclusive, tight-knit community of 15 passionate developers building innovative solutions. Quality over quantity, always.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
              <Button variant="default" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold w-full sm:w-auto" asChild>
                <Link href="/projects">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button variant="neutral" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold w-full sm:w-auto" asChild>
                <Link href="/subdomain">
                  Request Subdomain
                </Link>
              </Button>
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl font-mono bg-neutral-100 border-2 border-border px-6 py-3 rounded-lg inline-block max-w-full overflow-hidden">
              <span className="text-foreground">code.vishwadev.tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              An Exclusive Hub for Dedicated Developers
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
              VishwaDev is an intimate, tight-knit community of 15 dedicated developers. We believe in crafting exceptional software together, learning from each other, and pushing the boundaries of what a small, focused team can achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-[1.01] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:border-black rounded-xl p-5 flex flex-col justify-between h-full">
              <CardHeader className="p-0 pb-4">
                <div className="w-12 h-12 bg-[#ffde47] border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-xl font-bold">Project Showcase</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                  Display your projects with beautiful layouts, detailed documentation, and direct links to live demos and repositories.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-[1.01] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:border-black rounded-xl p-5 flex flex-col justify-between h-full">
              <CardHeader className="p-0 pb-4">
                <div className="w-12 h-12 bg-[#a3e635] border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-xl font-bold">Developer Community</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                  Connect with like-minded developers, collaborate on projects, and learn from peers across universities and disciplines.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-[1.01] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:border-black rounded-xl p-5 flex flex-col justify-between h-full">
              <CardHeader className="p-0 pb-4">
                <div className="w-12 h-12 bg-[#ec4899] border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] text-white">
                  <Zap className="w-6 h-6 text-white fill-current" />
                </div>
                <CardTitle className="text-xl font-bold">Personal Branding</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                  Get your own subdomain (name.vishwadev.tech) to create a professional online presence that stands out to recruiters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section - Featured Student Projects */}
      <Gallery6 heading="Our Handcrafted Projects" demoUrl="/projects" items={galleryProjects} />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection projects={featuredProjects} />

      {/* VishwaDev Labs Section */}
      <section id="nex10" className="py-16 sm:py-20 px-4 border-t-2 border-border bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white border-2 border-border rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 shadow-sm">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-text" />
              <span className="text-text font-bold text-xs sm:text-sm">VishwaDev Labs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 leading-tight tracking-tight text-foreground">
              Custom Tech Solutions for
              <span> Your Business</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
              VishwaDev Labs is a platform and SaaS company that builds custom tech solutions for clients. We deliver web apps, AI/ML, automation, mobile apps, and more—fast, reliably, and with full support. Partner with us to accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
              <Button
                variant="default"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold w-full sm:w-auto"
                asChild
              >
                <Link href="/nex10">
                  Explore VishwaDev Labs
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button
                variant="neutral"
                size="lg"
                className="px-6 sm:px-8 py-3 text-base sm:text-lg font-bold w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-muted/30 border-y">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Showcase Your Innovation?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join thousands of student developers who are building the future. Get your personalized subdomain and start
            sharing your projects with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              variant="default"
              size="lg"
              className="px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
              asChild
            >
              <Link href="/projects">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button
              variant="neutral"
              size="lg"
              className="px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
              asChild
            >
              <Link href="/subdomain">
                Request Subdomain
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer4Col />
    </div>
  )
}
