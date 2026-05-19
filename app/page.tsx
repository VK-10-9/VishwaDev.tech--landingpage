import Link from "next/link"
import Image from "next/image"

// UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gallery6 } from "@/components/ui/gallery6"
import Footer4Col from "@/components/ui/footer-column"

// Icons
import { ArrowRight, Globe, Star, Users, Zap, Terminal, Shield, Sparkles, Cpu } from "lucide-react"

// Custom components and data
import { StatsSection } from "@/src/components/sections/StatsSection"
import { FeaturedProjectsSection } from "@/src/components/sections/FeaturedProjectsSection"
import { featuredProjects, galleryProjects } from "@/src/constants/projects"
import { stats } from "@/src/constants/stats"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] text-black antialiased relative overflow-hidden bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px]">
      
      {/* Dynamic Grid Borders for Premium Frame Look */}
      <div className="absolute inset-y-0 left-4 w-px bg-black/10 hidden md:block" />
      <div className="absolute inset-y-0 right-4 w-px bg-black/10 hidden md:block" />
      
      {/* Hero Section - Clean, High-Contrast Neo-Brutalist Design */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            
            {/* Dynamic Floating Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#ffde47] border-[3px] border-black rounded-full px-5 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">
              <Star className="w-5 h-5 text-black fill-current animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-black font-black text-xs sm:text-sm uppercase tracking-wider">A Small But Mighty Dev Team</span>
            </div>

            {/* Brutalist Heading with Highlight Accents */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight text-black">
              WHERE QUALITY <br className="hidden sm:inline" />
              <span className="inline-block bg-[#a3e635] border-[3px] border-black px-4 py-1.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1 transform">
                CODE
              </span> MEETS <br className="hidden sm:inline" />
              <span className="inline-block bg-[#ef4444] text-white border-[3px] border-black px-4 py-1.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1 transform mt-2 sm:mt-0">
                PASSIONATE
              </span>
              <br />
              DEVELOPERS
            </h1>

            <p className="text-lg sm:text-2xl font-bold text-black/70 mb-10 leading-relaxed max-w-3xl mx-auto px-4">
              We are an exclusive, tight-knit collective of <span className="underline decoration-[#ffde47] decoration-[4px] font-black text-black">15 elite developers</span> building handcrafted software. Quality over quantity, always.
            </p>

            {/* Action buttons with Neo-Brutalist solid drop shadows */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4">
              <Button 
                variant="default" 
                size="lg" 
                className="px-8 py-6 text-lg font-black border-[3px] border-black bg-[#a3e635] text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a3e635] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all w-full sm:w-auto" 
                asChild
              >
                <Link href="/projects">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 stroke-[3px]" />
                </Link>
              </Button>
              <Button 
                variant="neutral" 
                size="lg" 
                className="px-8 py-6 text-lg font-black border-[3px] border-black bg-white text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all w-full sm:w-auto" 
                asChild
              >
                <Link href="/subdomain">
                  Request Subdomain
                </Link>
              </Button>
            </div>

            {/* interactive Command Center Mock */}
            <div className="bg-black text-[#a3e635] border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-4 sm:p-5 max-w-2xl mx-auto font-mono text-left relative overflow-hidden group">
              <div className="flex items-center justify-between border-b-2 border-black/35 pb-3 mb-3">
                <div className="flex space-x-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ef4444] border border-black" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#f59e0b] border border-black" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#10b981] border border-black" />
                </div>
                <div className="text-xs font-bold text-neutral-400">vishwadev-core-v1.sh</div>
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="text-neutral-500"># Connect to our global ecosystem</div>
                <div className="flex items-center space-x-2">
                  <span className="text-white">$</span>
                  <span className="text-white font-bold">curl -sL https://vishwadev.tech/connect</span>
                </div>
                <div className="text-white/60">Fetching environment nodes... [OK]</div>
                <div className="text-[#ffde47] font-bold">👉 Active Gateway: code.vishwadev.tech</div>
              </div>
              <div className="absolute right-3 bottom-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Terminal className="w-16 h-16 text-[#a3e635]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section with Solid Borders */}
      <div className="border-y-[3px] border-black bg-white relative z-10 shadow-[0px_4px_16px_rgba(0,0,0,0.05)]">
        <StatsSection stats={stats} />
      </div>

      {/* The Squad Selection Center */}
      <section className="py-20 px-4 bg-[#fbfbfb]">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-[#ef4444] text-white border-[3px] border-black rounded-full px-5 py-2 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black text-xs uppercase tracking-widest">
              <Shield className="w-4 h-4 fill-current" />
              <span>Squad Directory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-5 text-black">
              Explore Our Specialist Squads
            </h2>
            <p className="text-base sm:text-lg font-bold text-black/70 max-w-2xl mx-auto">
              VishwaDev is divided into three agile engineering units, each focusing on specific frontiers of visual excellence and computational power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SASA Squad Card */}
            <Card className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:shadow-[12px_12px_0px_0px_rgba(185,28,28,1)] hover:border-black transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-14 h-14 rounded-lg border-2 border-black bg-[#b91c1c] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    <Image 
                      src="/teams/sasa_logo.png" 
                      alt="SASA Squad Logo" 
                      fill 
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="bg-[#b91c1c] text-white text-[10px] font-black uppercase px-2.5 py-1 border-2 border-black rounded-full shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                    Active
                  </div>
                </div>
                <CardTitle className="text-2xl font-black mb-3 text-black">SASA Squad</CardTitle>
                <p className="text-sm font-bold text-black/60 mb-4 uppercase tracking-wider">Smart Architecture & Structural Analytics</p>
                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                  Focusing on premium cinematic HUD interfaces, structural design software, CAD engine integrations, and high-performance engineering workspaces.
                </p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="neutral" className="w-full font-black border-2 border-black bg-[#b91c1c] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#991b1b] transition-all" asChild>
                  <Link href="/teams/sasa">
                    Enter SASA Lab
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Resonance Squad Card */}
            <Card className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:shadow-[12px_12px_0px_0px_rgba(79,70,229,1)] hover:border-black transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg border-2 border-black bg-[#4f46e5] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-2xl font-black">
                    ⚡
                  </div>
                  <div className="bg-[#4f46e5] text-white text-[10px] font-black uppercase px-2.5 py-1 border-2 border-black rounded-full shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                    Active
                  </div>
                </div>
                <CardTitle className="text-2xl font-black mb-3 text-black">Resonance</CardTitle>
                <p className="text-sm font-bold text-black/60 mb-4 uppercase tracking-wider">Media & Creative Systems</p>
                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                  Pioneering immersive multimedia layouts, audio visualization platforms, smart collaboration channels, and handcrafted portfolio portals.
                </p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="neutral" className="w-full font-black border-2 border-black bg-[#4f46e5] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#4338ca] transition-all" asChild>
                  <Link href="/teams/resonance">
                    Tune In Resonance
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Vidyut Squad Card */}
            <Card className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:shadow-[12px_12px_0px_0px_rgba(217,119,6,1)] hover:border-black transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg border-2 border-black bg-[#d97706] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-2xl font-black">
                    🔮
                  </div>
                  <div className="bg-[#d97706] text-white text-[10px] font-black uppercase px-2.5 py-1 border-2 border-black rounded-full shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                    Active
                  </div>
                </div>
                <CardTitle className="text-2xl font-black mb-3 text-black">Team Vidyut</CardTitle>
                <p className="text-sm font-bold text-black/60 mb-4 uppercase tracking-wider">IoT & Smart Agriculturals</p>
                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                  Building full-stack agricultural monitors, automated smart campuses, real-time sensor networks, and modern embedded utilities.
                </p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="neutral" className="w-full font-black border-2 border-black bg-[#d97706] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#b45309] transition-all" asChild>
                  <Link href="/teams/vidyut">
                    Plug Into Vidyut
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Introduction/Values Section */}
      <section className="py-20 px-4 bg-white border-y-[3px] border-black">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#a3e635] border-[3px] border-black rounded-full px-5 py-2 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black text-xs uppercase tracking-widest text-black">
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Core Values</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-5 text-black">
              An Exclusive Hub for Dedicated Developers
            </h2>
            <p className="text-base sm:text-lg font-bold text-black/70 leading-relaxed">
              VishwaDev is an intimate, tight-knit community of 15 dedicated developers. We believe in crafting exceptional software together, learning from each other, and pushing the boundaries of what a small, focused team can achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl p-6 flex flex-col justify-between h-full group">
              <CardHeader className="p-0 pb-4">
                <div className="w-14 h-14 bg-[#ffde47] border-[3px] border-black rounded-lg flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-3 transition-transform">
                  <Globe className="w-7 h-7 text-black stroke-[2.5px]" />
                </div>
                <CardTitle className="text-2xl font-black text-black">Project Showcase</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <p className="text-sm sm:text-base font-bold text-black/75 leading-relaxed">
                  Display your projects with beautiful layouts, detailed documentation, and direct links to live demos and repositories. Let your engineering speak for itself.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl p-6 flex flex-col justify-between h-full group">
              <CardHeader className="p-0 pb-4">
                <div className="w-14 h-14 bg-[#a3e635] border-[3px] border-black rounded-lg flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-3 transition-transform">
                  <Users className="w-7 h-7 text-black stroke-[2.5px]" />
                </div>
                <CardTitle className="text-2xl font-black text-black">Developer Community</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <p className="text-sm sm:text-base font-bold text-black/75 leading-relaxed">
                  Connect with like-minded developers, collaborate on projects, and learn from peers across universities and disciplines in a high-caliber peer group.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl p-6 flex flex-col justify-between h-full group">
              <CardHeader className="p-0 pb-4">
                <div className="w-14 h-14 bg-[#ec4899] border-[3px] border-black rounded-lg flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-3 transition-transform text-white">
                  <Zap className="w-7 h-7 text-white fill-current stroke-[2.5px]" />
                </div>
                <CardTitle className="text-2xl font-black text-black">Personal Branding</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <p className="text-sm sm:text-base font-bold text-black/75 leading-relaxed">
                  Get your own subdomain (name.vishwadev.tech) to create a professional online presence that stands out to recruiters and positions you at the peak of the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section - Featured Projects */}
      <div className="bg-[#fbfbfb]">
        <Gallery6 heading="Our Handcrafted Projects" demoUrl="/projects" items={galleryProjects} />
      </div>

      {/* Featured Projects Section */}
      <FeaturedProjectsSection projects={featuredProjects} />

      {/* VishwaDev Labs Section */}
      <section id="nex10" className="py-20 px-4 border-t-[3px] border-black bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffde47]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center space-x-2 bg-white border-[3px] border-black rounded-full px-5 py-2 mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Cpu className="w-5 h-5 text-black" />
              <span className="text-black font-black text-xs uppercase tracking-wider">VishwaDev Labs</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight tracking-tight text-black">
              Custom Tech Solutions for
              <span className="block sm:inline text-[#ef4444]"> Your Business</span>
            </h2>
            
            <p className="text-lg sm:text-xl font-bold text-black/70 mb-10 leading-relaxed max-w-3xl mx-auto px-2">
              VishwaDev Labs is a platform and SaaS company that builds custom tech solutions for clients. We deliver web apps, AI/ML, automation, mobile apps, and more—fast, reliably, and with full support. Partner with us to accelerate your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                variant="default"
                size="lg"
                className="px-8 py-6 text-lg font-black border-[3px] border-black bg-[#ef4444] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#dc2626] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all w-full sm:w-auto"
                asChild
              >
                <Link href="/nex10">
                  Explore VishwaDev Labs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="neutral"
                size="lg"
                className="px-8 py-6 text-lg font-black border-[3px] border-black bg-white text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all w-full sm:w-auto"
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
      <section className="py-20 px-4 bg-[#fbfbfb] border-t-[3px] border-black relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 text-black">Ready to Showcase Your Innovation?</h2>
          <p className="text-lg font-bold text-black/70 mb-10 max-w-2xl mx-auto">
            Join thousands of student developers who are building the future. Get your personalized subdomain and start sharing your projects with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              variant="default"
              size="lg"
              className="px-8 py-6 text-lg font-black border-[3px] border-black bg-[#a3e635] text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a3e635] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all w-full sm:w-auto"
              asChild
            >
              <Link href="/projects">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="neutral"
              size="lg"
              className="px-8 py-6 text-lg font-black border-[3px] border-black bg-white text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all w-full sm:w-auto"
              asChild
            >
              <Link href="/subdomain">
                Request Subdomain
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Column Section */}
      <div className="border-t-[3px] border-black">
        <Footer4Col />
      </div>

    </div>
  )
}
