"use client"

import { ArrowRight, Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Project } from "@/src/constants/projects"

interface FeaturedProjectsSectionProps {
  projects: Project[];
  title?: string;
  description?: string;
}

export function FeaturedProjectsSection({ 
  projects, 
  title = "Recently Added Projects",
  description = "Discover the latest innovative solutions built by talented student developers from universities worldwide."
}: FeaturedProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                    {project.tagline && (
                      <CardDescription className="text-blue-400 font-medium">{project.tagline}</CardDescription>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <Link href={project.githubUrl} className="text-white/60 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link href={project.liveUrl} className="text-white/60 hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                {project.stack.length > 0 && (
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
                )}
                {project.contributors.length > 0 && (
                  <div className="text-xs text-white/50">By: {project.contributors.join(", ")}</div>
                )}
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
  );
}
