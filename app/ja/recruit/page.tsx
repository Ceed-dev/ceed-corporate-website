"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { roles } from "@/lib/roles"

const principles = [
  { letter: "A", title: "Craft over speed", desc: "長く使えるものを作る。" },
  { letter: "B", title: "Clarity in complexity", desc: "難しい問題にシンプルな解決策を。" },
  { letter: "C", title: "Own the outcome", desc: "自律性と責任。" },
  { letter: "D", title: "Learn in public", desc: "知識を共有し、フィードバックを受け入れる。" },
  { letter: "E", title: "Global by default", desc: "世界のために構築。" },
  { letter: "F", title: "Long-term thinking", desc: "数十年先を見据えて最適化。" },
]

const howWeWork = [
  { num: "01", title: "Async-first", desc: "中断のない深い仕事" },
  { num: "02", title: "Small teams", desc: "緊密な協力、明確なオーナーシップ" },
  { num: "03", title: "Ship weekly", desc: "継続的デリバリー、迅速なイテレーション" },
  { num: "04", title: "Retreat quarterly", desc: "意味のある対面でのつながり" },
]

const roleDescriptions: Record<string, { description: string; responsibilities: string[] }> = {
  "founding-engineer": {
    description: "エンジニアリングチームの基盤メンバーとして参加。技術的方向性を形作り、AIエージェントとWeb3プロダクトのコアシステムを構築します。",
    responsibilities: [
      "コアプラットフォームインフラの設計・構築",
      "重要な技術的意思決定",
      "エンジニアリングベストプラクティスの確立",
    ],
  },
  "product-designer": {
    description: "プロダクトのビジュアル言語とユーザー体験を定義。複雑な問題をエレガントで直感的なソリューションに変えます。",
    responsibilities: [
      "エンドツーエンドのプロダクトデザインをリード",
      "デザインシステムの作成・維持",
      "ユーザーリサーチとテストの実施",
    ],
  },
  "gtm-lead": {
    description: "ゼロからGo-to-Marketエンジンを構築。顧客へのリーチ方法を定義し、ポジショニングを作り、初期収益成長を推進します。",
    responsibilities: [
      "GTM戦略の策定・実行",
      "初期顧客との関係構築",
      "営業チームの採用・リード",
    ],
  },
  "research-engineer": {
    description: "AIエージェントで可能なことの限界を押し広げる。自律的な価値創出のための最先端技術を研究・実装します。",
    responsibilities: [
      "新しいAIアプローチの研究・プロトタイプ",
      "本番環境向けモデルの実装",
      "研究コミュニティへの貢献",
    ],
  },
}

export default function RecruitPageJa() {
  const [hoveredRole, setHoveredRole] = React.useState<string | null>(null)
  const [focusedRole, setFocusedRole] = React.useState<string | null>(null)

  const activeRole = hoveredRole || focusedRole
  const activeRoleData = roles.find((r) => r.slug === activeRole)
  const activeDescription = activeRole ? roleDescriptions[activeRole] : null

  return (
    <div className="bg-premium min-h-screen relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Page Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            Recruit
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed text-jp">
            AIエージェントとWeb3の未来を共に創る。
          </p>
        </div>
      </section>

      {/* SECTION A: Hero */}
      <section className="relative z-10 pt-8 lg:pt-12 pb-20 lg:pb-32 border-t border-border-hairline">
        <div className="container-editorial">
          <h2 className="text-display text-foreground max-w-4xl text-balance leading-[0.95] text-jp">
            本質的な価値を生み出すAIエージェントを構築する、ユニークな瞬間。
          </h2>
          <p className="mt-8 lg:mt-12 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed text-jp">
            AIエージェント、Web3、分散型インフラの融合が、価値創出の前例のない機会を生み出しています。
          </p>
        </div>
      </section>

      <div className="container-editorial">
        <div className="section-separator" />
      </div>

      {/* SECTION B: How we think about building */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7 lg:order-1">
              <div className="space-y-0">
                {principles.map((p) => (
                  <div
                    key={p.letter}
                    className="flex items-baseline gap-6 py-4 border-b border-border-hairline first:border-t"
                  >
                    <span className="text-caption text-muted-foreground/40 w-6">
                      {p.letter}
                    </span>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-foreground">
                        {p.title}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2 text-jp">
                        — {p.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:order-2">
              <p className="text-headline text-foreground text-balance text-jp">
                構築についての考え方。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: Remote by design */}
      <section className="relative z-10 py-20 lg:py-32 bg-muted/30 border-t border-border-hairline">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="text-headline text-foreground text-balance text-jp">
                設計によるリモート。
              </p>
              <p className="text-headline text-muted-foreground text-balance text-jp">
                意図的なつながり。
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-px bg-border-hairline">
                {howWeWork.map((item) => (
                  <div
                    key={item.num}
                    className="bg-background p-5 lg:p-6"
                  >
                    <span className="text-micro text-muted-foreground/30 block mb-3">
                      {item.num}
                    </span>
                    <h3 className="text-sm font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed text-jp">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: Join us - Roles list */}
      <section className="relative z-10 py-20 lg:py-32 border-t border-border-hairline">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 lg:order-1">
              <div className="space-y-0">
                {roles.map((role, index) => (
                  <Link
                    key={role.slug}
                    href={`/ja/recruit/${role.slug}`}
                    className="group flex items-start justify-between gap-4 py-5 border-b border-border-hairline first:border-t focus-editorial"
                    onMouseEnter={() => setHoveredRole(role.slug)}
                    onMouseLeave={() => setHoveredRole(null)}
                    onFocus={() => setFocusedRole(role.slug)}
                    onBlur={() => setFocusedRole(null)}
                  >
                    <div className="flex items-start gap-6 flex-1 min-w-0">
                      <span className="text-micro text-muted-foreground/30 pt-1 w-6 flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                          {role.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          <span className="text-xs text-muted-foreground/60 bg-muted/50 px-2 py-0.5 rounded-sm">
                            {role.team}
                          </span>
                          <span className="text-xs text-muted-foreground/50">
                            {role.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </Link>
                ))}
              </div>

            </div>

            <div className="lg:col-span-5 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-baseline gap-3 mb-3">
                  <p className="text-headline text-foreground text-jp">
                    参加する
                  </p>
                </div>
                <p className="text-micro text-muted-foreground/50 mb-8">
                  {roles.length}件 募集中
                </p>

                <div
                  className="hairline-panel p-6 min-h-[200px]"
                  aria-live="polite"
                >
                  {activeRoleData && activeDescription ? (
                    <>
                      <span className="text-micro text-muted-foreground/40 block mb-3">
                        スポットライト
                      </span>
                      <h4 className="text-sm font-medium text-foreground mb-3">
                        {activeRoleData.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-jp">
                        {activeDescription.description}
                      </p>
                      <ul className="space-y-1.5">
                        {activeDescription.responsibilities.map((resp, i) => (
                          <li key={i} className="text-xs text-muted-foreground/70 flex items-start gap-2 text-jp">
                            <span className="text-muted-foreground/30 mt-0.5">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <span className="text-sm text-muted-foreground/40 text-jp">
                      職種にカーソルを合わせるとプレビューが表示されます
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
