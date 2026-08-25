"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useReducedMotion } from "./useReducedMotion"

export function AnimatedNumber({
  value,
  startValue = 0,
  decimalPlaces = 0,
  _duration = 1.5,
  delay = 0,
  className,
  prefix = "",
  suffix = "",
  onComplete,
}) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const hasAnimated = useRef(false)

  const springValue = useSpring(shouldReduceMotion ? value : startValue, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  })

  const displayValue = useTransform(springValue, (latest) => {
    const num = decimalPlaces > 0 ? latest.toFixed(decimalPlaces) : Math.floor(latest)
    return `${prefix}${num}${suffix}`
  })

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const timeout = setTimeout(() => {
        springValue.set(value)
        if (onComplete) onComplete()
      }, delay * 1000)
      return () => clearTimeout(timeout)
    }
  }, [inView, springValue, value, delay, onComplete])

  useEffect(() => {
    if (!inView && hasAnimated.current) {
      hasAnimated.current = false
      springValue.set(startValue)
    }
  }, [inView, springValue, startValue])

  if (shouldReduceMotion) {
    return (
      <span ref={ref} className={className}>
        {prefix}{decimalPlaces > 0 ? value.toFixed(decimalPlaces) : Math.floor(value)}{suffix}
      </span>
    )
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
    </span>
  )
}

export function AnimatedCountUp({
  end,
  start = 0,
  _duration = 2,
  delay = 0,
  className,
  prefix = "",
  suffix = "",
  separator = ",",
  decimalPlaces = 0,
}) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  const springValue = useSpring(shouldReduceMotion ? end : start, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  })

  const displayValue = useTransform(springValue, (latest) => {
    const num = decimalPlaces > 0 ? latest.toFixed(decimalPlaces) : Math.floor(latest)
    const parts = num.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return `${prefix}${parts.join(".")}${suffix}`
  })

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        springValue.set(end)
      }, delay * 1000)
      return () => clearTimeout(timeout)
    }
  }, [inView, springValue, end, delay])

  if (shouldReduceMotion) {
    const num = decimalPlaces > 0 ? end.toFixed(decimalPlaces) : Math.floor(end)
    const parts = num.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return <span ref={ref} className={className}>{prefix}{parts.join(".")}{suffix}</span>
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
    </span>
  )
}