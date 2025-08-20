import { Project } from '@/src/constants/projects';

export const projects: Project[] = [
  {
    id: 1,
    title: "VishwaDev Platform",
    description: "A comprehensive platform for students to showcase their projects, connect with peers, and find opportunities. Features include developer profiles, project galleries, and a resource hub.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
    contributors: ["Vishwanath K.", "Disha Raikar", "Raheel H."],
    githubUrl: "https://github.com/VK-10-9/VishwaDev.tech--landingpage",
    liveUrl: "https://vishwaddev.tech",
    image: "/placeholder.svg",
    category: "Web Development"
  },
  {
    id: 2,
    title: "AI-Powered Code Assistant",
    description: "An intelligent code assistant that provides real-time suggestions, bug detection, and automated refactoring to streamline the development process.",
    stack: ["Python", "TensorFlow", "PyTorch", "FastAPI", "Docker"],
    contributors: ["Priya S.", "Amit J."],
    githubUrl: "https://github.com/example/ai-code-assistant",
    liveUrl: "https://ai-assistant.demo.com",
    image: "/placeholder.svg",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Smart Home IoT System",
    description: "An integrated IoT solution for smart homes, allowing users to control lighting, temperature, and security systems remotely via a mobile app.",
    stack: ["Raspberry Pi", "Arduino", "MQTT", "React Native", "Node.js"],
    contributors: ["Rahul K.", "Sneha P."],
    githubUrl: "https://github.com/example/smart-home-iot",
    liveUrl: "https://smarthome.demo.com",
    image: "/placeholder.svg",
    category: "IoT"
  },
  {
    id: 4,
    title: "Mobile Health Tracker",
    description: "A cross-platform mobile app that monitors fitness activities, tracks health metrics, and provides personalized wellness insights.",
    stack: ["Flutter", "Dart", "Firebase", "Google Fit API"],
    contributors: ["Arjun M."],
    githubUrl: "https://github.com/example/health-tracker-app",
    liveUrl: "https://health-tracker.demo.com",
    image: "/placeholder.svg",
    category: "Mobile"
  },
  {
    id: 5,
    title: "ReviewSense",
    description: "A product review summarizer that automatically scrapes, analyzes, and summarizes product reviews to empower smarter decision-making. Uses sentiment analysis and AI-powered summarization to condense hundreds of reviews into concise insights.",
    stack: ["Flask", "Python", "BeautifulSoup", "scikit-learn", "Transformers", "HTML", "CSS", "JavaScript"],
    contributors: ["Yashas Patil"],
    githubUrl: "https://github.com/yashas-patil/ReviewSense",
    liveUrl: "https://reviewsense.vercel.app",
    image: "/placeholder.svg",
    category: "AI/ML"
  }
];