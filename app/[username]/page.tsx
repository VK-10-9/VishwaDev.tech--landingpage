import { notFound } from "next/navigation"
import { developers } from "@/app/devs/developers-data"
import { teams } from "@/app/teams/teams-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Github, Linkedin, Twitter, ExternalLink, Award, Cpu, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

interface UserProfilePageProps {
  params: Promise<{
    username: string
  }>
}

export async function generateMetadata({ params }: UserProfilePageProps): Promise<Metadata> {
  const { username } = await params
  const developer = developers.find(dev => dev.username.toLowerCase() === username.toLowerCase())
  
  if (!developer) {
    return {
      title: "Developer Not Found | VishwaDev",
      description: "The requested developer profile could not be found."
    }
  }

  return {
    title: `${developer.name} (@${developer.username}) | VishwaDev`,
    description: developer.bio,
    openGraph: {
      title: `${developer.name} (@${developer.username})`,
      description: developer.bio,
      type: "profile",
    }
  }
}

export default async function UserProfilePage({ params }: UserProfilePageProps) {
  const { username } = await params
  const developer = developers.find(dev => dev.username.toLowerCase() === username.toLowerCase())
  
  if (!developer) {
    notFound()
  }

  // Dynamically resolve squads this developer belongs to
  const devTeams = teams.filter((team) =>
    team.members.some((m) => m.username.toLowerCase() === developer.username.toLowerCase())
  )

  // Robustly handle avatar image paths (clean Windows backslashes)
  const avatarPath = developer.avatar.replace(/\\/g, "/")
  const cleanedAvatar = avatarPath.startsWith("/") ? avatarPath : `/${avatarPath}`

  return (
    <div className="min-h-screen bg-background">
      {/* High-Contrast Neon Top Bar */}
      <div className="h-2 w-full bg-[#ffde47]" />

      <div className="container mx-auto px-4 pt-20 sm:pt-24 lg:pt-28 pb-16">
        
        {/* Navigation Header */}
        <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
          <Button variant="neutral" asChild className="font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47] hover:scale-105 transition-all text-sm">
            <Link href="/devs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Roster
            </Link>
          </Button>

          {developer.featured && (
            <Badge className="bg-[#ffde47] text-black border-2 border-black font-black uppercase text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] py-1 px-3">
              ⚡ ELITE CONTRIBUTOR
            </Badge>
          )}
        </div>

        {/* Profile Asymmetric Card */}
        <div className="max-w-6xl mx-auto bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6 sm:p-8 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Avatar Frame */}
            <div className="relative shrink-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-white border-[3px] border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Image 
                  src={cleanedAvatar} 
                  alt={developer.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {developer.featured && (
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[9px] font-black uppercase border-2 border-black px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] animate-bounce">
                  Featured
                </div>
              )}
            </div>

            {/* Profile Intro */}
            <div className="text-center md:text-left flex-grow">
              <div className="flex flex-col md:flex-row md:items-center gap-3.5 mb-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
                  {developer.name}
                </h1>
                
                {/* Dynamically Resolved Squad Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {devTeams.map((t) => (
                    <Link key={t.id} href={`/teams/${t.id}`}>
                      <Badge 
                        className="text-xs font-black border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] uppercase py-1 px-3 text-white cursor-pointer hover:scale-105 transition-transform"
                        style={{ backgroundColor: t.color }}
                      >
                        {t.emoji} {t.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Username badge */}
              <div className="inline-flex items-center gap-2 bg-muted/20 border-2 border-black rounded-lg px-3 py-1 mb-4 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47]/10 transition-colors">
                <span className="text-sm font-black text-muted-foreground">@{developer.username}</span>
              </div>

              {/* Role Title */}
              <p className="text-lg sm:text-xl text-primary font-black uppercase tracking-wider mb-4">
                👑 {developer.role}
              </p>

              {/* Bio */}
              <p className="text-base sm:text-lg text-black/80 font-bold leading-relaxed max-w-3xl">
                {developer.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {[
            { label: "Projects Shipped", value: developer.projects.length, color: "#ffde47" },
            { label: "Arsenal Stack", value: developer.skills.length, color: "#a3e635" },
            { label: "Years Experience", value: `${developer.yearsExperience} Yrs`, color: "#38bdf8" },
            { label: "Achievements", value: developer.achievements.length, color: "#f472b6" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl p-5 hover:scale-102 transition-transform duration-200">
              <p className="text-3xl font-black text-foreground mb-1">{stat.value}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2.5 h-2.5 rounded-full inline-block border border-black shadow-[0.5px_0.5px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: stat.color }}></span>
                <h4 className="text-xs font-black uppercase text-foreground/75 tracking-wide">{stat.label}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* 3-Column Profile details Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Profile Terminal & Contacts (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Terminal mock */}
            <div className="bg-[#1e1e24] text-amber-300 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-amber-400/20 pb-3 mb-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                  <span className="text-amber-300 font-bold ml-2">dev-environment.sh</span>
                </span>
                <Cpu className="w-4 h-4 text-amber-300 animate-pulse" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-amber-400">$ whoami</p>
                  <p className="text-amber-100/90 mt-1 pl-2">
                    Name: {developer.name}<br />
                    Loc: {developer.location}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-amber-400">$ sys --status</p>
                  <p className="text-amber-100/90 mt-1 pl-2">
                    Years Exp: {developer.yearsExperience} yrs<br />
                    Featured: {developer.featured ? "TRUE" : "FALSE"}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-amber-400">$ cat contacts.json</p>
                  <p className="text-amber-100/90 mt-1 pl-2">
                    Mail: {developer.email}<br />
                    Tel: {developer.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Panel */}
            <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6">
              <h3 className="font-black text-sm uppercase tracking-widest text-foreground mb-4">
                🌐 Connected networks
              </h3>
              
              <div className="space-y-3">
                <Button variant="neutral" className="w-full font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47] hover:scale-102 transition-all justify-start text-xs" asChild>
                  <a href={developer.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2.5 shrink-0" />
                    Connect via GitHub
                  </a>
                </Button>
                
                <Button variant="neutral" className="w-full font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#38bdf8]/20 hover:scale-102 transition-all justify-start text-xs" asChild>
                  <a href={developer.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2.5 text-blue-600 shrink-0" />
                    Connect via LinkedIn
                  </a>
                </Button>
                
                <Button variant="neutral" className="w-full font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#f472b6]/20 hover:scale-102 transition-all justify-start text-xs" asChild>
                  <a href={developer.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4 mr-2.5 text-pink-500 shrink-0" />
                    Connect via Twitter
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: Technology Arsenal (Skills) (4 Columns) */}
          <div className="lg:col-span-4 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-black" />
              <h3 className="font-black text-sm text-foreground uppercase tracking-widest">
                Technical Arsenal ({developer.skills.length})
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {developer.skills.map((skill, index) => {
                const badgeColors = ["#ffde47", "#a3e635", "#38bdf8", "#f472b6", "#a78bfa"]
                const pickedColor = badgeColors[index % badgeColors.length]
                return (
                  <span 
                    key={index}
                    className="px-3.5 py-2 bg-white border-2 border-black font-black text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform rounded-lg cursor-pointer"
                    style={{ borderLeftColor: pickedColor, borderLeftWidth: "4px" }}
                  >
                    {skill}
                  </span>
                )
              })}
            </div>
            
            {/* Systems Engineering DNA */}
            <div className="mt-8 border-t-2 border-dashed border-black/10 pt-6">
              <h4 className="font-black text-xs uppercase tracking-widest text-foreground mb-4">
                Architecture Competence
              </h4>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span>Frontend Engineering</span>
                    <span className="text-primary">Advanced</span>
                  </div>
                  <div className="h-3 w-full bg-muted border border-black rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    <div className="h-full bg-[#ffde47] rounded-r border-r border-black" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span>Backend Systems</span>
                    <span className="text-primary">Robust</span>
                  </div>
                  <div className="h-3 w-full bg-muted border border-black rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    <div className="h-full bg-[#a3e635] rounded-r border-r border-black" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Achievements Logs Terminal (4 Columns) */}
          <div className="lg:col-span-4 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-black" />
              <h3 className="font-black text-sm text-foreground uppercase tracking-widest">
                Milestones & logs ({developer.achievements.length})
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-dashed border-black/30 space-y-6 font-mono text-xs">
              {developer.achievements.map((achievement, index) => {
                const year = 2025 - index
                return (
                  <div key={index} className="relative">
                    {/* Retro timeline dot */}
                    <div className="absolute -left-[30px] top-1 w-3.5 h-3.5 bg-black rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#a3e635] rounded-full"></div>
                    </div>
                    
                    <div className="bg-[#fafafa] border-2 border-black rounded-lg p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex justify-between items-center mb-1 pb-1 border-b border-dashed border-black/10">
                        <span className="text-[10px] font-black uppercase text-muted-foreground">LOG_0{index + 1}</span>
                        <span className="text-[9px] font-black text-black bg-[#ffde47] border border-black px-1.5 py-0.5 rounded shadow-[0.5px_0.5px_0px_rgba(0,0,0,1)]">
                          {year}
                        </span>
                      </div>
                      <p className="font-bold text-black/80">{achievement}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        {/* Flagship Projects Section */}
        {developer.projects.length > 0 && (
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-8 uppercase tracking-tight">
              📂 Shipped blueprints
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developer.projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.01] transition-all duration-200 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-black uppercase text-muted-foreground">Blueprint #{index + 1}</span>
                      <ShieldCheck className="w-5 h-5 text-[#a3e635]" />
                    </div>
                    
                    <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm font-semibold text-black/75 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 bg-muted border border-black font-black text-[10px] rounded-md shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-dashed border-black/10 pt-4 mt-auto">
                    <Button 
                      asChild 
                      className="font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47] hover:scale-102 transition-all text-xs"
                      size="sm"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                        Launch Portal
                        <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Terminal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8 text-center relative overflow-hidden">
            
            {/* Decorative background grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
              🚀 Initiate structural collaboration
            </h3>
            <p className="text-sm sm:text-base font-bold text-muted-foreground max-w-lg mx-auto mb-6">
              Need clean architecture, robust microservices, or bleeding-edge frontend designs? Connect directly with {developer.name}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="w-full sm:w-auto font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a3e635] hover:scale-102 transition-all py-5 text-sm">
                <a href={`mailto:${developer.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Request consultation
                </a>
              </Button>
              
              <Button variant="neutral" asChild className="w-full sm:w-auto font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffde47] hover:scale-102 transition-all py-5 text-sm">
                <a href={developer.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black shadow-[0.5px_0.5px_0px_rgba(0,0,0,1)] animate-pulse"></span>
              <span className="text-xs font-black text-black/80 uppercase">Available for select projects</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
