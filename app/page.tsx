import { ManifestoStageHero } from "@/components/manifesto-stage-hero"
import { HomeSections } from "@/components/home-sections"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Premium background wrapper */}
      <div className="bg-premium relative">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
        
        <ManifestoStageHero />
        <HomeSections lang="en" />
      </div>
    </div>
  )
}
