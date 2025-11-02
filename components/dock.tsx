'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface DockProps {
  children: React.ReactNode
  className?: string
}

interface DockItemProps {
  children: React.ReactNode
  className?: string
}

export function Dock({ children, className = '' }: DockProps) {
  return (
    <motion.div
      className={`flex gap-4 rounded-2xl bg-background/80 backdrop-blur-lg border border-border p-4 shadow-xl ${className}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function DockItem({ children, className = '' }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(Infinity)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  )
}
