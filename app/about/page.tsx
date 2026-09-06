import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TeamGrid } from "@/components/team-grid"

const companyInfo = [
  { label: "Company name", value: "Ceed Inc. (Kabushiki Kaisha Ceed)" },
  {
    label: "Office",
    value:
      "7F Kayabacho 1-chome Heiwa Building, 1-8-1 Nihonbashi Kayabacho, Chuo-ku, Tokyo 103-0025, Japan",
  },
  { label: "Founded", value: "January 2024" },
  { label: "Representative", value: "Yusaku Takahashi" },
  { label: "Team size", value: "Approx. 15 (including contractors)" },
  { label: "Email", value: "official@ceed.cloud" },
  {
    label: "Shareholders",
    value: "Management team, KUSABI, Decima, basepartners, ZVC, CARTA VENTURES, etc.",
  },
]

// Google Maps embed URL for the office location
const mapEmbedUrl =
  "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%97%A5%E6%9C%AC%E6%A9%8B%E8%8C%85%E5%A0%B4%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%98%E2%88%92%EF%BC%91&output=embed"

export default function AboutPage() {
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
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Our mission, team, and company information.
          </p>
        </div>
      </section>

      {/* Mission statement - type moment */}
      <section className="relative z-10 py-16 lg:py-20 bg-muted/30 border-t border-border-hairline">
        <div className="container-editorial">
          <span className="text-micro text-muted-foreground/40 block mb-6">
            Our mission
          </span>
          <p className="text-headline text-foreground max-w-3xl leading-tight text-balance">
            All for Value — Delivering essential value to all stakeholders: projects, creators, and users.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 py-16 lg:py-20 border-t border-border-hairline">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-micro text-muted-foreground/40 block mb-4">
                Leadership
              </span>
              <p className="text-title text-foreground text-balance">
                The team building Ceed.
              </p>
            </div>
            <div className="lg:col-span-8">
              <TeamGrid lang="en" />
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
              <p className="text-title text-foreground text-balance">
                Company overview
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                {/* Map embed */}
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

                {/* Company info table */}
                <div className="space-y-0">
                  {companyInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-4 border-b border-border-hairline first:border-t"
                    >
                      <span className="text-xs text-muted-foreground/50 sm:w-36 flex-shrink-0">
                        {item.label}
                      </span>
                      <span className="text-sm text-foreground break-all">
                        {item.label === "Email" ? (
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
            Get in touch
          </span>
          <div className="max-w-lg">
            <h2 className="text-title text-background text-balance">
              Want to learn more?
            </h2>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Get in touch or explore our open positions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 magnetic-hover min-h-[44px]"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/20 text-background hover:bg-background/10 hover:border-background/40 magnetic-hover min-h-[44px] bg-transparent"
              >
                <Link href="/recruit">View careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
