"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function BlurFade({
  children,
  className,
  transition,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}) {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = inView ? inViewResult : true

  const directionMap = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
  }

  const initial = {
    opacity: 0,
    filter: `blur(${blur})`,
    ...directionMap[direction],
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 }
          : initial
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        ...(transition || {}),
      }}
    >
      {children}
    </motion.div>
  )
}
