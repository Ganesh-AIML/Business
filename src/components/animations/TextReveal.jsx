"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "./useReducedMotion"

export function TextReveal({
  children,
  className,
  as: Component = "p",
  split = "words",
  stagger = 0.03,
  delay = 0,
  duration = 0.5,
  ease = [0.25, 0.1, 0.25, 1],
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  const text = typeof children === "string" ? children : ""
  const words = split === "words" ? text.split(" ") : text.split("")

  if (shouldReduceMotion || !text) {
    return <Component className={className} {...props}>{children}</Component>
  }

  return (
    <Component className={className} {...props}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration,
            ease,
            delay: delay + i * stagger,
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {word}{i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Component>
  )
}

export function TextRevealLines({
  children,
  className,
  as: Component = "div",
  stagger = 0.07,
  delay = 0,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const lines = typeof children === "string" ? children.split("\n") : [children]

  if (shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </Component>
    )
  }

  return (
    <Component className={className} {...props}>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: delay + i * stagger,
          }}
        >
          {line}
        </motion.div>
      ))}
    </Component>
  )
}