'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  type?: 'letter' | 'word'
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  duration = 0.05,
  type = 'letter',
}: AnimatedTextProps) {
  const items = type === 'letter' ? text.split('') : text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((char, index) => (
        <motion.span key={index} variants={item} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
