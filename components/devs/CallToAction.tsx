import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CallToAction: React.FC = () => {
  return (
    <div className="text-center">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-8">
          <h3 className="text-2xl font-bold mb-4">Join Our Developer Community</h3>
          <p className="text-muted-foreground mb-6">
            Are you a student developer? Join our growing community of innovators and showcase your projects to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
            <Button size="lg" variant="neutral" asChild>
              <Link href="/discord">
                Join Discord Community
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
