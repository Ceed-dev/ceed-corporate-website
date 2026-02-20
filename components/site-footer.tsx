"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const indexLinksEn = [
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Product" },
  { href: "/recruit", label: "Recruit" },
  { href: "/news", label: "News" },
]

const indexLinksJa = [
  { href: "/ja/contact", label: "Contact" },
  { href: "/ja/about", label: "About" },
  { href: "/ja/products", label: "Product" },
  { href: "/ja/recruit", label: "Recruit" },
  { href: "/ja/news", label: "News" },
]

export function SiteFooter() {
  const pathname = usePathname()
  const isJa = pathname.startsWith("/ja")
  const indexLinks = isJa ? indexLinksJa : indexLinksEn
  const homeHref = isJa ? "/ja" : "/"

  return (
    <footer className="border-t border-border-hairline bg-stone-50/50">
      <div className="container-editorial py-12 lg:py-16">
        {/* Top row: Brand block only */}
        <div>
          <Link
            href={homeHref}
            className="text-base font-medium tracking-tight text-foreground"
          >
            Ceed
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
            {isJa ? "エンタープライズ・インテリジェンスを構築。" : "Building enterprise intelligence."}
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 mb-8 border-t border-border-hairline" />

        {/* Bottom row: INDEX and CONTACT */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
          {/* Index */}
          <div className="lg:col-span-6">
            <span className="text-micro text-muted-foreground/50 block mb-4">
              Index
            </span>
            <nav className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-6 sm:gap-y-2">
              {indexLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isActive 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-6 lg:text-right">
            <span className="text-micro text-muted-foreground/50 block mb-4">
              Contact
            </span>
            <a
              href="mailto:official@ceed.cloud"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              official@ceed.cloud
            </a>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-10 pt-6 border-t border-border-hairline flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-micro text-muted-foreground/40">
            &copy; {new Date().getFullYear()} Ceed
          </p>
          <div className="flex gap-6">
            <Link
              href={isJa ? "/ja/privacy" : "/privacy"}
              className="text-micro text-muted-foreground/40 hover:text-muted-foreground transition-colors"
            >
              {isJa ? "プライバシー" : "Privacy"}
            </Link>
            <Link
              href={isJa ? "/ja/terms" : "/terms"}
              className="text-micro text-muted-foreground/40 hover:text-muted-foreground transition-colors"
            >
              {isJa ? "利用規約" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
