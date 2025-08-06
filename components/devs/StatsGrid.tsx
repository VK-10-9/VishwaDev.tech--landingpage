import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Stat } from "../../src/types/developer";

interface StatsGridProps {
  stats: Stat[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center">
          <CardContent className="pt-6">
            <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
            <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
