import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../lib/data'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
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

  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-118%'])

  return (
    <section id="projects" ref={sectionRef} className="relative h-auto sm:h-[320vh] bg-bg-deep">
      <div className="relative sm:sticky sm:top-0 flex h-auto sm:h-screen flex-col overflow-visible sm:overflow-hidden">
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

        <div className="mx-auto w-full max-w-7xl px-6 pt-20 sm:pt-28">
          <span className="eyebrow">Selected Work</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Projects that ship,{' '}
            <span className="text-gradient">not just demo.</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm text-ink-muted sm:text-base">
            Six builds spanning e-commerce, dashboards, mobile, and operations tooling.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-12 flex-1">
          <motion.div 
            style={isMobile ? {} : { x }} 
            className="flex overflow-x-auto sm:overflow-visible no-scrollbar h-auto sm:h-full items-center gap-6 px-6 pb-12 sm:gap-8 sm:px-12"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
