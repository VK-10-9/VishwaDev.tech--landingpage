"use client"

import { ArrowRight, Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/src/types/project"

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
    <section id="projects" className="py-16 sm:py-20 px-4 bg-muted/30 border-t-2 border-black/10">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">{title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            {description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-[1.01] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:border-black group overflow-hidden rounded-xl h-full flex flex-col justify-between"
            >
              <div className="aspect-video relative overflow-hidden border-b-[3px] border-black bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <CardHeader className="p-6 pb-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl font-bold tracking-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    {project.tagline && (
                      <CardDescription className="text-primary font-bold text-sm line-clamp-1">{project.tagline}</CardDescription>
                    )}
                  </div>
                  <div className="flex space-x-2 flex-shrink-0 pt-1">
                    {project.githubUrl && (
                      <Link href={project.githubUrl} className="p-1.5 rounded bg-white border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-[#ec4899] hover:text-white transition-all duration-200" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link href={project.liveUrl} className="p-1.5 rounded bg-white border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-[#ec4899] hover:text-white transition-all duration-200" target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <p className="text-black/80 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                  
                  {project.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.stack.slice(0, 4).map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs font-bold bg-[#fafafa] border-2 border-black text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs font-bold bg-[#f3f4f6] border-2 border-black text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]"
                        >
                          +{project.stack.length - 4} more
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                
                {project.contributors.length > 0 && (
                  <div className="text-xs font-bold text-black/60 pt-3 border-t border-dashed border-black/10">
                    By: {project.contributors.map(c => c.name).slice(0, 2).join(", ")}{project.contributors.length > 2 && ` +${project.contributors.length - 2}`}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="neutral" className="w-full sm:w-auto font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47] hover:scale-105 transition-all py-5 px-8 text-base" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
