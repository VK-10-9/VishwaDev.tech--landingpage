import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { Developer } from "../../src/types/developer";

interface DeveloperCardProps {
  developer: Developer;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center">
            <span className="text-white font-bold">
              {developer.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{developer.name}</CardTitle>
              <Badge variant="outline" className="text-xs">@{developer.username}</Badge>
            </div>
            <CardDescription>{developer.role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{developer.bio}</p>
        
        {/* Contact Info for developers with phone */}
        {developer.email && developer.phone && (
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="text-xs">
              📧 {developer.email}
            </Badge>
            <Badge variant="outline" className="text-xs">
              📱 +91 {developer.phone}
            </Badge>
            <Badge variant="outline" className="text-xs">
              📍 {developer.location}
            </Badge>
          </div>
        )}
        
        {/* Top Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {developer.skills.slice(0, 4).map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {developer.skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{developer.skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Experience & Location */}
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
          <span>{developer.yearsExperience} years exp.</span>
          <span>{developer.location}</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {developer.social.linkedin && (
            <Link href={developer.social.linkedin} className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-4 h-4" />
            </Link>
          )}
          {developer.social.twitter && (
            <Link href={developer.social.twitter} className="text-muted-foreground hover:text-primary">
              <Twitter className="w-4 h-4" />
            </Link>
          )}
          {developer.social.github && (
            <Link href={developer.social.github} className="text-muted-foreground hover:text-primary">
              <Github className="w-4 h-4" />
            </Link>
          )}
          {developer.social.email && (
            <Link href={developer.social.email} className="text-muted-foreground hover:text-primary">
              <Mail className="w-4 h-4" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
