export default function PrivacyPage() {
  return (
    <div className="bg-premium min-h-screen relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 pb-24 lg:pb-32 border-t border-border-hairline">
        <div className="container-editorial pt-12 lg:pt-16">
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className="text-base font-medium text-foreground mb-3">1. Introduction</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ceed Inc. (&quot;Ceed&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">2. Information We Collect</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  <span><strong className="text-foreground">Contact information</strong> — Name, email address, and any information you provide through our contact form.</span>
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  <span><strong className="text-foreground">Usage data</strong> — Information about how you interact with our website, including pages visited, time spent, and referring URLs.</span>
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  <span><strong className="text-foreground">Device information</strong> — Browser type, operating system, and device identifiers collected automatically through cookies and similar technologies.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">3. How We Use Your Information</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  Respond to your inquiries and provide customer support
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  Improve our website and services
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-muted-foreground/30 mt-0.5">•</span>
                  Comply with legal obligations
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">4. Data Sharing</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our website and services, subject to confidentiality obligations.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">5. Data Security</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">6. Your Rights</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at{" "}
                <a href="mailto:official@ceed.cloud" className="text-foreground hover:text-foreground/70 transition-colors">
                  official@ceed.cloud
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">7. Contact</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy, please contact us at{" "}
                <a href="mailto:official@ceed.cloud" className="text-foreground hover:text-foreground/70 transition-colors">
                  official@ceed.cloud
                </a>.
              </p>
            </div>

            <div className="pt-6 border-t border-border-hairline">
              <p className="text-xs text-muted-foreground/50">
                Ceed Inc. — 7F Kayabacho 1-chome Heiwa Building, 1-8-1 Nihonbashi Kayabacho, Chuo-ku, Tokyo 103-0025, Japan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
