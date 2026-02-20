export default function TermsPageJa() {
  return (
    <div className="bg-premium min-h-screen relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed text-jp">
            最終更新日: 2026年2月
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 pb-24 lg:pb-32 border-t border-border-hairline">
        <div className="container-editorial pt-12 lg:pt-16">
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">1. 利用規約の同意</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                当社ウェブサイト（以下「本サイト」）にアクセスし利用することにより、本利用規約に同意したものとみなされます。本規約に同意されない場合は、本サイトのご利用をお控えください。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">2. サイトの利用</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                本サイトは合法的な目的でのみご利用いただけます。本サイトの損傷、無効化、機能低下、または他のユーザーの利用を妨害するような方法で使用することはできません。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">3. 知的財産権</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                本サイト上のすべてのコンテンツ（テキスト、グラフィック、ロゴ、ソフトウェアを含む）は、株式会社Ceedまたはそのライセンサーの所有物であり、適用される知的財産法により保護されています。事前の書面による許可なく、コンテンツの複製、配布、二次的著作物の作成を行うことはできません。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">4. 第三者リンク</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                本サイトには第三者のウェブサイトへのリンクが含まれる場合があります。これらのリンクは利便性のためのみに提供されています。当社は第三者サイトのコンテンツや慣行を推奨または保証するものではありません。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">5. 免責事項</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                本サイトおよびそのコンテンツは「現状のまま」提供されます。当社は、本サイトが中断なく、エラーなく、またはウイルスやその他の有害なコンポーネントを含まないことを保証しません。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">6. 責任の制限</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                法律で認められる最大限の範囲において、当社は本サイトの利用から生じる間接的、偶発的、特別、または結果的な損害について責任を負いません。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">7. 規約の変更</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                当社は本利用規約をいつでも変更する権利を留保します。変更は本サイトに掲載された時点で即時効力を生じます。本サイトの継続的な利用をもって、改定された規約に同意したものとみなされます。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">8. 準拠法</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                本規約は日本国法に準拠し、同法に従って解釈されるものとします。紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">9. お問い合わせ</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                本規約に関するご質問は、{" "}
                <a href="mailto:official@ceed.cloud" className="text-foreground hover:text-foreground/70 transition-colors">
                  official@ceed.cloud
                </a>
                {" "}までお問い合わせください。
              </p>
            </div>

            <div className="pt-6 border-t border-border-hairline">
              <p className="text-xs text-muted-foreground/50 text-jp">
                株式会社Ceed — 〒103-0025 東京都中央区日本橋茅場町１丁目８−１ 茅場町一丁目平和ビル 7階
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
