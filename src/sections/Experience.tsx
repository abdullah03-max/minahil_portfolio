import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 bg-bg-base px-6 py-28 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-glow-violet/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="eyebrow">Career Path</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Where I've{' '}
            <span className="text-gradient">made an impact.</span>
          </h2>
        </motion.div>

        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-primary-lighter/40 via-primary/30 to-transparent sm:left-1/2" />

          <div className="flex flex-col gap-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className={`relative flex gap-6 sm:flex-row ${
                  i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Node */}
                <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-primary-lighter/30 bg-bg-panel shadow-[0_0_20px_rgba(0,212,255,0.25)] sm:absolute sm:left-1/2 sm:top-1 sm:-translate-x-1/2">
                  <Briefcase size={20} className="text-glow-cyan" />
                </div>

                {/* Spacer for alignment on desktop */}
                <div className="hidden flex-1 sm:block" />

                <div className={`glass glow-border flex-1 rounded-3xl p-7 ${i % 2 === 1 ? 'sm:mr-10' : 'sm:ml-10'}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-glow-cyan">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 font-body text-sm font-medium text-primary-lighter">
                    {exp.org}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-3 font-body text-sm text-ink-muted">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-lighter" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
