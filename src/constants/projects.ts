import { Project, GalleryProject, ProjectContributor } from "@/src/types/project"

// Helper function to create contributor objects
const createContributor = (developerId: number, name: string, role: ProjectContributor["role"] = "Contributor"): ProjectContributor => ({
  developerId,
  name,
  role
})

export const featuredProjects: Project[] = [
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
    title: "SASA Engineers",
    tagline: "Structural Intelligence Workspace",
    description: "Self-contained structural engineering workspace and design lab with premium cinematic HUD aesthetics.",
    category: "Web Development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    difficulty: "advanced",
    status: "active",
    contributors: [
      createContributor(1, "Vishwanath Koliwad", "Lead Developer")
    ],
    teamSize: 1,
    links: [
      { label: "Live Demo", url: "https://sasa.engineer/", type: "live" }
    ],
    githubUrl: "https://github.com/VK-10-9",
    liveUrl: "https://sasa.engineer/",
    image: "/placeholder.svg",
    createdDate: "2024-04-01",
    lastUpdated: "2024-05-15",
    duration: "3 months",
    features: ["Cinematic HUD UI", "Three.js CAD viewer", "Structural calculation sheets"],
    tags: ["engineering", "cad", "hud", "workspace"],
    featured: true,
    trending: true,
    metrics: { stars: 145, forks: 15, views: 600 }
  }
];

export const galleryProjects: GalleryProject[] = [
  {
    id: "project-aarogyam",
    title: "Aarogyam",
    summary: "A comprehensive health and wellness platform. Made by Vishwanath Koliwad - VK.",
    url: "https://aarogyam.vishwadev.tech/",
    image: "/placeholder.svg",
  },
  {
    id: "project-clausewala",
    title: "Clausewala",
    summary: "A smart legal tech solution for dynamic generation. Made by Vishwanath Koliwad - VK.",
    url: "https://clausewala.in/",
    image: "/placeholder.svg",
  },
  {
    id: "project-samip",
    title: "Samip",
    summary: "A modern application tailored for smart digital connectivity. Made by Vishwanath Koliwad - VK.",
    url: "https://samip.vishwadev.tech/",
    image: "/placeholder.svg",
  },
  {
    id: "project-kruskal",
    title: "Kruskal",
    summary: "Interactive algorithm visualization and graph theory tool. Made by Vishwanath Koliwad - VK.",
    url: "https://kruskal.vishwadev.tech/",
    image: "/placeholder.svg",
  },
  {
    id: "project-sasa",
    title: "SASA Engineers",
    summary: "Self-contained structural engineering platform and Design Lab. Made by Vishwanath Koliwad - VK.",
    url: "https://sasa.engineer/",
    image: "/placeholder.svg",
  },
  {
    id: "project-1",
    title: "SmartCampus IoT",
    summary:
      "Revolutionary IoT platform connecting campus infrastructure with real-time monitoring, energy optimization, and predictive maintenance for educational institutions.",
    url: "/projects/smartcampus-iot",
    image: "/placeholder.svg",
  },
  {
    id: "project-2",
    title: "NeuroLearn AI",
    summary:
      "Adaptive learning platform using neural networks to personalize educational content, track learning patterns, and optimize study schedules for maximum retention.",
    url: "/projects/neurolearn-ai",
    image: "/placeholder.svg",
  },
  {
    id: "project-3",
    title: "BlockChain Voting",
    summary:
      "Secure, transparent voting system built on blockchain technology ensuring tamper-proof elections with real-time results and complete audit trails.",
    url: "/projects/blockchain-voting",
    image: "/placeholder.svg",
  },
  {
    id: "project-4",
    title: "GreenTech Monitor",
    summary:
      "Environmental monitoring solution using satellite data and machine learning to track deforestation, pollution levels, and climate change indicators.",
    url: "/projects/greentech-monitor",
    image: "/placeholder.svg",
  },
  {
    id: "project-5",
    title: "HealthSync Wearables",
    summary:
      "Comprehensive health monitoring ecosystem integrating wearable devices, AI diagnostics, and telemedicine for preventive healthcare management.",
    url: "/projects/healthsync-wearables",
    image: "/placeholder.svg",
  },
  {
    id: "project-6",
    title: "QuantumCrypt Security",
    summary:
      "Next-generation cybersecurity framework leveraging quantum encryption algorithms to protect sensitive data against future quantum computing threats.",
    url: "/projects/quantumcrypt-security",
    image: "/placeholder.svg",
  },
];
