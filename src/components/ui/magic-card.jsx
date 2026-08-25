"use client"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

export function MagicCard({
  className,
  children,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  mode: _mode = "gradient",
  ...props
}) {
  const cardRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      className={cn("relative overflow-hidden rounded-xl", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientColor}${Math.round(gradientOpacity * 255).toString(16).padStart(2, "0")}, transparent 40%)`,
          }}
        />
      )}
    </div>
  )
}
