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

        {/* Right Column: Dynamic background-less character avatar with floating tech icons */}
        <div className="relative h-[380px] sm:h-[440px] lg:h-[520px] lg:col-span-5 flex items-center justify-center select-none">
          
          {/* Orbiting Tech Lines behind the character */}
          <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-primary-light/5 animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />

          {/* Floating tech icons orbiting/floating around the character */}
          {/* React Icon */}
          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-4 top-12 z-20 flex h-11 w-11 items-center justify-center rounded-2xl glass glow-border text-[#fbbf24] shadow-lg shadow-black/20"
          >
            <span className="font-heading text-xs font-bold text-gradient">React</span>
          </motion.div>

          {/* JS Icon */}
          <motion.div
            animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute left-6 bottom-16 z-20 flex h-10 w-10 items-center justify-center rounded-xl glass glow-border shadow-lg shadow-black/20"
          >
            <span className="font-heading text-xs font-bold text-primary-light">JS</span>
          </motion.div>

          {/* CSS Icon */}
          <motion.div
            animate={{ y: [0, -14, 0], x: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute right-4 top-24 z-20 flex h-10 w-10 items-center justify-center rounded-xl glass glow-border shadow-lg shadow-black/20"
          >
            <span className="font-heading text-xs font-bold text-white/80">CSS</span>
          </motion.div>

          {/* Flutter/Dart Icon */}
          <motion.div
            animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute right-6 bottom-24 z-20 flex h-11 w-11 items-center justify-center rounded-2xl glass glow-border shadow-lg shadow-black/20"
          >
            <span className="font-heading text-[10px] font-bold text-gradient">Flutter</span>
          </motion.div>

          {/* Character Image (Centered, floating gently, background-less) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] z-10 flex items-center justify-center"
          >
            <img 
              src="/girl_coder_no_bg_new.png" 
              alt="Minahil Yaseen 3D Developer Avatar"
              className="w-full h-full object-contain mix-blend-screen filter drop-shadow-[0_25px_25px_rgba(217,119,6,0.15)]"
            />
          </motion.div>
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
