'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X, Code, MoveRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { navigationItems } from '@/src/constants/navigation'

function Header1() {
  const [isOpen, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!mounted) return
    const prev = document.body.style.overflow
    document.body.style.overflow = isOpen ? 'hidden' : prev || ''
    return () => {
      document.body.style.overflow = prev || ''
    }
  }, [isOpen, mounted])

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!mounted) return null

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] bg-background/95 backdrop-blur-md border-b">
      <div className="container mx-auto min-h-16 sm:min-h-20 px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border">
            <Code className="h-4 w-4" />
          </span>
          <span className="text-lg sm:text-xl font-bold">VishwaDev</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu className="flex">
            <NavigationMenuList className="flex gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        <Button
                          variant="neutral"
                          className="text-muted-foreground hover:text-foreground"
                        >
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
                          <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                              <p className="text-base font-semibold">
                                {item.title}
                              </p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button variant="default" size="sm">
                              Get Started
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm">
                            {item.items?.map((sub) => (
                              <NavigationMenuLink asChild key={sub.title}>
                                <Link
                                  href={sub.href}
                                  className="flex items-center justify-between hover:bg-muted py-2 px-4 rounded text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  <span>{sub.title}</span>
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

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="neutral"
            className="text-muted-foreground hover:text-foreground"
          >
            Submit Project
          </Button>
          <div className="border-r h-6" />
          <Button
            variant="neutral"
            className="text-muted-foreground hover:text-foreground"
          >
            Sign in
          </Button>
          <Button variant="default">Join Community</Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden items-center">
          <Button
            variant="neutral"
            size="icon"
            className="h-9 w-9"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer rendered in a portal to avoid stacking/overflow issues */}
      {isOpen &&
        createPortal(
          <div id="mobile-nav" className="fixed inset-0 z-[1100] lg:hidden">
            {/* Backdrop */}
            <button
              aria-label="Close menu backdrop"
              // Subtle darker, smoother blur
              className="absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity"
              onClick={() => setOpen(false)}
            />
            {/* Panel: keeps full width on tiny screens, rounded and elevated */}
            <aside
              className="absolute right-0 top-0 h-full w-full sm:max-w-[420px] md:max-w-[480px]
                   bg-background/98 border-l shadow-2xl flex flex-col overflow-y-auto overscroll-contain
                   rounded-l-2xl"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer header: tighter spacing, subtle shadow and safe-area support */}
              <div
                className="sticky top-0 flex items-center justify-between px-5 py-3.5
                        border-b bg-background/95 backdrop-blur shadow-sm
                        pt-[max(0px,env(safe-area-inset-top))]"
              >
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setOpen(false)}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border">
                    <Code className="h-4 w-4" />
                  </span>
                  <span className="text-base font-semibold tracking-tight">
                    VishwaDev
                  </span>
                </Link>
                <Button
                  variant="neutral"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Primary links — same order as desktop, clean vertical rhythm */}
              <nav className="px-5 pt-5 pb-4 grid gap-3">
                <Button
                  asChild
                  variant="neutral"
                  className="w-full h-11 px-4 justify-between"
                >
                  <Link href="/" onClick={() => setOpen(false)}>
                    <span className="text-[15px] font-medium">Home</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="neutral"
                  className="w-full h-11 px-4 justify-between"
                >
                  <Link href="/projects" onClick={() => setOpen(false)}>
                    <span className="text-[15px] font-medium">Projects</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="neutral"
                  className="w-full h-11 px-4 justify-between"
                >
                  <Link href="/community" onClick={() => setOpen(false)}>
                    <span className="text-[15px] font-medium">Community</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="neutral"
                  className="w-full h-11 px-4 justify-between"
                >
                  <Link href="/nex10" onClick={() => setOpen(false)}>
                    <span className="text-[15px] font-medium">Nex10 Labs</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </Link>
                </Button>
              </nav>

              {/* Actions — match desktop button styles, full width, balanced spacing */}
              <div className="mt-auto px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-3 border-t space-y-3">
                <Button
                  asChild
                  variant="neutral"
                  className="w-full h-11 justify-center"
                >
                  <Link href="/subdomain" onClick={() => setOpen(false)}>
                    Get Subdomain
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="neutral"
                  className="w-full h-11 justify-center"
                >
                  <Link href="/projects#submit" onClick={() => setOpen(false)}>
                    Submit Project
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="neutral"
                  className="w-full h-11 justify-center"
                >
                  <Link href="/signin" onClick={() => setOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button asChild className="w-full h-11 justify-center">
                  <Link href="/discord" onClick={() => setOpen(false)}>
                    Join Community
                  </Link>
                </Button>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  )
}

export default Header1
export { Header1 }
