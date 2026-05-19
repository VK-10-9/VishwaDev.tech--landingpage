import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Project } from '@/src/types/project';
import { Calendar, Users, ExternalLink, Github, Zap, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const getDifficultyColor = (difficulty: Project['difficulty']) => {
  switch (difficulty) {
    case 'beginner': return 'bg-[#a3e635] text-black border-2 border-black';
    case 'intermediate': return 'bg-[#f59e0b] text-black border-2 border-black';
    case 'advanced': return 'bg-[#ef4444] text-white border-2 border-black';
    default: return 'bg-white text-black border-2 border-black';
  }
};

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'active': return 'bg-[#10b981] text-white border-2 border-black';
    case 'completed': return 'bg-[#3b82f6] text-white border-2 border-black';
    case 'in-progress': return 'bg-[#f97316] text-white border-2 border-black';
    case 'archived': return 'bg-[#6b7280] text-white border-2 border-black';
    default: return 'bg-white text-black border-2 border-black';
  }
};

export function ProjectCard({ project }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <Card className="h-full flex flex-col justify-between bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-[1.01] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:border-black group overflow-hidden rounded-xl">
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative h-48 w-full group overflow-hidden border-b-[3px] border-black bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          
          {/* Badges */}
          <div className="absolute top-2 right-2 flex flex-col gap-1.5 z-10">
            <Badge className="bg-white text-black border-2 border-black font-black uppercase text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" variant="secondary">
              {project.category}
            </Badge>
            {project.trending && (
              <Badge className="bg-[#ffde47] text-black border-2 border-black font-black uppercase text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-current" />
                Trending
              </Badge>
            )}
          </div>

          {/* Status and Difficulty */}
          <div className="absolute top-2 left-2 flex flex-col gap-1.5 z-10">
            <Badge className={`${getStatusColor(project.status)} font-black uppercase text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}>
              {project.status}
            </Badge>
            <Badge className={`${getDifficultyColor(project.difficulty)} font-black uppercase text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}>
              {project.difficulty}
            </Badge>
          </div>
        </div>
      </Link>
      
      <CardHeader className="p-6 pb-2 flex-shrink-0">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl font-bold tracking-tight line-clamp-2 mb-1 group-hover:text-primary transition-colors">{project.title}</CardTitle>
            {project.tagline && (
              <p className="text-sm font-bold text-muted-foreground">{project.tagline}</p>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-4">
          <p className="text-black/80 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Contributors & Last Updated */}
          <div className="flex items-center justify-between border-t border-dashed border-black/10 pt-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-black" />
              <div className="flex -space-x-1.5">
                {project.contributors.slice(0, 3).map((contributor) => (
                  <Avatar key={contributor.developerId} className="w-6 h-6 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)]">
                    <AvatarImage src={`/placeholder-user.jpg`} />
                    <AvatarFallback className="text-[10px] font-bold bg-[#fafafa]">
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                ))}
                {project.contributors.length > 3 && (
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-black flex items-center justify-center text-[9px] font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)]">
                    +{project.contributors.length - 3}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-xs font-bold text-black/60">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(project.lastUpdated)}
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 pt-1">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs font-bold bg-[#fafafa] border-2 border-black text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 4 && (
              <Badge variant="outline" className="text-xs font-bold bg-[#f3f4f6] border-2 border-black text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                +{project.stack.length - 4} more
              </Badge>
            )}
          </div>

          {/* Duration */}
          {project.duration && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-black/60 pt-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Duration: {project.duration}</span>
            </div>
          )}
        </div>
        
        {/* Footer Buttons */}
        <div className="flex gap-3 pt-3 border-t-2 border-black/10 mt-auto">
          <Button asChild variant="neutral" size="sm" className="flex-1 font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47] hover:scale-105 transition-all">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-1.5" />
              Code
            </Link>
          </Button>
          {project.liveUrl && (
            <Button asChild size="sm" className="flex-1 font-bold bg-[#a3e635] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a3e635] hover:scale-105 transition-all">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1.5" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}