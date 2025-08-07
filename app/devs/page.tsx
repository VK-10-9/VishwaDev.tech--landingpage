import { HeroSection, StatsGrid, DeveloperCard, CallToAction } from "@/components/devs"
import { developers } from "./developers-data"
import { developerStats } from "./stats-data"

// Main Page Component
export default function DevsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <HeroSection />
        <StatsGrid stats={developerStats} />
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Developer Community</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((developer) => (
              <DeveloperCard key={developer.id} developer={developer} />
            ))}
          </div>
        </div>

        <CallToAction />
      </div>
    </div>
  );
}
