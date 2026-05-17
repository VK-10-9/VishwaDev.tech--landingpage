"use client";

import { teams } from "./teams-data";
import Link from "next/link";
import { ExternalLink, Users, Folder, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-16">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border-2 border-border rounded-full px-5 py-2 mb-6 shadow-sm">
            <Users className="w-4 h-4 text-text" />
            <span className="text-text font-bold text-sm">Developer Teams</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-foreground">
            Meet the Teams
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Small groups, big ideas. These are the teams within the VishwaDev community
            building products together — from weekend hacks to shipped products.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white border-2 border-border rounded-xl shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className="p-6 border-b-2 border-border"
                style={{ backgroundColor: team.color + "18" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{team.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-black text-foreground">{team.name}</h2>
                        {team.active && (
                          <Badge
                            className="text-xs font-bold border-2"
                            style={{ borderColor: team.color, color: team.color, backgroundColor: team.color + "18" }}
                          >
                            Active
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground font-medium mt-0.5">{team.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Calendar className="w-3 h-3" />
                    <span>Est. {team.founded}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 border-b-2 border-border">
                <p className="text-muted-foreground leading-relaxed text-sm">{team.description}</p>
              </div>

              {/* Members */}
              {team.members.length > 0 && (
                <div className="p-6 border-b-2 border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-foreground" />
                    <h3 className="font-bold text-sm text-foreground uppercase tracking-wide">
                      Members ({team.members.length})
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {team.members.map((member) => (
                      <Link
                        key={member.username}
                        href={`/${member.username.toLowerCase()}`}
                        className="group flex items-center gap-2 bg-muted/50 hover:bg-muted border border-border rounded-lg px-3 py-1.5 transition-colors"
                      >
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                          style={{ backgroundColor: team.color }}
                        >
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                            {member.name}
                          </span>
                          <span className="text-xs text-muted-foreground ml-1">· {member.role}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {team.projects.length > 0 && (
                <div className="p-6 border-b-2 border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Folder className="w-4 h-4 text-foreground" />
                    <h3 className="font-bold text-sm text-foreground uppercase tracking-wide">
                      Projects ({team.projects.length})
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {team.projects.map((project) => (
                      <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-muted/40 hover:bg-muted border border-border rounded-lg transition-colors group"
                      >
                        <div>
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {project.name}
                          </span>
                          <p className="text-xs text-muted-foreground mt-0.5">{project.description}</p>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Empty state for teams with no data yet */}
              {team.members.length === 0 && team.projects.length === 0 && (
                <div className="p-6 border-b-2 border-border">
                  <p className="text-sm text-muted-foreground italic text-center py-4">
                    🚧 Team details coming soon...
                  </p>
                </div>
              )}

              {/* Footer */}
              <div className="p-4 bg-muted/20 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {team.members.length} member{team.members.length !== 1 ? "s" : ""} · {team.projects.length} project{team.projects.length !== 1 ? "s" : ""}
                </span>
                <Button variant="neutral" size="sm" asChild>
                  <Link href={`/teams/${team.id}`}>View Team →</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center border-2 border-border rounded-xl p-10 bg-white shadow-shadow">
          <h2 className="text-2xl font-black mb-3 text-foreground">Have a team?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            If you're building something with a group of developers from the VishwaDev community, get your team listed here.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="mailto:info@vishwadev.tech">Register Your Team</a>
          </Button>
        </div>

      </div>
    </div>
  );
}
