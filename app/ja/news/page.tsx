import Link from "next/link"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    date: "2026年2月",
    category: "プロダクト",
    title: "Agent Build事業を正式に開始",
    slug: "#",
  },
  {
    date: "2026年2月",
    category: "プロダクト",
    title: "HyperBuilderがHyperliquid以外のプロジェクトへB2B IRLイベントサービスを拡大",
    slug: "#",
  },
  {
    date: "2026年1月",
    category: "会社",
    title: "Qubeの累計クライアント数が230社以上、6カ国に展開",
    slug: "#",
  },
  {
    date: "2025年9月",
    category: "イベント",
    title: "HyperBuilderがKorea Blockchain Weekでパネル登壇",
    slug: "#",
  },
  {
    date: "2025年8月",
    category: "イベント",
    title: "HyperBuilderが東京で初のコミュニティミートアップを開催",
    slug: "#",
  },
  {
    date: "2024年1月",
    category: "会社",
    title: "株式会社Ceed 東京にて設立",
    slug: "#",
  },
]

export default function NewsPageJa() {
  return (
    <div className="bg-premium min-h-screen relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            News
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed text-jp">
            Ceedからの最新情報。
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
                  <span className="text-micro text-muted-foreground/30 pt-1 w-28 flex-shrink-0 hidden sm:block text-jp">
                    {item.date}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-muted-foreground/50 bg-muted/40 px-2 py-0.5 rounded-sm text-jp">
                        {item.category}
                      </span>
                      <span className="text-micro text-muted-foreground/30 sm:hidden text-jp">
                        {item.date}
                      </span>
                    </div>
                    <h2 className="text-base font-medium text-foreground group-hover:text-foreground/70 transition-colors text-balance text-jp">
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
