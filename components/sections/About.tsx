'use client'

import { useRef } from 'react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'
import SectionHeading from '@/components/motion/SectionHeading'
import Counter from '@/components/motion/Counter'
import Parallax from '@/components/motion/Parallax'
import { profile } from '@/lib/data'

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        gsap.utils.toArray<HTMLElement>('.about-para').forEach((p) => {
          gsap.from(p, {
            opacity: 0,
            y: 44,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: p, start: 'top 85%', once: true },
          })
        })
        // portrait rings rotate slowly with scroll — a rotation transform
        gsap.to('.portrait-ring', {
          rotate: 120,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
        })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading number="02" eyebrow="About" title="A circle, unrolled in time" />

        <div className="mt-16 grid gap-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-20">
          {/* sticky portrait */}
          <div className="md:self-start md:sticky md:top-28">
            <div className="glass relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-3xl">
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-label={`Stylized portrait placeholder for ${profile.name}`}>
                <defs>
                  <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#1d4ed8" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <g className="portrait-ring origin-center will-change-transform">
                  <circle cx="200" cy="250" r="150" fill="none" stroke="#60a5fa" strokeOpacity="0.3" strokeDasharray="4 10" />
                  <circle cx="200" cy="250" r="190" fill="none" stroke="#3b82f6" strokeOpacity="0.18" strokeDasharray="2 14" />
                </g>
                {/* abstract educator mark — replace with a photo */}
                <circle cx="200" cy="196" r="64" fill="url(#pg)" opacity="0.85" />
                <path d="M 96 420 Q 200 300 304 420" fill="url(#pg)" opacity="0.7" />
                <path d="M 60 330 Q 200 250 340 330" fill="none" stroke="#dbeafe" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="1 7" />
                <text x="200" y="212" textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="34" fill="#dbeafe">
                  ∑
                </text>
              </svg>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent p-6 pt-16">
                <p className="font-display text-2xl text-ice">{profile.name}</p>
                <p className="mt-1 font-mono text-xs tracking-widest text-electric-400 uppercase">{profile.role}</p>
              </div>
            </div>
          </div>

          {/* scrolling story + stats */}
          <div>
            {profile.story.map((para, i) => (
              <p key={i} className="about-para mb-8 text-lg leading-relaxed text-ice-dim first:text-xl first:text-ice">
                {para}
              </p>
            ))}

            <Parallax drift={-30} className="mt-14">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {profile.stats.map((s) => (
                  <div key={s.label} className="glass rounded-2xl p-5 text-center">
                    <Counter
                      value={s.value}
                      decimals={s.decimals ?? 0}
                      suffix={s.suffix}
                      className="font-mono text-3xl font-bold text-gradient sm:text-4xl"
                    />
                    <p className="mt-2 text-xs tracking-wide text-ice-dim/80">{s.label}</p>
                  </div>
                ))}
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}
