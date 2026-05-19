import { teams } from "../teams-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users, Folder, ExternalLink, Zap, Coffee, Code2, Award, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resonance Team | VishwaDev",
  description: "Ideas that echo. The official Resonance developer squad.",
};

export default function ResonanceTeamPage() {
  const team = teams.find((t) => t.id === "resonance");

  if (!team) {
    notFound();
  }

  // Cool fun stats for Resonance
  const funStats = [
    { label: "Creative Devs", value: "7", icon: Users, desc: "Design engineers & mentors" },
    { label: "Prototypes Shipped", value: "32+", icon: Folder, desc: "High-fidelity Figma/Framer hacks" },
    { label: "UI Components", value: "1.5K+", icon: Code2, desc: "Gorgeous accessible micro-interactions" },
    { label: "Custom Beats", value: "240+", icon: Coffee, desc: "Ambient sounds for coding focus" }
  ];

  const coreValues = [
    { title: "UX IS ARCHITECTURE", desc: "Design is not styling. It is user flow, timing, accessibility, and dynamic joy." },
    { title: "MICRO-INTERACTIONS MATTER", desc: "Premium sites are built on tiny details: spring transitions, hover glows, and crisp lines." },
    { title: "RAPID ITERATION LOOPS", desc: "Prototyping in Framer beats talking about features. Show the motion, ship the code." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Design Engineering Pink Accent Top Bar */}
      <div className="h-2 w-full bg-[#ec4899]" />

      <div className="container mx-auto px-4 pt-20 sm:pt-24 lg:pt-28 pb-16">
        
        {/* Navigation & Breadcrumb */}
        <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
          <Button variant="neutral" asChild className="font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47] hover:scale-105 transition-all text-sm">
            <Link href="/teams">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Teams
            </Link>
          </Button>
          
          <Badge className="bg-[#ec4899] hover:bg-[#ec4899] text-white border-2 border-black font-black uppercase text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] py-1 px-3">
            🎵 SQUAD STATUS: BROADCASTING WAVE
          </Badge>
        </div>

        {/* Hero Frame & Cover Image Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Cover Art Frame (Left 7 Columns) */}
          <div className="lg:col-span-7 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] rounded-xl overflow-hidden group">
            <div className="relative h-72 sm:h-96 w-full bg-muted">
              <Image 
                src="/teams/resonance_team_cover.png"
                alt="Resonance Team Cover"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              {/* Overlay with grid lines */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl sm:text-5xl">{team.emoji}</span>
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] text-white">
                      {team.name}
                    </h1>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-white font-bold opacity-90">{team.tagline}</p>
              </div>
            </div>
          </div>

          {/* Quick Overview Panel (Right 5 Columns) */}
          <div className="lg:col-span-5 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-[#ec4899]" />
                <h3 className="font-black text-xs text-foreground uppercase tracking-widest">
                  Design Lab & Ideation Origin
                </h3>
              </div>
              <p className="text-black/80 leading-relaxed text-base font-semibold mb-6">
                {team.description}
              </p>
              <div className="space-y-3.5">
                <div className="flex justify-between items-center border-b border-dashed border-black/10 pb-2.5">
                  <span className="text-xs font-black uppercase text-muted-foreground">FOUNDED IN</span>
                  <span className="text-sm font-bold text-black bg-[#fafafa] border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    Est. {team.founded}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-black/10 pb-2.5">
                  <span className="text-xs font-black uppercase text-muted-foreground">Core Competency</span>
                  <span className="text-sm font-bold text-black bg-[#fafafa] border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    UX Engineering & Micro-Interactions
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black uppercase text-muted-foreground">Current Broadcast</span>
                  <span className="text-xs font-black text-[#ec4899] animate-pulse">
                    🎵 SIGNAL: BROADCASTING HIGH
                  </span>
                </div>
              </div>
            </div>

            {/* Quick action button to contact */}
            <div className="mt-8">
              <Button variant="default" size="lg" className="w-full font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ec4899] hover:text-white hover:scale-[1.01] transition-all text-sm py-4" asChild>
                <a href="mailto:info@vishwadev.tech?subject=Inquiry%20for%20Team%20Resonance">
                  Consult Resonance Designers
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Fun Stats Row */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {funStats.map((stat, idx) => (
            <div key={idx} className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl p-5 hover:scale-102 transition-transform duration-200">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-[#ec4899]/10 border border-black rounded-lg">
                  <stat.icon className="w-5 h-5 text-[#ec4899]" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-muted-foreground">Active</span>
              </div>
              <p className="text-3xl font-black text-foreground mb-1">{stat.value}</p>
              <h4 className="text-xs font-black uppercase text-foreground/75 tracking-wide mb-1">{stat.label}</h4>
              <p className="text-[10px] font-bold text-muted-foreground leading-normal">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Team Roster (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-6">
                <Users className="w-5 h-5 text-black" />
                <h3 className="font-black text-sm text-foreground uppercase tracking-widest">
                  Designers roster ({team.members.length})
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team.members.map((member) => (
                  <Link
                    key={member.username}
                    href={`/${member.username.toLowerCase()}`}
                    className="group flex flex-col justify-between bg-[#fafafa] hover:bg-white border-2 border-black hover:border-black rounded-lg p-4 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:scale-102"
                  >
                    <div className="flex items-center gap-3.5 mb-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black shrink-0 border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]"
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
                    
                    <div className="flex justify-between items-center border-t border-dashed border-black/10 pt-2.5 mt-2">
                      <span className="text-[10px] font-black uppercase text-muted-foreground">Role</span>
                      <Badge className="bg-[#a3e635] hover:bg-[#a3e635] text-black border border-black font-black text-[10px] py-0.5 px-2 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        {member.role}
                      </Badge>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Terminal Panel (Cool Value-list) */}
            <div className="bg-[#241e24] text-pink-300 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-pink-400/20 pb-3 mb-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                  <span className="text-pink-300 font-bold ml-2">resonance-frequencies.json</span>
                </span>
                <Cpu className="w-4 h-4 text-pink-300 animate-pulse" />
              </div>
              
              <div className="space-y-4">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="border-l-2 border-pink-500/30 pl-3">
                    <p className="font-bold text-[#ec4899]">$ {val.title}</p>
                    <p className="text-pink-200/80 mt-1 leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Launchpad Projects (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-6">
                <Folder className="w-5 h-5 text-black" />
                <h3 className="font-black text-sm text-foreground uppercase tracking-widest">
                  Creative catalog ({team.projects.length})
                </h3>
              </div>

              <div className="space-y-4">
                {team.projects.map((project, index) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between p-4 bg-[#fafafa] hover:bg-white border-2 border-black rounded-lg transition-all group shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:scale-102"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-base font-black text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </span>
                        <p className="text-xs text-black/60 font-bold mt-1 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-black group-hover:text-primary transition-colors shrink-0 ml-3" />
                    </div>
                    
                    <div className="flex justify-between items-center border-t border-dashed border-black/10 pt-2.5 mt-2 text-[10px]">
                      <span className="font-black text-muted-foreground uppercase">Launch Status</span>
                      <Badge className="bg-[#ffde47] hover:bg-[#ffde47] text-black border border-black font-black text-[9px] py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        {index === 0 ? "Production" : "Alpha Sandbox"}
                      </Badge>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Achievement Widget */}
            <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#ec4899]" />
                <h4 className="font-black text-xs uppercase tracking-widest text-foreground">SQUAD PROTOCOL LEVEL</h4>
              </div>
              <div className="bg-[#fafafa] border-2 border-black rounded-lg p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-sm font-black text-[#ec4899] mb-1">🏅 GOLDEN UX CERTIFICATION</p>
                <p className="text-xs text-black/70 font-semibold leading-relaxed">
                  Earned the annual VishwaDev premium design medal for establishing advanced spring transitions and full keyboard accessibility in interactive UI labs.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
