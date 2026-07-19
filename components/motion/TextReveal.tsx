'use client'

import { useRef, type ElementType, type ReactNode } from 'react'
import { gsap, SplitText, useGSAP, prefersReducedMotion } from '@/lib/gsap'

type Props = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** 'words' for headings, 'chars' for short display text like the hero name */
  split?: 'words' | 'chars'
  /** ScrollTrigger start position; ignored when immediate */
  start?: string
  /** Play on mount instead of on scroll (hero) */
  immediate?: boolean
  delay?: number
  stagger?: number
}

export default function TextReveal({
  children,
  as: Tag = 'h2',
  className,
  split = 'words',
  start = 'top 86%',
  immediate = false,
  delay = 0,
  stagger,
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return

      SplitText.create(el, {
        type: split === 'chars' ? 'lines,chars' : 'lines,words',
        mask: 'lines',
        autoSplit: true,
        onSplit: (self) => {
          // The clipping masks would crop descenders (tight line-height) and
          // slice text-shadow glows into hard rectangles. Pad them outward
          // (with compensating negative margins so layout is unchanged) …
          const masks = self.masks as HTMLElement[]
          for (const m of masks) {
            m.style.padding = '0.15em 0.25em 0.25em'
            m.style.margin = '-0.15em -0.25em -0.25em'
          }
          return gsap.from(split === 'chars' ? self.chars : self.words, {
            yPercent: 118,
            duration: split === 'chars' ? 0.7 : 0.95,
            ease: 'power4.out',
            stagger: stagger ?? (split === 'chars' ? 0.028 : 0.04),
            delay,
            scrollTrigger: immediate
              ? undefined
              : { trigger: el, start, once: true },
            // … and once the reveal is done, stop clipping entirely so the
            // glow renders soft with no mask edge at all.
            onComplete: () => {
              for (const m of masks) m.style.overflow = 'visible'
            },
          })
        },
      })
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
