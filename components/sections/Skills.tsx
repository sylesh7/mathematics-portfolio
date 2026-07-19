'use client'

import { useRef } from 'react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'
import SectionHeading from '@/components/motion/SectionHeading'
import Magnetic from '@/components/motion/Magnetic'
import { skills } from '@/lib/data'

/**
 * Magnetic skill cards over a slowly-orbiting ring system. Proficiency bars
 * fill (scaleX, transform-only) when scrolled into view.
 */
export default function Skills() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        gsap.from('.skill-card', {
          opacity: 0,
          y: 54,
          duration: 0.8,
          ease: 'power3.out',
          stagger: { each: 0.07, from: 'random' },
          scrollTrigger: { trigger: '.skill-grid', start: 'top 80%', once: true },
        })
        gsap.utils.toArray<HTMLElement>('.skill-fill').forEach((bar) => {
          gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
              scaleX: Number(bar.dataset.pct) / 100,
              duration: 1.3,
              ease: 'power3.inOut',
              scrollTrigger: { trigger: bar, start: 'top 88%', once: true },
            },
          )
        })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="skills" className="relative overflow-hidden bg-navy-900 py-28 sm:py-36">
      {/* orbit system backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <div className="absolute size-[52rem] animate-orbit-slow rounded-full border border-dashed border-electric-500/15">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-2xl text-electric-500/40">π</span>
        </div>
        <div className="absolute size-[36rem] animate-orbit-slower rounded-full border border-dashed border-electric-500/20">
          <span className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 font-display text-xl text-electric-500/40">∂</span>
        </div>
        <div className="absolute size-[70rem] animate-orbit-slow rounded-full border border-electric-500/8" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading number="05" eyebrow="Skills" title="The toolkit, to n decimal places" />

        <div className="skill-grid mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <Magnetic key={s.name} strength={0.18} className="skill-card">
              <div className="glass group h-full rounded-2xl p-5 hover:glass-bright">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-electric-600/15 font-display text-xl text-electric-400 transition-colors group-hover:bg-electric-600/30 group-hover:text-ice">
                      {s.glyph}
                    </span>
                    <h3 className="text-sm font-medium text-ice">{s.name}</h3>
                  </div>
                  <span className="font-mono text-xs text-electric-400 tabular-nums">{s.pct}%</span>
                </div>
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-navy-700/80">
                  <div
                    className="skill-fill h-full w-full origin-left rounded-full bg-gradient-to-r from-electric-700 via-electric-500 to-mist will-change-transform motion-reduce:transform-none"
                    data-pct={s.pct}
                    style={{ transform: `scaleX(${s.pct / 100})` }}
                  />
                </div>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  )
}
