import Link from "next/link"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    date: "Jan 15, 2026",
    category: "Company",
    title: "Ceed announces Series A funding round",
    slug: "#",
  },
  {
    date: "Dec 20, 2025",
    category: "Product",
    title: "Hyperbuilder launches incubator program for Hyperliquid builders",
    slug: "#",
  },
  {
    date: "Nov 30, 2025",
    category: "Partnership",
    title: "Qube expands marketing coverage to Southeast Asia",
    slug: "#",
  },
  {
    date: "Oct 15, 2025",
    category: "Team",
    title: "We're hiring: Join our growing team in Tokyo and SF",
    slug: "#",
  },
  {
    date: "Sep 1, 2025",
    category: "Product",
    title: "Introducing Qube: Full-funnel marketing for crypto",
    slug: "#",
  },
  {
    date: "Aug 10, 2025",
    category: "Company",
    title: "Ceed opens new office in San Francisco",
    slug: "#",
  },
]

export default function NewsPage() {
  return (
    <div className="bg-premium min-h-screen relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            News
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            The latest updates from Ceed.
          </p>
        </div>
      </section>

      {/* News list */}
      <section className="relative z-10 pb-24 lg:pb-32 border-t border-border-hairline">
        <div className="container-editorial pt-8 lg:pt-12">
          <div className="space-y-0">
            {newsItems.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className="group flex items-start justify-between gap-4 py-6 border-b border-border-hairline first:border-t focus-editorial"
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span className="text-micro text-muted-foreground/30 pt-1 w-24 flex-shrink-0 hidden sm:block">
                    {item.date}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-muted-foreground/50 bg-muted/40 px-2 py-0.5 rounded-sm">
                        {item.category}
                      </span>
                      <span className="text-micro text-muted-foreground/30 sm:hidden">
                        {item.date}
                      </span>
                    </div>
                    <h2 className="text-base font-medium text-foreground group-hover:text-foreground/70 transition-colors text-balance">
                      {item.title}
                    </h2>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
