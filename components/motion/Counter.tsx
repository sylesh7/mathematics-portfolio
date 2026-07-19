'use client'

import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

type Props = {
  value: number
  decimals?: number
  suffix?: string
  className?: string
}

/** Number that counts up from 0 when scrolled into view. */
export default function Counter({ value, decimals = 0, suffix = '', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    const format = (v: number) => v.toFixed(decimals) + suffix
    if (prefersReducedMotion()) {
      el.textContent = format(value)
      return
    }
    const proxy = { v: 0 }
    gsap.to(proxy, {
      v: value,
      duration: 2,
      ease: 'power3.out',
      onUpdate: () => {
        el.textContent = format(proxy.v)
      },
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })

  return (
    <span ref={ref} className={className}>
      {(0).toFixed(decimals) + suffix}
    </span>
  )
}
