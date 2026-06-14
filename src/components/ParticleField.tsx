import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  size: number
  left: string
  top: string
  duration: number
  delay: number
  opacity: number
}

/**
 * Lightweight CSS-animated particle field — small glowing dots that
 * drift slowly, used behind the hero heading.
 */
export default function ParticleField({ count = 36 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.5 + 0.2,
    }))
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-glow-cyan"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 4}px rgba(0,212,255,0.8)`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 1.6, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
