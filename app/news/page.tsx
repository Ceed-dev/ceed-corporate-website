const newsItems = [
  {
    date: "Feb 2026",
    category: "Product",
    title: "Agent Build business officially launched",
  },
  {
    date: "Feb 2026",
    category: "Product",
    title: "HyperBuilder pivots to B2B IRL event services beyond Hyperliquid",
  },
  {
    date: "Jan 2026",
    category: "Company",
    title: "Qube reaches 230+ cumulative clients across 6 countries",
  },
  {
    date: "Sep 2025",
    category: "Event",
    title: "HyperBuilder hosts panel at Korea Blockchain Week",
  },
  {
    date: "Aug 2025",
    category: "Event",
    title: "HyperBuilder hosts first Tokyo community meetup",
  },
  {
    date: "Jan 2024",
    category: "Company",
    title: "Ceed Inc. founded in Tokyo",
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
              <div
                key={index}
                className="flex items-start justify-between gap-4 py-6 border-b border-border-hairline first:border-t"
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
                    <h2 className="text-base font-medium text-foreground text-balance">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
