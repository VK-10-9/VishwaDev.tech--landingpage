import { projects } from '../projects-data';
import { ProjectCard } from '../ProjectCard';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <Badge variant="secondary" className="mb-2">{project.category}</Badge>
              <h1 className="text-4xl font-bold">{project.title}</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Project Description</h2>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Contributors</h4>
                    <p className="text-muted-foreground">{project.contributors.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Category</h4>
                    <p className="text-muted-foreground">{project.category}</p>
                  </div>
                  <div className="flex flex-col space-y-2 pt-4">
                    <Button asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </Link>
                    </Button>
                    <Button asChild variant="secondary">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}