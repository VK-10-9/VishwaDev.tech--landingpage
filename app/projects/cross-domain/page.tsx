import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CrossDomainProjectsPage() {
  const crossDomainProjects = [
    {
      title: "Smart Agriculture System",
      description: "IoT-based smart farming solution with ML-powered crop prediction and mobile app monitoring.",
      technologies: ["IoT", "Machine Learning", "Mobile App", "Cloud"],
      author: "Team AgriTech",
      domains: ["IoT", "ML", "Mobile"],
      github: "#",
      demo: "#"
    },
    {
      title: "Healthcare Analytics Platform",
      description: "Comprehensive healthcare platform combining wearable data with AI diagnostics and web dashboard.",
      technologies: ["React", "Python", "TensorFlow", "IoT Sensors"],
      author: "MedTech Innovation Lab",
      domains: ["Web", "AI", "IoT"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart City Management",
      description: "Urban infrastructure monitoring using IoT sensors with blockchain-based data integrity.",
      technologies: ["Blockchain", "IoT", "Big Data", "Web3"],
      author: "Urban Tech Solutions",
      domains: ["IoT", "Blockchain", "Analytics"],
      github: "#",
      demo: "#"
    },
    {
      title: "EdTech Learning Platform",
      description: "AI-powered learning platform with AR/VR integration and mobile accessibility.",
      technologies: ["Unity", "AR/VR", "AI", "React Native"],
      author: "Future Learn Team",
      domains: ["AR/VR", "AI", "Mobile"],
      github: "#",
      demo: "#"
    }
  ]

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case "IoT": return "default"
      case "ML": return "secondary"
      case "AI": return "red"
      case "Mobile": return "black"
      case "Web": return "default"
      case "Blockchain": return "secondary"
      case "AR/VR": return "black"
      case "Analytics": return "red"
      default: return "default"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white tracking-tight font-sans">Cross Domain Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans antialiased">
            Explore innovative projects that combine multiple technologies and domains. From IoT-ML hybrids 
            to AR/VR-AI integrations, discover cutting-edge interdisciplinary solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {crossDomainProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="truncate font-sans text-black dark:text-white font-medium">
                    {project.title}
                  </span>
                </CardTitle>
                <CardDescription className="font-sans text-gray-600 dark:text-gray-300">
                  By {project.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 font-sans text-gray-700 dark:text-gray-200 antialiased">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.domains.map((domain, domainIndex) => (
                    <Badge key={domainIndex} variant={getDomainColor(domain)}>
                      {domain}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm">
                    <Link href={project.demo}>View Demo</Link>
                  </Button>
                  <Button asChild variant="neutral" size="sm">
                    <Link href={project.github}>GitHub</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="outline" asChild>
            <Link href="/projects">← Back to All Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
