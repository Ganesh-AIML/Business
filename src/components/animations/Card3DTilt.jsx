"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useReducedMotion } from "./useReducedMotion"

export function Card3DTilt({
  children,
  className,
  maxTilt = 5,
  scale = 1.02,
  glare = true,
  glareOpacity = 0.1,
  reverse = false,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(
    y,
    [-1, 1],
    reverse ? [maxTilt, -maxTilt] : [-maxTilt, maxTilt]
  )
  const rotateY = useTransform(
    x,
    [-1, 1],
    reverse ? [-maxTilt, maxTilt] : [maxTilt, -maxTilt]
  )

  const springyX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springyY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / (rect.width / 2))
    y.set((e.clientY - centerY) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    x.set(0)
    y.set(0)
  }

  if (shouldReduceMotion) {
    return (
      <div
        ref={cardRef}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: springyX,
        rotateY: springyY,
        scale: isHovered ? scale : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      {...props}
    >
      {children}
      {glare && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: `radial-gradient(ellipse at center, rgba(255,255,255,${glareOpacity}) 0%, transparent 70%)`,
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
}

export function Card3DTiltImage({
  src,
  alt,
  className,
  maxTilt = 8,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const imgRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const translateX = useTransform(x, [-1, 1], [-maxTilt, maxTilt])
  const translateY = useTransform(y, [-1, 1], [-maxTilt, maxTilt])

  const springX = useSpring(translateX, { stiffness: 300, damping: 30 })
  const springY = useSpring(translateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !imgRef.current) return
    const rect = imgRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / (rect.width / 2))
    y.set((e.clientY - centerY) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    x.set(0)
    y.set(0)
  }

  if (shouldReduceMotion) {
    return (
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      />
    )
  }

  return (
    <motion.img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      animate={{
        x: springX,
        y: springY,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      {...props}
    />
  )
}