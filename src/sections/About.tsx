import { motion } from 'framer-motion'
import { aboutContent, stats, personalInfo } from '../lib/data'
import StatCounter from '../components/StatCounter'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function About() {
  return (
    <section id="about" className="relative bg-bg-base px-6 py-28 lg:py-36">
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left column: heading + portrait card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <span className="eyebrow">About Me</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Engineering thoughtful products,{' '}
              <span className="text-gradient">end to end.</span>
            </h2>

            <div className="glass mt-10 rounded-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-glow-violet font-display text-xl font-bold">
                  MY
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold">{personalInfo.name}</p>
                  <p className="font-body text-sm text-ink-muted">{personalInfo.location}</p>
                </div>
              </div>
              <p className="mt-5 font-body text-sm leading-relaxed text-ink-muted">
                {aboutContent.paragraph}
              </p>
            </div>
          </motion.div>

          {/* Right column: specializations, foundations, stats */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass glow-border rounded-3xl p-7">
                <h3 className="font-heading text-base font-semibold text-white">
                  Specialized In
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {aboutContent.specializations.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-primary-lighter/20 bg-primary/10 px-3 py-1.5 font-body text-xs font-medium text-primary-lighter"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass glow-border rounded-3xl p-7">
                <h3 className="font-heading text-base font-semibold text-white">
                  Strong Foundation
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {aboutContent.foundations.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-sm text-ink-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-glow-cyan shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="glass-strong mt-6 grid grid-cols-2 gap-8 rounded-3xl p-8 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
