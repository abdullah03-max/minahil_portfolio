import { motion } from 'framer-motion'
import { services } from '../lib/data'
import { getIcon } from '../lib/iconMap'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-bg-base px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="eyebrow">How I Can Help</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Services built around{' '}
            <span className="text-gradient">your product's needs.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon)
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ delay: (i % 3) * 0.08 }}
                className="glass glow-border group relative flex flex-col gap-5 rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-glow-violet/20 text-glow-cyan transition-colors duration-300 group-hover:text-white">
                  <Icon size={24} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
