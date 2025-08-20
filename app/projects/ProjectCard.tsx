import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/src/constants/projects';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <Link href={`/projects/${project.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge className="absolute top-2 right-2" variant="secondary">{project.category}</Badge>
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">{tech}</Badge>
          ))}
          {project.stack.length > 4 && (
            <Badge variant="outline">+{project.stack.length - 4} more</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="neutral">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Button>
        <Button asChild>
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}