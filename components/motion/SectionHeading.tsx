'use client'

import { useRef } from 'react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'
import TextReveal from './TextReveal'

type Props = {
  number: string
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  className?: string
}

/**
 * Section heading with an oversized mono numeral drifting behind it at a
 * slower scroll speed (background parallax layer).
 */
export default function SectionHeading({ number, eyebrow, title, align = 'left', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        gsap.fromTo(
          '.numeral',
          { yPercent: 34 },
          {
            yPercent: -34,
            ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
    },
    { scope: ref },
  )

  const centered = align === 'center'
  return (
    <div ref={ref} className={`relative ${centered ? 'text-center' : ''} ${className}`}>
      <span
        aria-hidden
        className={`numeral section-numeral pointer-events-none absolute -top-[0.55em] select-none ${
          centered ? 'left-1/2 -translate-x-1/2' : '-left-[0.08em]'
        }`}
      >
        {number}
      </span>
      <p className="relative mb-4 font-mono text-xs tracking-[0.35em] text-electric-400 uppercase">
        <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-electric-500/60 align-middle" />
        {eyebrow}
      </p>
      <TextReveal
        as="h2"
        className="relative font-display text-4xl leading-[1.05] text-ice sm:text-5xl lg:text-6xl"
      >
        {title}
      </TextReveal>
    </div>
  )
}
