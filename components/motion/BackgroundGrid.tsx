'use client'

import { useRef } from 'react'
import { gsap, useGSAP, OK_MOTION } from '@/lib/gsap'

/**
 * Fixed graph-paper texture behind the whole site. The sheet is taller than
 * the viewport and slowly translates as you scroll — a subtle full-page
 * parallax that makes the "paper" feel physical.
 */
export default function BackgroundGrid() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add(OK_MOTION, () => {
      gsap.to(ref.current, {
        y: '-12%',
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 1.2 },
      })
    })
  })

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div ref={ref} className="graph-grid absolute inset-x-0 top-0 h-[115%] will-change-transform" />
      {/* ambient blue glows */}
      <div className="absolute -top-40 left-1/4 h-[34rem] w-[34rem] rounded-full bg-electric-700/14 blur-[140px]" />
      <div className="absolute right-[-10%] bottom-[-15%] h-[40rem] w-[40rem] rounded-full bg-electric-600/10 blur-[160px]" />
    </div>
  )
}
