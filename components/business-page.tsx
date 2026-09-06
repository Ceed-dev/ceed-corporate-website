import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Lang = "en" | "ja"

const content = {
  ja: {
    title: "Business",
    intro: "SNS運用・動画制作と、AI導入・業務効率化支援。",
    servicesLabel: "提供サービス",
    contact: "相談する",
    businesses: [
      {
        id: "content-growth",
        label: "CONTENT GROWTH",
        name: "SNS運用・動画制作",
        headline: "投稿の企画から動画制作、運用・分析まで。",
        description:
          "集客や認知拡大を目的に、SNSの投稿を企画し、動画や画像を制作します。AIを活用して複数の切り口や表現を試し、投稿後の反応を分析。結果を次の企画・制作に反映します。",
        services: [
          ["SNSアカウント運用", "運用方針の策定、投稿の企画・管理、継続的なアカウント運用を行います。"],
          ["ショート動画・広告素材制作", "AIを活用し、ショート動画、切り抜き動画、広告用の画像・動画を制作します。"],
          ["投稿分析・改善提案", "再生数や視聴者の反応を確認し、投稿内容、動画の構成、表現の改善案をまとめます。"],
        ],
        note: "投稿結果を整理し、次に試す企画や表現へ反映します。",
      },
      {
        id: "business-transformation",
        label: "BUSINESS TRANSFORMATION",
        name: "AI導入・業務効率化支援",
        headline: "データ集計・レポート作成を自動化し、業務の負担を減らす。",
        description:
          "データ集計やレポート作成の自動化、売上・顧客データの分析環境づくりを支援します。業務内容と利用中のシステムを確認し、必要なAIシステムの開発、既存システムとの連携、導入後の運用支援まで対応します。",
        services: [
          ["AIシステムの開発・導入", "対象業務と担当者の作業を整理し、情報整理や業務処理を支援するAIシステムを構築します。"],
          ["データ集計・レポート作成の自動化", "必要なデータの取得・集計・定型レポートへの出力を自動化します。"],
          ["データ分析環境の整備", "売上・顧客データや広告の効果を確認できるよう、データ収集と分析用の画面・レポートを整えます。"],
        ],
        note: "導入後も、利用手順の整備と運用改善を支援します。",
      },
    ],
  },
  en: {
    title: "Business",
    intro: "Social media and video production. AI adoption and business efficiency.",
    servicesLabel: "Services",
    contact: "Talk to us",
    businesses: [
      {
        id: "content-growth",
        label: "CONTENT GROWTH",
        name: "Social media management & video production",
        headline: "From content planning and video production to account management and analysis.",
        description:
          "We plan social media content and produce video and image assets to support audience growth and brand awareness. We use AI to explore multiple angles and creative approaches, analyze audience response, and apply the findings to the next round of content.",
        services: [
          ["Social media account management", "We set the operating direction, plan and manage posts, and provide ongoing account management."],
          ["Short-form video & ad asset production", "We use AI to produce short-form videos, edited clips, and image and video assets for advertising."],
          ["Post analysis & improvement proposals", "We review views and audience response, then recommend improvements to topics, structure, and presentation."],
        ],
        note: "We turn post performance into the next content idea and creative test.",
      },
      {
        id: "business-transformation",
        label: "BUSINESS TRANSFORMATION",
        name: "AI adoption & business process improvement",
        headline: "Automate data aggregation and reporting to reduce manual work.",
        description:
          "We help automate data aggregation and reporting and create environments for analyzing sales and customer data. After reviewing your workflows and current systems, we develop the required AI systems, connect them to existing tools, and support ongoing operations after launch.",
        services: [
          ["AI system development & implementation", "We map the target workflow and build AI systems that support information handling and business processes."],
          ["Automated data aggregation & reporting", "We automate the collection and aggregation of required data and its output into recurring reports."],
          ["Data analysis environments", "We organize data collection and build dashboards or reports for reviewing sales, customer, and advertising data."],
        ],
        note: "After launch, we also support operating procedures and ongoing improvements.",
      },
    ],
  },
} as const

export function BusinessPage({ lang }: { lang: Lang }) {
  const t = content[lang]
  const contactHref = lang === "ja" ? "/ja/contact" : "/contact"

  return (
    <div className="bg-premium min-h-screen relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">{t.title}</h1>
          <p className={`mt-4 text-sm text-muted-foreground max-w-md leading-relaxed ${lang === "ja" ? "text-jp" : ""}`}>
            {t.intro}
          </p>
        </div>
      </section>

      <section className="relative z-10 pb-24 lg:pb-32 border-t border-border-hairline">
        <div className="container-editorial">
          {t.businesses.map((business, businessIndex) => (
            <article
              key={business.id}
              id={business.id}
              className="grid gap-10 lg:grid-cols-12 lg:gap-16 py-16 lg:py-24 border-b border-border-hairline scroll-mt-20"
            >
              <div className="lg:col-span-4">
                <span className="text-micro text-muted-foreground block mb-5">0{businessIndex + 1} / {business.label}</span>
                <h2 className={`text-title text-foreground text-balance ${lang === "ja" ? "text-jp" : ""}`}>{business.name}</h2>
              </div>
              <div className="lg:col-span-8">
                <h3 className={`text-title text-foreground max-w-2xl text-balance ${lang === "ja" ? "text-jp" : ""}`}>{business.headline}</h3>
                <p className={`mt-6 text-sm lg:text-base text-muted-foreground max-w-2xl leading-relaxed ${lang === "ja" ? "text-jp" : ""}`}>{business.description}</p>

                <span className={`text-micro text-muted-foreground block mt-12 mb-3 ${lang === "ja" ? "text-jp" : ""}`}>{t.servicesLabel}</span>
                <div>
                  {business.services.map(([title, description], serviceIndex) => (
                    <div key={title} className="grid gap-3 sm:grid-cols-[3rem_1fr] py-5 border-t border-border-hairline last:border-b">
                      <span className="text-micro text-muted-foreground">0{serviceIndex + 1}</span>
                      <div>
                        <h4 className={`text-sm font-medium text-foreground ${lang === "ja" ? "text-jp" : ""}`}>{title}</h4>
                        <p className={`mt-2 text-sm text-muted-foreground leading-relaxed ${lang === "ja" ? "text-jp" : ""}`}>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className={`mt-6 text-sm text-foreground/70 ${lang === "ja" ? "text-jp" : ""}`}>{business.note}</p>
                <Button asChild className="mt-8 min-h-[44px] magnetic-hover">
                  <Link href={contactHref}>
                    {t.contact}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
