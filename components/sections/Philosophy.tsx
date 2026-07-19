'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import SectionHeading from '@/components/motion/SectionHeading'
import { philosophy } from '@/lib/data'

/**
 * Pinned section: the viewport locks while the card track translates
 * horizontally, scrubbed 1:1 with scroll. Falls back to a vertical stack on
 * small screens and under reduced motion.
 */
export default function Philosophy() {
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const track = trackRef.current!
        const distance = () => track.scrollWidth - window.innerWidth

        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // cards counter-rotate slightly as they travel — a shear-like transform
        gsap.utils.toArray<HTMLElement>('.phil-card').forEach((card) => {
          gsap.fromTo(
            card,
            { rotate: 2.5, yPercent: 4 },
            {
              rotate: -2.5,
              yPercent: -4,
              ease: 'none',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top top',
                end: () => `+=${distance()}`,
                scrub: 1.4,
              },
            },
          )
        })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="philosophy" className="relative overflow-hidden bg-navy-900 md:h-screen">
      <div className="pointer-events-none absolute inset-0 mask-fade-y graph-grid opacity-60" />
      <div className="flex h-full flex-col justify-center py-24 md:py-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading number="01" eyebrow="Teaching philosophy" title="Four axioms I teach by" />
        </div>

        <div
          ref={trackRef}
          className="mt-14 flex flex-col gap-6 px-6 will-change-transform md:mt-16 md:flex-row md:gap-10 md:pr-[38vw] md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
        >
          {philosophy.map((p) => (
            <article
              key={p.n}
              className="phil-card glass group relative shrink-0 rounded-3xl p-8 hover:glass-bright sm:p-10 md:w-[min(34rem,66vw)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-electric-400">
                  Axiom {p.n} <span className="text-mist/40">/ {philosophy.length}</span>
                </span>
                <span className="font-display text-6xl leading-none text-electric-500/30 transition-colors duration-500 group-hover:text-electric-400/60">
                  {p.symbol}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl text-ice sm:text-3xl">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-ice-dim">{p.body}</p>
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />
            </article>
          ))}

          {/* end card */}
          <div className="hidden shrink-0 items-center md:flex md:w-[24rem]">
            <p className="font-display text-3xl text-mist/50">
              ∴ students don&apos;t <em className="text-electric-400 not-italic">watch</em> math here — they{' '}
              <em className="text-ice not-italic">do</em> it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
