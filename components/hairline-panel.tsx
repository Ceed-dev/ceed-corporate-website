import * as React from "react"
import { cn } from "@/lib/utils"

interface HairlinePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  lift?: boolean
}

export function HairlinePanel({
  children,
  className,
  hover = true,
  lift = false,
  ...props
}: HairlinePanelProps) {
  return (
    <div
      className={cn(
        "hairline-panel p-5 lg:p-6",
        hover && "hairline-panel",
        lift && "hairline-panel-lift",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Compact variant for smaller cards
export function HairlinePanelCompact({
  children,
  className,
  ...props
}: HairlinePanelProps) {
  return (
    <div
      className={cn(
        "hairline-panel p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
