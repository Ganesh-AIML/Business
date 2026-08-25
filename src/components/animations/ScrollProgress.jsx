"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useReducedMotion } from "./useReducedMotion"

export function ScrollProgress({
  className,
  height = 3,
  color = "#006c49",
  zIndex = 100,
}) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  if (shouldReduceMotion) {
    return null
  }

  return (
    <motion.div
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height,
        background: color,
        zIndex,
        pointerEvents: "none",
        transformOrigin: "left center",
      }}
      animate={{ scaleX: width }}
      transition={{ type: "linear", duration: 0.1 }}
    />
  )
}

export function ScrollProgressCircular({
  className,
  size = 40,
  strokeWidth = 3,
  color = "#006c49",
  position = "top-right",
  offset = 20,
}) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const circumference = Math.PI * (size - strokeWidth)
  const strokeDashoffset = useTransform(progress, [0, 1], [circumference, 0])

  if (shouldReduceMotion) {
    return null
  }

  const positionStyles = {
    "top-right": { top: offset, right: offset },
    "top-left": { top: offset, left: offset },
    "bottom-right": { bottom: offset, right: offset },
    "bottom-left": { bottom: offset, left: offset },
  }

  return (
    <motion.svg
      className={className}
      style={{
        position: "fixed",
        width: size,
        height: size,
        transform: "rotate(-90deg)",
        pointerEvents: "none",
        zIndex: 100,
        ...positionStyles[position],
      }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        fill="none"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        style={{
          strokeDashoffset: circumference,
        }}
        animate={{ strokeDashoffset }}
        transition={{ type: "linear", duration: 0.1 }}
      />
    </motion.svg>
  )
}