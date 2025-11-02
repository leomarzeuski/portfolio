'use client'

import { useEffect, useRef } from 'react'

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  color?: string
}

export function Particles({
  className = '',
  quantity = 50,
  staticity = 50,
  ease = 50,
  color = 'rgba(59, 130, 246, 0.5)',
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Create particles
    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (ease / 100),
        vy: (Math.random() - 0.5) * (ease / 100),
        size: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Apply staticity (resistance)
        particle.vx *= staticity / 100
        particle.vy *= staticity / 100

        // Add random movement
        particle.vx += (Math.random() - 0.5) * 0.01
        particle.vy += (Math.random() - 0.5) * 0.01

        // Draw particle
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [quantity, staticity, ease, color])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
    />
  )
}
