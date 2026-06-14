import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../lib/data'
import { X, Github, ArrowUpRight } from 'lucide-react'

// Apple-inspired Project Showcase with expandable cards using Framer Motion layoutId.
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  // Escape key closes the detailed view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Disable main body scroll when card is expanded
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <section id="projects" className="relative bg-bg-deep px-6 py-28 lg:py-36">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center sm:text-left">
          <span className="eyebrow">Selected Work</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Projects that ship,{' '}
            <span className="text-gradient">not just demo.</span>
          </h2>
          <p className="mx-auto sm:mx-0 mt-4 max-w-xl font-body text-sm text-ink-muted sm:text-base">
            Six builds spanning e-commerce, dashboards, mobile, and operations tooling. Click a card to expand details.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`card-container-${project.title}`}
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="glass glow-border group relative flex h-[350px] cursor-pointer flex-col overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10"
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Preview image */}
              <motion.div 
                layoutId={`card-image-${project.title}`}
                className="relative h-44 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-bg-deep/20 to-transparent" />
                <span className="absolute right-4 top-4 font-display text-4xl font-bold text-white/15">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="absolute bottom-3 left-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 font-body text-[10px] text-ink-muted backdrop-blur">
                  Case Study
                </span>
              </motion.div>

              {/* Summary text */}
              <div className="flex flex-1 flex-col p-6">
                <motion.h3 
                  layoutId={`card-title-${project.title}`}
                  className="font-heading text-lg font-semibold text-white"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  layoutId={`card-description-${project.title}`}
                  className="mt-2 line-clamp-2 font-body text-xs leading-relaxed text-ink-muted"
                >
                  {project.description}
                </motion.p>

                {/* Tech stack badges */}
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary-lighter/15 bg-primary/10 px-2 py-0.5 font-body text-[9px] font-medium text-primary-lighter"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="rounded-full border border-white/5 bg-white/5 px-2 py-0.5 font-body text-[9px] font-medium text-ink-muted">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded detailed modal view */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Centered expanded card container (backdrop & scroll wrapper) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center py-10 px-4 sm:px-6 md:px-10"
            >
              <motion.div
                layoutId={`card-container-${selectedProject.title}`}
                onClick={(e) => e.stopPropagation()}
                className="glass glow-border relative my-auto flex w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-bg-panel shadow-2xl"
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-transform hover:scale-105 active:scale-95"
                >
                  <X size={15} />
                </button>

                {/* Main image / banner */}
                <motion.div
                  layoutId={`card-image-${selectedProject.title}`}
                  className="relative h-40 w-full flex-shrink-0 overflow-hidden sm:h-48"
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-panel via-transparent to-transparent" />
                </motion.div>

                {/* Details layout */}
                <div className="flex-1 p-5 sm:p-6">
                  <motion.h3
                    layoutId={`card-title-${selectedProject.title}`}
                    className="font-heading text-lg font-bold text-white sm:text-xl"
                  >
                    {selectedProject.title}
                  </motion.h3>

                  <motion.p
                    layoutId={`card-description-${selectedProject.title}`}
                    className="mt-2.5 font-body text-[13px] leading-relaxed text-ink-muted"
                  >
                    {selectedProject.description}
                  </motion.p>

                  {/* Tech Stack section */}
                  <div className="mt-6">
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-lighter">
                      Technologies used
                    </h4>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-primary-lighter/20 bg-primary/10 px-3 py-1 font-body text-[11px] font-semibold text-primary-lighter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Section */}
                  <div className="mt-6">
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-glow-cyan">
                      Key Features
                    </h4>
                    <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 font-body text-xs text-ink-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-glow-cyan" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links / Action section */}
                  <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-body text-xs font-medium text-white transition-colors hover:bg-white/10"
                      >
                        <Github size={15} />
                        GitHub Repository
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== '#' && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-glow-violet px-5 py-2.5 font-body text-xs font-semibold text-white shadow-md shadow-primary/20 transition-transform hover:scale-105"
                      >
                        Live Demo
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
