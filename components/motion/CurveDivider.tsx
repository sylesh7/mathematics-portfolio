'use client'

import { useRef } from 'react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'

const FLAT = 'M0,60 C360,60 1080,60 1440,60 L1440,120 L0,120 Z'
const CURVE = 'M0,110 C360,-20 1080,-20 1440,110 L1440,120 L0,120 Z'

/**
 * Section transition: an SVG curve that flexes with scroll — flat at rest,
 * bowing into a parabola as it crosses the viewport (morphing path scrub).
 */
export default function CurveDivider({ flip = false, className = '' }: { flip?: boolean; className?: string }) {
  const ref = useRef<SVGSVGElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        gsap.fromTo(
          'path',
          { attr: { d: FLAT } },
          {
            attr: { d: CURVE },
            ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'top 25%', scrub: 0.6 },
          },
        )
      })
    },
    { scope: ref },
  )

  return (
    <svg
      ref={ref}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
      className={`block h-16 w-full text-navy-900 sm:h-24 ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <path d={FLAT} fill="currentColor" />
    </svg>
  )
}
