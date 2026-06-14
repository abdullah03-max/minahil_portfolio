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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-bg-deep px-6 lg:px-16"
    >
      {/* Background layers */}
      <div className="bg-grid absolute inset-0" />
      <ParticleField count={32} />

      {/* Radial glow accents */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-violet/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[320px] w-[320px] rounded-full bg-glow-cyan/15 blur-[100px]" />

      <div className="mx-auto w-full max-w-7xl relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 items-center pt-24 pb-16 lg:pt-0 lg:pb-0">
        
        {/* Left Column: Premium copy and CTA */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-7"
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-glow-cyan animate-pulse" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary-lighter">
              Open for collaboration
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[11vw] font-black leading-[1.0] tracking-tight sm:text-[8vw] lg:text-[5.5rem] text-white"
          >
            Engineering <br className="hidden lg:block"/>
            <span className="text-gradient">digital magic.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg font-body text-sm leading-relaxed text-ink-muted sm:text-base lg:text-lg"
          >
            Hi, I'm <strong className="text-white font-medium">{personalInfo.name}</strong>. {heroContent.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => scrollTo('#projects')}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-glow-violet px-7 py-3.5 font-body text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {heroContent.ctaPrimary}
              </span>
            </button>

            <a
              href="/Minahil-software_engineer_CV.pdf"
              download="Minahil-software_engineer_CV.pdf"
              className="glass glow-border flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              <Download size={14} />
              Resume
            </a>

            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-xs font-bold uppercase tracking-wider text-ink-muted transition-colors hover:text-white"
            >
              <Mail size={14} />
              Let's talk
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium 3D interactive character avatar */}
        <div className="relative h-[360px] sm:h-[420px] lg:h-[500px] lg:col-span-5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] rounded-[40px] overflow-hidden glass glow-border flex items-center justify-center shadow-2xl shadow-primary/20"
          >
            <img 
              src="/girl_developer_avatar_3d.png" 
              alt="Minahil Yaseen 3D Developer Avatar"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating tech background elements to emulate the dynamic 3D depth */}
          <div className="absolute inset-4 rounded-[40px] border border-white/5 pointer-events-none" />
          <div className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-primary-light/40 pointer-events-none" />
          <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-primary-light/40 pointer-events-none" />
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-muted transition-colors hover:text-white"
        aria-label="Scroll to About section"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
