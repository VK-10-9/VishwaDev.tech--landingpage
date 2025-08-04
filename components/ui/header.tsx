"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, MoveRight, X, Code } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

function Header1() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Projects",
      description: "Discover innovative student-led tech projects and solutions.",
      items: [
        {
          title: "Featured Projects",
          href: "/projects/featured",
        },
        {
          title: "AI & Machine Learning",
          href: "/projects/ai-ml",
        },
        {
          title: "Web Development",
          href: "/projects/web-dev",
        },
        {
          title: "Mobile Apps",
          href: "/projects/mobile",
        },
        {
          title: "IoT & Hardware",
          href: "/projects/iot",
        },
      ],
    },
    {
      title: "Community",
      description: "Connect with fellow developers and grow your network.",
      items: [
        {
          title: "Developer Blog",
          href: "/blog",
        },
        {
          title: "Events & Workshops",
          href: "/events",
        },
        {
          title: "Discord Community",
          href: "/discord",
        },
        {
          title: "Mentorship Program",
          href: "/mentorship",
        },
      ],
    },
    {
      title: "Nex10 Labs",
      description: "Our exclusive incubation program for promising projects.",
      items: [
        {
          title: "Apply Now",
          href: "/nex10/apply",
        },
        {
          title: "Success Stories",
          href: "/nex10/success-stories",
        },
        {
          title: "Resources",
          href: "/nex10/resources",
        },
        {
          title: "Mentors",
          href: "/nex10/mentors",
        },
      ],
    },
  ]

  const [isOpen, setOpen] = useState(false)

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:flex lg:justify-between items-center">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">VishwaDev</span>
          </Link>
          <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
            <NavigationMenu className="flex justify-start items-start">
              <NavigationMenuList className="flex justify-start gap-4 flex-row">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href ? (
                      <>
                        <NavigationMenuLink asChild>
                          <Link href={item.href}>
                            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                              {item.title}
                            </Button>
                          </Link>
                        </NavigationMenuLink>
                      </>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="font-medium text-sm text-white/80 hover:text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-4 bg-black/90 backdrop-blur-md border border-white/10">
                          <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                            <div className="flex flex-col h-full justify-between">
                              <div className="flex flex-col">
                                <p className="text-base text-white font-semibold">{item.title}</p>
                                <p className="text-white/60 text-sm">{item.description}</p>
                              </div>
                              <Button
                                size="sm"
                                className="mt-10 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                              >
                                Get Started
                              </Button>
                            </div>
                            <div className="flex flex-col text-sm h-full justify-end">
                              {item.items?.map((subItem) => (
                                <NavigationMenuLink
                                  href={subItem.href}
                                  key={subItem.title}
                                  className="flex flex-row justify-between items-center hover:bg-white/10 py-2 px-4 rounded text-white/80 hover:text-white transition-colors"
                                >
                                  <span>{subItem.title}</span>
                                  <MoveRight className="w-4 h-4 text-white/60" />
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button variant="ghost" className="hidden md:inline text-white/80 hover:text-white hover:bg-white/10">
            Submit Project
          </Button>
          <div className="border-r border-white/20 hidden md:inline"></div>
          <Button
            variant="outline"
            className="bg-transparent border-white/20 text-white/80 hover:text-white hover:bg-white/10"
          >
            Sign in
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
            Join Community
          </Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="text-white hover:bg-white/10">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t border-white/10 flex flex-col w-full right-0 bg-black/90 backdrop-blur-md shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link href={item.href} className="flex justify-between items-center">
                        <span className="text-lg text-white">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-white/60" />
                      </Link>
                    ) : (
                      <p className="text-lg text-white font-semibold">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center py-1"
                        >
                          <span className="text-white/70 hover:text-white transition-colors">{subItem.title}</span>
                          <MoveRight className="w-4 h-4 stroke-1 text-white/60" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export { Header1 }
