import { Star, Users, Code, Award } from "lucide-react";
import { Stat } from "@/src/types/developer";

export const developerStats: Stat[] = [
  {
    icon: Users,
    value: "6",
    label: "Active Developers"
  },
  {
    icon: Code,
    value: "12+",
    label: "Projects Completed"
  },
  {
    icon: Star,
    value: "200+",
    label: "Code Contributions"
  },
  {
    icon: Award,
    value: "100%",
    label: "Success Rate"
  }
];
