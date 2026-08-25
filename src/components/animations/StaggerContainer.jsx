"use client"

import React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "./useReducedMotion"

export function StaggerContainer({
  children,
  className,
  stagger = 0.07,
  delayChildren = 0.1,
  direction = "up",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) ? (
          React.cloneElement(child, {
            variants: itemVariants,
            key: child.key || index,
          })
        ) : (
          child
        )
      )}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay,
      },
    },
  }

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  )
}