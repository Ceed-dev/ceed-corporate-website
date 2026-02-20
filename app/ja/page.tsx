import { ManifestoStageHeroJa } from "@/components/manifesto-stage-hero-ja"
import { HomeSections } from "@/components/home-sections"

export default function HomePageJa() {
  return (
    <div className="relative">
      {/* Premium background wrapper */}
      <div className="bg-premium relative">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
        
        <ManifestoStageHeroJa />
        <HomeSections lang="ja" />
      </div>
    </div>
  )
}
