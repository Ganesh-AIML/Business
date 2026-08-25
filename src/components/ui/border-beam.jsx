"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

export function BorderBeam({
  className,
  size = 200,
  duration = 6,
  delay = 0,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  reverse = false,
  borderWidth = 1.5,
}) {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      style={{ padding: borderWidth }}
    >
      <div
        className={cn(
          "absolute -top-1/2 -left-1/2 origin-center",
          className
        )}
        style={{
          width: size,
          height: size,
          background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 40deg, ${colorTo} 60deg, transparent 100deg)`,
          animation: `border-beam-rotate ${duration}s linear ${delay}s infinite ${reverse ? "reverse" : ""}`,
          filter: "blur(1px)",
        }}
      />
    </div>
  )
}
