"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { roles } from "@/lib/roles"

const principles = [
  { letter: "A", title: "Craft over speed", desc: "We build things that last." },
  { letter: "B", title: "Clarity in complexity", desc: "Simple solutions to hard problems." },
  { letter: "C", title: "Own the outcome", desc: "Autonomy with accountability." },
  { letter: "D", title: "Learn in public", desc: "Share knowledge, embrace feedback." },
  { letter: "E", title: "Global by default", desc: "Built for the world." },
  { letter: "F", title: "Long-term thinking", desc: "Optimize for decades." },
]

const howWeWork = [
  { num: "01", title: "Async-first", desc: "Deep work without interruption" },
  { num: "02", title: "Small teams", desc: "Tight collaboration, clear ownership" },
  { num: "03", title: "Ship weekly", desc: "Continuous delivery, rapid iteration" },
  { num: "04", title: "Retreat quarterly", desc: "In-person connection that matters" },
]

const roleDescriptions: Record<string, { description: string; responsibilities: string[] }> = {
  "founding-engineer": {
    description: "Join as a foundational member of our engineering team. You'll shape the technical direction and build core systems for AI agents and Web3 products.",
    responsibilities: [
      "Design and build core platform infrastructure",
      "Make critical technical decisions",
      "Establish engineering best practices",
    ],
  },
  "product-designer": {
    description: "Define the visual language and user experience of our products. You'll work on complex problems and turn them into elegant, intuitive solutions.",
    responsibilities: [
      "Lead end-to-end product design",
      "Create and maintain design systems",
      "Conduct user research and testing",
    ],
  },
  "gtm-lead": {
    description: "Build our go-to-market engine from scratch. You'll define how we reach customers, craft our positioning, and drive our initial revenue growth.",
    responsibilities: [
      "Develop and execute GTM strategy",
      "Build relationships with early customers",
      "Hire and lead the sales team",
    ],
  },
  "research-engineer": {
    description: "Push the boundaries of what's possible with AI agents. You'll research and implement state-of-the-art techniques for autonomous value creation.",
    responsibilities: [
      "Research and prototype new AI approaches",
      "Implement models for production",
      "Contribute to the research community",
    ],
  },
}

export default function RecruitPage() {
  const [hoveredRole, setHoveredRole] = React.useState<string | null>(null)
  const [focusedRole, setFocusedRole] = React.useState<string | null>(null)

  const activeRole = hoveredRole || focusedRole
  const activeRoleData = roles.find((r) => r.slug === activeRole)
  const activeDescription = activeRole ? roleDescriptions[activeRole] : null

  return (
    <div className="bg-premium min-h-screen relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />

      {/* Page Header */}
      <section className="relative z-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <div className="container-editorial">
          <h1 className="text-headline text-foreground max-w-xl text-balance">
            Recruit
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Join us to build the future of AI agents and Web3.
          </p>
        </div>
      </section>

      {/* SECTION A: Hero */}
      <section className="relative z-10 pt-8 lg:pt-12 pb-20 lg:pb-32 border-t border-border-hairline">
        <div className="container-editorial">
          <h2 className="text-display text-foreground max-w-4xl text-balance leading-[0.95]">
            A unique moment to build AI agents that create real value.
          </h2>
          <p className="mt-8 lg:mt-12 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
            The convergence of AI agents, Web3, and decentralized infrastructure creates an unprecedented opportunity for value creation.
          </p>
        </div>
      </section>

      {/* Hairline separator */}
      <div className="container-editorial">
        <div className="section-separator" />
      </div>

      {/* SECTION B: How we think about building */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Principles list */}
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
                      <span className="text-sm text-muted-foreground ml-2">
                        — {p.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Big headline */}
            <div className="lg:col-span-5 lg:order-2">
              <p className="text-headline text-foreground text-balance">
                How we think about building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: Remote by design */}
      <section className="relative z-10 py-20 lg:py-32 bg-muted/30 border-t border-border-hairline">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Big headline */}
            <div className="lg:col-span-5">
              <p className="text-headline text-foreground text-balance">
                Remote by design.
              </p>
              <p className="text-headline text-muted-foreground text-balance">
                Connected by intention.
              </p>
            </div>

            {/* Right: 2x2 grid */}
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
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
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
            {/* Left: Roles list */}
            <div className="lg:col-span-7 lg:order-1">
              <div className="space-y-0">
                {roles.map((role, index) => (
                  <Link
                    key={role.slug}
                    href={`/recruit/${role.slug}`}
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

            {/* Right: Header + spotlight panel */}
            <div className="lg:col-span-5 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-baseline gap-3 mb-3">
                  <p className="text-headline text-foreground">
                    Join us
                  </p>
                </div>
                <p className="text-micro text-muted-foreground/50 mb-8">
                  {roles.length} roles open
                </p>

                {/* Role spotlight - shows on hover/focus */}
                <div
                  className="hairline-panel p-6 min-h-[200px]"
                  aria-live="polite"
                >
                  {activeRoleData && activeDescription ? (
                    <>
                      <span className="text-micro text-muted-foreground/40 block mb-3">
                        Spotlight
                      </span>
                      <h4 className="text-sm font-medium text-foreground mb-3">
                        {activeRoleData.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {activeDescription.description}
                      </p>
                      <ul className="space-y-1.5">
                        {activeDescription.responsibilities.map((resp, i) => (
                          <li key={i} className="text-xs text-muted-foreground/70 flex items-start gap-2">
                            <span className="text-muted-foreground/30 mt-0.5">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <span className="text-sm text-muted-foreground/40">
                      Hover or focus a role to preview
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
