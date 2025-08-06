import { Stat } from "../types/developer";
import { Users, Code, Award, Star } from "lucide-react";

export const developerStats: Stat[] = [
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
];
