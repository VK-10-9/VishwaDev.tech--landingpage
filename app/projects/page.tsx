import { projects } from './projects-data';
import { ProjectCard } from './ProjectCard';
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | VishwaDev",
  description: "Explore innovative student projects across AI/ML, Web, Mobile, and IoT at VishwaDev.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of innovative projects built by talented students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
