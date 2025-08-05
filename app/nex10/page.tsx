import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, Target, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Nex10LabsPage() {
  const labsFeatures = [
    {
      title: "Startup Incubation",
      description: "Turn your innovative ideas into viable businesses with our comprehensive incubation program.",
      icon: <Rocket className="h-8 w-8" />,
      benefits: ["Seed funding up to $50K", "6-month program", "Expert mentorship", "Legal support"]
    },
    {
      title: "Product Development",
      description: "Get technical support and resources to build and scale your technology products.",
      icon: <Target className="h-8 w-8" />,
      benefits: ["Technical mentorship", "AWS credits", "Development tools", "Beta testing"]
    },
    {
      title: "Community & Network",
      description: "Connect with like-minded entrepreneurs, investors, and industry professionals.",
      icon: <Users className="h-8 w-8" />,
      benefits: ["Networking events", "Investor connections", "Peer community", "Alumni network"]
    },
    {
      title: "Growth Support",
      description: "Scale your startup with marketing, sales, and business development guidance.",
      icon: <TrendingUp className="h-8 w-8" />,
      benefits: ["Marketing support", "Sales training", "Business strategy", "Growth hacking"]
    }
  ]

  const stats = [
    { number: "50+", label: "Startups Incubated" },
    { number: "$2M+", label: "Total Funding Raised" },
    { number: "85%", label: "Success Rate" },
    { number: "200+", label: "Jobs Created" }
  ]

  const programs = [
    {
      title: "Nex10 Accelerator",
      description: "6-month intensive program for early-stage startups",
      duration: "6 months",
      funding: "Up to $50K",
      equity: "5-8%",
      applications: "Open"
    },
    {
      title: "Nex10 Incubator",
      description: "12-month program for idea-stage entrepreneurs",
      duration: "12 months",
      funding: "Up to $25K",
      equity: "3-5%",
      applications: "Open"
    },
    {
      title: "Nex10 Fellowship",
      description: "3-month program for student entrepreneurs",
      duration: "3 months",
      funding: "Up to $10K",
      equity: "0%",
      applications: "Seasonal"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nex10 Labs</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Our exclusive incubation program for promising tech projects and startups. 
          Transform your innovative ideas into successful businesses with comprehensive support, 
          funding, and mentorship from industry experts.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <Badge variant="secondary" className="px-4 py-2">
            <Rocket className="h-4 w-4 mr-2" />
            50+ Startups
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            $2M+ Raised
          </Badge>
        </div>
        <div className="flex gap-4 justify-center">
          <Button size="lg">
            <Link href="/nex10/apply">Apply Now</Link>
          </Button>
          <Button size="lg" variant="neutral">
            <Link href="/nex10/success-stories">Success Stories</Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labsFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Programs */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {program.title}
                  <Badge variant={program.applications === "Open" ? "default" : "secondary"}>
                    {program.applications}
                  </Badge>
                </CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Funding:</span>
                    <span className="font-medium">{program.funding}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Equity:</span>
                    <span className="font-medium">{program.equity}</span>
                  </div>
                </div>
                <Button 
                  variant={program.applications === "Open" ? "default" : "neutral"} 
                  className="w-full"
                  disabled={program.applications !== "Open"}
                >
                  {program.applications === "Open" ? "Apply Now" : "Coming Soon"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Application Process</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Submit Application", description: "Complete our online application with your project details and team information." },
              { step: 2, title: "Initial Review", description: "Our team reviews your application and provides feedback within 2 weeks." },
              { step: 3, title: "Pitch Presentation", description: "Selected applicants present their ideas to our investment committee." },
              { step: 4, title: "Final Selection", description: "Successful startups join our program and receive funding and support." }
            ].map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6 text-center">
            <Button asChild variant="neutral" className="h-auto flex-col gap-2">
              <Link href="/nex10/apply">
                <Rocket className="h-6 w-6" />
                Apply Now
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6 text-center">
            <Button asChild variant="neutral" className="h-auto flex-col gap-2">
              <Link href="/nex10/success-stories">
                <TrendingUp className="h-6 w-6" />
                Success Stories
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6 text-center">
            <Button asChild variant="neutral" className="h-auto flex-col gap-2">
              <Link href="/nex10/resources">
                <Target className="h-6 w-6" />
                Resources
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6 text-center">
            <Button asChild variant="neutral" className="h-auto flex-col gap-2">
              <Link href="/nex10/mentors">
                <Users className="h-6 w-6" />
                Meet Mentors
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
