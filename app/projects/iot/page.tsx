import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IoTProjectsPage() {
  const iotProjects = [
    {
      title: "Smart Home System",
      description: "Complete IoT home automation system with mobile app control, voice commands, and energy monitoring.",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "React Native"],
      author: "Thomas Anderson",
      category: "Home Automation",
      github: "#",
      demo: "#",
      documentation: "#"
    },
    {
      title: "Environmental Monitor",
      description: "Wireless sensor network for monitoring air quality, temperature, and humidity with data visualization.",
      technologies: ["ESP32", "Node.js", "InfluxDB", "Grafana"],
      author: "Rachel Green",
      category: "Environment",
      github: "#",
      demo: "#",
      documentation: "#"
    },
    {
      title: "Smart Agriculture",
      description: "Automated irrigation system with soil moisture sensors, weather integration, and crop analytics.",
      technologies: ["Arduino", "Python", "Sensors", "SQLite"],
      author: "Vikram Singh",
      category: "Agriculture",
      github: "#",
      demo: "#",
      documentation: "#"
    },
    {
      title: "Health Monitoring",
      description: "Wearable health monitoring device with heart rate, temperature, and activity tracking.",
      technologies: ["ESP8266", "Sensors", "Bluetooth", "Mobile App"],
      author: "Elena Popov",
      category: "Healthcare",
      github: "#",
      demo: "#",
      documentation: "#"
    },
    {
      title: "Smart Parking",
      description: "IoT-based parking management system with real-time availability and mobile reservation.",
      technologies: ["Raspberry Pi", "Cameras", "Python", "React"],
      author: "Marco Silva",
      category: "Smart City",
      github: "#",
      demo: "#",
      documentation: "#"
    },
    {
      title: "Industrial Monitor",
      description: "Industrial equipment monitoring system with predictive maintenance and alert notifications.",
      technologies: ["PLC", "Modbus", "Node-RED", "Dashboard"],
      author: "Fatima Al-Zahra",
      category: "Industrial",
      github: "#",
      demo: "#",
      documentation: "#"
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Home Automation": "default",
      "Environment": "secondary",
      "Agriculture": "black",
      "Healthcare": "outline",
      "Smart City": "default",
      "Industrial": "secondary"
    }
    return colors[category] || "default"
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white tracking-tight font-sans">IoT & Hardware Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans antialiased">
            Internet of Things and hardware projects that bridge the physical and digital worlds.
            Explore sensors, microcontrollers, and embedded systems built by students.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {iotProjects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="truncate font-sans text-black dark:text-white font-medium">{project.title}</span>
                <Badge variant={getCategoryColor(project.category) as any} className="font-sans">
                  {project.category}
                </Badge>
              </CardTitle>
              <CardDescription className="font-sans text-gray-600 dark:text-gray-300">
                By {project.author}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 font-sans text-gray-700 dark:text-gray-200 antialiased">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button asChild size="sm">
                  <Link href={project.demo}>View Demo</Link>
                </Button>
                <Button asChild variant="neutral" size="sm">
                  <Link href={project.github}>GitHub</Link>
                </Button>
                <Button asChild variant="neutral" size="sm">
                  <Link href={project.documentation}>Docs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="neutral">
          <Link href="/projects">← Back to All Projects</Link>
        </Button>
      </div>
      </div>
    </div>
  )
}
