import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, Globe, ExternalLink, Star, Users, Code, Award } from "lucide-react"
import Link from "next/link"

export default function DevsPage() {
  const developers = [
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
    },
    {
      id: 4,
      name: "Shravani Sindagi",
      username: "shravani_codes",
      role: "Mobile App Developer",
      bio: "Creating amazing mobile experiences with React Native and Flutter. Passionate about mobile UX and cross-platform development.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "shravani@vishwadev.tech",
      skills: ["React Native", "Flutter", "Dart", "iOS", "Android", "Firebase", "Mobile UI"],
      projects: [
        {
          name: "VishwaDev Mobile App",
          description: "Mobile companion app for the VishwaDev platform",
          tech: ["React Native", "TypeScript", "Redux"],
          link: "#"
        },
        {
          name: "Student Tracker",
          description: "Academic progress tracking app for students",
          tech: ["Flutter", "Firebase", "Provider"],
          link: "#"
        }
      ],
      achievements: [
        "Developed mobile apps with 10k+ downloads",
        "Google Play featured developer",
        "Mobile development mentor",
        "Won mobile app hackathon"
      ],
      social: {
        linkedin: "https://linkedin.com/in/shravanis",
        twitter: "https://twitter.com/shravani_codes",
        github: "https://github.com/shravanis",
        email: "mailto:shravani@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Belgavi, Karnataka"
    },
    {
      id: 5,
      name: "Rahul Shastri",
      username: "rahul_ml",
      role: "AI/ML Engineer & Data Scientist",
      bio: "Exploring the frontiers of artificial intelligence and machine learning. Building intelligent systems that solve real-world problems in education and technology.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "rahul@vishwadev.tech",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP", "Data Science"],
      projects: [
        {
          name: "Smart Recommendation System",
          description: "AI-powered project recommendation system for VishwaDev users",
          tech: ["Python", "TensorFlow", "FastAPI"],
          link: "#"
        },
        {
          name: "Code Quality Analyzer",
          description: "ML model for automated code review and quality assessment",
          tech: ["Python", "scikit-learn", "NLP"],
          link: "#"
        }
      ],
      achievements: [
        "Built ML models with 92%+ accuracy",
        "Published research paper in AI conference",
        "AI hackathon winner (2024)",
        "Open source ML contributor"
      ],
      social: {
        linkedin: "https://linkedin.com/in/rahulshastri",
        twitter: "https://twitter.com/rahul_ml",
        github: "https://github.com/rahulshastri",
        email: "mailto:rahul@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Bangalore, Karnataka"
    },
    {
      id: 6,
      name: "Bhumika Dalvi",
      username: "bhumika_d",
      role: "Frontend Developer & Technical Writer",
      bio: "Passionate about creating intuitive user interfaces and documenting technical knowledge. Contributes to open source projects and technical blogs.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "bhumika@vishwadev.tech",
      skills: ["React", "Vue.js", "JavaScript", "Technical Writing", "Documentation", "Open Source"],
      projects: [
        {
          name: "VishwaDev Documentation",
          description: "Comprehensive documentation platform for developers",
          tech: ["Next.js", "MDX", "TypeScript"],
          link: "#"
        },
        {
          name: "Code Tutorial Platform",
          description: "Interactive coding tutorials for beginners",
          tech: ["React", "CodeMirror", "Node.js"],
          link: "#"
        }
      ],
      achievements: [
        "Authored 50+ technical articles",
        "Maintained documentation for 5+ open source projects",
        "Google Season of Docs participant",
        "Active tech community contributor"
      ],
      social: {
        linkedin: "https://linkedin.com/in/bhumikaD",
        twitter: "https://twitter.com/bhumika_d",
        github: "https://github.com/bhumikaD",
        email: "mailto:bhumika@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 1,
      location: "Pune, Maharashtra"
    },
    {
      id: 7,
      name: "Arjun Mehta",
      username: "arjun_dev",
      role: "Cybersecurity Engineer",
      bio: "Passionate about securing digital systems and protecting user data. Specializes in web application security and ethical hacking.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "arjun@vishwadev.tech",
      skills: ["Cybersecurity", "Penetration Testing", "Python", "Network Security", "OWASP", "Ethical Hacking"],
      projects: [
        {
          name: "VishwaDev Security Audit",
          description: "Comprehensive security assessment and hardening of the platform",
          tech: ["Python", "Burp Suite", "OWASP"],
          link: "#"
        },
        {
          name: "SecureCode Scanner",
          description: "Automated vulnerability scanner for student projects",
          tech: ["Python", "Static Analysis", "Security"],
          link: "#"
        }
      ],
      achievements: [
        "CEH (Certified Ethical Hacker)",
        "Identified 20+ security vulnerabilities",
        "Security workshop conductor",
        "Bug bounty hunter"
      ],
      social: {
        linkedin: "https://linkedin.com/in/arjunmehta",
        twitter: "https://twitter.com/arjun_dev",
        github: "https://github.com/arjunmehta",
        email: "mailto:arjun@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Chennai, Tamil Nadu"
    },
    {
      id: 8,
      name: "Priya Sharma",
      username: "priya_data",
      role: "Data Scientist & Analytics Expert",
      bio: "Turning data into actionable insights. Expert in statistical analysis, data visualization, and building predictive models for educational platforms.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "priya@vishwadev.tech",
      skills: ["Python", "R", "SQL", "Tableau", "Power BI", "Machine Learning", "Statistics", "Data Mining"],
      projects: [
        {
          name: "VishwaDev Analytics Dashboard",
          description: "Real-time analytics and insights platform for user engagement",
          tech: ["Python", "Tableau", "PostgreSQL"],
          link: "#"
        },
        {
          name: "Student Performance Predictor",
          description: "ML model to predict student success patterns",
          tech: ["Python", "scikit-learn", "Pandas"],
          link: "#"
        }
      ],
      achievements: [
        "Built analytics serving 10k+ users",
        "Data Science certification from IBM",
        "Published data insights research",
        "Kaggle competition winner"
      ],
      social: {
        linkedin: "https://linkedin.com/in/priyasharma",
        twitter: "https://twitter.com/priya_data",
        github: "https://github.com/priyasharma",
        email: "mailto:priya@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Mumbai, Maharashtra"
    },
    {
      id: 9,
      name: "Kiran Patel",
      username: "kiran_blockchain",
      role: "Blockchain Developer",
      bio: "Building decentralized solutions and exploring Web3 technologies. Passionate about creating transparent and secure systems using blockchain.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "kiran@vishwadev.tech",
      skills: ["Solidity", "Web3", "Ethereum", "Smart Contracts", "DeFi", "IPFS", "Truffle", "Hardhat"],
      projects: [
        {
          name: "StudentCoin DApp",
          description: "Decentralized platform for student project funding and rewards",
          tech: ["Solidity", "React", "Web3.js"],
          link: "#"
        },
        {
          name: "Certificate Verification System",
          description: "Blockchain-based certificate authenticity verification",
          tech: ["Ethereum", "IPFS", "Smart Contracts"],
          link: "#"
        }
      ],
      achievements: [
        "Developed 5+ DApps with 1000+ users",
        "Blockchain hackathon winner",
        "Smart contract auditor",
        "Web3 community contributor"
      ],
      social: {
        linkedin: "https://linkedin.com/in/kiranpatel",
        twitter: "https://twitter.com/kiran_blockchain",
        github: "https://github.com/kiranpatel",
        email: "mailto:kiran@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Ahmedabad, Gujarat"
    },
    {
      id: 10,
      name: "Sneha Reddy",
      username: "sneha_cloud",
      role: "Cloud Solutions Architect",
      bio: "Designing and implementing scalable cloud infrastructure. Expert in AWS, Azure, and Google Cloud Platform with focus on cost optimization.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "sneha@vishwadev.tech",
      skills: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker", "Microservices", "Serverless"],
      projects: [
        {
          name: "VishwaDev Cloud Migration",
          description: "Migrated entire platform to cloud with 99.9% uptime",
          tech: ["AWS", "Kubernetes", "Terraform"],
          link: "#"
        },
        {
          name: "Auto-Scaling System",
          description: "Intelligent scaling system reducing costs by 40%",
          tech: ["AWS Lambda", "CloudWatch", "EC2"],
          link: "#"
        }
      ],
      achievements: [
        "AWS Solutions Architect Certified",
        "Reduced infrastructure costs by 40%",
        "Managed 50+ microservices",
        "Cloud migration specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/snehareddy",
        twitter: "https://twitter.com/sneha_cloud",
        github: "https://github.com/snehareddy",
        email: "mailto:sneha@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Hyderabad, Telangana"
    },
    {
      id: 11,
      name: "Rohit Kumar",
      username: "rohit_game",
      role: "Game Developer & Unity Expert",
      bio: "Creating engaging educational games and interactive experiences. Passionate about gamification in learning and VR/AR technologies.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "rohit@vishwadev.tech",
      skills: ["Unity", "C#", "Game Design", "VR/AR", "3D Modeling", "Animation", "GameDev", "Blender"],
      projects: [
        {
          name: "CodeQuest Game",
          description: "Educational coding game teaching programming concepts",
          tech: ["Unity", "C#", "Game Design"],
          link: "#"
        },
        {
          name: "VR Campus Tour",
          description: "Virtual reality experience for college campus exploration",
          tech: ["Unity", "VR", "3D Modeling"],
          link: "#"
        }
      ],
      achievements: [
        "Published 3 educational games",
        "50k+ game downloads",
        "Unity certified developer",
        "Game jam winner"
      ],
      social: {
        linkedin: "https://linkedin.com/in/rohitkumar",
        twitter: "https://twitter.com/rohit_game",
        github: "https://github.com/rohitkumar",
        email: "mailto:rohit@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Delhi, India"
    },
    {
      id: 12,
      name: "Anita Singh",
      username: "anita_iot",
      role: "IoT Engineer & Hardware Developer",
      bio: "Building smart IoT solutions and embedded systems. Passionate about connecting physical devices to digital platforms for innovative solutions.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "anita@vishwadev.tech",
      skills: ["Arduino", "Raspberry Pi", "C++", "Python", "IoT", "Sensors", "Embedded Systems", "Hardware"],
      projects: [
        {
          name: "Smart Campus System",
          description: "IoT-based campus monitoring and automation system",
          tech: ["Arduino", "Raspberry Pi", "Python"],
          link: "#"
        },
        {
          name: "Air Quality Monitor",
          description: "Real-time air quality monitoring and alert system",
          tech: ["IoT Sensors", "Arduino", "Cloud"],
          link: "#"
        }
      ],
      achievements: [
        "Built 10+ IoT prototypes",
        "Hardware hackathon winner",
        "IoT workshop conductor",
        "Published IoT research paper"
      ],
      social: {
        linkedin: "https://linkedin.com/in/anitasingh",
        twitter: "https://twitter.com/anita_iot",
        github: "https://github.com/anitasingh",
        email: "mailto:anita@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Jaipur, Rajasthan"
    },
    {
      id: 13,
      name: "Vikash Agrawal",
      username: "vikash_qa",
      role: "Quality Assurance Engineer",
      bio: "Ensuring software quality through comprehensive testing strategies. Expert in automated testing, performance testing, and QA processes.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "vikash@vishwadev.tech",
      skills: ["Selenium", "Jest", "Cypress", "TestNG", "API Testing", "Performance Testing", "QA Automation", "Manual Testing"],
      projects: [
        {
          name: "VishwaDev Test Suite",
          description: "Comprehensive automated testing framework for the platform",
          tech: ["Selenium", "Jest", "CI/CD"],
          link: "#"
        },
        {
          name: "Performance Monitor",
          description: "Real-time performance testing and monitoring system",
          tech: ["JMeter", "Grafana", "API Testing"],
          link: "#"
        }
      ],
      achievements: [
        "Reduced bugs by 80% through automation",
        "ISTQB certified tester",
        "Built testing framework used by team",
        "Quality assurance mentor"
      ],
      social: {
        linkedin: "https://linkedin.com/in/vikashagrawal",
        twitter: "https://twitter.com/vikash_qa",
        github: "https://github.com/vikashagrawal",
        email: "mailto:vikash@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Indore, Madhya Pradesh"
    },
    {
      id: 14,
      name: "Kavya Nair",
      username: "kavya_product",
      role: "Product Manager & Strategy",
      bio: "Bridging technology and user needs through strategic product development. Passionate about creating user-centric solutions and driving product growth.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "kavya@vishwadev.tech",
      skills: ["Product Strategy", "User Research", "Analytics", "Agile", "Roadmapping", "A/B Testing", "Growth Hacking", "Leadership"],
      projects: [
        {
          name: "VishwaDev Product Strategy",
          description: "Comprehensive product roadmap and user experience optimization",
          tech: ["Analytics", "User Research", "Strategy"],
          link: "#"
        },
        {
          name: "Student Engagement Initiative",
          description: "Data-driven approach to increase user engagement by 150%",
          tech: ["A/B Testing", "Analytics", "Growth"],
          link: "#"
        }
      ],
      achievements: [
        "Increased platform engagement by 150%",
        "Led product strategy for 50k+ users",
        "Certified Scrum Product Owner",
        "Product management mentor"
      ],
      social: {
        linkedin: "https://linkedin.com/in/kavyanair",
        twitter: "https://twitter.com/kavya_product",
        github: "https://github.com/kavyanair",
        email: "mailto:kavya@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Kochi, Kerala"
    },
    {
      id: 15,
      name: "Siddharth Joshi",
      username: "sid_react",
      role: "React Native Developer",
      bio: "Mobile-first developer creating seamless cross-platform experiences. Expert in performance optimization and native integrations.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "siddharth@vishwadev.tech",
      skills: ["React Native", "TypeScript", "Redux", "Native iOS", "Android", "Performance", "Expo", "Testing"],
      projects: [
        {
          name: "EduTrack Mobile",
          description: "Cross-platform educational tracking application",
          tech: ["React Native", "Redux", "Firebase"],
          link: "#"
        }
      ],
      achievements: [
        "Built apps with 500k+ downloads",
        "React Native expert",
        "Performance optimization specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/siddharthjoshi",
        twitter: "https://twitter.com/sid_react",
        github: "https://github.com/siddharthjoshi",
        email: "mailto:siddharth@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Surat, Gujarat"
    },
    {
      id: 16,
      name: "Meera Kapoor",
      username: "meera_ui",
      role: "UI/UX Designer",
      bio: "Creating beautiful and intuitive user experiences. Passionate about user research and design systems.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "meera@vishwadev.tech",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping", "Design Systems", "Accessibility"],
      projects: [
        {
          name: "Student Portal Redesign",
          description: "Complete UX overhaul increasing user engagement by 40%",
          tech: ["Figma", "User Research", "Prototyping"],
          link: "#"
        }
      ],
      achievements: [
        "Improved user engagement by 40%",
        "Design system creator",
        "UX research specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/meerakapoor",
        twitter: "https://twitter.com/meera_ui",
        github: "https://github.com/meerakapoor",
        email: "mailto:meera@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Jaipur, Rajasthan"
    },
    {
      id: 17,
      name: "Amit Singh",
      username: "amit_backend",
      role: "Backend Engineer",
      bio: "Building robust and scalable server-side applications. Expert in microservices architecture and API design.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "amit@vishwadev.tech",
      skills: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Redis", "Apache Kafka", "API Design"],
      projects: [
        {
          name: "Scalable User Management API",
          description: "High-performance user management system serving millions",
          tech: ["Java", "Spring Boot", "PostgreSQL"],
          link: "#"
        }
      ],
      achievements: [
        "Built APIs serving 1M+ requests/day",
        "Microservices architecture expert",
        "Java Spring certified"
      ],
      social: {
        linkedin: "https://linkedin.com/in/amitsingh",
        twitter: "https://twitter.com/amit_backend",
        github: "https://github.com/amitsingh",
        email: "mailto:amit@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Noida, Uttar Pradesh"
    },
    {
      id: 18,
      name: "Riya Gupta",
      username: "riya_flutter",
      role: "Flutter Developer",
      bio: "Creating beautiful mobile applications with Flutter. Passionate about cross-platform development and UI animations.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "riya@vishwadev.tech",
      skills: ["Flutter", "Dart", "Firebase", "State Management", "Animations", "Material Design", "Provider"],
      projects: [
        {
          name: "Learning Companion App",
          description: "Interactive learning app with gamification elements",
          tech: ["Flutter", "Firebase", "Provider"],
          link: "#"
        }
      ],
      achievements: [
        "Flutter certified developer",
        "Built 8+ mobile applications",
        "UI animation specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/riyagupta",
        twitter: "https://twitter.com/riya_flutter",
        github: "https://github.com/riyagupta",
        email: "mailto:riya@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 1,
      location: "Chandigarh, Punjab"
    },
    {
      id: 19,
      name: "Deepak Kumar",
      username: "deepak_ai",
      role: "Machine Learning Engineer",
      bio: "Developing intelligent systems using deep learning and neural networks. Focused on computer vision and NLP applications.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "deepak@vishwadev.tech",
      skills: ["Python", "TensorFlow", "Keras", "Computer Vision", "NLP", "Deep Learning", "PyTorch"],
      projects: [
        {
          name: "Smart Content Moderation",
          description: "AI-powered content moderation system with 95% accuracy",
          tech: ["Python", "TensorFlow", "Computer Vision"],
          link: "#"
        }
      ],
      achievements: [
        "Built ML models with 95%+ accuracy",
        "Computer vision expert",
        "Published AI research"
      ],
      social: {
        linkedin: "https://linkedin.com/in/deepakkumar",
        twitter: "https://twitter.com/deepak_ai",
        github: "https://github.com/deepakkumar",
        email: "mailto:deepak@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Bengaluru, Karnataka"
    },
    {
      id: 20,
      name: "Pooja Sharma",
      username: "pooja_test",
      role: "QA Automation Engineer",
      bio: "Ensuring software quality through comprehensive testing frameworks. Expert in test automation and CI/CD integration.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "pooja@vishwadev.tech",
      skills: ["Selenium", "Cypress", "Jest", "TestNG", "API Testing", "CI/CD", "Test Automation"],
      projects: [
        {
          name: "Automated Testing Framework",
          description: "Comprehensive testing suite reducing manual testing by 80%",
          tech: ["Selenium", "Cypress", "Jenkins"],
          link: "#"
        }
      ],
      achievements: [
        "Reduced manual testing by 80%",
        "ISTQB certified tester",
        "Test automation expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/poojasharma",
        twitter: "https://twitter.com/pooja_test",
        github: "https://github.com/poojasharma",
        email: "mailto:pooja@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Gurgaon, Haryana"
    },
    {
      id: 21,
      name: "Rajesh Patel",
      username: "rajesh_devops",
      role: "DevOps Engineer",
      bio: "Streamlining development workflows and maintaining robust infrastructure. Expert in containerization and cloud automation.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "rajesh@vishwadev.tech",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform", "Monitoring", "CI/CD"],
      projects: [
        {
          name: "Infrastructure as Code",
          description: "Automated infrastructure deployment reducing setup time by 90%",
          tech: ["Terraform", "AWS", "Docker"],
          link: "#"
        }
      ],
      achievements: [
        "Reduced deployment time by 90%",
        "AWS DevOps certified",
        "Infrastructure automation expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/rajeshpatel",
        twitter: "https://twitter.com/rajesh_devops",
        github: "https://github.com/rajeshpatel",
        email: "mailto:rajesh@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Vadodara, Gujarat"
    },
    {
      id: 22,
      name: "Neha Agarwal",
      username: "neha_frontend",
      role: "Frontend Developer",
      bio: "Creating responsive and interactive web applications. Passionate about modern JavaScript frameworks and web performance.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "neha@vishwadev.tech",
      skills: ["React", "Vue.js", "JavaScript", "TypeScript", "Webpack", "SCSS", "Web Performance"],
      projects: [
        {
          name: "E-Learning Platform Frontend",
          description: "Modern, responsive frontend for online learning platform",
          tech: ["React", "TypeScript", "SCSS"],
          link: "#"
        }
      ],
      achievements: [
        "Built high-performance web apps",
        "Web performance optimization expert",
        "Modern JS framework specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/nehaagarwal",
        twitter: "https://twitter.com/neha_frontend",
        github: "https://github.com/nehaagarwal",
        email: "mailto:neha@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Lucknow, Uttar Pradesh"
    },
    {
      id: 23,
      name: "Kartik Mehta",
      username: "kartik_fullstack",
      role: "Full Stack Developer",
      bio: "End-to-end application development with modern tech stack. Expert in both frontend and backend technologies.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "kartik@vishwadev.tech",
      skills: ["React", "Node.js", "Express", "MongoDB", "GraphQL", "TypeScript", "Docker"],
      projects: [
        {
          name: "Project Management Tool",
          description: "Full-stack project management application for teams",
          tech: ["React", "Node.js", "MongoDB"],
          link: "#"
        }
      ],
      achievements: [
        "Full-stack application expert",
        "Built 5+ end-to-end applications",
        "GraphQL implementation specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/kartikmehta",
        twitter: "https://twitter.com/kartik_fullstack",
        github: "https://github.com/kartikmehta",
        email: "mailto:kartik@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Nagpur, Maharashtra"
    },
    {
      id: 24,
      name: "Swati Verma",
      username: "swati_data",
      role: "Data Analyst",
      bio: "Transforming raw data into meaningful insights. Expert in statistical analysis and data visualization.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "swati@vishwadev.tech",
      skills: ["Python", "R", "SQL", "Tableau", "Power BI", "Statistics", "Data Mining", "Excel"],
      projects: [
        {
          name: "Student Performance Analytics",
          description: "Comprehensive analytics dashboard for educational insights",
          tech: ["Python", "Tableau", "SQL"],
          link: "#"
        }
      ],
      achievements: [
        "Built 10+ analytics dashboards",
        "Data visualization expert",
        "Statistical analysis specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/swativerma",
        twitter: "https://twitter.com/swati_data",
        github: "https://github.com/swativerma",
        email: "mailto:swati@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Bhopal, Madhya Pradesh"
    },
    {
      id: 25,
      name: "Arun Kumar",
      username: "arun_cyber",
      role: "Cybersecurity Specialist",
      bio: "Protecting digital assets through advanced security measures. Expert in penetration testing and security auditing.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "arun@vishwadev.tech",
      skills: ["Ethical Hacking", "Penetration Testing", "Security Auditing", "Network Security", "OWASP"],
      projects: [
        {
          name: "Security Assessment Tool",
          description: "Automated security assessment and vulnerability scanning tool",
          tech: ["Python", "Security Tools", "OWASP"],
          link: "#"
        }
      ],
      achievements: [
        "CEH certified",
        "Identified 50+ vulnerabilities",
        "Security workshop conductor"
      ],
      social: {
        linkedin: "https://linkedin.com/in/arunkumar",
        twitter: "https://twitter.com/arun_cyber",
        github: "https://github.com/arunkumar",
        email: "mailto:arun@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Kochi, Kerala"
    },
    {
      id: 26,
      name: "Priyanka Das",
      username: "priyanka_mobile",
      role: "Mobile UI Designer",
      bio: "Designing beautiful and intuitive mobile interfaces. Expert in mobile UX patterns and design systems.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "priyanka@vishwadev.tech",
      skills: ["Mobile Design", "Figma", "Sketch", "Prototyping", "User Research", "Design Systems"],
      projects: [
        {
          name: "Mobile App Design System",
          description: "Comprehensive design system for mobile applications",
          tech: ["Figma", "Design Systems", "Prototyping"],
          link: "#"
        }
      ],
      achievements: [
        "Mobile design specialist",
        "Created 5+ design systems",
        "UX research expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/priyankadas",
        twitter: "https://twitter.com/priyanka_mobile",
        github: "https://github.com/priyankadas",
        email: "mailto:priyanka@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Kolkata, West Bengal"
    },
    {
      id: 27,
      name: "Vikram Singh",
      username: "vikram_node",
      role: "Node.js Developer",
      bio: "Building scalable server-side applications with Node.js. Expert in API development and microservices architecture.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "vikram@vishwadev.tech",
      skills: ["Node.js", "Express", "MongoDB", "Redis", "Microservices", "API Development", "Socket.io"],
      projects: [
        {
          name: "Real-time Chat API",
          description: "Scalable real-time messaging system for educational platforms",
          tech: ["Node.js", "Socket.io", "Redis"],
          link: "#"
        }
      ],
      achievements: [
        "Node.js expert",
        "Built real-time applications",
        "Microservices architect"
      ],
      social: {
        linkedin: "https://linkedin.com/in/vikramsingh",
        twitter: "https://twitter.com/vikram_node",
        github: "https://github.com/vikramsingh",
        email: "mailto:vikram@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Patna, Bihar"
    },
    {
      id: 28,
      name: "Ananya Iyer",
      username: "ananya_react",
      role: "React Developer",
      bio: "Creating modern web applications with React ecosystem. Passionate about component architecture and state management.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "ananya@vishwadev.tech",
      skills: ["React", "Redux", "Context API", "Hooks", "Jest", "React Testing Library", "Next.js"],
      projects: [
        {
          name: "Component Library",
          description: "Reusable React component library for educational apps",
          tech: ["React", "Storybook", "TypeScript"],
          link: "#"
        }
      ],
      achievements: [
        "React specialist",
        "Component library creator",
        "State management expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/ananyaiyer",
        twitter: "https://twitter.com/ananya_react",
        github: "https://github.com/ananyaiyer",
        email: "mailto:ananya@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Chennai, Tamil Nadu"
    },
    {
      id: 29,
      name: "Manish Gupta",
      username: "manish_python",
      role: "Python Developer",
      bio: "Building robust applications with Python. Expert in Django, Flask, and data processing pipelines.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "manish@vishwadev.tech",
      skills: ["Python", "Django", "Flask", "FastAPI", "Celery", "PostgreSQL", "Data Processing"],
      projects: [
        {
          name: "Data Processing Pipeline",
          description: "Automated data processing system for educational analytics",
          tech: ["Python", "Celery", "PostgreSQL"],
          link: "#"
        }
      ],
      achievements: [
        "Python expert",
        "Data pipeline architect",
        "Django specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/manishgupta",
        twitter: "https://twitter.com/manish_python",
        github: "https://github.com/manishgupta",
        email: "mailto:manish@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Kanpur, Uttar Pradesh"
    },
    {
      id: 30,
      name: "Shruti Jain",
      username: "shruti_design",
      role: "Product Designer",
      bio: "Creating user-centered design solutions. Expert in design thinking and product strategy.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "shruti@vishwadev.tech",
      skills: ["Product Design", "User Research", "Figma", "Design Thinking", "Prototyping", "Usability Testing"],
      projects: [
        {
          name: "Student Dashboard Redesign",
          description: "Complete redesign of student dashboard improving usability by 60%",
          tech: ["Figma", "User Research", "Prototyping"],
          link: "#"
        }
      ],
      achievements: [
        "Product design expert",
        "Improved usability by 60%",
        "Design thinking facilitator"
      ],
      social: {
        linkedin: "https://linkedin.com/in/shrutijain",
        twitter: "https://twitter.com/shruti_design",
        github: "https://github.com/shrutijain",
        email: "mailto:shruti@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Indore, Madhya Pradesh"
    },
    {
      id: 31,
      name: "Rohit Sharma",
      username: "rohit_angular",
      role: "Angular Developer",
      bio: "Building enterprise-grade applications with Angular. Expert in TypeScript and RxJS for reactive programming.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "rohits@vishwadev.tech",
      skills: ["Angular", "TypeScript", "RxJS", "NgRx", "Angular Material", "Unit Testing", "PWA"],
      projects: [
        {
          name: "Student Portal PWA",
          description: "Progressive web application for student management",
          tech: ["Angular", "PWA", "TypeScript"],
          link: "#"
        }
      ],
      achievements: [
        "Angular certified developer",
        "PWA specialist",
        "Enterprise application expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/rohitsharma",
        twitter: "https://twitter.com/rohit_angular",
        github: "https://github.com/rohitsharma",
        email: "mailto:rohits@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Ghaziabad, Uttar Pradesh"
    },
    {
      id: 32,
      name: "Kavita Reddy",
      username: "kavita_java",
      role: "Java Developer",
      bio: "Enterprise Java development with Spring framework. Expert in building scalable and maintainable applications.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "kavita@vishwadev.tech",
      skills: ["Java", "Spring Boot", "Hibernate", "Maven", "JUnit", "Microservices", "REST APIs"],
      projects: [
        {
          name: "Learning Management System",
          description: "Enterprise-grade LMS with comprehensive features",
          tech: ["Java", "Spring Boot", "PostgreSQL"],
          link: "#"
        }
      ],
      achievements: [
        "Java Spring certified",
        "Enterprise application architect",
        "Microservices expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/kavitareddy",
        twitter: "https://twitter.com/kavita_java",
        github: "https://github.com/kavitareddy",
        email: "mailto:kavita@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Hyderabad, Telangana"
    },
    {
      id: 33,
      name: "Suresh Kumar",
      username: "suresh_php",
      role: "PHP Developer",
      bio: "Full-stack web development with PHP and modern frameworks. Expert in Laravel and WordPress development.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "suresh@vishwadev.tech",
      skills: ["PHP", "Laravel", "WordPress", "MySQL", "Composer", "RESTful APIs", "MVC Architecture"],
      projects: [
        {
          name: "Content Management Platform",
          description: "Custom CMS for educational content management",
          tech: ["PHP", "Laravel", "MySQL"],
          link: "#"
        }
      ],
      achievements: [
        "PHP expert",
        "Laravel certified developer",
        "WordPress specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/sureshkumar",
        twitter: "https://twitter.com/suresh_php",
        github: "https://github.com/sureshkumar",
        email: "mailto:suresh@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Coimbatore, Tamil Nadu"
    },
    {
      id: 34,
      name: "Nisha Patel",
      username: "nisha_vue",
      role: "Vue.js Developer",
      bio: "Modern web applications with Vue.js ecosystem. Expert in Nuxt.js and state management with Vuex.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "nisha@vishwadev.tech",
      skills: ["Vue.js", "Nuxt.js", "Vuex", "Vue Router", "Composition API", "Pinia", "Vite"],
      projects: [
        {
          name: "Interactive Learning Platform",
          description: "Vue.js based interactive learning platform",
          tech: ["Vue.js", "Nuxt.js", "Vuex"],
          link: "#"
        }
      ],
      achievements: [
        "Vue.js specialist",
        "Nuxt.js expert",
        "Modern JavaScript frameworks"
      ],
      social: {
        linkedin: "https://linkedin.com/in/nishapatel",
        twitter: "https://twitter.com/nisha_vue",
        github: "https://github.com/nishapatel",
        email: "mailto:nisha@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Rajkot, Gujarat"
    },
    {
      id: 35,
      name: "Akash Yadav",
      username: "akash_go",
      role: "Go Developer",
      bio: "High-performance backend services with Go. Expert in concurrent programming and microservices architecture.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "akash@vishwadev.tech",
      skills: ["Go", "Goroutines", "Gin", "gRPC", "Docker", "Kubernetes", "Microservices"],
      projects: [
        {
          name: "High-Performance API Gateway",
          description: "Go-based API gateway handling millions of requests",
          tech: ["Go", "gRPC", "Docker"],
          link: "#"
        }
      ],
      achievements: [
        "Go programming expert",
        "Concurrent programming specialist",
        "High-performance systems architect"
      ],
      social: {
        linkedin: "https://linkedin.com/in/akashyadav",
        twitter: "https://twitter.com/akash_go",
        github: "https://github.com/akashyadav",
        email: "mailto:akash@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Faridabad, Haryana"
    },
    {
      id: 36,
      name: "Divya Malhotra",
      username: "divya_ios",
      role: "iOS Developer",
      bio: "Native iOS application development with Swift. Expert in UIKit, SwiftUI, and Apple ecosystem integration.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "divya@vishwadev.tech",
      skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "Combine", "iOS SDK", "App Store"],
      projects: [
        {
          name: "Education Companion iOS",
          description: "Native iOS app for student learning and progress tracking",
          tech: ["Swift", "SwiftUI", "Core Data"],
          link: "#"
        }
      ],
      achievements: [
        "iOS certified developer",
        "Swift programming expert",
        "App Store published apps"
      ],
      social: {
        linkedin: "https://linkedin.com/in/divyamalhotra",
        twitter: "https://twitter.com/divya_ios",
        github: "https://github.com/divyamalhotra",
        email: "mailto:divya@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Mohali, Punjab"
    },
    {
      id: 37,
      name: "Gaurav Tiwari",
      username: "gaurav_android",
      role: "Android Developer",
      bio: "Native Android development with Kotlin. Expert in modern Android architecture and Jetpack components.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "gaurav@vishwadev.tech",
      skills: ["Kotlin", "Android SDK", "Jetpack Compose", "Room", "MVVM", "Retrofit", "Coroutines"],
      projects: [
        {
          name: "Student Helper Android",
          description: "Comprehensive Android app for student academic management",
          tech: ["Kotlin", "Jetpack Compose", "Room"],
          link: "#"
        }
      ],
      achievements: [
        "Android certified developer",
        "Kotlin expert",
        "Modern Android architecture specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/gauravtiwari",
        twitter: "https://twitter.com/gaurav_android",
        github: "https://github.com/gauravtiwari",
        email: "mailto:gaurav@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Lucknow, Uttar Pradesh"
    },
    {
      id: 38,
      name: "Sakshi Agarwal",
      username: "sakshi_content",
      role: "Technical Writer",
      bio: "Creating comprehensive technical documentation and tutorials. Expert in making complex topics accessible.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "sakshi@vishwadev.tech",
      skills: ["Technical Writing", "Documentation", "Content Strategy", "Markdown", "GitBook", "API Documentation"],
      projects: [
        {
          name: "Developer Documentation Hub",
          description: "Comprehensive documentation platform for all projects",
          tech: ["GitBook", "Markdown", "API Docs"],
          link: "#"
        }
      ],
      achievements: [
        "Technical writing expert",
        "Created 100+ tutorials",
        "Documentation specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/sakshiagarwal",
        twitter: "https://twitter.com/sakshi_content",
        github: "https://github.com/sakshiagarwal",
        email: "mailto:sakshi@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Jaipur, Rajasthan"
    },
    {
      id: 39,
      name: "Harsh Varma",
      username: "harsh_rust",
      role: "Rust Developer",
      bio: "System programming with Rust for performance-critical applications. Expert in memory safety and concurrency.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "harsh@vishwadev.tech",
      skills: ["Rust", "Systems Programming", "WebAssembly", "Tokio", "Actix", "Performance Optimization"],
      projects: [
        {
          name: "High-Performance Data Processor",
          description: "Rust-based data processing engine for real-time analytics",
          tech: ["Rust", "Tokio", "WebAssembly"],
          link: "#"
        }
      ],
      achievements: [
        "Rust programming expert",
        "Systems programming specialist",
        "Performance optimization expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/harshvarma",
        twitter: "https://twitter.com/harsh_rust",
        github: "https://github.com/harshvarma",
        email: "mailto:harsh@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Vadodara, Gujarat"
    },
    {
      id: 40,
      name: "Tanvi Shah",
      username: "tanvi_graphql",
      role: "GraphQL Developer",
      bio: "Building modern APIs with GraphQL. Expert in schema design and query optimization.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "tanvi@vishwadev.tech",
      skills: ["GraphQL", "Apollo", "Prisma", "TypeScript", "Node.js", "API Design", "Schema Design"],
      projects: [
        {
          name: "Unified Learning API",
          description: "GraphQL-based unified API for all educational services",
          tech: ["GraphQL", "Apollo", "Prisma"],
          link: "#"
        }
      ],
      achievements: [
        "GraphQL expert",
        "API design specialist",
        "Schema optimization expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/tanvishah",
        twitter: "https://twitter.com/tanvi_graphql",
        github: "https://github.com/tanvishah",
        email: "mailto:tanvi@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Surat, Gujarat"
    },
    {
      id: 41,
      name: "Arpit Bansal",
      username: "arpit_elastic",
      role: "Search Engineer",
      bio: "Building intelligent search systems with Elasticsearch. Expert in search relevance and data indexing.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "arpit@vishwadev.tech",
      skills: ["Elasticsearch", "Kibana", "Logstash", "Search Optimization", "Data Indexing", "Analytics"],
      projects: [
        {
          name: "Intelligent Course Search",
          description: "Advanced search system for educational content discovery",
          tech: ["Elasticsearch", "Kibana", "Node.js"],
          link: "#"
        }
      ],
      achievements: [
        "Elasticsearch expert",
        "Search optimization specialist",
        "Data analytics expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/arpitbansal",
        twitter: "https://twitter.com/arpit_elastic",
        github: "https://github.com/arpitbansal",
        email: "mailto:arpit@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Agra, Uttar Pradesh"
    },
    {
      id: 42,
      name: "Ritika Singh",
      username: "ritika_db",
      role: "Database Engineer",
      bio: "Designing and optimizing database systems. Expert in SQL, NoSQL, and database performance tuning.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "ritika@vishwadev.tech",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Database Design", "Query Optimization", "Data Modeling"],
      projects: [
        {
          name: "Scalable Database Architecture",
          description: "High-performance database system for educational platform",
          tech: ["PostgreSQL", "Redis", "MongoDB"],
          link: "#"
        }
      ],
      achievements: [
        "Database optimization expert",
        "SQL performance specialist",
        "Data architecture designer"
      ],
      social: {
        linkedin: "https://linkedin.com/in/ritikasingh",
        twitter: "https://twitter.com/ritika_db",
        github: "https://github.com/ritikasingh",
        email: "mailto:ritika@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Ranchi, Jharkhand"
    },
    {
      id: 43,
      name: "Nikhil Joshi",
      username: "nikhil_docker",
      role: "Containerization Specialist",
      bio: "Docker and Kubernetes expert for scalable deployments. Passionate about container orchestration and microservices.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "nikhil@vishwadev.tech",
      skills: ["Docker", "Kubernetes", "Helm", "Container Security", "Microservices", "Service Mesh"],
      projects: [
        {
          name: "Microservices Platform",
          description: "Complete containerized microservices architecture",
          tech: ["Docker", "Kubernetes", "Helm"],
          link: "#"
        }
      ],
      achievements: [
        "Kubernetes certified",
        "Container orchestration expert",
        "Microservices architect"
      ],
      social: {
        linkedin: "https://linkedin.com/in/nikhiljoshi",
        twitter: "https://twitter.com/nikhil_docker",
        github: "https://github.com/nikhiljoshi",
        email: "mailto:nikhil@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Nashik, Maharashtra"
    },
    {
      id: 44,
      name: "Prachi Desai",
      username: "prachi_react",
      role: "React Specialist",
      bio: "Advanced React development with modern patterns. Expert in performance optimization and component architecture.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "prachi@vishwadev.tech",
      skills: ["React", "Next.js", "TypeScript", "React Query", "Zustand", "Performance", "Testing"],
      projects: [
        {
          name: "Advanced Student Dashboard",
          description: "High-performance React dashboard with real-time updates",
          tech: ["React", "TypeScript", "React Query"],
          link: "#"
        }
      ],
      achievements: [
        "React performance expert",
        "Modern patterns specialist",
        "Component architecture designer"
      ],
      social: {
        linkedin: "https://linkedin.com/in/prachidesai",
        twitter: "https://twitter.com/prachi_react",
        github: "https://github.com/prachidesai",
        email: "mailto:prachi@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Pune, Maharashtra"
    },
    {
      id: 45,
      name: "Abhishek Gupta",
      username: "abhishek_api",
      role: "API Developer",
      bio: "Designing and building robust RESTful and GraphQL APIs. Expert in API security and documentation.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "abhishek@vishwadev.tech",
      skills: ["REST APIs", "GraphQL", "API Security", "Swagger", "Postman", "API Gateway", "Rate Limiting"],
      projects: [
        {
          name: "Education API Gateway",
          description: "Centralized API gateway for all educational services",
          tech: ["Node.js", "API Gateway", "Security"],
          link: "#"
        }
      ],
      achievements: [
        "API design expert",
        "API security specialist",
        "Documentation expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/abhishekgupta",
        twitter: "https://twitter.com/abhishek_api",
        github: "https://github.com/abhishekgupta",
        email: "mailto:abhishek@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Meerut, Uttar Pradesh"
    },
    {
      id: 46,
      name: "Sneha Kulkarni",
      username: "sneha_pm",
      role: "Technical Project Manager",
      bio: "Managing complex technical projects and cross-functional teams. Expert in Agile methodologies and product delivery.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "snehak@vishwadev.tech",
      skills: ["Project Management", "Agile", "Scrum", "Team Leadership", "Product Strategy", "Risk Management"],
      projects: [
        {
          name: "Platform Modernization Project",
          description: "Led complete platform modernization involving 20+ developers",
          tech: ["Project Management", "Agile", "Leadership"],
          link: "#"
        }
      ],
      achievements: [
        "PMP certified",
        "Scrum Master certified",
        "Led 15+ successful projects"
      ],
      social: {
        linkedin: "https://linkedin.com/in/snehakulkarni",
        twitter: "https://twitter.com/sneha_pm",
        github: "https://github.com/snehakulkarni",
        email: "mailto:snehak@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 3,
      location: "Kolhapur, Maharashtra"
    },
    {
      id: 47,
      name: "Rahul Mishra",
      username: "rahul_monitor",
      role: "Monitoring & Observability Engineer",
      bio: "Building comprehensive monitoring and observability solutions. Expert in application performance monitoring.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "rahulm@vishwadev.tech",
      skills: ["Prometheus", "Grafana", "ELK Stack", "APM", "Monitoring", "Alerting", "Performance"],
      projects: [
        {
          name: "Platform Observability Suite",
          description: "Complete monitoring and alerting system for platform health",
          tech: ["Prometheus", "Grafana", "ELK"],
          link: "#"
        }
      ],
      achievements: [
        "Monitoring expert",
        "Observability specialist",
        "Performance optimization expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/rahulmishra",
        twitter: "https://twitter.com/rahul_monitor",
        github: "https://github.com/rahulmishra",
        email: "mailto:rahulm@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Bhubaneswar, Odisha"
    },
    {
      id: 48,
      name: "Kritika Sharma",
      username: "kritika_ux",
      role: "UX Researcher",
      bio: "Understanding user behavior through research and data analysis. Expert in user testing and design validation.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "kritika@vishwadev.tech",
      skills: ["User Research", "Usability Testing", "Data Analysis", "Survey Design", "A/B Testing", "User Interviews"],
      projects: [
        {
          name: "Student Experience Research",
          description: "Comprehensive UX research improving platform usability by 45%",
          tech: ["User Research", "Analytics", "Testing"],
          link: "#"
        }
      ],
      achievements: [
        "UX research specialist",
        "Improved usability by 45%",
        "User testing expert"
      ],
      social: {
        linkedin: "https://linkedin.com/in/kritikasharma",
        twitter: "https://twitter.com/kritika_ux",
        github: "https://github.com/kritikasharma",
        email: "mailto:kritika@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Shimla, Himachal Pradesh"
    },
    {
      id: 49,
      name: "Saurabh Pandey",
      username: "saurabh_seo",
      role: "SEO & Analytics Specialist",
      bio: "Optimizing web presence through SEO and analytics. Expert in organic growth and performance tracking.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "saurabh@vishwadev.tech",
      skills: ["SEO", "Google Analytics", "Search Console", "Content Strategy", "Technical SEO", "Performance"],
      projects: [
        {
          name: "Platform SEO Optimization",
          description: "Complete SEO overhaul increasing organic traffic by 200%",
          tech: ["SEO", "Analytics", "Content Strategy"],
          link: "#"
        }
      ],
      achievements: [
        "SEO expert",
        "Increased organic traffic by 200%",
        "Analytics specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/saurabhpandey",
        twitter: "https://twitter.com/saurabh_seo",
        github: "https://github.com/saurabhpandey",
        email: "mailto:saurabh@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Varanasi, Uttar Pradesh"
    },
    {
      id: 50,
      name: "Anjali Nair",
      username: "anjali_growth",
      role: "Growth Hacker & Marketing Technologist",
      bio: "Driving user acquisition and engagement through data-driven marketing strategies and technology solutions.",
      avatar: "/placeholder.svg?height=200&width=200",
      email: "anjali@vishwadev.tech",
      skills: ["Growth Hacking", "Marketing Automation", "A/B Testing", "Analytics", "Conversion Optimization", "User Acquisition"],
      projects: [
        {
          name: "User Acquisition System",
          description: "Automated marketing system increasing user signups by 300%",
          tech: ["Marketing Automation", "Analytics", "A/B Testing"],
          link: "#"
        }
      ],
      achievements: [
        "Growth hacking expert",
        "Increased signups by 300%",
        "Marketing automation specialist"
      ],
      social: {
        linkedin: "https://linkedin.com/in/anjalinair",
        twitter: "https://twitter.com/anjali_growth",
        github: "https://github.com/anjalinair",
        email: "mailto:anjali@vishwadev.tech"
      },
      featured: false,
      yearsExperience: 2,
      location: "Thiruvananthapuram, Kerala"
    }
  ]

  const stats = [
    {
      label: "Student Developers",
      value: "50",
      icon: Users
    },
    {
      label: "Projects Built",
      value: "120+",
      icon: Code
    },
    {
      label: "Years Experience",
      value: "4+",
      icon: Award
    },
    {
      label: "GitHub Contributions",
      value: "3500+",
      icon: Star
    }
  ]

  const featuredDevelopers = developers.filter(dev => dev.featured)
  const otherDevelopers = developers.filter(dev => !dev.featured)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Meet Our Student Developers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get to know the talented student developers who are building the future of technology. 
            From full-stack development to AI/ML, our community represents the next generation of tech innovators.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Developers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Developer Community</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((developer) => (
              <Card key={developer.id}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center">
                      <span className="text-white font-bold">
                        {developer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{developer.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">@{developer.username}</Badge>
                      </div>
                      <CardDescription>{developer.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{developer.bio}</p>
                  
                  {/* Contact Info for VK only */}
                  {developer.email && developer.phone && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        📧 {developer.email}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        📱 +91 {developer.phone}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        📍 {developer.location}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Top Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {developer.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {developer.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{developer.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Experience & Location */}
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>{developer.yearsExperience} years exp.</span>
                    <span>{developer.location}</span>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {developer.social.linkedin && (
                      <Link href={developer.social.linkedin} className="text-muted-foreground hover:text-primary">
                        <Linkedin className="w-4 h-4" />
                      </Link>
                    )}
                    {developer.social.twitter && (
                      <Link href={developer.social.twitter} className="text-muted-foreground hover:text-primary">
                        <Twitter className="w-4 h-4" />
                      </Link>
                    )}
                    {developer.social.github && (
                      <Link href={developer.social.github} className="text-muted-foreground hover:text-primary">
                        <Github className="w-4 h-4" />
                      </Link>
                    )}
                    {developer.social.email && (
                      <Link href={developer.social.email} className="text-muted-foreground hover:text-primary">
                        <Mail className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Developer Community</h3>
              <p className="text-muted-foreground mb-6">
                Are you a student developer? Join our growing community of innovators and showcase your projects to the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/projects">
                    View All Projects
                  </Link>
                </Button>
                <Button size="lg" variant="neutral" asChild>
                  <Link href="/discord">
                    Join Discord Community
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
