import { ArrowRight, Github, Globe, Star, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gallery6 } from "@/components/ui/gallery6"
import { Header1 } from "@/components/ui/header"
import { HeroSection } from "@/components/ui/galaxy-interactive-hero-section"
import Footer4Col from "@/components/ui/footer-column"

const featuredProjects = [
  {
    id: 1,
    title: "DevFlow",
    tagline: "Real-time collaboration platform for developers",
    description:
      "A comprehensive platform that enables seamless collaboration between developers with live code sharing, integrated chat, and project management tools.",
    stack: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
    contributors: ["Arjun M", "Priya S"],
    githubUrl: "https://github.com/example/devflow",
    liveUrl: "https://devflow.demo.com",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "EcoTrack",
    tagline: "AI-powered carbon footprint tracker",
    description:
      "Smart application that helps individuals and organizations track, analyze, and reduce their carbon footprint using machine learning algorithms.",
    stack: ["React", "Python", "TensorFlow", "MongoDB"],
    contributors: ["Rahul K", "Sneha P", "Amit J"],
    githubUrl: "https://github.com/example/ecotrack",
    liveUrl: "https://ecotrack.demo.com",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "CodeMentor AI",
    tagline: "Intelligent code review and mentoring assistant",
    description:
      "An AI-powered tool that provides instant code reviews, suggests improvements, and offers personalized learning paths for developers.",
    stack: ["Vue.js", "Node.js", "OpenAI API", "Redis"],
    contributors: ["Maya L", "Kiran R"],
    githubUrl: "https://github.com/example/codementor-ai",
    liveUrl: "https://codementor-ai.demo.com",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const galleryProjects = [
  {
    id: "project-1",
    title: "SmartCampus IoT",
    summary:
      "Revolutionary IoT platform connecting campus infrastructure with real-time monitoring, energy optimization, and predictive maintenance for educational institutions.",
    url: "/projects/smartcampus-iot",
    image: "/placeholder.svg?height=300&width=450&text=IoT+Campus+Dashboard",
  },
  {
    id: "project-2",
    title: "NeuroLearn AI",
    summary:
      "Adaptive learning platform using neural networks to personalize educational content, track learning patterns, and optimize study schedules for maximum retention.",
    url: "/projects/neurolearn-ai",
    image: "/placeholder.svg?height=300&width=450&text=AI+Learning+Platform",
  },
  {
    id: "project-3",
    title: "BlockChain Voting",
    summary:
      "Secure, transparent voting system built on blockchain technology ensuring tamper-proof elections with real-time results and complete audit trails.",
    url: "/projects/blockchain-voting",
    image: "/placeholder.svg?height=300&width=450&text=Blockchain+Voting+System",
  },
  {
    id: "project-4",
    title: "GreenTech Monitor",
    summary:
      "Environmental monitoring solution using satellite data and machine learning to track deforestation, pollution levels, and climate change indicators.",
    url: "/projects/greentech-monitor",
    image: "/placeholder.svg?height=300&width=450&text=Environmental+Monitoring",
  },
  {
    id: "project-5",
    title: "HealthSync Wearables",
    summary:
      "Comprehensive health monitoring ecosystem integrating wearable devices, AI diagnostics, and telemedicine for preventive healthcare management.",
    url: "/projects/healthsync-wearables",
    image: "/placeholder.svg?height=300&width=450&text=Health+Monitoring+App",
  },
  {
    id: "project-6",
    title: "QuantumCrypt Security",
    summary:
      "Next-generation cybersecurity framework leveraging quantum encryption algorithms to protect sensitive data against future quantum computing threats.",
    url: "/projects/quantumcrypt-security",
    image: "/placeholder.svg?height=300&width=450&text=Quantum+Security+System",
  },
]

const stats = [
  { label: "Active Projects", value: "50+" },
  { label: "Student Developers", value: "200+" },
  { label: "Universities", value: "15+" },
  { label: "Success Stories", value: "25+" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Navigation */}
      <Header1 />

      {/* Galaxy Interactive Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-white/10 bg-white/5 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section id="projects" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Recently Added Projects</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Discover the latest innovative solutions built by talented student developers from universities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-md group"
              >
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-blue-400 font-medium">{project.tagline}</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={project.githubUrl} className="text-white/60 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </Link>
                      <Link href={project.liveUrl} className="text-white/60 hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-white/50">By: {project.contributors.join(", ")}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

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
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  12
                </div>
                <div className="text-white/60 text-sm">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  $2.5M
                </div>
                <div className="text-white/60 text-sm">Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-white/60 text-sm">Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <div className="text-white/60 text-sm">Success Rate</div>
              </div>
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
