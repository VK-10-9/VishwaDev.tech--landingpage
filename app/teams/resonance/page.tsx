import { teams } from "../teams-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users, Folder, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resonance Team | VishwaDev",
  description: "Ideas that echo. The official Resonance developer squad.",
};

export default function ResonanceTeamPage() {
  const team = teams.find((t) => t.id === "resonance");

  if (!team) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-16">
        
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Button variant="neutral" asChild className="font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47] hover:scale-105 transition-all text-sm">
            <Link href="/teams">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Teams
            </Link>
          </Button>
        </div>

        {/* Team Detail Card */}
        <div className="max-w-4xl mx-auto bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl overflow-hidden mb-12">
          {/* Header Panel */}
          <div 
            className="p-8 sm:p-10 border-b-[3px] border-black" 
            style={{ backgroundColor: team.color + "12" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-6xl sm:text-7xl">{team.emoji}</span>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
                      {team.name}
                    </h1>
                    {team.active && (
                      <Badge 
                        className="text-xs font-black border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] uppercase py-1 px-3 text-white"
                        style={{ backgroundColor: team.color }}
                      >
                        Active Squad
                      </Badge>
                    )}
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground font-bold mt-2">{team.tagline}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm font-black text-black/60 bg-white border-2 border-black rounded-lg px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] self-start sm:self-auto shrink-0">
                <Calendar className="w-4 h-4 text-black" />
                <span>Established {team.founded}</span>
              </div>
            </div>
          </div>

          {/* Description & Overview */}
          <div className="p-8 sm:p-10 border-b-[3px] border-black bg-white">
            <h2 className="text-xl font-black mb-4 uppercase tracking-widest text-muted-foreground text-xs">Mission & Focus</h2>
            <p className="text-black/80 leading-relaxed text-base sm:text-lg font-medium">
              {team.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Members Column */}
            <div className="p-8 sm:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black bg-white">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-5 h-5 text-black" />
                <h3 className="font-black text-sm text-foreground uppercase tracking-widest">
                  Team Roster ({team.members.length})
                </h3>
              </div>

              {team.members.length > 0 ? (
                <div className="space-y-4">
                  {team.members.map((member) => (
                    <Link
                      key={member.username}
                      href={`/${member.username.toLowerCase()}`}
                      className="group flex items-center justify-between bg-[#fafafa] hover:bg-[#f3f4f6] border-2 border-black rounded-lg p-3.5 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 border-2 border-black"
                          style={{ backgroundColor: team.color }}
                        >
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-black text-foreground group-hover:text-primary transition-colors">
                            {member.name}
                          </p>
                          <p className="text-xs font-bold text-muted-foreground">@{member.username}</p>
                        </div>
                      </div>
                      <Badge className="bg-[#a3e635] hover:bg-[#a3e635] text-black border border-black font-black text-[10px]">
                        {member.role}
                      </Badge>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm font-bold text-muted-foreground italic py-4">
                  No roster members registered yet.
                </p>
              )}
            </div>

            {/* Projects Column */}
            <div className="p-8 sm:p-10 bg-white">
              <div className="flex items-center gap-2 mb-6">
                <Folder className="w-5 h-5 text-black" />
                <h3 className="font-black text-sm text-foreground uppercase tracking-widest">
                  Team Projects ({team.projects.length})
                </h3>
              </div>

              {team.projects.length > 0 ? (
                <div className="space-y-4">
                  {team.projects.map((project) => (
                    <a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-[#fafafa] hover:bg-[#f3f4f6] border-2 border-black rounded-lg transition-all group shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02]"
                    >
                      <div>
                        <span className="text-sm sm:text-base font-black text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </span>
                        <p className="text-xs text-black/60 font-bold mt-1 leading-normal">
                          {project.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-black group-hover:text-primary transition-colors shrink-0 ml-3" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="bg-[#fafafa] border-2 border-dashed border-black/20 rounded-lg p-6 text-center">
                  <p className="text-sm font-bold text-muted-foreground italic">
                    🚧 Flagship applications coming soon...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
