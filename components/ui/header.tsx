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
        <Link href="/" className="flex items-center space-x-2 z-50" onClick={() => setOpen(false)}>
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
            className="z-[60] h-10 w-10 border-border hover:bg-muted relative"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            {/* Menu Panel */}
            <div 
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-background border-l shadow-2xl transform transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="text-lg font-semibold text-foreground">Menu</span>
                  <Button
                    variant="neutral"
                    size="icon"
                    onClick={() => setOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Navigation Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {navigationItems.map((item, index) => (
                      <div key={`${item.title}-${index}`} className="space-y-2">
                        {item.href ? (
                          <Link 
                            href={item.href} 
                            className="block w-full text-left p-3 rounded-lg hover:bg-muted transition-colors text-foreground hover:text-primary font-medium"
                            onClick={() => setOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <div className="space-y-2">
                            <div className="p-3 rounded-lg bg-muted/50">
                              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                              {item.description && (
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                              )}
                            </div>
                            {item.items && (
                              <div className="ml-2 space-y-1">
                                {item.items.map((subItem, subIndex) => (
                                  <Link
                                    key={`${subItem.title}-${subIndex}`}
                                    href={subItem.href}
                                    className="block w-full text-left p-3 pl-4 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground border-l-2 border-primary/20"
                                    onClick={() => setOpen(false)}
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 border-t border-border space-y-3">
                  <Button
                    variant="neutral"
                    className="w-full justify-start"
                    onClick={() => {
                      console.log("Submit Project clicked")
                      setOpen(false)
                    }}
                  >
                    Submit Project
                  </Button>
                  <Button
                    variant="neutral"
                    className="w-full justify-start"
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
          </div>
        )}
      </div>
    </header>
  )
}
export default Header1
export { Header1 }
