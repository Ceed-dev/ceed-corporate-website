"use client"

import * as React from "react"
import { roles } from "@/lib/roles"

export function ManifestoStageHeroJa() {
  const [time, setTime] = React.useState<Date | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    setTime(new Date())

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener("change", handleMotionChange)

    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
      mediaQuery.removeEventListener("change", handleMotionChange)
    }
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ja-JP", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-premium" />
      <div className="absolute inset-0 bg-grid" />

      <div 
        className="hidden lg:block absolute left-[calc(var(--gutter)+2rem)] top-0 bottom-0 w-px bg-foreground/10 blend-difference"
        aria-hidden="true"
      />

      {/* Top micro header with live timestamp */}
      <div className="relative z-10 container-editorial pt-8 lg:pt-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-micro text-muted-foreground/50 font-mono tabular-nums">
              {time ? (
                <>
                  <span>{formatTime(time)}</span>
                  <span className="mx-2 text-muted-foreground/30">/</span>
                  <span>{formatDate(time)}</span>
                </>
              ) : (
                <span className="invisible">00:00:00 / Jan 01, 2025</span>
              )}
            </div>
            <p className="text-micro text-muted-foreground/40">
              エージェントがアクションを起こす瞬間。
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-micro text-muted-foreground/50">
              {roles.length}件 募集中
            </span>
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-editorial py-16 lg:py-24">
          <div className="max-w-5xl relative">
            {/* Echo text layers */}
            <div
              className="absolute -top-6 lg:-top-10 left-0 select-none pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <span className="text-display text-foreground/[0.025] whitespace-nowrap block">
                All for Value
              </span>
              <span className="text-display text-foreground/[0.015] whitespace-nowrap block -mt-4">
                All for Value
              </span>
            </div>

            {/* English micro line */}
            <div
              className={`mb-6 lg:mb-8 ${
                prefersReducedMotion ? "" : "animate-line-reveal"
              }`}
            >
              <span className="text-lg lg:text-xl font-medium text-muted-foreground/70">
                We are Agent Builders
              </span>
            </div>

            {/* Main manifesto headline - Japanese */}
            <h1 className="relative">
              <span
                className={`block text-display text-foreground text-balance leading-[0.92] text-jp ${
                  prefersReducedMotion ? "" : "animate-line-reveal stagger-1"
                }`}
              >
                すべては
              </span>
              <span
                className={`block text-display text-foreground/70 text-balance leading-[0.92] text-jp ${
                  prefersReducedMotion ? "" : "animate-line-reveal stagger-2"
                }`}
              >
                バリューのために
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`mt-10 lg:mt-14 text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed text-jp ${
                prefersReducedMotion ? "" : "animate-slide-up stagger-4"
              }`}
            >
              AIエージェントを構築し、Web3とAIの交差点で新しい価値創出の仕組みを作る。
            </p>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 container-editorial pb-8 lg:pb-12">
        <div
          className={`flex items-center gap-3 ${
            prefersReducedMotion ? "" : "animate-fade-in stagger-6"
          }`}
        >
          <span className="text-micro text-muted-foreground/40">スクロール</span>
          <div className="relative w-px h-10 bg-border-hairline overflow-hidden">
            <div
              className={`absolute inset-x-0 top-0 h-4 bg-foreground/30 ${
                prefersReducedMotion ? "" : "animate-scroll-hint"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
