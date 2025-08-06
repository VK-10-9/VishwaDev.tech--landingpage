import React from 'react';
import { DeveloperCard } from "./DeveloperCard";
import { Developer } from "../../src/types/developer";

interface DeveloperGridProps {
  developers: Developer[];
  title?: string;
}

export const DeveloperGrid: React.FC<DeveloperGridProps> = ({ 
  developers, 
  title = "Our Developer Community" 
}) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};
