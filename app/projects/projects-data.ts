import { Project, ProjectContributor } from '@/src/types/project';

// Helper function to create contributor objects mapped to actual developers
const createContributor = (developerId: number, name: string, role: ProjectContributor["role"] = "Contributor"): ProjectContributor => ({
  developerId,
  name,
  role
});

export const projects: Project[] = [
  {
    id: 1,
    title: "Aarogyam",
    tagline: "Health and wellness platform",
    description: "A comprehensive health and wellness platform tailored for holistic wellbeing.",
    category: "Web Development",
    stack: ["Next.js", "React", "Tailwind CSS"],
    difficulty: "advanced",
    status: "active",
    contributors: [
      createContributor(1, "Vishwanath Koliwad", "Lead Developer")
    ],
    teamSize: 1,
    links: [
      { label: "Live Demo", url: "https://aarogyam.vishwadev.tech/", type: "live" }
    ],
    githubUrl: "https://github.com/VK-10-9",
    liveUrl: "https://aarogyam.vishwadev.tech/",
    image: "/placeholder.svg",
    createdDate: "2024-01-01",
    lastUpdated: "2024-05-01",
    duration: "4 months",
    features: ["Health tracking", "Wellness plans", "Interactive dashboard"],
    tags: ["health", "wellness", "platform"],
    featured: true,
    trending: true,
    metrics: { stars: 120, forks: 10, views: 500 }
  },
  {
    id: 2,
    title: "Clausewala",
    tagline: "Smart legal tech solution",
    description: "A smart legal tech solution for dynamic clause generation and document handling.",
    category: "Web Development",
    stack: ["Next.js", "React", "Node.js"],
    difficulty: "intermediate",
    status: "active",
    contributors: [
      createContributor(1, "Vishwanath Koliwad", "Lead Developer")
    ],
    teamSize: 1,
    links: [
      { label: "Live Demo", url: "https://clausewala.in/", type: "live" }
    ],
    githubUrl: "https://github.com/VK-10-9",
    liveUrl: "https://clausewala.in/",
    image: "/placeholder.svg",
    createdDate: "2024-02-01",
    lastUpdated: "2024-05-01",
    duration: "3 months",
    features: ["Dynamic clauses", "Legal templates", "Fast generation"],
    tags: ["legal", "tech", "clauses"],
    featured: true,
    trending: true,
    metrics: { stars: 85, forks: 5, views: 350 }
  },
  {
    id: 3,
    title: "Samip",
    tagline: "Smart digital connectivity",
    description: "A modern application tailored for smart digital connectivity and interaction.",
    category: "Web Development",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    difficulty: "intermediate",
    status: "active",
    contributors: [
      createContributor(1, "Vishwanath Koliwad", "Lead Developer")
    ],
    teamSize: 1,
    links: [
      { label: "Live Demo", url: "https://samip.vishwadev.tech/", type: "live" }
    ],
    githubUrl: "https://github.com/VK-10-9",
    liveUrl: "https://samip.vishwadev.tech/",
    image: "/placeholder.svg",
    createdDate: "2024-03-01",
    lastUpdated: "2024-05-10",
    duration: "2 months",
    features: ["Digital connectivity", "Smart interaction", "Modern UI"],
    tags: ["connectivity", "smart", "digital"],
    featured: true,
    trending: true,
    metrics: { stars: 95, forks: 8, views: 420 }
  },
  {
    id: 4,
    title: "Kruskal",
    tagline: "Algorithm visualization tool",
    description: "Interactive algorithm visualization and graph theory tool focusing on Kruskal's algorithm.",
    category: "Web Development",
    stack: ["JavaScript", "HTML", "CSS"],
    difficulty: "beginner",
    status: "completed",
    contributors: [
      createContributor(1, "Vishwanath Koliwad", "Lead Developer")
    ],
    teamSize: 1,
    links: [
      { label: "Live Demo", url: "https://kruskal.vishwadev.tech/", type: "live" }
    ],
    githubUrl: "https://github.com/VK-10-9",
    liveUrl: "https://kruskal.vishwadev.tech/",
    image: "/placeholder.svg",
    createdDate: "2023-10-01",
    lastUpdated: "2023-11-01",
    duration: "1 month",
    features: ["Graph visualization", "Step-by-step algorithm", "Interactive nodes"],
    tags: ["algorithm", "visualization", "graph-theory"],
    featured: true,
    trending: false,
    metrics: { stars: 150, forks: 20, views: 800 }
  },
  {
    id: 5,
    title: "VishwaDev Platform",
    tagline: "Empowering Student Innovation",
    description: "A comprehensive platform for developers to showcase their projects, connect with peers, and find opportunities. Features include developer profiles, project galleries, and a resource hub.",
    category: "Web Development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
    difficulty: "intermediate",
    status: "active",
    contributors: [
      createContributor(1, "Vishwanath Koliwad", "Lead Developer"),
      createContributor(2, "Disha Raikar", "Contributor")
    ],
    teamSize: 2,
    links: [
      { label: "GitHub", url: "https://github.com/VK-10-9/VishwaDev.tech--landingpage", type: "github" },
      { label: "Live Site", url: "https://vishwadev.tech", type: "live" }
    ],
    githubUrl: "https://github.com/VK-10-9/VishwaDev.tech--landingpage",
    liveUrl: "https://vishwadev.tech",
    image: "/placeholder.svg",
    createdDate: "2024-06-01",
    lastUpdated: "2024-08-20",
    duration: "3 months",
    features: ["Developer profiles", "Project galleries", "Resource hub", "Community features"],
    tags: ["platform", "community", "showcase", "developers"],
    featured: true,
    trending: true,
    metrics: { stars: 156, forks: 23, views: 2340 }
  },
  {
    id: 6,
    title: "Haazri",
    tagline: "Smart attendance management system",
    description: "A smart attendance management system built by Team Vidyut for seamless tracking and reporting.",
    category: "Web Development",
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    difficulty: "intermediate",
    status: "active",
    contributors: [
      createContributor(1, "Vishwanath Koliwad", "Lead Developer"),
      createContributor(4, "Bhumika Dalabhanjan", "Contributor"),
      createContributor(3, "Raheel H.", "Contributor"),
      createContributor(2, "Disha Raikar", "Contributor")
    ],
    teamSize: 4,
    links: [
      { label: "Live Demo", url: "https://haazri.vishwadev.tech/", type: "live" }
    ],
    githubUrl: "https://github.com/VK-10-9",
    liveUrl: "https://haazri.vishwadev.tech/",
    image: "/placeholder.svg",
    createdDate: "2024-04-01",
    lastUpdated: "2024-08-01",
    duration: "4 months",
    features: ["Attendance tracking", "Smart reports", "Team management", "Real-time dashboard"],
    tags: ["attendance", "management", "team", "dashboard"],
    featured: true,
    trending: true,
    metrics: { stars: 110, forks: 12, views: 600 }
  },
  {
    id: 7,
    title: "Krishinetra",
    tagline: "Smart agricultural monitoring",
    description: "An agricultural monitoring platform built by Team Vidyut to empower farmers with smart insights and real-time data.",
    category: "Web Development",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    difficulty: "intermediate",
    status: "active",
    contributors: [
      createContributor(1, "Vishwanath Koliwad", "Lead Developer"),
      createContributor(4, "Bhumika Dalabhanjan", "Contributor"),
      createContributor(3, "Raheel H.", "Contributor"),
      createContributor(2, "Disha Raikar", "Contributor")
    ],
    teamSize: 4,
    links: [
      { label: "Live Demo", url: "https://krishinetra.vishwadev.tech/", type: "live" }
    ],
    githubUrl: "https://github.com/VK-10-9",
    liveUrl: "https://krishinetra.vishwadev.tech/",
    image: "/placeholder.svg",
    createdDate: "2024-05-01",
    lastUpdated: "2024-08-10",
    duration: "3 months",
    features: ["Crop monitoring", "Smart alerts", "Farmer dashboard", "Data insights"],
    tags: ["agriculture", "monitoring", "farmers", "smart"],
    featured: true,
    trending: true,
    metrics: { stars: 95, forks: 9, views: 480 }
  },
  {
    id: 8,
    title: "Vidyut",
    tagline: "Team Vidyut's core platform",
    description: "The flagship platform of Team Vidyut — a collaborative hub representing the team's collective vision and projects.",
    category: "Web Development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    difficulty: "advanced",
    status: "active",
    contributors: [
      createContributor(1, "Vishwanath Koliwad", "Lead Developer"),
      createContributor(4, "Bhumika Dalabhanjan", "Contributor"),
      createContributor(3, "Raheel H.", "Contributor"),
      createContributor(2, "Disha Raikar", "Contributor")
    ],
    teamSize: 4,
    links: [
      { label: "Live Demo", url: "https://vidyut.vishwadev.tech/", type: "live" }
    ],
    githubUrl: "https://github.com/VK-10-9",
    liveUrl: "https://vidyut.vishwadev.tech/",
    image: "/placeholder.svg",
    createdDate: "2024-03-01",
    lastUpdated: "2024-08-15",
    duration: "5 months",
    features: ["Team collaboration", "Project portfolio", "Smart UI", "Developer showcase"],
    tags: ["team", "collaboration", "platform", "vidyut"],
    featured: true,
    trending: true,
    metrics: { stars: 180, forks: 25, views: 950 }
  }
];