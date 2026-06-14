import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Check } from 'lucide-react'
import { personalInfo } from '../lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

const CONTACT_LINKS = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/-/g, '')}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: undefined },
  { icon: Github, label: 'GitHub', value: 'Minahilyasin', href: personalInfo.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'minahilyaseen', href: personalInfo.linkedin },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    // Placeholder submit — wire up to an API route or form service.
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <section id="contact" className="relative bg-bg-base px-6 py-28 lg:py-36">
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-glow-violet/15 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Let's build something{' '}
            <span className="text-gradient">great together.</span>
          </h2>
          <p className="mt-4 font-body text-sm text-ink-muted sm:text-base">
            Have a project in mind or an opportunity to discuss? Reach out — I usually
            reply within a day.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Contact details */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="flex flex-col gap-4 lg:col-span-4"
          >
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="glass glow-border flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-white/[0.04]">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-glow-violet/20 text-glow-cyan">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-muted">
                      {label}
                    </p>
                    <p className="truncate font-body text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              )
              return href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="glass-strong rounded-3xl p-7 lg:col-span-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-body text-xs uppercase tracking-[0.2em] text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-white placeholder:text-white/30 transition-colors focus:border-primary-lighter/50 focus:bg-white/[0.05] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-body text-xs uppercase tracking-[0.2em] text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-white placeholder:text-white/30 transition-colors focus:border-primary-lighter/50 focus:bg-white/[0.05] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="subject" className="font-body text-xs uppercase tracking-[0.2em] text-ink-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-white placeholder:text-white/30 transition-colors focus:border-primary-lighter/50 focus:bg-white/[0.05] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="font-body text-xs uppercase tracking-[0.2em] text-ink-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-white placeholder:text-white/30 transition-colors focus:border-primary-lighter/50 focus:bg-white/[0.05] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-glow-violet px-7 py-3.5 font-body text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed sm:col-span-2 sm:w-fit"
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && (
                  <>
                    Message Sent
                    <Check size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
