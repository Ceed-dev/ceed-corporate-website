"use client"

import * as React from "react"
import { roles } from "@/lib/roles"

function FloatingParticle({ delay, duration, x, y, size, opacity }: {
  delay: number; duration: number; x: number; y: number; size: number; opacity: number
}) {
  return (
    <div
      className="absolute rounded-full bg-foreground/[var(--particle-opacity)] animate-float pointer-events-none"
      style={{
        '--particle-opacity': opacity,
        '--float-x': `${x}px`,
        '--float-y': `${y}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      } as React.CSSProperties}
      aria-hidden="true"
    />
  )
}

function AnimatedLetter({ letter, index, isSpace }: { letter: string; index: number; isSpace: boolean }) {
  if (isSpace) return <span className="inline-block w-[0.3em]">&nbsp;</span>
  return (
    <span
      className="inline-block animate-letter-reveal opacity-0"
      style={{ animationDelay: `${0.8 + index * 0.05}s` }}
    >
      {letter}
    </span>
  )
}

export function ManifestoStageHero() {
  const [time, setTime] = React.useState<Date | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)
  const [isLoaded, setIsLoaded] = React.useState(false)

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
    requestAnimationFrame(() => {
      setIsLoaded(true)
    })
    return () => {
      clearInterval(interval)
      mediaQuery.removeEventListener("change", handleMotionChange)
    }
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const openRolesCount = roles?.length || 4
  const titleText = "All for Value"

  const particles = React.useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
      x: (Math.random() - 0.5) * 120,
      y: (Math.random() - 0.5) * 120,
      size: 2 + Math.random() * 4,
      opacity: 0.03 + Math.random() * 0.06,
    }))
  }, [])

  return (
    <section className="relative min-h-[75svh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-premium" />
      <div className={`absolute inset-0 bg-grid transition-opacity duration-[2s] ${isLoaded ? 'opacity-100' : 'opacity-0'}`} />

      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {particles.map((p) => (
            <FloatingParticle key={p.id} {...p} />
          ))}
        </div>
      )}

      <div
        className={`absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full transition-all duration-[3s] ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{ background: 'radial-gradient(circle, oklch(0.7 0.15 160 / 0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="hidden lg:block absolute left-[calc(var(--gutter)+2rem)] top-0 bottom-0 w-px bg-foreground/10 blend-difference" aria-hidden="true" />

      <div className="relative z-10 container-editorial pt-8 lg:pt-12">
        <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${prefersReducedMotion ? "" : "animate-hero-fade-down"}`}>
          <div className="flex flex-col gap-1">
            <div className="text-micro text-muted-foreground/50 font-mono tabular-nums">
              {time ? (
                <>
                  <span>{formatTime(time)}</span>
                  <span className="mx-2 text-muted-foreground/30">/</span>
                  <span>{formatDate(time)}</span>
                </>
              ) : (
                <span className="invisible">00:00:00 / Jan 1, 2026</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-subtle" />
            <span className="text-micro text-muted-foreground/50">{openRolesCount} roles open</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-editorial py-16 lg:py-24 -mt-4 lg:-mt-8">
          <div className="max-w-5xl relative">
            <div className="absolute -top-6 lg:-top-10 left-0 select-none pointer-events-none hidden lg:block" aria-hidden="true">
              <span className={`text-display text-foreground/[0.025] whitespace-nowrap block transition-all duration-[2s] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.3s' }}>All for Value</span>
              <span className={`text-display text-foreground/[0.015] whitespace-nowrap block -mt-4 transition-all duration-[2s] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.5s' }}>All for Value</span>
            </div>

            <div className={`mb-6 lg:mb-8 ${prefersReducedMotion ? "" : "animate-line-reveal"}`}>
              <span className="text-sm lg:text-base text-muted-foreground/40 tracking-[0.2em] uppercase font-light">The moment an agent takes an action.</span>
            </div>

            <h1 className="text-display mb-6 lg:mb-8">
              {prefersReducedMotion ? titleText : titleText.split("").map((letter, i) => (
                <AnimatedLetter key={i} letter={letter} index={i} isSpace={letter === " "} />
              ))}
            </h1>

            <p className={`text-base lg:text-lg text-muted-foreground/60 max-w-md leading-relaxed ${prefersReducedMotion ? "" : "animate-hero-slide-up"}`} style={{ animationDelay: '1.6s' }}>
              Delivering value where it belongs, in an internet where humans and agents converge.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 container-editorial pb-8 lg:pb-12">
        <div className={`flex items-center gap-3 ${prefersReducedMotion ? "" : "animate-hero-fade-up"}`} style={{ animationDelay: '2s' }}>
          <span className="text-micro text-muted-foreground/40">Scroll</span>
          <div className="relative w-px h-10 bg-border-hairline overflow-hidden">
            <div className={`absolute inset-x-0 top-0 h-4 bg-foreground/30 ${prefersReducedMotion ? "" : "animate-scroll-hint"}`} />
          </div>
        </div>
      </div>
    </section>
  )
}

