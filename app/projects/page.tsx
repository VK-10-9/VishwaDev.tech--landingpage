import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsPage() {
  const projectCategories = [
    {
      title: "Featured Projects",
      description: "Discover our most innovative and impactful student projects",
      href: "/projects/featured",
      icon: "⭐"
    },
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions and ML models",
      href: "/projects/ai-ml",
      icon: "🤖"
    },
    {
      title: "Web Development",
      description: "Modern web applications and frontend solutions",
      href: "/projects/web-dev",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications",
      href: "/projects/mobile",
      icon: "📱"
    },
    {
      title: "IoT & Hardware",
      description: "Internet of Things and hardware projects",
      href: "/projects/iot",
      icon: "🔧"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Student Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore innovative projects built by talented students. From AI solutions to web applications,
          discover the future of technology today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-2">{category.icon}</div>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={category.href}>
                  Explore Projects
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
