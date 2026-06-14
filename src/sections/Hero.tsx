import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { personalInfo, heroContent } from '../lib/data'
import SceneBackground from '../components/SceneBackground'
import ParticleField from '../components/ParticleField'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg-deep px-6"
    >
      {/* Background layers */}
      <div className="bg-grid absolute inset-0" />
      <SceneBackground />
      <ParticleField count={42} />

      {/* Radial glow accents */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-violet/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-glow-cyan/20 blur-[100px]" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-5xl flex-col items-center text-center"
      >
        <motion.h1
          variants={item}
          className="font-display text-[15vw] font-bold leading-[0.95] tracking-tight sm:text-[10vw] lg:text-[7.5rem]"
        >
          <span className="block text-gradient">{personalInfo.firstName.toUpperCase()}</span>
          <span className="block text-white/90">{personalInfo.lastName.toUpperCase()}</span>
        </motion.h1>

        <motion.div variants={item} className="mt-4 flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary-lighter" />
          <span className="font-heading text-lg font-medium uppercase tracking-[0.35em] text-primary-lighter sm:text-xl">
            {personalInfo.title}
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary-lighter" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl font-body text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {heroContent.subtitle}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#projects')}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-glow-violet px-7 py-3.5 font-body text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {heroContent.ctaPrimary}
            </span>
          </button>

          <a
            href="/Minahil-software_engineer_CV.pdf"
            download="Minahil-software_engineer_CV.pdf"
            className="glass glow-border flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Download size={16} />
            {heroContent.ctaSecondary}
          </a>

          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold text-ink-muted transition-colors hover:text-white"
          >
            <Mail size={16} />
            {heroContent.ctaTertiary}
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-muted transition-colors hover:text-white"
        aria-label="Scroll to About section"
      >
        <span className="font-body text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  )
}
