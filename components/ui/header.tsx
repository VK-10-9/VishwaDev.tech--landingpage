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
import { useState, useEffect } from "react"
import Link from "next/link"
import { navigationItems } from "@/src/constants/navigation"

function Header1() {
  const [isOpen, setOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setOpen(false)
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isMounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <header className="w-full z-50 fixed top-0 left-0 bg-background/95 backdrop-blur-md border-b">
      <div className="container relative mx-auto min-h-16 sm:min-h-20 flex gap-4 flex-row items-center justify-between px-4 sm:px-6">
        {/* Logo - Always visible */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
          </div>
          <span className="text-lg sm:text-xl font-bold">VishwaDev</span>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        <Button variant="neutral" className="text-muted-foreground hover:text-foreground">
                          {item.title}
                        </Button>
                      </Link>
                    </NavigationMenuLink>
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

        {/* Desktop Action Buttons - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="neutral"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => console.log("Submit Project clicked")}
          >
            Submit Project
          </Button>
          <div className="border-r h-6"></div>
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

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <Button
            variant="neutral"
            size="icon"
            onClick={(e) => {
              e.stopPropagation()
              setOpen(!isOpen)
            }}
            className="z-50"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full pt-20 pb-6 px-4 overflow-y-auto">
              {/* Mobile Navigation Items */}
              <div className="flex flex-col space-y-6 mb-8">
                {navigationItems.map((item) => (
                  <div key={item.title} className="border-b border-muted pb-4">
                    <div className="flex flex-col space-y-3">
                      {item.href ? (
                        <Link 
                          href={item.href} 
                          className="flex justify-between items-center group" 
                          onClick={() => setOpen(false)}
                        >
                          <span className="text-lg font-medium group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                          <MoveRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Link>
                      ) : (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold">{item.title}</span>
                          </div>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          )}
                          {item.items && (
                            <div className="flex flex-col space-y-2 ml-4 mt-3">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="flex justify-between items-center py-2 group"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                    {subItem.title}
                                  </span>
                                  <MoveRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-4 mt-auto">
                <Button
                  variant="neutral"
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    console.log("Submit Project clicked")
                    setOpen(false)
                  }}
                >
                  Submit Project
                </Button>
                <Button
                  variant="neutral"
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    console.log("Sign in clicked")
                    setOpen(false)
                  }}
                >
                  Sign in
                </Button>
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => {
                    console.log("Join Community clicked")
                    setOpen(false)
                  }}
                >
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header1
export { Header1 }
