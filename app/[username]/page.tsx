import { notFound } from "next/navigation"
import { developers } from "@/app/devs/developers-data"
import { DeveloperCard } from "@/components/devs/DeveloperCard"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

interface UserProfilePageProps {
  params: Promise<{
    username: string
  }>
}

export async function generateMetadata({ params }: UserProfilePageProps): Promise<Metadata> {
  const { username } = await params
  const developer = developers.find(dev => dev.username.toLowerCase() === username.toLowerCase())
  
  if (!developer) {
    return {
      title: "Developer Not Found | VishwaDev",
      description: "The requested developer profile could not be found."
    }
  }

  return {
    title: `${developer.name} (@${developer.username}) | VishwaDev`,
    description: developer.bio,
    openGraph: {
      title: `${developer.name} (@${developer.username})`,
      description: developer.bio,
      type: "profile",
    }
  }
}

export default async function UserProfilePage({ params }: UserProfilePageProps) {
  const { username } = await params
  const developer = developers.find(dev => dev.username.toLowerCase() === username.toLowerCase())
  
  if (!developer) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="neutral" asChild>
            <Link href="/devs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Developers
            </Link>
          </Button>
        </div>

        {/* Profile Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <img 
              src={developer.avatar} 
              alt={developer.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">{developer.name}</h1>
          <p className="text-2xl text-muted-foreground mb-2">@{developer.username}</p>
          <p className="text-xl text-primary font-semibold mb-4">{developer.role}</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{developer.bio}</p>
        </div>

        {/* Profile Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Contact & Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <a href={developer.social.email} className="text-foreground hover:text-primary">
                    {developer.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span>{developer.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span>{developer.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span>{developer.yearsExperience} years experience</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="space-y-3">
                <a 
                  href={developer.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={developer.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={developer.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Center Column - Skills */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {developer.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <div className="space-y-3">
              {developer.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developer.projects.map((project, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild size="sm" className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card p-8 rounded-lg border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Connect with {developer.name}</h3>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or learning more? Reach out and let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href={developer.social.email}>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="neutral" asChild>
                <a href={developer.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
