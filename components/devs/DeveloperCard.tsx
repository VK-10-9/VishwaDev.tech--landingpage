"use client"

import React from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Developer } from "../../src/types/developer";

interface DeveloperCardProps {
  developer: Developer;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  const router = useRouter();

  // Handle click events on the main card container
  const handleCardClick = () => {
    router.push(`/${developer.username.toLowerCase()}`);
  };

  // Prevent event bubbling on social & external links to avoid triggering card navigation
  const handleSocialClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="h-full">
      <Card 
        onClick={handleCardClick}
        className="h-full flex flex-col justify-between bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-[1.01] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:border-black cursor-pointer group overflow-hidden rounded-xl"
      >
        {/* Card Header with bold Brutalist top border */}
        <div className="bg-[#f3f4f6] border-b-[3px] border-black p-5 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 bg-white">
            <Image 
              src={developer.avatar} 
              alt={developer.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors truncate">
                {developer.name}
              </CardTitle>
              {developer.featured && (
                <Badge className="bg-[#ffde47] hover:bg-[#ffde47] text-black border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black uppercase tracking-wider py-0.5 px-2">
                  Elite
                </Badge>
              )}
            </div>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
              @{developer.username}
            </p>
          </div>
        </div>
        
        <CardContent className="p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Role badge */}
            <div className="mb-3">
              <Badge className="bg-[#a3e635] hover:bg-[#a3e635] text-black border-[2px] border-black font-bold text-xs shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                {developer.role}
              </Badge>
            </div>

            {/* Bio description */}
            <p className="text-sm font-medium text-black/80 mb-5 line-clamp-3 leading-relaxed">
              {developer.bio}
            </p>
            
            {/* Projects Section */}
            {developer.projects && developer.projects.length > 0 && (
              <div className="mb-5">
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Flagship Project</p>
                <div className="bg-[#fafafa] border-2 border-black rounded-lg p-3 hover:bg-[#f5f5f5] transition-colors duration-200 group/project shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-bold group-hover/project:text-primary transition-colors duration-200">{developer.projects[0].name}</p>
                    {developer.projects[0].link && (
                      <a 
                        href={developer.projects[0].link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={handleSocialClick}
                        className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                      >
                        <ExternalLink className="h-4 w-4 text-black" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-black/70 line-clamp-2 mb-2 leading-normal">{developer.projects[0].description}</p>
                  <div className="flex flex-wrap gap-1">
                    {developer.projects[0].tech.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-[10px] bg-white border border-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] font-bold">
                        {tech}
                      </Badge>
                    ))}
                    {developer.projects[0].tech.length > 3 && (
                      <Badge variant="secondary" className="text-[10px] bg-white border border-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] font-bold">
                        +{developer.projects[0].tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Skills */}
            <div className="mb-6">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {developer.skills.slice(0, 4).map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="text-xs font-bold bg-[#fafafa] border-2 border-black text-black hover:bg-[#fafafa] shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {skill}
                  </Badge>
                ))}
                {developer.skills.length > 4 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs font-bold bg-[#f3f4f6] border-2 border-black text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]"
                  >
                    +{developer.skills.length - 4} more
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Bottom info: Location & Exp & Socials */}
          <div className="mt-auto pt-4 border-t-2 border-black/10 flex flex-col gap-4">
            <div className="flex justify-between items-center text-xs font-bold text-black/70">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#10b981] border border-black animate-pulse"></span>
                <span>{developer.yearsExperience} yrs experience</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-black" />
                {developer.location}
              </span>
            </div>

            {/* Social Links inside Card */}
            <div className="flex gap-3 pt-2 justify-end border-t border-dashed border-black/10">
              {developer.social.linkedin && (
                <a 
                  href={developer.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded bg-white border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-[#ec4899] hover:text-white hover:scale-110 transition-all duration-200"
                  onClick={handleSocialClick}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
              {developer.social.twitter && (
                <a 
                  href={developer.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded bg-white border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-[#ec4899] hover:text-white hover:scale-110 transition-all duration-200"
                  onClick={handleSocialClick}
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              )}
              {developer.social.github && (
                <a 
                  href={developer.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded bg-white border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-[#ec4899] hover:text-white hover:scale-110 transition-all duration-200"
                  onClick={handleSocialClick}
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {developer.social.email && (
                <a 
                  href={developer.social.email} 
                  className="p-1.5 rounded bg-white border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-[#ec4899] hover:text-white hover:scale-110 transition-all duration-200"
                  onClick={handleSocialClick}
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
