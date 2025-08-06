import { Developer } from "../types/developer";

export const developers: Developer[] = [
  {
    id: 1,
    name: "Vishwanath K.",
    username: "VK",
    role: "Full Stack Developer & Platform Founder",
    bio: "Passionate about building innovative platforms that empower student developers. Creator of VishwaDev.tech - where student innovation meets the world.",
    avatar: "/placeholder.svg?height=200&width=200",
    email: "vishwanathkoliwad@gmail.com",
    phone: "7011329518",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Python", "AI/ML", "Platform Development", "Community Building"],
    projects: [
      {
        name: "VishwaDev Platform",
        description: "A comprehensive platform for student developers to showcase projects and build careers",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://vishwadev.tech"
      },
      {
        name: "SASA - Smart Architecture & Structural Analytics",
        description: "AI-powered platform for structural analysis and architectural design optimization",
        tech: ["Next.js", "Node.js", "MongoDB"],
        link: "https://sasa.engineer"
      },
      {
        name: "Portfolio Website",
        description: "Personal portfolio showcasing design and development work",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        link: "https://vk.vishwadev.tech"
      }
    ],
    achievements: [
      "Platform Founder & Lead Developer",
      "Built community of 500+ student developers",
      "Open source contributor"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/vishwanath-koliwad/",
      twitter: "https://x.com/koliwad64475",
      github: "https://github.com/VK-10-9",
      email: "mailto:vishwanathkoliwad@gmail.com"
    },
    featured: false,
    yearsExperience: 4,
    location: "Karnataka, India"
  },
  {
    id: 2,
    name: "Disha Raikar",
    username: "disha",
    role: "Frontend Developer & UI/UX Designer",
    bio: "Passionate about creating beautiful, user-friendly interfaces. Specializes in React development and modern design systems.",
    avatar: "/placeholder.svg?height=200&width=200",
    email: "disha@vishwadev.tech",
    skills: ["React", "TypeScript", "Figma", "Tailwind CSS", "Next.js", "UI/UX Design"],
    projects: [
      {
        name: "VishwaDev Design System",
        description: "Comprehensive UI component library for the VishwaDev platform",
        tech: ["React", "Storybook", "TypeScript"],
        link: "#"
      },
      {
        name: "Portfolio Website",
        description: "Personal portfolio showcasing design and development work",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        link: "https://disha.vishwadev.tech"
      }
    ],
    achievements: [
      "Led UI/UX design for VishwaDev platform",
      "Created comprehensive design system",
      "Won college hackathon for best design",
      "Active in design communities"
    ],
    social: {
      linkedin: "https://linkedin.com/in/disharaikar",
      twitter: "https://twitter.com/disharaikar",
      github: "https://github.com/disharaikar",
      email: "mailto:disha@vishwadev.tech"
    },
    featured: false,
    yearsExperience: 2,
    location: "Hubli, Karnataka"
  },
  // ... I'll create a script to generate the remaining 48 developers
];

// For now, let me create a few more developers to demonstrate the structure
export const additionalDevelopers: Developer[] = [
  {
    id: 3,
    name: "Yashas Patil",
    username: "yashas_dev",
    role: "Backend Developer & DevOps Engineer",
    bio: "Focused on scalable backend systems and cloud infrastructure. Passionate about performance optimization and system architecture.",
    avatar: "/placeholder.svg?height=200&width=200",
    email: "yashas@vishwadev.tech",
    skills: ["Node.js", "Python", "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"],
    projects: [
      {
        name: "VishwaDev API",
        description: "Scalable backend architecture serving the VishwaDev platform",
        tech: ["Node.js", "Express", "MongoDB"],
        link: "#"
      },
      {
        name: "DevOps Pipeline",
        description: "Automated CI/CD pipeline for faster deployments",
        tech: ["GitHub Actions", "AWS", "Docker"],
        link: "#"
      }
    ],
    achievements: [
      "Built APIs serving thousands of users",
      "Reduced deployment time by 60%",
      "AWS certified developer",
      "Open source contributor"
    ],
    social: {
      linkedin: "https://linkedin.com/in/yashaspatil",
      twitter: "https://twitter.com/yashas_dev",
      github: "https://github.com/yashaspatil",
      email: "mailto:yashas@vishwadev.tech"
    },
    featured: false,
    yearsExperience: 2,
    location: "Dharwad, Karnataka"
  }
];

// Export all developers combined
export const allDevelopers = [...developers, ...additionalDevelopers];
