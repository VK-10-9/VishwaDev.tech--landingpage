import { ArrowRight, Globe, Star, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gallery6 } from "@/components/ui/gallery6"
import { Separator } from "@/components/ui/separator"
import Footer4Col from "@/components/ui/footer-column"
import Link from "next/link"

// Import refactored components and data
import { StatsSection } from "@/src/components/sections/StatsSection"
import { FeaturedProjectsSection } from "@/src/components/sections/FeaturedProjectsSection"
import { featuredProjects, galleryProjects } from "@/src/constants/projects"
import { stats, nex10Stats } from "@/src/constants/stats"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Clean, Modern Design */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-muted border rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-primary font-semibold text-xs sm:text-sm">Empowering Student Innovation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Where Student
              <br />
              <span className="text-primary">Innovation Meets</span>
              <br />
              Industry Recognition
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
              Transform your academic projects into career-launching opportunities. Join a thriving community of student developers and get the visibility you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
              <Button size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto" asChild>
                <Link href="/projects">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button variant="neutral" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto" asChild>
                <Link href="/subdomain">
                  Request Subdomain
                </Link>
              </Button>
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl font-mono bg-muted px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-block max-w-full overflow-hidden">
              <span className="text-primary">yourname</span><span className="hidden sm:inline">.vishwadev.tech</span>
              <span className="sm:hidden block text-sm mt-1">.vishwadev.tech</span>
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
              Empowering the Next Generation of Developers
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
              VishwaDev bridges the gap between student innovation and industry recognition. Our platform provides the
              tools, community, and visibility needed to transform academic projects into career-launching
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 p-1">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Project Showcase</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base">
                  Display your projects with beautiful layouts, detailed documentation, and direct links to live demos
                  and repositories.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 p-1">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Developer Community</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base">
                  Connect with like-minded developers, collaborate on projects, and learn from peers across universities
                  and disciplines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 p-1">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Personal Branding</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base">
                  Get your own subdomain (name.vishwadev.tech) to create a professional online presence that stands out
                  to recruiters.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Gallery Section - Featured Student Projects */}
      <Gallery6 heading="Innovative Student Projects" demoUrl="/projects" items={galleryProjects} />

      <Separator className="my-8" />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection projects={featuredProjects} />

      <Separator className="my-8" />

      {/* Nex10 Labs Section */}
      <section id="nex10" className="py-16 sm:py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-primary font-semibold text-xs sm:text-sm">Nex10 Labs Initiative</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              From Student Project to
              <span className="text-primary">
                {" "}
                Startup Success
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
              Nex10 Labs is our exclusive incubation program that identifies promising student projects and provides
              mentorship, resources, and funding opportunities to transform them into viable startups. Join the next
              generation of tech entrepreneurs.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Card className="hover:shadow-lg transition-all duration-300 p-1">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Expert Mentorship</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base">Connect with industry veterans and successful entrepreneurs</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 p-1">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Funding Support</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base">Access to seed funding and investor networks</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 p-1 sm:col-span-2 md:col-span-1">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Global Network</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base">Join a worldwide community of student entrepreneurs</CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
              <Button
                variant="default"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                asChild
              >
                <Link href="/nex10/apply">
                  Apply to Nex10 Labs
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button
                variant="neutral"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                asChild
              >
                <Link href="/nex10">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {nex10Stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
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
