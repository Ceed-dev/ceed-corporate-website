import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { roles } from "@/lib/roles"

const businesses = [
  {
    id: "content-growth",
    label: "CONTENT GROWTH",
    enName: "Social media management & video production",
    jaName: "SNS運用・動画制作",
    enDescription:
      "We support audience growth through social media planning, management, video production, and post analysis.",
    jaDescription:
      "SNSの企画・運用と動画制作、投稿分析を通じて、集客・認知拡大を支援します。",
    image: "/business/content-growth-v1.webp",
    enImageAlt: "A team producing and analyzing short-form social media video",
    jaImageAlt: "ショート動画を撮影・編集し、投稿結果を分析する制作チーム",
  },
  {
    id: "business-transformation",
    label: "BUSINESS TRANSFORMATION",
    enName: "AI adoption & business process improvement",
    jaName: "AI導入・業務効率化支援",
    enDescription:
      "We implement AI systems and automate data aggregation and reporting around existing business workflows.",
    jaDescription:
      "業務に合わせたAIシステムの導入、データ集計・レポート作成の自動化を支援します。",
    image: "/business/business-transformation-v1.webp",
    enImageAlt: "A team reviewing an automated business reporting dashboard",
    jaImageAlt: "自動化された業務レポート画面を確認する担当者とエンジニア",
  },
]

const newsItems = [
  { date: "Feb 2026", title: "Agent Build business officially launched" },
  { date: "Feb 2026", title: "HyperBuilder pivots to B2B IRL event services" },
  { date: "Jan 2026", title: "Qube reaches 230+ cumulative clients" },
  { date: "Sep 2025", title: "Hyperliquid side event at Vietnam Blockchain Week" },
  { date: "Sep 2025", title: "HyperBuilder hosts panel at KBW Korea" },
  { date: "Feb 2025", title: "Qube selected as Kaia Japan marketing partner" },
  { date: "Nov 2024", title: "Completed pre-seed funding round" },
]

interface HomeSectionsProps {
  lang?: "en" | "ja"
}

export function HomeSections({ lang = "en" }: HomeSectionsProps) {
  const t = lang === "ja" ? {
    productHeading: "BUSINESS",
    productIntro: "SNS運用・動画制作と、AI導入・業務効率化支援。",
    viewAllProducts: "事業紹介を見る",
    aboutHeading: "ABOUT",
    aboutText: "Ceedは、SNSアカウントの運用と動画制作、AI導入・業務効率化を支援する会社です。運用とシステム構築の両方を手がけています。",
    readMore: "詳しく見る",
    recruitHeading: "RECRUIT",
    recruitText: "Web3とAIの交差点で、次世代の価値創出を担うチームを構築しています。",
    viewRoles: "募集職種を見る",
    newsHeading: "NEWS",
    allNews: "ニュース一覧",
    rolesOpen: "募集中",
  } : {
    productHeading: "BUSINESS",
    productIntro: "Social media and video production. AI adoption and business efficiency.",
    viewAllProducts: "Explore our business",
    aboutHeading: "ABOUT",
    aboutText: "Ceed provides social media management, video production, AI adoption, and business process improvement. We handle both ongoing operations and systems development.",
    readMore: "Read more",
    recruitHeading: "RECRUIT",
    recruitText: "We're building a team at the intersection of Web3 and AI to create the next generation of value.",
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

      {/* BUSINESS SECTION */}
      <section id="product" className="relative z-10 py-20 lg:py-32 border-t border-border-hairline scroll-mt-20">
        <div className="container-editorial">
          <h2 className="text-display text-foreground mb-4">{t.productHeading}</h2>
          <p className="text-sm text-muted-foreground max-w-md mb-12 lg:mb-16">
            {t.productIntro}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {businesses.map((business) => (
              <article key={business.id} className="group flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-hairline bg-muted/30">
                  <Image
                    src={business.image}
                    alt={lang === "ja" ? business.jaImageAlt : business.enImageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover saturate-[0.72] contrast-[0.96] transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                  <div className="absolute inset-0 bg-foreground/[0.03] mix-blend-multiply pointer-events-none" aria-hidden="true" />
                </div>

                <div className="mt-6 flex flex-col flex-1">
                  <p className={`text-sm text-muted-foreground leading-relaxed ${lang === "ja" ? "text-jp" : ""}`}>
                    {lang === "ja" ? business.jaDescription : business.enDescription}
                  </p>
                  <h3 className="mt-4 text-xl font-medium text-foreground">
                    {lang === "ja" ? business.jaName : business.enName}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground/50 tracking-wide uppercase">
                    {business.label}
                  </p>
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
