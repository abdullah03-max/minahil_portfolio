import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../lib/data'

/**
 * Project card with a subtle 3D tilt that follows the cursor,
 * plus a glowing preview placeholder and tech stack chips.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 10)
    rotateX.set((0.5 - py) * 10)
    glowX.set(px * 100)
    glowY.set(py * 100)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  const background = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(0,212,255,0.18), transparent 60%)`
  )

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1000,
      }}
      className="glass glow-border relative flex h-[380px] w-[85vw] flex-shrink-0 flex-col overflow-hidden rounded-3xl sm:w-[360px] lg:w-[380px]"
    >
      {/* Cursor glow overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background }}
      />

      {/* Preview area */}
      <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-bg-panel via-primary/10 to-glow-violet/10">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-bg-deep/20 to-transparent" />
        <span className="absolute right-4 top-4 font-display text-4xl font-bold text-white/15">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 font-body text-[10px] text-ink-muted backdrop-blur">
            Case Study
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1.5 font-body text-xs leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary-lighter/20 bg-primary/10 px-2 py-0.5 font-body text-[10px] font-medium text-primary-lighter"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-3 flex flex-col gap-1">
          {project.features.slice(0, 2).map((f) => (
            <li key={f} className="flex items-start gap-2 font-body text-[11px] leading-snug text-ink-muted">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-glow-cyan" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
