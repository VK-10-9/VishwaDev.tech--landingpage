export interface TeamMember {
  developerId: number;
  name: string;
  username: string;
  role: string;
}

export interface TeamProject {
  name: string;
  url: string;
  description: string;
}

export interface Team {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string; // accent color for card
  emoji: string;
  members: TeamMember[];
  projects: TeamProject[];
  founded: string;
  active: boolean;
}

export const teams: Team[] = [
  {
    id: "vidyut",
    name: "Vidyut",
    tagline: "Building the future, one project at a time",
    description:
      "Vidyut is a tightly-knit team of 4 full-stack developers crafting impactful web solutions — from smart attendance systems to agricultural monitoring platforms. Powered by passion and caffeine.",
    color: "#f59e0b",
    emoji: "⚡",
    members: [
      { developerId: 1, name: "Vishwanath K.", username: "VK", role: "Lead Developer" },
      { developerId: 4, name: "Bhumika Dalabhanjan", username: "bhumi", role: "Frontend Developer" },
      { developerId: 3, name: "Raheel H.", username: "Zeus", role: "Backend Developer" },
      { developerId: 2, name: "Disha Raikar", username: "disha", role: "Full Stack Developer" },
    ],
    projects: [
      { name: "Haazri", url: "https://haazri.vishwadev.tech/", description: "Smart attendance management system" },
      { name: "Krishinetra", url: "https://krishinetra.vishwadev.tech/", description: "Agricultural monitoring platform" },
      { name: "Vidyut", url: "https://vidyut.vishwadev.tech/", description: "Team flagship platform" },
    ],
    founded: "2024",
    active: true,
  },
  {
    id: "sasa",
    name: "SASA",
    tagline: "Structural Intelligence, by design",
    description:
      "SASA is a developer collective focused on building structured, scalable software systems with an emphasis on clean architecture and design excellence.",
    color: "#b91c1c",
    emoji: "🏛️",
    members: [
      { developerId: 1, name: "Vishwanath K.", username: "VK", role: "Principal Architect" },
      { developerId: 13, name: "Nihal", username: "nihal", role: "UI/UX Developer" },
      { developerId: 11, name: "Viraj", username: "viraj", role: "Full Stack Developer" },
      { developerId: 10, name: "Vineet", username: "vineet", role: "Frontend Developer" }
    ],
    projects: [
      { name: "SASA Engineers", url: "https://sasa.engineer/", description: "Cinematic industrial structural portfolio and Design Lab platform" }
    ],
    founded: "2024",
    active: true,
  },
  {
    id: "resonance",
    name: "Resonance",
    tagline: "Ideas that echo",
    description:
      "Resonance is a creative-technical team exploring the intersection of design and engineering — building products that resonate with users through thoughtful UX and robust code.",
    color: "#ec4899",
    emoji: "🎵",
    members: [
      { developerId: 12, name: "Vikas", username: "vikas", role: "Backend Developer" },
      { developerId: 14, name: "Amogh", username: "amogh", role: "Full Stack Developer" },
      { developerId: 15, name: "Joel", username: "joel", role: "Full Stack Developer" },
      { developerId: 1, name: "Vishwanath K.", username: "VK", role: "Lead Mentor" }
    ],
    projects: [
      { name: "Aura", url: "https://aura.vishwadev.tech/", description: "Interactive audio-visual synthesizer platform" },
      { name: "Pulse", url: "https://pulse.vishwadev.tech/", description: "Real-time design token collaborative playground" }
    ],
    founded: "2025",
    active: true,
  },
];
