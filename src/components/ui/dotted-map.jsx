"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"

const WORLD_POINTS = [
  // Simplified continental outlines as [x, y] percentages
  // North America
  [15, 20], [16, 22], [17, 24], [18, 23], [19, 25], [20, 24],
  [14, 25], [15, 27], [16, 28], [17, 26], [18, 27], [19, 28],
  [13, 28], [14, 30], [15, 31], [16, 30], [17, 31], [18, 30],
  [12, 30], [13, 32], [14, 33], [15, 32], [16, 33],
  [20, 26], [21, 27], [22, 28], [21, 29], [22, 30],
  // South America
  [22, 50], [23, 52], [24, 54], [25, 56], [24, 58], [23, 60],
  [22, 55], [21, 57], [22, 59], [23, 61], [24, 62],
  [20, 52], [21, 54], [22, 56],
  [25, 48], [26, 50], [27, 52], [26, 54],
  [24, 46], [25, 48], [26, 49],
  // Europe
  [47, 18], [48, 20], [49, 22], [50, 21], [51, 23],
  [48, 24], [49, 25], [50, 24], [51, 25], [52, 24],
  [46, 22], [47, 23], [48, 22],
  [50, 20], [51, 21], [52, 20], [53, 21],
  [49, 18], [50, 19], [51, 18],
  // Africa
  [48, 35], [49, 37], [50, 38], [51, 37], [52, 38],
  [47, 40], [48, 42], [49, 43], [50, 42], [51, 43],
  [46, 45], [47, 47], [48, 48], [49, 47], [50, 48],
  [47, 50], [48, 52], [49, 53], [50, 52],
  [48, 55], [49, 57], [50, 56], [51, 57],
  [49, 60], [50, 62], [51, 61],
  [52, 35], [53, 37], [54, 38],
  [53, 40], [54, 42], [55, 43],
  // Asia
  [55, 20], [56, 22], [57, 24], [58, 23], [59, 25],
  [60, 22], [61, 24], [62, 23], [63, 25], [64, 24],
  [65, 22], [66, 24], [67, 23], [68, 25],
  [70, 22], [71, 24], [72, 23], [73, 25],
  [75, 22], [76, 24], [77, 23], [78, 25],
  [80, 22], [81, 24], [82, 23],
  [60, 28], [61, 30], [62, 29], [63, 31],
  [65, 28], [66, 30], [67, 29], [68, 31],
  [70, 28], [71, 30], [72, 29], [73, 31],
  [75, 28], [76, 30], [77, 29], [78, 31],
  [80, 28], [81, 30], [82, 29],
  [58, 35], [59, 37], [60, 36], [61, 38],
  [63, 35], [64, 37], [65, 36], [66, 38],
  [69, 35], [70, 37], [71, 36], [72, 38],
  [75, 35], [76, 37], [77, 36],
  [80, 35], [81, 37],
  [78, 30], [79, 32], [80, 31], [81, 33],
  // India
  [72, 32], [73, 34], [74, 33], [75, 35], [76, 34],
  [73, 36], [74, 38], [75, 37], [76, 38],
  [72, 38], [73, 40], [74, 39], [75, 40],
  [73, 42], [74, 44], [75, 43],
  // Southeast Asia
  [78, 42], [79, 44], [80, 43], [81, 45],
  [83, 40], [84, 42], [85, 41], [86, 43],
  [88, 42], [89, 44], [90, 43],
  // Australia
  [82, 58], [83, 60], [84, 59], [85, 61],
  [86, 58], [87, 60], [88, 59], [89, 61],
  [83, 62], [84, 64], [85, 63], [86, 65],
  [87, 62], [88, 64], [89, 63],
  [84, 66], [85, 68], [86, 67],
  [82, 60], [83, 62],
  [90, 60], [91, 62],
]

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function DottedMap({
  markers = [],
  dotColor,
  markerColor = "#006c49",
  dotRadius = 0.25,
  stagger = true,
  pulse = false,
  width = 150,
  height = 75,
  className,
}) {
  const allDots = useMemo(() => {
    const dots = []
    const cols = Math.floor(width * 2)
    const rows = Math.floor(height * 2)
    const spacingX = 100 / cols
    const spacingY = 100 / rows

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const offsetX = stagger && row % 2 === 1 ? spacingX / 2 : 0
        const x = col * spacingX + offsetX
        const y = row * spacingY

        const seed = row * 1000 + col
        const jitter = seededRandom(seed) * 0.3

        let isLand = false
        for (const [px, py] of WORLD_POINTS) {
          if (Math.abs(x - px) < 1.2 && Math.abs(y - py) < 1.2) {
            isLand = true
            break
          }
        }

        if (isLand) {
          dots.push({
            cx: x + jitter * 0.2,
            cy: y + jitter * 0.2,
            r: dotRadius + seededRandom(seed + 1) * 0.05,
          })
        }
      }
    }
    return dots
  }, [width, height, stagger, dotRadius])

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("w-full h-full", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      {allDots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={dotColor || "currentColor"}
          opacity={0.6}
        />
      ))}
      {markers.map((marker, i) => {
        const x = ((marker.lng + 180) / 360) * width
        const y = ((90 - marker.lat) / 180) * height
        const r = (marker.size || 2) * 0.5
        return (
          <g key={i}>
            {pulse && (
              <circle
                cx={x}
                cy={y}
                r={r * 2}
                fill={markerColor}
                opacity={0.3}
              >
                <animate
                  attributeName="r"
                  from={r}
                  to={r * 3}
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.4"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
            <circle
              cx={x}
              cy={y}
              r={r}
              fill={markerColor}
            />
          </g>
        )
      })}
    </svg>
  )
}
