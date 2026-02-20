import { ExternalLink } from "lucide-react"

const products = [
  {
    id: "qube",
    name: "Qube",
    tagline: "PERFORMANCE-BASED GTM NETWORK FOR WEB3 IN ASIA",
    description:
      "DeFi・オンチェーンプロダクトのアジア展開を支援するパフォーマンスベースGTMネットワーク",
    url: "https://web.0xqube.xyz/",
  },
  {
    id: "hyperbuilder",
    name: "Hyperbuilder",
    tagline: "A HOME OF HYPERLIQUID BUILDERS",
    description:
      "Hyperliquidエコシステムのコミュニティ＆マーケティング支援。イベント開催やKOLキャンペーンを展開",
    url: "https://www.hyperbuilder.co/",
  },
]

export default function ProductsPageJa() {
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
            Products
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed text-jp">
            Web3とAIの交差点で価値を生み出すプロダクト群。
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="relative z-10 pb-24 lg:pb-32 border-t border-border-hairline">
        <div className="container-editorial pt-12 lg:pt-16">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.id} className="group flex flex-col">
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
                    {product.description}
                  </p>

                  {/* Product name as subtle external link */}
                  <h2 className="mt-4">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xl font-medium text-foreground hover:text-foreground/70 transition-colors"
                    >
                      {product.name}
                      <ExternalLink className="h-4 w-4 text-muted-foreground/40" />
                    </a>
                  </h2>

                  <p className="mt-1 text-xs text-muted-foreground/50 tracking-wide uppercase">
                    {product.tagline}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
