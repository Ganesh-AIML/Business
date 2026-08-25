"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReducedMotion } from "./useReducedMotion"

export function MagneticHover({
  children,
  className,
  strength = 0.3,
  scale = 1.05,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    x.set(deltaX)
    y.set(deltaY)
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    x.set(0)
    y.set(0)
  }

  const child = React.Children.only(children)

  if (shouldReduceMotion) {
    return React.cloneElement(child, {
      className: `${child.props.className || ""} ${className || ""}`,
      onMouseEnter: (e) => { setIsHovered(true); child.props.onMouseEnter?.(e) },
      onMouseLeave: (e) => { setIsHovered(false); child.props.onMouseLeave?.(e) },
      style: {
        ...child.props.style,
        transform: isHovered ? `scale(${scale})` : "scale(1)",
        transition: "transform 0.2s ease",
      },
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{ display: "inline-block" }}
      {...props}
    >
      {React.cloneElement(child, {
        style: {
          ...child.props.style,
          x: springX,
          y: springY,
          scale: isHovered ? scale : 1,
        },
      })}
    </motion.div>
  )
}

export function MagneticButton({
  children,
  className,
  strength = 0.4,
  scale = 1.05,
  onClick,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 400, damping: 30 })
  const springY = useSpring(y, { stiffness: 400, damping: 30 })

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    x.set(0)
    y.set(0)
  }

  if (shouldReduceMotion) {
    return (
      <button
        ref={ref}
        className={className}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{
          transform: isPressed
            ? "scale(0.98)"
            : isHovered
            ? `scale(${scale})`
            : "scale(1)",
          transition: "transform 0.1s ease",
        }}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileTap={{ scale: 0.95 }}
      style={{
        x: springX,
        y: springY,
        scale: isHovered ? scale : 1,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}