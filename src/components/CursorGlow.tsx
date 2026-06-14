import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

/**
 * A soft radial glow that follows the cursor across the entire page.
 * Purely decorative — sits behind content, ignores pointer events.
 */
export default function CursorGlow() {
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const springX = useSpring(x, { damping: 30, stiffness: 120, mass: 0.5 })
  const springY = useSpring(y, { damping: 30, stiffness: 120, mass: 0.5 })

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    function handleMove(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[500px] w-[500px] rounded-full lg:block"
      aria-hidden="true"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(0,212,255,0.07) 0%, rgba(37,99,235,0.04) 45%, transparent 70%)',
      }}
    />
  )
}
