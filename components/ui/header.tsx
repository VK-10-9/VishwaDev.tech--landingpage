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
import { navigationItems } from "@/src/constants/navigation"

function Header1() {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background/95 backdrop-blur-md border-b">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:flex lg:justify-between items-center">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">VishwaDev</span>
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
                            <Button variant="neutral" className="text-muted-foreground hover:text-foreground">
                              {item.title}
                            </Button>
                          </Link>
                        </NavigationMenuLink>
                      </>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="font-medium text-sm text-muted-foreground hover:text-foreground bg-transparent hover:bg-muted data-[state=open]:bg-muted">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-4 bg-background border">
                          <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                            <div className="flex flex-col h-full justify-between">
                              <div className="flex flex-col">
                                <p className="text-base font-semibold">{item.title}</p>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                              </div>
                              <Button
                                variant="default"
                                size="sm"
                                onClick={() => console.log("Get Started clicked")}
                              >
                                Get Started
                              </Button>
                            </div>
                            <div className="flex flex-col text-sm h-full justify-end">
                              {item.items?.map((subItem) => (
                                <NavigationMenuLink asChild key={subItem.title}>
                                  <Link
                                    href={subItem.href}
                                    className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded text-muted-foreground hover:text-foreground transition-colors"
                                  >
                                    <span>{subItem.title}</span>
                                    <MoveRight className="w-4 h-4 text-muted-foreground" />
                                  </Link>
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
          <Button
            variant="neutral"
            className="hidden md:inline text-muted-foreground hover:text-foreground"
            onClick={() => console.log("Submit Project clicked")}
          >
            Submit Project
          </Button>
          <div className="border-r hidden md:inline"></div>
          <Button
            variant="neutral"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => console.log("Sign in clicked")}
          >
            Sign in
          </Button>
          <Button
            variant="default"
            onClick={() => console.log("Join Community clicked")}
          >
            Join Community
          </Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button
            variant="neutral"
            size="icon"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link href={item.href} className="flex justify-between items-center" onClick={() => setOpen(false)}>
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg font-semibold">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center py-1"
                          onClick={() => setOpen(false)}
                        >
                          <span className="text-muted-foreground hover:text-foreground transition-colors">{subItem.title}</span>
                          <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
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

export default Header1
export { Header1 }
