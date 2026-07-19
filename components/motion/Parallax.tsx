'use client'

import { useRef, type ReactNode } from 'react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'

type Props = {
  children: ReactNode
  /** Total vertical drift in px while crossing the viewport. Negative = moves up slower layers. */
  drift?: number
  className?: string
}

/** Scroll-scrubbed vertical parallax layer (transform-only). */
export default function Parallax({ children, drift = -60, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        gsap.fromTo(
          ref.current,
          { y: -drift / 2 },
          {
            y: drift / 2,
            ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
