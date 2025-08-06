import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
        Meet Our Student Developers
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        Get to know the talented student developers who are building the future of technology. 
        From full-stack development to AI/ML, our community represents the next generation of tech innovators.
      </p>
    </div>
  );
};
