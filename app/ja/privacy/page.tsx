export default function PrivacyPageJa() {
  return (
    <div className="bg-premium min-h-screen relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            Privacy Policy
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
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">1. はじめに</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                株式会社Ceed（以下「当社」）は、お客様のプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、当社ウェブサイトをご利用いただく際に収集する情報の取り扱いについて説明するものです。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">2. 収集する情報</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 text-jp">
                当社は以下の種類の情報を収集することがあります。
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2 text-jp">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  <span><strong className="text-foreground">連絡先情報</strong> — お名前、メールアドレス、お問い合わせフォームを通じてご提供いただく情報。</span>
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2 text-jp">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  <span><strong className="text-foreground">利用データ</strong> — 閲覧ページ、滞在時間、参照URLなど、ウェブサイトの利用状況に関する情報。</span>
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2 text-jp">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  <span><strong className="text-foreground">デバイス情報</strong> — ブラウザの種類、OS、Cookieなどの技術を通じて自動的に収集されるデバイス識別子。</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">3. 情報の利用目的</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 text-jp">
                収集した情報は以下の目的で利用します。
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2 text-jp">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  お問い合わせへの対応およびカスタマーサポートの提供
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2 text-jp">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  ウェブサイトおよびサービスの改善
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2 text-jp">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  法的義務の遵守
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">4. 情報の共有</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                当社はお客様の個人情報を販売いたしません。ウェブサイトおよびサービスの運営を支援する信頼できる第三者サービスプロバイダーに対し、秘密保持義務のもとで共有する場合があります。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">5. データセキュリティ</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                当社は、個人情報の不正アクセス、改ざん、漏洩、破壊から保護するために、適切な技術的・組織的措置を講じています。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">6. お客様の権利</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                お客様は、個人情報へのアクセス、訂正、削除を求める権利があります。これらの権利を行使される場合は、{" "}
                <a href="mailto:official@ceed.cloud" className="text-foreground hover:text-foreground/70 transition-colors">
                  official@ceed.cloud
                </a>
                {" "}までご連絡ください。
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3 text-jp">7. お問い合わせ</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-jp">
                本プライバシーポリシーに関するご質問は、{" "}
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
