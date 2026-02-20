import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { roles, getRoleBySlug } from "@/lib/roles"

export async function generateStaticParams() {
  return roles.map((role) => ({
    slug: role.slug,
  }))
}

const roleDetailsJa: Record<
  string,
  {
    description: string
    responsibilities: string[]
    requirements: string[]
    niceToHave: string[]
  }
> = {
  "founding-engineer": {
    description:
      "エンジニアリングチームの基盤メンバーとして参加してください。技術的方向性を形作り、エンタープライズ・インテリジェンスを大規模に支えるコアシステムを構築します。これは、ゼロから構築し、初日から重要なインパクトを与えるチャンスです。",
    responsibilities: [
      "エンタープライズグレードのパフォーマンスを備えたコアプラットフォームインフラの設計・構築",
      "アーキテクチャ、技術選定、ベストプラクティスに関する重要な技術的意思決定",
      "チームの成長に合わせてスケールするエンジニアリングプラクティスの確立",
      "プロダクトおよびデザインチームと緊密に協力してソリューションを実現",
    ],
    requirements: [
      "5年以上のソフトウェアエンジニアリング経験",
      "TypeScript、React、Node.jsの深い習熟",
      "分散システムとクラウドインフラの経験",
      "複雑な技術的トレードオフを評価し、適切な判断を下す能力",
      "コードベースとチームを構築した経験",
    ],
    niceToHave: [
      "スタートアップまたは高成長環境での経験",
      "MLインフラまたはAIシステムの経験",
      "エンタープライズソフトウェアの経験",
      "オープンソースへの貢献",
    ],
  },
  "product-designer": {
    description:
      "エンタープライズプラットフォームのビジュアル言語とユーザー体験を定義してください。複雑な問題に取り組み、エレガントで直感的なソリューションに変えます。ゼロからデザインシステムを構築し、製品のあらゆる側面に影響を与えます。",
    responsibilities: [
      "コンセプトから出荷までのプロダクトデザインをリード",
      "成長に合わせてスケールする包括的なデザインシステムの作成・維持",
      "ユーザーニーズを理解するためのユーザーリサーチとテストの実施",
      "エンジニアリングと緊密に協力して完璧な実装を保証",
    ],
    requirements: [
      "5年以上のプロダクトデザイン経験",
      "インタラクティブなプロトタイプを含む強力なポートフォリオ",
      "ゼロからデザインシステムを構築した経験",
      "Figma、Framer、その他のモダンデザインツールの熟練度",
      "優れたコミュニケーション・コラボレーションスキル",
    ],
    niceToHave: [
      "B2BまたはエンタープライズSaaSの経験",
      "データビジュアライゼーションまたは複雑なインターフェースの経験",
      "HTMLとCSSの実用的な知識",
      "モーションデザインスキル",
    ],
  },
  "gtm-lead": {
    description:
      "ゼロからGo-to-Marketエンジンを構築してください。顧客へのリーチ方法を定義し、ポジショニングを作り、初期収益成長を推進します。これは営業とマーケティング戦略を形作り、会社の軌道に直接影響を与えるチャンスです。",
    responsibilities: [
      "包括的なGTM戦略の策定・実行",
      "初期顧客との関係構築、フィードバックループの確立",
      "初期営業プロセスの設計・実装",
      "成長に合わせて営業チームを採用・リード",
    ],
    requirements: [
      "5年以上のB2B営業またはビジネス開発経験",
      "GTM機能をゼロから構築した経験",
      "エンタープライズ顧客への販売における実績",
      "優れたコミュニケーション・プレゼンテーションスキル",
      "分析的思考とデータ駆動型意思決定",
    ],
    niceToHave: [
      "スタートアップ環境での経験",
      "技術分野、特にAI/MLの経験",
      "既存のエンタープライズネットワーク",
      "製品主導型成長への理解",
    ],
  },
  "research-engineer": {
    description:
      "AIで可能なことの限界を押し広げてください。インテリジェンスプラットフォームを支える最先端技術を研究・実装します。研究と実用的なエンジニアリングの両方に取り組み、本番システムでブレークスルーを実現します。",
    responsibilities: [
      "新しいAIアプローチを本番採用前に研究・プロトタイプ",
      "本番スケールでの機械学習モデルの実装とデプロイ",
      "エンタープライズユースケースのためのAI機能の設計・開発",
      "論文やオープンソースを通じた研究コミュニティへの貢献",
    ],
    requirements: [
      "3年以上の機械学習/AI研究・開発経験",
      "ML理論と現代のアーキテクチャの深い理解",
      "PyTorch、TensorFlow、または同様のフレームワークの熟練度",
      "モデルを本番環境にデプロイした経験",
      "強力な数学的基礎（線形代数、確率、最適化）",
    ],
    niceToHave: [
      "機械学習の博士号または修士号",
      "トップカンファレンスでの出版経験",
      "LLMまたはトランスフォーマーの経験",
      "分散学習システムの経験",
    ],
  },
}

export default async function RolePageJa({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const role = getRoleBySlug(slug)
  const details = roleDetailsJa[slug]

  if (!role || !details) {
    notFound()
  }

  return (
    <div className="bg-premium min-h-screen relative">
      <div
        className="absolute inset-0 bg-grid pointer-events-none"
        aria-hidden="true"
      />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <Link
            href="/ja/recruit"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            すべての職種
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs text-muted-foreground/60 bg-muted/50 px-2 py-0.5 rounded-sm">
              {role.team}
            </span>
            <span className="text-xs text-muted-foreground/50">
              {role.location}
            </span>
          </div>
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            {role.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 pb-24 lg:pb-32">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main content */}
            <div className="lg:col-span-7 space-y-12">
              {/* Description */}
              <div>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-jp">
                  {details.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-sm font-medium text-foreground mb-4">
                  担当業務
                </h2>
                <ul className="space-y-3">
                  {details.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground text-jp"
                    >
                      <span className="text-muted-foreground/30 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-sm font-medium text-foreground mb-4">
                  応募資格
                </h2>
                <ul className="space-y-3">
                  {details.requirements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground text-jp"
                    >
                      <span className="text-muted-foreground/30 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to have */}
              <div>
                <h2 className="text-sm font-medium text-foreground mb-4">
                  歓迎スキル
                </h2>
                <ul className="space-y-3">
                  {details.niceToHave.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground text-jp"
                    >
                      <span className="text-muted-foreground/30 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="hairline-panel p-6">
                  <h3 className="text-sm font-medium text-foreground mb-4">
                    このポジションに応募
                  </h3>
                  <p className="text-xs text-muted-foreground mb-6 text-jp">
                    履歴書とカバーレターをお送りください。3営業日以内にご連絡いたします。
                  </p>
                  <Button asChild className="w-full magnetic-hover min-h-[44px]">
                    <a href={`mailto:careers@ceed.cloud?subject=Application: ${role.title}`}>
                      応募する
                    </a>
                  </Button>
                </div>

                <div className="hairline-panel p-6">
                  <span className="text-micro text-muted-foreground/40 block mb-4">
                    詳細情報
                  </span>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-muted-foreground/50 block">
                        チーム
                      </span>
                      <span className="text-sm text-foreground">{role.team}</span>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground/50 block">
                        勤務地
                      </span>
                      <span className="text-sm text-foreground">
                        {role.location}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground/50 block">
                        雇用形態
                      </span>
                      <span className="text-sm text-foreground">フルタイム</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
