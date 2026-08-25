"use client"

import { useReducedMotion as useMotionReducedMotion } from "framer-motion"

export function useReducedMotion() {
  return useMotionReducedMotion()
}

export function ReducedMotionProvider({ children }) {
  return children
}