import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { skillCategories } from '../lib/data'
import { getIcon } from '../lib/iconMap'

/**
 * Skills section: the vertical scroll of the page drives a
 * horizontal translation of the skill cards track, creating the
 * "horizontal scroll" experience requested in the brief without
 * hijacking the user's native scroll wheel.
 */
export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)')
    setIsMobile(media.matches)
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Track width minus viewport — computed responsively via vw units in transform.
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-72%'])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative h-auto sm:h-[260vh] bg-bg-deep"
    >
      <div className="relative sm:sticky sm:top-0 flex h-auto sm:h-screen flex-col overflow-visible sm:overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 pt-20 sm:pt-28">
          <span className="eyebrow">What I Work With</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            A toolkit built for{' '}
            <span className="text-gradient">full-stack delivery.</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm text-ink-muted sm:text-base">
            Scroll down — these cards glide across the screen as you go.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-12 flex-1">
          <motion.div 
            style={isMobile ? {} : { x }} 
            className="flex overflow-x-auto sm:overflow-visible no-scrollbar h-auto sm:h-full items-center gap-6 px-6 sm:gap-8 sm:px-12"
          >
            {skillCategories.map((category) => {
              const Icon = getIcon(category.icon)
              return (
                <div
                  key={category.title}
                  className="glass glow-border group relative flex h-[300px] w-[78vw] flex-shrink-0 flex-col justify-between rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2 sm:w-[42vw] lg:w-[28vw]"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-glow-violet/20 text-glow-cyan">
                      <Icon size={28} strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-body text-xs font-medium text-ink-muted transition-colors group-hover:border-primary-lighter/30 group-hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Decorative glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              )
            })}

            {/* End spacer card */}
            <div className="flex h-[300px] w-[78vw] flex-shrink-0 flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 p-8 text-center sm:w-[42vw] lg:w-[24vw]">
              <p className="font-heading text-xl font-semibold text-white">
                Always learning,
              </p>
              <p className="mt-2 font-body text-sm text-ink-muted">
                always shipping.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
