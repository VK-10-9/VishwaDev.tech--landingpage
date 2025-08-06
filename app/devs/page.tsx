import React from 'react';
import { HeroSection } from "@/components/devs/HeroSection";
import { DeveloperGrid } from "@/components/devs/DeveloperGrid";
import { StatsGrid } from "@/components/devs/StatsGrid";
import { CallToAction } from "@/components/devs/CallToAction";
import { developers } from "./developers-data";
import { developerStats } from "./stats-data";

export default function DevsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <HeroSection />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <StatsGrid stats={developerStats} />
        </div>
      </section>

      {/* Developers Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <DeveloperGrid 
            developers={developers} 
            title="Meet Our Talented Developers" 
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <CallToAction />
        </div>
      </section>
    </div>
  );
}
