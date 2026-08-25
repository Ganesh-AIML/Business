"use client"

import { useEffect, useRef } from "react"
import { useInView, useSpring, useTransform, motion } from "framer-motion"

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
  startValue = 0,
  className,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  const springValue = useSpring(
    direction === "down" ? value : startValue,
    { stiffness: 100, damping: 30, mass: 1 }
  )

  const displayValue = useTransform(springValue, (latest) => {
    if (decimalPlaces > 0) {
      return latest.toFixed(decimalPlaces)
    }
    return Math.floor(latest)
  })

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        springValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
      return () => clearTimeout(timeout)
    }
  }, [inView, springValue, value, direction, startValue, delay])

  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
    </span>
  )
}
