"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { LanguageTabs } from "@/components/language-tabs"

const navLinksEn = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Product" },
  { href: "/recruit", label: "Recruit" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

const navLinksJa = [
  { href: "/ja/about", label: "About" },
  { href: "/ja/products", label: "Product" },
  { href: "/ja/recruit", label: "Recruit" },
  { href: "/ja/news", label: "News" },
  { href: "/ja/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  
  const isJa = pathname.startsWith("/ja")
  const navLinks = isJa ? navLinksJa : navLinksEn
  const homeHref = isJa ? "/ja" : "/"

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm border-b border-border-hairline">
      <div className="container-editorial flex h-14 items-center justify-between">
        {/* Logo */}
        <Link
          href={homeHref}
          className="text-base font-medium tracking-tight text-foreground transition-colors hover:text-foreground/70"
        >
          Ceed
        </Link>

        {/* Desktop Navigation - centered */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground relative",
                pathname === link.href ||
                  (link.href !== "/" && link.href !== "/ja" && pathname.startsWith(link.href))
                  ? "text-foreground"
                  : "text-muted-foreground",
                (pathname === link.href ||
                  (link.href !== "/" && link.href !== "/ja" && pathname.startsWith(link.href))) &&
                  "after:absolute after:bottom-[-18px] after:left-0 after:right-0 after:h-px after:bg-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side - Language tabs only */}
        <div className="flex items-center gap-4">
          <LanguageTabs />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden min-w-[44px] min-h-[44px]"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col gap-8 mt-8">
                <Link
                  href={homeHref}
                  className="text-lg font-medium tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  Ceed
                </Link>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base transition-colors hover:text-foreground py-3",
                        pathname === link.href ||
                          (link.href !== "/" && link.href !== "/ja" && pathname.startsWith(link.href))
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
