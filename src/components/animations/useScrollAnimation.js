"use client"

import { useRef } from "react"
import { useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useReducedMotion } from "./useReducedMotion"

export function useScrollAnimation(options = {}) {
  const {
    target,
    inputRange = [0, 1],
    outputRange,
    clamp = true,
  } = options

  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ target })

  const progress = useTransform(scrollYProgress, inputRange, outputRange || inputRange, { clamp })

  const springProgress = useSpring(progress, { stiffness: 100, damping: 30 })

  if (shouldReduceMotion) {
    return {
      progress: { current: 0 },
      springProgress: { current: 0 },
      scrollYProgress: { current: 0 },
    }
  }

  return {
    progress,
    springProgress,
    scrollYProgress,
  }
}

export function useParallax(options = {}) {
  const {
    target,
    speed = 0.5,
    clamp = true,
  } = options

  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ target })

  const y = useTransform(scrollYProgress, [0, 1], [0, -speed * 100], { clamp })

  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  if (shouldReduceMotion) {
    return { y: { current: 0 }, springY: { current: 0 } }
  }

  return { y, springY }
}

export function useScrollReveal(options = {}) {
  const {
    once = true,
    margin = "-50px",
    amount = 0.3,
  } = options

  const shouldReduceMotion = useReducedMotion()

  const ref = useRef(null)
  const inView = useInView(ref, { once, margin, amount })

  if (shouldReduceMotion) {
    return { ref, inView: true }
  }

  return { ref, inView }
}

export function useElementScroll(options = {}) {
  const { target, axis = "y" } = options

  const { scrollYProgress, scrollXProgress } = useScroll({ target })

  return axis === "y" ? scrollYProgress : scrollXProgress
}