'use client'

import { useRef } from 'react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'
import SectionHeading from '@/components/motion/SectionHeading'
import TiltCard from '@/components/motion/TiltCard'
import { certifications } from '@/lib/data'

export default function Certifications() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        gsap.from('.cert-card', {
          opacity: 0,
          y: 60,
          rotateX: -14,
          transformPerspective: 800,
          transformOrigin: 'center bottom',
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '.cert-grid', start: 'top 80%', once: true },
        })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="certifications" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading number="06" eyebrow="Credentials" title="Proofs of qualification" />

        <div className="cert-grid mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <div key={c.title} className={`cert-card ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <TiltCard className="h-full">
                <div className="glass relative flex h-full flex-col overflow-hidden rounded-3xl p-7">
                  {/* embossed seal */}
                  <div
                    className="absolute -top-8 -right-8 grid size-28 place-items-center rounded-full border border-electric-500/25 font-display text-3xl text-electric-500/35"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    ✓
                  </div>
                  <span className="font-mono text-xs font-bold text-electric-400">{c.year}</span>
                  <h3 className="mt-3 font-display text-xl leading-snug text-ice" style={{ transform: 'translateZ(24px)' }}>
                    {c.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] tracking-widest text-mist/70 uppercase">{c.org}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ice-dim">{c.detail}</p>
                  <div className="mt-auto pt-6">
                    <div className="h-px w-full bg-gradient-to-r from-electric-500/50 via-mist/20 to-transparent" />
                    <p className="mt-3 font-mono text-[10px] tracking-[0.3em] text-ice-dim/50 uppercase">verified credential</p>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
