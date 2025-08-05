"use client"

import { Stat } from "@/src/types/navigation"

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
}

export function StatsSection({ stats, className = "" }: StatsSectionProps) {
  return (
    <section className={`py-16 px-4 border-y bg-muted/30 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
