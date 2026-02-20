import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { roles } from "@/lib/roles"

const products = [
  {
    id: "qube",
    name: "Qube",
    tagline: "FULL-FUNNEL MARKETING ACROSS JAPAN AND ASIA",
    jpDescription:
      "仮想通貨業界特化のアフィリエイトプラットフォーム+アジア全域をカバーするマーケティング代理店",
    url: "https://web.0xqube.xyz/",
  },
  {
    id: "hyperbuilder",
    name: "Hyperbuilder",
    tagline: "A HOME OF HYPERLIQUID BUILDERS",
    jpDescription:
      "金融特化のブロックチェーン「Hyperliquid」上のプロジェクトを支援するインキュベーター",
    url: "https://www.hyperbuilder.co/",
  },
]

const newsItems = [
  { date: "Jan 15, 2026", title: "Ceed announces Series A funding round" },
  { date: "Dec 20, 2025", title: "Hyperbuilder launches incubator program" },
  { date: "Nov 30, 2025", title: "Qube expands to Southeast Asia" },
  { date: "Oct 15, 2025", title: "We're hiring: Join our growing team" },
  { date: "Sep 1, 2025", title: "Introducing Qube: Full-funnel marketing" },
]

interface HomeSectionsProps {
  lang?: "en" | "ja"
}

export function HomeSections({ lang = "en" }: HomeSectionsProps) {
  const t = lang === "ja" ? {
    productHeading: "PRODUCT",
    productIntro: "次世代のデジタルビジネスを支えるツールとプラットフォーム。",
    visitSite: "サイトを見る",
    viewAllProducts: "プロダクト一覧",
    aboutHeading: "ABOUT",
    aboutText: "Ceedは、組織がデータを理解し、意思決定し、行動する方法を再発明しています。複雑さを明瞭さに変える知的システムを構築しています。",
    readMore: "詳しく見る",
    recruitHeading: "RECRUIT",
    recruitText: "AIと企業インフラの交差点で、世界水準のチームを構築しています。変革的なテクノロジーを構築するユニークな瞬間です。",
    viewRoles: "募集職種を見る",
    newsHeading: "NEWS",
    allNews: "ニュース一覧",
    rolesOpen: "募集中",
  } : {
    productHeading: "PRODUCT",
    productIntro: "Tools and platforms powering the next generation of digital businesses.",
    visitSite: "Visit site",
    viewAllProducts: "View all products",
    aboutHeading: "ABOUT",
    aboutText: "Ceed is reimagining how organizations understand and act on their data. We're building intelligent systems that transform complexity into clarity.",
    readMore: "Read more",
    recruitHeading: "RECRUIT",
    recruitText: "We're building a world-class team at the intersection of AI and enterprise infrastructure. A unique moment to build transformative technology.",
    viewRoles: "View roles",
    newsHeading: "NEWS",
    allNews: "All news",
    rolesOpen: "open",
  }

  const basePath = lang === "ja" ? "/ja" : ""

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 py-20 lg:py-32 border-t border-border-hairline scroll-mt-20">
        <div className="container-editorial">
          <h2 className="text-display text-foreground mb-8">{t.aboutHeading}</h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            {t.aboutText}
          </p>
          <Link
            href={`${basePath}/about`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            {t.readMore}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section id="product" className="relative z-10 py-20 lg:py-32 border-t border-border-hairline scroll-mt-20">
        <div className="container-editorial">
          <h2 className="text-display text-foreground mb-4">{t.productHeading}</h2>
          <p className="text-sm text-muted-foreground max-w-md mb-12 lg:mb-16">
            {t.productIntro}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.id} className="group flex flex-col">
                {/* Media placeholder */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-hairline bg-muted/30">
                  <div className="absolute inset-0">
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-foreground/[0.04]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-medium text-foreground/10 tracking-tight">
                      {product.name}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                    「{product.jpDescription.replace(/^「|」$/g, "")}」
                  </p>
                  <h3 className="mt-4 text-xl font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground/50 tracking-wide uppercase">
                    {product.tagline}
                  </p>
                  <div className="mt-6">
                    <Button asChild size="sm" className="magnetic-hover">
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        {t.visitSite}
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href={`${basePath}/products`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              {t.viewAllProducts}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* RECRUIT SECTION */}
      <section id="recruit" className="relative z-10 py-20 lg:py-32 border-t border-border-hairline scroll-mt-20">
        <div className="container-editorial">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-display text-foreground">{t.recruitHeading}</h2>
            <span className="text-sm text-muted-foreground/50">
              {roles.length} {t.rolesOpen}
            </span>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            {t.recruitText}
          </p>
          <Link
            href={`${basePath}/recruit`}
            className="text-sm text-foreground hover:text-foreground/70 transition-colors inline-flex items-center gap-1 font-medium"
          >
            {t.viewRoles}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="relative z-10 py-20 lg:py-32 border-t border-border-hairline scroll-mt-20">
        <div className="container-editorial">
          <h2 className="text-display text-foreground mb-12">{t.newsHeading}</h2>
          
          <div className="space-y-0 max-w-2xl">
            {newsItems.map((item, index) => (
              <Link
                key={index}
                href={`${basePath}/news`}
                className="group flex items-center justify-between gap-4 py-4 border-b border-border-hairline first:border-t"
              >
                <div className="flex items-center gap-6 min-w-0">
                  <span className="text-xs text-muted-foreground/40 w-24 flex-shrink-0 hidden sm:block">
                    {item.date}
                  </span>
                  <span className="text-sm text-foreground group-hover:text-foreground/70 transition-colors truncate">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={`${basePath}/news`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              {t.allNews}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
