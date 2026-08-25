"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useReducedMotion } from "./useReducedMotion"

const pageVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -20, filter: "blur(4px)" },
}

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  duration: 0.3,
}

export function PageTransition({ children, className }) {
  const shouldReduceMotion = useReducedMotion()
  const location = useLocation()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        style={{ position: "relative", width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export function PageTransitionWithLayout({ children, className }) {
  const shouldReduceMotion = useReducedMotion()
  const location = useLocation()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className={className}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{ position: "relative", width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export function LayoutTransition({ children, className, layoutId }) {
  return (
    <motion.div
      className={className}
      layoutId={layoutId}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}