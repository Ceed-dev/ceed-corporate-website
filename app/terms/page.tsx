export default function TermsPage() {
  return (
    <div className="bg-premium min-h-screen relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            Terms of Use
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
              <h2 className="text-base font-medium text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By accessing and using the Ceed website (&quot;Site&quot;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">2. Use of the Site</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You may use this Site for lawful purposes only. You agree not to use the Site in any way that could damage, disable, or impair the Site or interfere with any other party&apos;s use of the Site.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">3. Intellectual Property</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All content on this Site, including text, graphics, logos, and software, is the property of Ceed Inc. or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">4. Third-Party Links</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This Site may contain links to third-party websites. These links are provided for convenience only. Ceed does not endorse or assume responsibility for the content or practices of any third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">5. Disclaimer</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Site and its content are provided &quot;as is&quot; without warranties of any kind, either express or implied. Ceed does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">6. Limitation of Liability</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Ceed shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">7. Changes to Terms</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ceed reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">8. Governing Law</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Japan. Any disputes shall be subject to the exclusive jurisdiction of the Tokyo District Court.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium text-foreground mb-3">9. Contact</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For questions about these terms, contact us at{" "}
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
