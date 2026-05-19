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
              className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-[1.01] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:border-black rounded-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Card Header */}
              <div
                className="p-6 border-b-[3px] border-black"
                style={{ backgroundColor: team.color + "12" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{team.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-black text-foreground">{team.name}</h2>
                        {team.active && (
                          <Badge
                            className="text-xs font-black border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] uppercase py-0.5 px-2 text-white"
                            style={{ backgroundColor: team.color }}
                          >
                            Active
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground font-bold mt-0.5">{team.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-black/60 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Est. {team.founded}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 border-b-[3px] border-black bg-white">
                <p className="text-black/80 leading-relaxed text-sm font-medium">{team.description}</p>
              </div>

              {/* Members */}
              {team.members.length > 0 && (
                <div className="p-6 border-b-[3px] border-black bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-black" />
                    <h3 className="font-black text-xs text-foreground uppercase tracking-widest">
                      Members ({team.members.length})
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {team.members.map((member) => (
                      <Link
                        key={member.username}
                        href={`/${member.username.toLowerCase()}`}
                        className="group flex items-center gap-2 bg-[#fafafa] hover:bg-[#f3f4f6] border-2 border-black rounded-lg px-3 py-1.5 transition-all shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:scale-105"
                      >
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0 border border-black"
                          style={{ backgroundColor: team.color }}
                        >
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                            {member.name}
                          </span>
                          <span className="text-[10px] font-bold text-muted-foreground ml-1">· {member.role}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {team.projects.length > 0 && (
                <div className="p-6 border-b-[3px] border-black bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Folder className="w-4 h-4 text-black" />
                    <h3 className="font-black text-xs text-foreground uppercase tracking-widest">
                      Projects ({team.projects.length})
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {team.projects.map((project) => (
                      <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-[#fafafa] hover:bg-[#f3f4f6] border-2 border-black rounded-lg transition-colors group shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.01]"
                      >
                        <div>
                          <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.name}
                          </span>
                          <p className="text-xs text-black/60 font-medium mt-0.5 leading-normal">{project.description}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-black group-hover:text-primary transition-colors shrink-0 ml-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Empty state for teams with no data yet */}
              {team.members.length === 0 && team.projects.length === 0 && (
                <div className="p-6 border-b-[3px] border-black bg-[#fafafa]">
                  <p className="text-sm font-bold text-muted-foreground italic text-center py-4">
                    🚧 Team details coming soon...
                  </p>
                </div>
              )}

              {/* Footer */}
              <div className="p-4 bg-muted/20 flex items-center justify-between border-t border-black/10">
                <span className="text-xs font-bold text-black/60">
                  {team.members.length} member{team.members.length !== 1 ? "s" : ""} · {team.projects.length} project{team.projects.length !== 1 ? "s" : ""}
                </span>
                <Button variant="neutral" size="sm" className="font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47] hover:scale-105 transition-all text-xs" asChild>
                  <Link href={`/teams/${team.id}`}>View Team →</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center border-[3px] border-black rounded-xl p-10 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-black mb-3 text-foreground">Have a team?</h2>
          <p className="text-muted-foreground font-medium mb-6 max-w-md mx-auto">
            If you&apos;re building something with a group of developers from the VishwaDev community, get your team listed here.
          </p>
          <Button variant="default" size="lg" className="font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a3e635] hover:text-black hover:scale-105 transition-all text-base px-8 py-4" asChild>
            <a href="mailto:info@vishwadev.tech">Register Your Team</a>
          </Button>
        </div>

      </div>
    </div>
  );
}
