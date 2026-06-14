import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Education() {
  return (
    <section id="education" className="relative bg-bg-deep px-6 py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-glow-cyan/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="eyebrow">Academic Background</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Built on a solid{' '}
            <span className="text-gradient">academic foundation.</span>
          </h2>
        </motion.div>

        <div className="mt-16 flex flex-col gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="glass glow-border flex flex-col items-start gap-5 rounded-3xl p-7 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-glow-violet/20 text-glow-cyan">
                  <GraduationCap size={26} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {edu.institution}
                  </h3>
                  <p className="mt-1 font-body text-sm text-ink-muted">{edu.degree}</p>
                </div>
              </div>
              <span className="rounded-full border border-primary-lighter/20 bg-primary/10 px-4 py-2 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-lighter">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
