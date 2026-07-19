'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)
  ScrollTrigger.config({ ignoreMobileResize: true })
}

export const REDUCED = '(prefers-reduced-motion: reduce)'
export const OK_MOTION = '(prefers-reduced-motion: no-preference)'

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia(REDUCED).matches
}

export { gsap, ScrollTrigger, SplitText, useGSAP }
