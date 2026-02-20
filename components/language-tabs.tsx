"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const langRoutes = {
  en: ["/", "/about", "/products", "/recruit", "/news", "/contact"],
  ja: ["/ja", "/ja/about", "/ja/products", "/ja/recruit", "/ja/news", "/ja/contact"],
}

function getTargetPath(currentPath: string, targetLang: "en" | "ja"): string {
  const isJa = currentPath.startsWith("/ja")
  
  // Strip /ja prefix to get the base path
  const basePath = isJa ? currentPath.replace(/^\/ja/, "") || "/" : currentPath
  
  if (targetLang === "ja") {
    return basePath === "/" ? "/ja" : `/ja${basePath}`
  } else {
    return basePath
  }
}

export function LanguageTabs() {
  const pathname = usePathname()
  const router = useRouter()
  const isJa = pathname.startsWith("/ja")
  const currentLang = isJa ? "ja" : "en"

  const handleSwitch = (lang: "en" | "ja") => {
    if (lang === currentLang) return
    const targetPath = getTargetPath(pathname, lang)
    router.push(targetPath)
  }

  return (
    <div 
      className="flex items-center gap-0.5 p-0.5 bg-muted/50 rounded-sm border border-border-hairline"
      role="tablist"
      aria-label="Language selection"
    >
      <button
        type="button"
        role="tab"
        aria-selected={currentLang === "en"}
        onClick={() => handleSwitch("en")}
        className={cn(
          "px-2.5 py-1 text-xs font-medium rounded-[2px] transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          currentLang === "en"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={currentLang === "ja"}
        onClick={() => handleSwitch("ja")}
        className={cn(
          "px-2.5 py-1 text-xs font-medium rounded-[2px] transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          currentLang === "ja"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        JP
      </button>
    </div>
  )
}
