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
        <div className="relative h-[400px] sm:h-[480px] lg:h-[560px] lg:col-span-5 flex items-center justify-center select-none overflow-visible">
          
          {/* Soft blue and orange glow effects behind the avatar */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/30 to-glow-violet/30 blur-[90px] opacity-80" />

          {/* Large glowing circular rings/orbits behind the 3D avatar */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-primary-light/20 border-dashed pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-glow-cyan/15 pointer-events-none"
          />

          {/* Floating technology badges around the avatar */}
          {/* React Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0], x: [0, 8, 0] }}
            transition={{ 
              scale: { delay: 0.6, duration: 0.5 },
              opacity: { delay: 0.6, duration: 0.5 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            className="absolute left-[5%] top-[15%] z-20 flex h-10 w-10 items-center justify-center rounded-xl glass glow-border text-glow-cyan shadow-lg shadow-black/20"
          >
            <span className="font-heading text-xs font-bold">React</span>
          </motion.div>

          {/* JavaScript Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, 10, 0], x: [0, -8, 0] }}
            transition={{ 
              scale: { delay: 0.7, duration: 0.5 },
              opacity: { delay: 0.7, duration: 0.5 },
              y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
            }}
            className="absolute left-[0%] bottom-[25%] z-20 flex h-10 w-10 items-center justify-center rounded-xl glass glow-border shadow-lg shadow-black/20 text-[#fbbf24]"
          >
            <span className="font-heading text-xs font-bold">JS</span>
          </motion.div>

          {/* Flutter Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ 
              scale: { delay: 0.8, duration: 0.5 },
              opacity: { delay: 0.8, duration: 0.5 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            className="absolute right-[5%] top-[12%] z-20 flex px-3 py-1 items-center justify-center rounded-full glass glow-border text-primary-light shadow-lg shadow-black/20"
          >
            <span className="font-heading text-[10px] font-bold uppercase tracking-wider">Flutter</span>
          </motion.div>

          {/* Firebase Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, 12, 0], x: [0, -6, 0] }}
            transition={{ 
              scale: { delay: 0.9, duration: 0.5 },
              opacity: { delay: 0.9, duration: 0.5 },
              y: { repeat: Infinity, duration: 5.2, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 5.2, ease: "easeInOut" }
            }}
            className="absolute right-[0%] bottom-[30%] z-20 flex px-2.5 py-1 items-center justify-center rounded-full glass glow-border text-[#f59e0b] shadow-lg shadow-black/20"
          >
            <span className="font-heading text-[10px] font-bold uppercase tracking-wider">Firebase</span>
          </motion.div>

          {/* HTML Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0], x: [0, 6, 0] }}
            transition={{ 
              scale: { delay: 1.0, duration: 0.5 },
              opacity: { delay: 1.0, duration: 0.5 },
              y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 4.8, ease: "easeInOut" }
            }}
            className="absolute left-[30%] top-[-5%] z-20 flex h-9 w-9 items-center justify-center rounded-xl glass glow-border text-white/90 shadow-lg shadow-black/20"
          >
            <span className="font-heading text-xs font-bold">HTML</span>
          </motion.div>

          {/* CSS Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, 8, 0], x: [0, -5, 0] }}
            transition={{ 
              scale: { delay: 1.1, duration: 0.5 },
              opacity: { delay: 1.1, duration: 0.5 },
              y: { repeat: Infinity, duration: 5.6, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 5.6, ease: "easeInOut" }
            }}
            className="absolute right-[35%] bottom-[-5%] z-20 flex h-9 w-9 items-center justify-center rounded-xl glass glow-border text-white/70 shadow-lg shadow-black/20"
          >
            <span className="font-heading text-xs font-bold">CSS</span>
          </motion.div>

          {/* 3D Avatar Image centered completely in the orbits with smooth rise entrance */}
          <motion.div
            initial={{ opacity: 0, y: 200, x: "-50%", scale: 0.9 }}
            animate={{ opacity: 1, y: "-50%", x: "-50%", scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 55, 
              damping: 14,
              delay: 0.15
            }}
            whileHover={{ y: "-55%", scale: 1.04 }}
            className="absolute left-1/2 top-1/2 z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] flex items-center justify-center cursor-pointer"
          >
            <img 
              src="/2.png" 
              alt="Minahil Yaseen 3D Developer Avatar"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(217,119,6,0.3)]"
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
