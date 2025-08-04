import { NavigationItem } from "@/src/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    description: "",
  },
  {
    title: "Projects",
    description: "Discover innovative student-led tech projects and solutions.",
    items: [
      {
        title: "Featured Projects",
        href: "/projects/featured",
      },
      {
        title: "AI & Machine Learning",
        href: "/projects/ai-ml",
      },
      {
        title: "Web Development",
        href: "/projects/web-dev",
      },
      {
        title: "Mobile Apps",
        href: "/projects/mobile",
      },
      {
        title: "IoT & Hardware",
        href: "/projects/iot",
      },
    ],
  },
  {
    title: "Community",
    description: "Connect with fellow developers and grow your network.",
    items: [
      {
        title: "Developer Blog",
        href: "/blog",
      },
      {
        title: "Events & Workshops",
        href: "/events",
      },
      {
        title: "Discord Community",
        href: "/discord",
      },
      {
        title: "Mentorship Program",
        href: "/mentorship",
      },
    ],
  },
  {
    title: "Nex10 Labs",
    description: "Our exclusive incubation program for promising projects.",
    items: [
      {
        title: "Apply Now",
        href: "/nex10/apply",
      },
      {
        title: "Success Stories",
        href: "/nex10/success-stories",
      },
      {
        title: "Resources",
        href: "/nex10/resources",
      },
      {
        title: "Mentors",
        href: "/nex10/mentors",
      },
    ],
  },
  {
    title: "Get Subdomain",
    href: "/subdomain",
    description: "Get your personalized domain (name.vishwadev.tech)",
  },
];
