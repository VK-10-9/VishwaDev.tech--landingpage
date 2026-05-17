"use client"

import { Stat } from "@/src/types/navigation"

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
}

export function StatsSection({ stats, className = "" }: StatsSectionProps) {
  return (
    <section className={`py-12 sm:py-16 px-4 border-t-2 border-border bg-white ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm sm:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
