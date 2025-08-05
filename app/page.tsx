import { ArrowRight, Globe, Star, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gallery6 } from "@/components/ui/gallery6"
import Header1 from "@/components/ui/header"
import Footer4Col from "@/components/ui/footer-column"

// Import refactored components and data
import { StatsSection } from "@/src/components/sections/StatsSection"
import { FeaturedProjectsSection } from "@/src/components/sections/FeaturedProjectsSection"
import { featuredProjects, galleryProjects } from "@/src/constants/projects"
import { stats, nex10Stats } from "@/src/constants/stats"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <Header1 />

      {/* Hero Section - Clean, Modern Design */}
      <section className="py-20 lg:py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-muted border rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Empowering Student Innovation</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Where Student
              <br />
              <span className="text-primary">Innovation Meets</span>
              <br />
              Industry Recognition
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your academic projects into career-launching opportunities. Join a thriving community of student developers and get the visibility you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="neutral" size="lg" className="px-8 py-4 text-lg">
                Request Subdomain
              </Button>
            </div>
            <div className="text-2xl font-mono bg-muted px-6 py-3 rounded-lg inline-block">
              <span className="text-primary">yourname</span>.vishwadev.tech
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering the Next Generation of Developers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              VishwaDev bridges the gap between student innovation and industry recognition. Our platform provides the
              tools, community, and visibility needed to transform academic projects into career-launching
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Project Showcase</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Display your projects with beautiful layouts, detailed documentation, and direct links to live demos
                  and repositories.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Developer Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with like-minded developers, collaborate on projects, and learn from peers across universities
                  and disciplines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Personal Branding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get your own subdomain (name.vishwadev.tech) to create a professional online presence that stands out
                  to recruiters.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section - Featured Student Projects */}
      <Gallery6 heading="Innovative Student Projects" demoUrl="/projects" items={galleryProjects} />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection projects={featuredProjects} />

      {/* Nex10 Labs Section */}
      <section id="nex10" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Nex10 Labs Initiative</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              From Student Project to
              <span className="text-primary">
                {" "}
                Startup Success
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Nex10 Labs is our exclusive incubation program that identifies promising student projects and provides
              mentorship, resources, and funding opportunities to transform them into viable startups. Join the next
              generation of tech entrepreneurs.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Expert Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Connect with industry veterans and successful entrepreneurs</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Funding Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Access to seed funding and investor networks</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Global Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Join a worldwide community of student entrepreneurs</CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="px-8 py-4 text-lg font-semibold"
              >
                Apply to Nex10 Labs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="neutral"
                size="lg"
                className="px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Success Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {nex10Stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30 border-y">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Showcase Your Innovation?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of student developers who are building the future. Get your personalized subdomain and start
            sharing your projects with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="px-8 py-3"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="neutral"
              size="lg"
              className="px-8 py-3"
            >
              Request Subdomain
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer4Col />
    </div>
  )
}
