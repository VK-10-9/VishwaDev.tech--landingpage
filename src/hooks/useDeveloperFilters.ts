import { useState, useMemo } from 'react';
import { Developer } from '../types/developer';
import { searchDevelopers, filterFeaturedDevelopers, filterNonFeaturedDevelopers } from '../utils/developerUtils';

export const useDeveloperFilters = (developers: Developer[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredDevelopers = useMemo(() => {
    let filtered = developers;

    // Apply search filter
    if (searchQuery) {
      filtered = searchDevelopers(filtered, searchQuery);
    }

    // Apply skill filter
    if (skillFilter) {
      filtered = filtered.filter(dev =>
        dev.skills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase()))
      );
    }

    // Apply location filter
    if (locationFilter) {
      filtered = filtered.filter(dev =>
        dev.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    // Apply featured filter
    if (showFeaturedOnly) {
      filtered = filterFeaturedDevelopers(filtered);
    }

    return filtered;
  }, [developers, searchQuery, skillFilter, locationFilter, showFeaturedOnly]);

  const featuredDevelopers = useMemo(() => 
    filterFeaturedDevelopers(developers), [developers]
  );

  const nonFeaturedDevelopers = useMemo(() => 
    filterNonFeaturedDevelopers(developers), [developers]
  );

  return {
    filteredDevelopers,
    featuredDevelopers,
    nonFeaturedDevelopers,
    searchQuery,
    setSearchQuery,
    skillFilter,
    setSkillFilter,
    locationFilter,
    setLocationFilter,
    showFeaturedOnly,
    setShowFeaturedOnly,
  };
};
