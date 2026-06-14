import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

/**
 * Animates a number counting up from 0 to its target value
 * once it scrolls into view.
 */
export default function StatCounter({ value, suffix = '', label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }

    let frame: number
    const start = performance.now()
    const durationMs = 1400

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="flex flex-col gap-1"
    >
      <span className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {display}
        {suffix}
      </span>
      <span className="font-body text-sm text-ink-muted">{label}</span>
    </motion.div>
  )
}
