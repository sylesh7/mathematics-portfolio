'use client'

import { useRef } from 'react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'
import SectionHeading from '@/components/motion/SectionHeading'
import FunctionGrapher from '@/components/lab/FunctionGrapher'
import UnitCircle from '@/components/lab/UnitCircle'
import DerivativeExplorer from '@/components/lab/DerivativeExplorer'
import DiceLab from '@/components/lab/DiceLab'
import { lessons } from '@/lib/data'

export default function Lab() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        gsap.from('.lab-card', {
          opacity: 0,
          y: 70,
          scale: 0.96,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.14,
          scrollTrigger: { trigger: '.lab-grid', start: 'top 78%', once: true },
        })
        gsap.from('.lesson-strip', {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.lesson-strip', start: 'top 90%', once: true },
        })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="lab" className="relative bg-navy-900 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 mask-fade-y graph-grid opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading number="03" eyebrow="Interactive lessons lab" title="Don't read the math. Touch it." />
        <p className="mt-6 max-w-2xl text-lg text-ice-dim">
          Four live instruments from my classroom. Everything below is running right now — drag, slide, and roll.
        </p>

        <div className="lab-grid mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <FunctionGrapher />
          <UnitCircle />
          <DerivativeExplorer />
          <DiceLab />
        </div>
      </div>

      {/* designed-lesson marquee */}
      <div className="lesson-strip mt-20">
        <p className="mb-5 text-center font-mono text-xs tracking-[0.35em] text-electric-400/80 uppercase">
          + {lessons.length} full lesson designs
        </p>
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
            {[...lessons, ...lessons].map((l, i) => (
              <div
                key={`${l.title}-${i}`}
                aria-hidden={i >= lessons.length}
                className="glass w-72 shrink-0 rounded-2xl p-5 hover:glass-bright"
              >
                <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                  <span className="text-electric-400">{l.topic}</span>
                  <span className="text-ice-dim/60">{l.level}</span>
                </div>
                <h4 className="mt-3 font-display text-lg text-ice">{l.title}</h4>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ice-dim">{l.description}</p>
                <div className="mt-3 flex gap-2">
                  {l.tags.map((t) => (
                    <span key={t} className="rounded-full bg-electric-600/15 px-2.5 py-0.5 text-[10px] text-mist">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
