'use client'

import { useRef } from 'react'
import { useLenis } from 'lenis/react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, type MotionValue } from 'motion/react'
import { gsap, useGSAP, OK_MOTION, prefersReducedMotion } from '@/lib/gsap'
import MathField from '@/components/canvas/MathField'
import TextReveal from '@/components/motion/TextReveal'
import Magnetic from '@/components/motion/Magnetic'
import { profile } from '@/lib/data'

const GLYPHS = [
  { g: '∫', x: '12%', y: '18%', d: 42, size: 'text-6xl', blur: '' },
  { g: 'π', x: '82%', y: '24%', d: 26, size: 'text-5xl', blur: 'blur-[1.5px]' },
  { g: '∂', x: '8%', y: '70%', d: 20, size: 'text-4xl', blur: 'blur-[2px]' },
  { g: 'Σ', x: '88%', y: '68%', d: 48, size: 'text-7xl', blur: '' },
  { g: '√', x: '70%', y: '10%', d: 34, size: 'text-4xl', blur: 'blur-[1px]' },
  { g: '∞', x: '24%', y: '84%', d: 30, size: 'text-5xl', blur: 'blur-[1px]' },
]

function FloatingGlyph({
  glyph,
  mx,
  my,
}: {
  glyph: (typeof GLYPHS)[number]
  mx: MotionValue<number>
  my: MotionValue<number>
}) {
  const x = useTransform(mx, (v) => v * glyph.d)
  const y = useTransform(my, (v) => v * glyph.d)
  return (
    <motion.span
      style={{ left: glyph.x, top: glyph.y, x, y }}
      className={`absolute font-display text-electric-500/25 select-none ${glyph.size} ${glyph.blur} animate-float`}
    >
      {glyph.g}
    </motion.span>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const lenis = useLenis()
  const reduced = useReducedMotion()

  // pointer parallax for the glyph layer
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 60, damping: 20 })
  const smy = useSpring(my, { stiffness: 60, damping: 20 })

  const onPointerMove = (e: React.PointerEvent) => {
    if (reduced) return
    const r = ref.current!.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(OK_MOTION, () => {
        // hero content drifts up + fades as you leave — a smooth translation out
        gsap.to('.hero-content', {
          yPercent: -18,
          opacity: 0,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom 35%', scrub: true },
        })
        // scroll indicator dissolves quickly (the nav progress bar takes over)
        gsap.to('.hero-indicator', {
          opacity: 0,
          y: 30,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: '28% top', scrub: true },
        })
        gsap.from('.hero-eyebrow, .hero-cta', {
          opacity: 0,
          y: 24,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.9,
        })
        gsap.from('.hero-indicator', { opacity: 0, duration: 1, delay: 1.6 })
      })
    },
    { scope: ref },
  )

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    if (lenis && !prefersReducedMotion()) lenis.scrollTo(el, { offset: -60, duration: 1.6 })
    else el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  return (
    <section ref={ref} id="hero" onPointerMove={onPointerMove} className="relative flex h-svh min-h-[640px] items-center justify-center overflow-hidden">
      <MathField className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950" />

      {/* floating glyph layer — pointer parallax at per-glyph depths */}
      <div aria-hidden className="absolute inset-0">
        {GLYPHS.map((s) => (
          <FloatingGlyph key={s.g} glyph={s} mx={smx} my={smy} />
        ))}
      </div>

      <div className="hero-content relative z-10 mx-auto max-w-5xl px-6 text-center will-change-transform">
        <p className="hero-eyebrow mb-6 font-mono text-xs tracking-[0.4em] text-electric-400 uppercase sm:text-sm">
          {profile.role} · {profile.location}
        </p>
        <TextReveal
          as="h1"
          split="chars"
          immediate
          delay={0.25}
          className="font-display text-[clamp(3.2rem,11vw,8.5rem)] leading-[0.95] text-ice glow-text"
        >
          {profile.name}
        </TextReveal>
        <TextReveal
          as="p"
          immediate
          delay={0.85}
          stagger={0.03}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ice-dim sm:text-xl"
        >
          {profile.tagline}
        </TextReveal>

        <div className="hero-cta mt-11 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <button
              onClick={() => scrollTo('lab')}
              className="rounded-full bg-electric-600 px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_36px_-6px_rgb(37_99_235/0.8)] transition-colors hover:bg-electric-500"
            >
              Enter the Lessons Lab
            </button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <button
              onClick={() => scrollTo('philosophy')}
              className="rounded-full border border-mist/25 px-8 py-3.5 text-sm text-ice transition-colors hover:border-electric-400/60 hover:bg-electric-600/10"
            >
              Read my philosophy
            </button>
          </Magnetic>
        </div>
      </div>

      {/* scroll indicator — morphs away into the nav's progress bar */}
      <div className="hero-indicator absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.35em] text-ice-dim/70 uppercase">scroll</span>
        <div className="relative h-14 w-px overflow-hidden bg-mist/15">
          <div className="absolute inset-x-0 top-0 h-5 animate-[indicator_1.8s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-electric-400 to-mist" />
        </div>
      </div>
      <style>{`@keyframes indicator { 0% { transform: translateY(-100%);} 100% { transform: translateY(300%);} }`}</style>
    </section>
  )
}
