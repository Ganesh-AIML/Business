"use client"

import { cn } from "@/lib/utils"

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize: _shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        "group relative z-0 cursor-pointer overflow-hidden whitespace-nowrap",
        className
      )}
      style={{
        borderRadius,
        background,
        padding: "1em 2em",
      }}
      {...props}
    >
      <span
        className="absolute inset-0"
        style={{
          background: `linear-gradient(120deg, transparent 30%, ${shimmerColor} 50%, transparent 70%)`,
          backgroundSize: "200% 100%",
          animation: `shimmer ${shimmerDuration} infinite linear`,
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2 font-label-bold text-label-bold text-on-secondary">
        {children}
      </span>
    </button>
  )
}
