import Link from "next/link"
import { Button } from "@/components/ui/button"

const team = [
  { name: "Alex Chen", role: "共同創業者・CEO", initials: "AC" },
  { name: "Yuki Tanaka", role: "共同創業者・CTO", initials: "YT" },
  { name: "Sarah Kim", role: "プロダクト責任者", initials: "SK" },
  { name: "Marcus Johnson", role: "エンジニアリング責任者", initials: "MJ" },
]

const companyInfo = [
  { label: "会社名", value: "株式会社Ceed" },
  {
    label: "所在地(オフィス)",
    value:
      "〒103-0025 東京都中央区日本橋茅場町１丁目８−１ 茅場町一丁目平和ビル 7階",
  },
  { label: "設立", value: "2024年1月" },
  { label: "代表", value: "高橋勇作" },
  { label: "社員数", value: "12名(業務委託含む)" },
  { label: "Mail", value: "official@ceed.cloud" },
  {
    label: "株主",
    value: "経営陣・KUSABI・Decima・basepartners・ZVC・CARTA VENTURES等",
  },
]

const mapEmbedUrl =
  "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%97%A5%E6%9C%AC%E6%A9%8B%E8%8C%85%E5%A0%B4%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%98%E2%88%92%EF%BC%91&output=embed"

export default function AboutPageJa() {
  return (
    <div className="bg-premium min-h-screen relative">
      <div
        className="absolute inset-0 bg-grid pointer-events-none"
        aria-hidden="true"
      />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            About
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed text-jp">
            ミッション、チーム、会社情報。
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="relative z-10 py-16 lg:py-20 bg-muted/30 border-t border-border-hairline">
        <div className="container-editorial">
          <span className="text-micro text-muted-foreground/40 block mb-6">
            ミッション
          </span>
          <p className="text-headline text-foreground max-w-3xl leading-tight text-balance text-jp">
            複雑さを明瞭さに変える知的システムで、組織に力を与える。
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 py-16 lg:py-20 border-t border-border-hairline">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-micro text-muted-foreground/40 block mb-4">
                リーダーシップ
              </span>
              <p className="text-title text-foreground text-balance text-jp">
                Ceedを構築するチーム。
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member, index) => (
                  <div key={index} className="hairline-panel p-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-4">
                      {member.initials}
                    </div>
                    <h3 className="text-sm font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground/60 text-jp">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section
        id="company"
        className="relative z-10 py-16 lg:py-20 bg-muted/30 border-t border-border-hairline scroll-mt-20"
      >
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-micro text-muted-foreground/40 block mb-4">
                Company
              </span>
              <p className="text-title text-foreground text-balance text-jp">
                会社概要
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div className="overflow-hidden rounded-sm border border-border-hairline">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ceed Office Location"
                    className="w-full"
                  />
                </div>

                <div className="space-y-0">
                  {companyInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-4 border-b border-border-hairline first:border-t"
                    >
                      <span className="text-xs text-muted-foreground/50 sm:w-36 flex-shrink-0 text-jp">
                        {item.label}
                      </span>
                      <span className="text-sm text-foreground break-all text-jp">
                        {item.label === "Mail" ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="hover:text-foreground/70 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-16 lg:py-20 bg-foreground text-background">
        <div className="container-editorial">
          <span className="text-micro text-background/30 block mb-6">
            お問い合わせ
          </span>
          <div className="max-w-lg">
            <h2 className="text-title text-background text-balance text-jp">
              もっと知りたいですか？
            </h2>
            <p className="mt-4 text-sm text-background/60 leading-relaxed text-jp">
              お問い合わせいただくか、募集中のポジションをご覧ください。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 magnetic-hover min-h-[44px]"
              >
                <Link href="/ja/contact">お問い合わせ</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/20 text-background hover:bg-background/10 hover:border-background/40 magnetic-hover min-h-[44px] bg-transparent"
              >
                <Link href="/ja/recruit">採用情報を見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
