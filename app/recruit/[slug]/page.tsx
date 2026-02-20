import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { roles, getRoleBySlug } from "@/lib/roles"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const role = getRoleBySlug(slug)

  if (!role) {
    return { title: "Role Not Found | Ceed" }
  }

  return {
    title: `${role.title} | Ceed Careers`,
    description: role.intro,
  }
}

export default async function RoleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const role = getRoleBySlug(slug)

  if (!role) {
    notFound()
  }

  return (
    <div className="bg-premium min-h-screen relative">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-8 lg:pb-12">
        <div className="container-editorial">
          {/* Back link */}
          <Link
            href="/recruit"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All roles
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div>
              <span className="text-micro text-muted-foreground/40 block mb-4">
                {role.team}
              </span>
              <h1 className="text-headline text-foreground text-balance">
                {role.title}
              </h1>
              <div className="flex items-center gap-3 mt-4 flex-wrap">
                <span className="text-xs text-muted-foreground/50 bg-muted/40 px-2 py-1 rounded-sm">
                  {role.location}
                </span>
                <span className="text-xs text-muted-foreground/50 bg-muted/40 px-2 py-1 rounded-sm">
                  {role.type}
                </span>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="magnetic-hover min-h-[44px] shrink-0"
            >
              <a href={`mailto:careers@ceed.cloud?subject=Application: ${role.title}`}>
                <Mail className="mr-2 h-4 w-4" />
                Apply now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main content - two column */}
      <section className="relative z-10 pb-24 lg:pb-32">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left - main content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Intro */}
              <div>
                <span className="text-micro text-muted-foreground/40 block mb-4">
                  About the role
                </span>
                <p className="text-base text-foreground leading-relaxed">
                  {role.intro}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <span className="text-micro text-muted-foreground/40 block mb-6">
                  What you'll do
                </span>
                <ul className="space-y-3">
                  {role.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-micro text-muted-foreground/30 pt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <span className="text-micro text-muted-foreground/40 block mb-6">
                  What we're looking for
                </span>
                <ul className="space-y-3">
                  {role.requirements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-muted-foreground/30">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to haves */}
              {role.niceToHaves.length > 0 && (
                <div>
                  <span className="text-micro text-muted-foreground/40 block mb-6">
                    Nice to have
                  </span>
                  <ul className="space-y-3">
                    {role.niceToHaves.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 text-sm text-muted-foreground/70 leading-relaxed"
                      >
                        <span className="text-muted-foreground/20">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right - sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-20 space-y-8">
                {/* Benefits */}
                <div className="hairline-panel p-5">
                  <span className="text-micro text-muted-foreground/40 block mb-4">
                    Benefits
                  </span>
                  <ul className="space-y-2">
                    {role.benefits.map((benefit, index) => (
                      <li key={index} className="text-xs text-muted-foreground">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="hairline-panel p-5">
                  <span className="text-micro text-muted-foreground/40 block mb-4">
                    Interview process
                  </span>
                  <div className="space-y-3">
                    {role.processSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-micro text-muted-foreground/30 pt-0.5">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-foreground">
                            {step.title}
                          </p>
                          <p className="text-xs text-muted-foreground/60 mt-0.5">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply CTA */}
                <Button
                  asChild
                  className="w-full magnetic-hover min-h-[44px]"
                >
                  <a href={`mailto:careers@ceed.cloud?subject=Application: ${role.title}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Apply for this role
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other roles */}
      <section className="relative z-10 py-16 lg:py-20 bg-muted/30 border-t border-border-hairline">
        <div className="container-editorial">
          <span className="text-micro text-muted-foreground/40 block mb-6">
            Other roles
          </span>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles
              .filter((r) => r.slug !== role.slug)
              .slice(0, 3)
              .map((otherRole) => (
                <Link
                  key={otherRole.slug}
                  href={`/recruit/${otherRole.slug}`}
                  className="hairline-panel hairline-panel-lift p-5 block"
                >
                  <span className="text-xs text-muted-foreground/50 bg-muted/40 px-2 py-0.5 rounded-sm">
                    {otherRole.team}
                  </span>
                  <h3 className="mt-3 text-sm font-medium text-foreground">
                    {otherRole.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground/60">
                    {otherRole.location}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
