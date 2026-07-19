'use client'

import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '@/lib/gsap'

type Particle = { t: number; speed: number; a: number; b: number; delta: number; size: number; hue: number }

/**
 * Hero background: layered travelling sine waves + a swarm of particles
 * tracing Lissajous curves, on a plain 2D canvas. Mouse position bends the
 * field. Renders a single static frame under prefers-reduced-motion and
 * pauses entirely when off-screen or the tab is hidden.
 */
export default function MathField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d', { alpha: true })!
    const reduced = prefersReducedMotion()

    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0
    let running = false
    let time = Math.random() * 100
    const mouse = { x: 0.5, y: 0.5, sx: 0.5, sy: 0.5 }

    const particles: Particle[] = Array.from({ length: 110 }, () => ({
      t: Math.random() * Math.PI * 2,
      speed: 0.0018 + Math.random() * 0.0032,
      a: [1, 2, 3][Math.floor(Math.random() * 3)],
      b: [2, 3, 4][Math.floor(Math.random() * 3)],
      delta: Math.random() * Math.PI,
      size: 0.7 + Math.random() * 1.7,
      hue: 210 + Math.random() * 30,
    }))

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (reduced) draw()
    }

    const wave = (yBase: number, amp: number, freq: number, phase: number, alpha: number, width: number) => {
      ctx.beginPath()
      for (let x = 0; x <= w; x += 6) {
        const y =
          yBase +
          Math.sin((x / w) * Math.PI * 2 * freq + phase) * amp * (0.75 + 0.5 * Math.sin(time * 0.3)) +
          Math.sin((x / w) * Math.PI * 4 * freq + phase * 1.6) * amp * 0.22
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      const grad = ctx.createLinearGradient(0, 0, w, 0)
      grad.addColorStop(0, `rgba(37, 99, 235, 0)`)
      grad.addColorStop(0.5, `rgba(96, 165, 250, ${alpha})`)
      grad.addColorStop(1, `rgba(37, 99, 235, 0)`)
      ctx.strokeStyle = grad
      ctx.lineWidth = width
      ctx.stroke()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      mouse.sx += (mouse.x - mouse.sx) * 0.04
      mouse.sy += (mouse.y - mouse.sy) * 0.04
      const mx = (mouse.sx - 0.5) * 2
      const my = (mouse.sy - 0.5) * 2

      // ── sine field ──
      const midY = h * 0.52 + my * 26
      wave(midY, h * 0.1, 1.4, time * 0.9 + mx * 0.8, 0.5, 1.6)
      wave(midY + 30, h * 0.14, 1.1, -time * 0.6 + mx * 0.5, 0.3, 1.1)
      wave(midY - 40, h * 0.07, 2.2, time * 1.3 + mx * 1.1, 0.22, 1)

      // ── Lissajous swarm ──
      const cx = w * 0.5 + mx * 34
      const cy = h * 0.5 + my * 30
      const rx = Math.min(w * 0.36, 520)
      const ry = Math.min(h * 0.3, 300)
      for (const p of particles) {
        p.t += p.speed * (reduced ? 0 : 1)
        const x = cx + rx * Math.sin(p.a * p.t + p.delta + mx * 0.35)
        const y = cy + ry * Math.sin(p.b * p.t)
        const tw = 0.35 + 0.65 * Math.abs(Math.sin(p.t * 1.7 + p.delta))
        ctx.beginPath()
        ctx.arc(x, y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${0.5 * tw})`
        ctx.shadowColor = 'rgba(59, 130, 246, 0.9)'
        ctx.shadowBlur = 7
        ctx.fill()
        ctx.shadowBlur = 0
      }

      time += 0.008
    }

    const loop = () => {
      draw()
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (!running && !reduced) {
        running = true
        raf = requestAnimationFrame(loop)
      }
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const onMouse = (e: PointerEvent) => {
      mouse.x = e.clientX / window.innerWidth
      mouse.y = e.clientY / window.innerHeight
    }
    const onVisibility = () => (document.hidden ? stop() : start())

    resize()
    if (reduced) draw()
    else start()

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    io.observe(canvas)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMouse, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMouse)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className={className} />
}
