'use client'

import { useRef, useState } from 'react'
import { useLenis } from 'lenis/react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap'
import Magnetic from '@/components/motion/Magnetic'
import { navLinks, profile } from '@/lib/data'

const RING_R = 16
const RING_C = 2 * Math.PI * RING_R

/**
 * Floating centered pill nav. Slides in once the hero's scroll indicator
 * leaves (the progress ring around the monogram takes over), scroll-spies the
 * active section, and glides a spring "ink" highlight between links.
 */
export default function Nav() {
  const ref = useRef<HTMLElement>(null)
  const ringRef = useRef<SVGCircleElement>(null)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const lenis = useLenis()

  useGSAP(
    () => {
      // page progress → ring around the monogram
      gsap.fromTo(
        ringRef.current,
        { strokeDashoffset: RING_C },
        { strokeDashoffset: 0, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } },
      )

      // scroll spy — whichever section owns the viewport center is active
      for (const l of navLinks) {
        const el = document.getElementById(l.id)
        if (!el) continue
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => self.isActive && setActive(l.id),
        })
      }
      ScrollTrigger.create({
        trigger: '#hero',
        start: 'top top',
        end: 'bottom center',
        onToggle: (self) => self.isActive && setActive(''),
      })

      if (prefersReducedMotion()) return

      // enters when the hero is nearly gone, retreats at the top
      gsap.set(ref.current, { yPercent: -160 })
      const show = gsap.to(ref.current, { yPercent: 0, duration: 0.6, ease: 'power3.out', paused: true })
      ScrollTrigger.create({
        start: () => window.innerHeight * 0.55,
        end: 'max',
        onEnter: () => show.play(),
        onLeaveBack: () => show.reverse(),
      })
    },
    { scope: ref },
  )

  const goTo = (id: string) => {
    setOpen(false)
    lenis?.start()
    const target = document.getElementById(id)
    if (!target) return
    if (lenis && !prefersReducedMotion()) lenis.scrollTo(target, { offset: -84, duration: 1.5 })
    else target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  const toggleMenu = () => {
    setOpen((v) => {
      const next = !v
      next ? lenis?.stop() : lenis?.start()
      return next
    })
  }

  return (
    <MotionConfig reducedMotion="user">
      <header ref={ref} className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="glass flex items-center gap-1 rounded-full py-2 pr-2 pl-3">
          {/* monogram + progress ring */}
          <button
            onClick={() => goTo('hero')}
            aria-label="Back to top"
            className="group relative mr-1 grid size-10 shrink-0 place-items-center"
          >
            <svg viewBox="0 0 40 40" className="absolute inset-0 -rotate-90">
              <circle cx="20" cy="20" r={RING_R} fill="none" stroke="rgb(22 34 77 / 0.9)" strokeWidth="2" />
              <circle
                ref={ringRef}
                cx="20"
                cy="20"
                r={RING_R}
                fill="none"
                stroke="url(#navRing)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={RING_C}
                strokeDashoffset={RING_C}
              />
              <defs>
                <linearGradient id="navRing" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#2563eb" />
                  <stop offset="1" stopColor="#93c5fd" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-mono text-sm text-electric-400 transition-colors group-hover:text-ice">∑</span>
          </button>

          {/* desktop links with sliding ink */}
          <nav className="hidden items-center lg:flex" aria-label="Sections">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-[13px] tracking-wide transition-colors duration-300 ${
                  active === l.id ? 'text-ice' : 'text-ice-dim hover:text-ice'
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-ink"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-electric-500/35 bg-electric-600/25 shadow-[0_0_18px_-4px_rgb(37_99_235/0.7)]"
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </button>
            ))}
          </nav>

          {/* CTA */}
          <Magnetic strength={0.25} className="hidden lg:block">
            <a
              href={`mailto:${profile.email}`}
              className="ml-2 rounded-full bg-electric-600 px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-electric-500"
            >
              Let&apos;s talk
            </a>
          </Magnetic>

          {/* mobile toggle */}
          <button
            onClick={toggleMenu}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="relative grid size-10 place-items-center rounded-full text-ice transition-colors hover:bg-electric-600/15 lg:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[4px]'}`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[4px]'}`}
            />
          </button>
        </div>
      </header>

      {/* mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-navy-950/80 px-8 backdrop-blur-2xl lg:hidden"
            data-lenis-prevent
          >
            <div className="graph-grid pointer-events-none absolute inset-0 opacity-40" />
            <nav className="relative flex flex-col gap-1" aria-label="Sections">
              {navLinks.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => goTo(l.id)}
                  className="group flex items-baseline gap-4 py-2.5 text-left"
                >
                  <span className="font-mono text-xs text-electric-400">0{i + 1}</span>
                  <span
                    className={`font-display text-4xl transition-colors ${
                      active === l.id ? 'text-electric-400' : 'text-ice group-hover:text-electric-400'
                    }`}
                  >
                    {l.label}
                  </span>
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.35 }}
              className="relative mt-10 flex items-center gap-6 border-t border-mist/10 pt-6"
            >
              <a href={`mailto:${profile.email}`} className="font-mono text-sm text-ice-dim transition-colors hover:text-ice">
                {profile.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
