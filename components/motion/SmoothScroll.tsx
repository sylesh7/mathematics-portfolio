'use client'

import { ReactLenis, useLenis, type LenisRef } from 'lenis/react'
import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, REDUCED } from '@/lib/gsap'

/** Subscribes ScrollTrigger to Lenis scroll events once the instance exists. */
function ScrollTriggerSync() {
  useLenis(ScrollTrigger.update)
  return null
}

/**
 * Site-wide Lenis smooth scroll, driven by GSAP's ticker so scroll position
 * and ScrollTrigger animations update in the same frame (no jitter).
 * Under prefers-reduced-motion, wheel/touch smoothing is disabled and native
 * scrolling takes over.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null)
  // Read once at first client render; options are not part of the DOM, so the
  // server/client difference cannot cause a hydration mismatch.
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(REDUCED).matches,
  )

  useEffect(() => {
    // ReactLenis creates its instance in its own effect and publishes it via a
    // state update, so the ref is still empty when this effect runs. Read it
    // on every tick instead of capturing it once — otherwise the raf loop
    // never attaches and Lenis freezes the page.
    const update = (time: number) => lenisRef.current?.lenis?.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    return () => gsap.ticker.remove(update)
  }, [])

  useEffect(() => {
    // Trigger positions depend on font metrics — refresh once webfonts land.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
  }, [])

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        duration: 1.1,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        smoothWheel: !reduced,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  )
}
