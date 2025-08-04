import { ArrowRight, Globe, Star, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gallery6 } from "@/components/ui/gallery6"
import Header1 from "@/components/ui/header"
import { HeroSection } from "@/components/ui/galaxy-interactive-hero-section"
import Footer4Col from "@/components/ui/footer-column"

// Import refactored components and data
import { StatsSection } from "@/src/components/sections/StatsSection"
import { FeaturedProjectsSection } from "@/src/components/sections/FeaturedProjectsSection"
import { featuredProjects, galleryProjects } from "@/src/constants/projects"
import { stats, nex10Stats } from "@/src/constants/stats"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Navigation */}
      <Header1 />

      {/* Galaxy Interactive Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Introduction Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Empowering the Next Generation of Developers
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              VishwaDev bridges the gap between student innovation and industry recognition. Our platform provides the
              tools, community, and visibility needed to transform academic projects into career-launching
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Project Showcase</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  Display your projects with beautiful layouts, detailed documentation, and direct links to live demos
                  and repositories.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Developer Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  Connect with like-minded developers, collaborate on projects, and learn from peers across universities
                  and disciplines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Personal Branding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
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
      <section id="nex10" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-md">
              <Star className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm">Nex10 Labs Initiative</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              From Student Project to
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Startup Success
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto">
              Nex10 Labs is our exclusive incubation program that identifies promising student projects and provides
              mentorship, resources, and funding opportunities to transform them into viable startups. Join the next
              generation of tech entrepreneurs.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Expert Mentorship</h3>
                <p className="text-white/60 text-sm">Connect with industry veterans and successful entrepreneurs</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Funding Support</h3>
                <p className="text-white/60 text-sm">Access to seed funding and investor networks</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Global Network</h3>
                <p className="text-white/60 text-sm">Join a worldwide community of student entrepreneurs</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold backdrop-blur-md border border-blue-500/30"
              >
                Apply to Nex10 Labs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-md"
              >
                Learn More
              </Button>
            </div>

            {/* Success Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {nex10Stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative border-y border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-md"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Showcase Your Innovation?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of student developers who are building the future. Get your personalized subdomain and start
            sharing your projects with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-3 backdrop-blur-md"
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
