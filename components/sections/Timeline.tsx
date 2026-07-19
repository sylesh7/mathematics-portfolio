'use client'

import { useRef } from 'react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'
import SectionHeading from '@/components/motion/SectionHeading'
import { timeline } from '@/lib/data'

/**
 * Vertical timeline whose line draws itself (scaleY scrub) as you scroll.
 * Cards alternate sides and drift at different parallax speeds; each node
 * ignites as the line reaches it.
 */
export default function Timeline() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        gsap.fromTo(
          '.tl-line',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: '.tl-body', start: 'top 62%', end: 'bottom 55%', scrub: 0.4 },
          },
        )

        gsap.utils.toArray<HTMLElement>('.tl-item').forEach((item, i) => {
          const card = item.querySelector('.tl-card')
          const node = item.querySelector('.tl-node')

          gsap.from(card, {
            opacity: 0,
            x: i % 2 ? 60 : -60,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 80%', once: true },
          })
          // alternate parallax speeds
          gsap.fromTo(
            card,
            { y: i % 2 ? 44 : 18 },
            {
              y: i % 2 ? -44 : -18,
              ease: 'none',
              scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          )
          // node ignition when the drawn line arrives
          ScrollTriggerIgnite(node as HTMLElement, item)
        })

        function ScrollTriggerIgnite(node: HTMLElement, item: HTMLElement) {
          gsap.fromTo(
            node,
            { scale: 0.5, boxShadow: '0 0 0 0 rgba(59,130,246,0)' },
            {
              scale: 1,
              boxShadow: '0 0 18px 4px rgba(59,130,246,0.65)',
              backgroundColor: '#60a5fa',
              duration: 0.4,
              ease: 'back.out(2.5)',
              scrollTrigger: { trigger: item, start: 'top 60%', toggleActions: 'play none none reverse' },
            },
          )
        }
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="timeline" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading number="04" eyebrow="Trajectory" title="A decade, differentiated" align="center" />

        <div className="tl-body relative mx-auto mt-20 max-w-4xl">
          {/* rail + drawn line */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-navy-700/70 md:left-1/2" />
          <div className="tl-line absolute top-0 bottom-0 left-4 w-px origin-top bg-gradient-to-b from-electric-600 via-electric-400 to-mist shadow-[0_0_12px_rgba(59,130,246,0.7)] will-change-transform md:left-1/2" />

          <ol className="space-y-14 md:space-y-20">
            {timeline.map((t, i) => (
              <li key={t.year + t.title} className="tl-item relative pl-12 md:pl-0">
                <span className="tl-node absolute top-1.5 left-4 z-10 size-3 -translate-x-1/2 rounded-full bg-navy-700 ring-4 ring-navy-950 md:left-1/2" />
                <div className="md:grid md:grid-cols-2 md:gap-16">
                  <div className={`${i % 2 ? 'md:order-2 md:pl-10' : 'md:pr-10 md:text-right'}`}>
                    <div className="tl-card glass inline-block w-full rounded-2xl p-6 will-change-transform">
                      <span className="font-mono text-sm font-bold text-electric-400">{t.year}</span>
                      <h3 className="mt-2 font-display text-xl text-ice">{t.title}</h3>
                      <p className="mt-0.5 font-mono text-[11px] tracking-wider text-mist/70 uppercase">{t.place}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ice-dim">{t.detail}</p>
                    </div>
                  </div>
                  <div className={i % 2 ? 'md:order-1' : ''} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
