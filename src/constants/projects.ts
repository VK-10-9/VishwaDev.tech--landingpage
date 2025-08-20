export interface Project {
  id: number | string;
  title: string;
  tagline?: string;
  summary?: string;
  description: string;
  stack: string[];
  contributors: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  url?: string;
  category?: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "DevFlow",
    tagline: "Real-time collaboration platform for developers",
    description:
      "A comprehensive platform that enables seamless collaboration between developers with live code sharing, integrated chat, and project management tools.",
    stack: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
    contributors: ["Arjun M", "Priya S"],
    githubUrl: "https://github.com/example/devflow",
    liveUrl: "https://devflow.demo.com",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "EcoTrack",
    tagline: "AI-powered carbon footprint tracker",
    description:
      "Smart application that helps individuals and organizations track, analyze, and reduce their carbon footprint using machine learning algorithms.",
    stack: ["React", "Python", "TensorFlow", "MongoDB"],
    contributors: ["Rahul K", "Sneha P", "Amit J"],
    githubUrl: "https://github.com/example/ecotrack",
    liveUrl: "https://ecotrack.demo.com",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "CodeMentor AI",
    tagline: "Intelligent code review and mentoring assistant",
    description:
      "An AI-powered tool that provides instant code reviews, suggests improvements, and offers personalized learning paths for developers.",
    stack: ["Vue.js", "Node.js", "OpenAI API", "Redis"],
    contributors: ["Maya L", "Kiran R"],
    githubUrl: "https://github.com/example/codementor-ai",
    liveUrl: "https://codementor-ai.demo.com",
    image: "/placeholder.svg?height=200&width=400",
  },
];

export const galleryProjects: GalleryProject[] = [
  {
    id: "project-1",
    title: "SmartCampus IoT",
    summary:
      "Revolutionary IoT platform connecting campus infrastructure with real-time monitoring, energy optimization, and predictive maintenance for educational institutions.",
    url: "/projects/smartcampus-iot",
    image: "/placeholder.svg?height=300&width=450&text=IoT+Campus+Dashboard",
  },
  {
    id: "project-2",
    title: "NeuroLearn AI",
    summary:
      "Adaptive learning platform using neural networks to personalize educational content, track learning patterns, and optimize study schedules for maximum retention.",
    url: "/projects/neurolearn-ai",
    image: "/placeholder.svg?height=300&width=450&text=AI+Learning+Platform",
  },
  {
    id: "project-3",
    title: "BlockChain Voting",
    summary:
      "Secure, transparent voting system built on blockchain technology ensuring tamper-proof elections with real-time results and complete audit trails.",
    url: "/projects/blockchain-voting",
    image: "/placeholder.svg?height=300&width=450&text=Blockchain+Voting+System",
  },
  {
    id: "project-4",
    title: "GreenTech Monitor",
    summary:
      "Environmental monitoring solution using satellite data and machine learning to track deforestation, pollution levels, and climate change indicators.",
    url: "/projects/greentech-monitor",
    image: "/placeholder.svg?height=300&width=450&text=Environmental+Monitoring",
  },
  {
    id: "project-5",
    title: "HealthSync Wearables",
    summary:
      "Comprehensive health monitoring ecosystem integrating wearable devices, AI diagnostics, and telemedicine for preventive healthcare management.",
    url: "/projects/healthsync-wearables",
    image: "/placeholder.svg?height=300&width=450&text=Health+Monitoring+App",
  },
  {
    id: "project-6",
    title: "QuantumCrypt Security",
    summary:
      "Next-generation cybersecurity framework leveraging quantum encryption algorithms to protect sensitive data against future quantum computing threats.",
    url: "/projects/quantumcrypt-security",
    image: "/placeholder.svg?height=300&width=450&text=Quantum+Security+System",
  },
];
