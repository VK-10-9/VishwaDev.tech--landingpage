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
    <header className="w-full z-50 fixed top-0 left-0 bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-black/20 transition-all duration-300">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:flex lg:justify-between items-center px-4">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">VishwaDev</span>
          </Link>
          <div className="justify-start items-center gap-6 lg:flex hidden flex-row">
            <NavigationMenu className="flex justify-start items-start">
              <NavigationMenuList className="flex justify-start gap-6 flex-row">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href ? (
                      <>
                        <NavigationMenuLink asChild>
                          <Link href={item.href}>
                            <Button variant="noShadow" className="text-white/90 hover:text-white hover:bg-white/10 font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 bg-transparent border-white/20 hover:border-white/40">
                              {item.title}
                            </Button>
                          </Link>
                        </NavigationMenuLink>
                      </>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="font-medium text-sm text-white/90 hover:text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 border border-white/20 hover:border-white/40">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-6 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/50">
                          <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                            <div className="flex flex-col h-full justify-between">
                              <div className="flex flex-col">
                                <p className="text-lg text-white font-bold mb-2">{item.title}</p>
                                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
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
                                <NavigationMenuLink
                                  href={subItem.href}
                                  key={subItem.title}
                                  className="flex flex-row justify-between items-center hover:bg-white/10 py-3 px-4 rounded-lg text-white/80 hover:text-white transition-all duration-200 hover:scale-105"
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
          <Button
            variant="noShadow"
            className="hidden md:inline text-white/90 hover:text-white hover:bg-white/10 font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 bg-transparent border-white/20 hover:border-white/40"
            onClick={() => console.log("Login clicked")}
          >
            Login
          </Button>
          <Button
            variant="noShadow"
            className="hidden md:inline text-white/90 hover:text-white hover:bg-white/10 font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 bg-transparent border-white/20 hover:border-white/40"
            onClick={() => console.log("Sign Up clicked")}
          >
            Sign Up
          </Button>
          <div className="border-r border-white/30 hidden md:inline h-8"></div>
          <Button
            variant="default"
            className="font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
            onClick={() => console.log("Get Started clicked")}
          >
            Get Started
          </Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button
            variant="noShadow"
            size="icon"
            onClick={() => setOpen(!isOpen)}
            className="text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105 bg-transparent border-white/20 hover:border-white/40"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t border-white/20 flex flex-col w-full right-0 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50 py-6 container gap-8 rounded-b-2xl">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link href={item.href} className="flex justify-between items-center py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-200">
                        <span className="text-lg text-white font-medium">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-white/60" />
                      </Link>
                    ) : (
                      <p className="text-lg text-white font-bold px-4 py-2">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-200"
                        >
                          <span className="text-white/70 hover:text-white transition-colors font-medium">{subItem.title}</span>
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

export default Header1
export { Header1 }
