'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'
import TextReveal from '@/components/motion/TextReveal'
import Magnetic from '@/components/motion/Magnetic'
import { profile } from '@/lib/data'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [solved, setSolved] = useState(false)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        gsap.from('.contact-rise', {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true },
        })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden bg-navy-900 pt-28 pb-10 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 mask-fade-y graph-grid opacity-40" />
      <div className="absolute bottom-0 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-[100%] bg-electric-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="contact-rise font-mono text-xs tracking-[0.4em] text-electric-400 uppercase">07 · Contact</p>
        <TextReveal
          as="h2"
          className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.02] text-ice"
        >
          {"Let's make math move for your students."}
        </TextReveal>
        <p className="contact-rise mx-auto mt-6 max-w-xl text-lg text-ice-dim">
          Curriculum collaborations, workshops, guest lessons, or a full-time classroom — my inbox is open.
        </p>

        <div className="contact-rise mt-12 flex justify-center">
          <Magnetic strength={0.45}>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-4 rounded-full bg-electric-600 px-10 py-5 text-lg font-medium text-white shadow-[0_0_60px_-10px_rgb(37_99_235)] transition-colors hover:bg-electric-500"
            >
              {profile.email}
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </Magnetic>
        </div>

        <div className="contact-rise mt-10 flex justify-center gap-6">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-ice-dim underline-offset-4 transition-colors hover:text-electric-400 hover:underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* footer + easter egg */}
      <footer className="relative mt-24 border-t border-mist/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="font-mono text-xs text-ice-dim/60">
            © {new Date().getFullYear()} {profile.name} · Built with GSAP, Lenis & a lot of chalk dust
          </p>
          <button
            onClick={() => setSolved((v) => !v)}
            aria-label="A small mathematical easter egg"
            className="group font-mono text-sm text-ice-dim/70 transition-colors hover:text-ice"
          >
            {solved ? (
              <motion.span
                key="solved"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-electric-400"
              >
                the most beautiful equation ∎ q.e.d.
              </motion.span>
            ) : (
              <span className="inline-flex items-center gap-1">
                e
                <motion.span
                  animate={{ rotate: [0, 0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, times: [0, 0.8, 1], ease: 'easeInOut' }}
                  className="inline-block text-mist"
                >
                  <sup>iπ</sup>
                </motion.span>
                + 1 = <span className="text-electric-400 group-hover:animate-pulse-glow">0</span>
              </span>
            )}
          </button>
        </div>
      </footer>
    </section>
  )
}
