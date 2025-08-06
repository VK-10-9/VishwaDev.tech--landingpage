import { Developer } from "../types/developer";

export const filterFeaturedDevelopers = (developers: Developer[]): Developer[] => {
  return developers.filter(dev => dev.featured);
};

export const filterNonFeaturedDevelopers = (developers: Developer[]): Developer[] => {
  return developers.filter(dev => !dev.featured);
};

export const getDevelopersBySkill = (developers: Developer[], skill: string): Developer[] => {
  return developers.filter(dev => 
    dev.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
  );
};

export const getDevelopersByLocation = (developers: Developer[], location: string): Developer[] => {
  return developers.filter(dev => 
    dev.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getDevelopersByExperience = (developers: Developer[], minYears: number, maxYears?: number): Developer[] => {
  return developers.filter(dev => {
    if (maxYears) {
      return dev.yearsExperience >= minYears && dev.yearsExperience <= maxYears;
    }
    return dev.yearsExperience >= minYears;
  });
};

export const searchDevelopers = (developers: Developer[], query: string): Developer[] => {
  const lowercaseQuery = query.toLowerCase();
  return developers.filter(dev => 
    dev.name.toLowerCase().includes(lowercaseQuery) ||
    dev.role.toLowerCase().includes(lowercaseQuery) ||
    dev.bio.toLowerCase().includes(lowercaseQuery) ||
    dev.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery)) ||
    dev.location.toLowerCase().includes(lowercaseQuery)
  );
};
