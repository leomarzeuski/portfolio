'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface BlurFadeProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
  inView?: boolean
  blur?: string
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 6,
  className,
  inView = true,
  blur = '6px',
}: BlurFadeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldAnimate = !inView || isInView

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      animate={
        shouldAnimate
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y: yOffset, filter: `blur(${blur})` }
      }
      transition={{
        delay,
        duration,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
