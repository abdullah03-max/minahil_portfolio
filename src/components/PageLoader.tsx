import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../lib/data'

/**
 * Brief animated reveal shown on first load — a quick brand moment
 * before the page settles in.
 */
export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const timer = setTimeout(() => setVisible(false), prefersReducedMotion ? 0 : 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-deep"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex items-center gap-3 font-display text-2xl font-bold"
          >
            <span className="text-gradient">{personalInfo.firstName}</span>
            <span className="h-2 w-2 rounded-full bg-glow-cyan shadow-[0_0_12px_rgba(0,212,255,0.9)]" />
            <span className="text-white/80">{personalInfo.lastName}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
