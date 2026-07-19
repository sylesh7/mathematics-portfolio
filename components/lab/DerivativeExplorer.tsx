'use client'

import { useMemo, useRef, useState } from 'react'
import LabCard from './LabCard'

const W = 400
const H = 230
const X_MIN = -3.6
const X_MAX = 3.6
const Y_MAX = 3

// f(x) = x³/6 − 1.2x  →  f'(x) = x²/2 − 1.2
const f = (x: number) => (x * x * x) / 6 - 1.2 * x
const df = (x: number) => (x * x) / 2 - 1.2

const sx = (x: number) => ((x - X_MIN) / (X_MAX - X_MIN)) * W
const sy = (y: number) => H / 2 - (y / Y_MAX) * (H / 2)
const invX = (px: number) => X_MIN + (px / W) * (X_MAX - X_MIN)

export default function DerivativeExplorer() {
  const svgRef = useRef<SVGSVGElement>(null)
  const dragging = useRef(false)
  const [x0, setX0] = useState(1.2)

  const curve = useMemo(() => {
    const pts: string[] = []
    for (let px = 0; px <= W; px += 2) {
      const x = invX(px)
      pts.push(`${px === 0 ? 'M' : 'L'}${px},${sy(f(x)).toFixed(2)}`)
    }
    return pts.join(' ')
  }, [])

  const y0 = f(x0)
  const m = df(x0)
  // tangent segment spanning ±1.4 in x
  const t1 = { x: x0 - 1.4, y: y0 - 1.4 * m }
  const t2 = { x: x0 + 1.4, y: y0 + 1.4 * m }

  const setFromPointer = (e: React.PointerEvent) => {
    const rect = svgRef.current!.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width) * W
    setX0(Math.min(X_MAX - 0.2, Math.max(X_MIN + 0.2, invX(px))))
  }

  return (
    <LabCard title="Tangent Line Detective" topic="Calculus" hint="Slide the point — the tangent gives away the derivative.">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full touch-none rounded-xl bg-navy-950/70 select-none"
        onPointerDown={(e) => {
          dragging.current = true
          ;(e.target as Element).setPointerCapture?.(e.pointerId)
          setFromPointer(e)
        }}
        onPointerMove={(e) => dragging.current && setFromPointer(e)}
        onPointerUp={() => (dragging.current = false)}
        role="slider"
        aria-label="Point on the curve"
        aria-valuenow={Number(x0.toFixed(2))}
        aria-valuemin={X_MIN}
        aria-valuemax={X_MAX}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') setX0((v) => Math.min(X_MAX - 0.2, v + 0.15))
          if (e.key === 'ArrowLeft') setX0((v) => Math.max(X_MIN + 0.2, v - 0.15))
        }}
      >
        <line x1={0} y1={H / 2} x2={W} y2={H / 2} stroke="#93c5fd" strokeOpacity={0.25} />
        <line x1={sx(0)} y1={0} x2={sx(0)} y2={H} stroke="#93c5fd" strokeOpacity={0.25} />
        {[...Array(9)].map((_, i) => (
          <line key={i} x1={(i * W) / 8} y1={0} x2={(i * W) / 8} y2={H} stroke="#60a5fa" strokeOpacity={0.07} />
        ))}
        <path d={curve} fill="none" stroke="#3b82f6" strokeWidth={2.4} strokeLinecap="round" />
        {/* tangent */}
        <line
          x1={sx(t1.x)}
          y1={sy(t1.y)}
          x2={sx(t2.x)}
          y2={sy(t2.y)}
          stroke="#dbeafe"
          strokeWidth={1.8}
          strokeDasharray="6 4"
        />
        {/* projection to axis */}
        <line x1={sx(x0)} y1={sy(y0)} x2={sx(x0)} y2={H / 2} stroke="#60a5fa" strokeOpacity={0.4} strokeDasharray="2 4" />
        <circle cx={sx(x0)} cy={sy(y0)} r={8} fill="#dbeafe" stroke="#2563eb" strokeWidth={3} className="cursor-grab active:cursor-grabbing" />
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-sm">
        <div className="glass rounded-xl px-3 py-2.5 text-center">
          <p className="text-[10px] tracking-widest text-ice-dim/70 uppercase">x</p>
          <p className="text-ice tabular-nums">{x0.toFixed(2)}</p>
        </div>
        <div className="glass rounded-xl px-3 py-2.5 text-center">
          <p className="text-[10px] tracking-widest text-ice-dim/70 uppercase">f(x)</p>
          <p className="text-ice tabular-nums">{y0.toFixed(2)}</p>
        </div>
        <div className="glass rounded-xl px-3 py-2.5 text-center">
          <p className="text-[10px] tracking-widest text-electric-400 uppercase">slope f′(x)</p>
          <p className={`tabular-nums ${m >= 0 ? 'text-electric-400' : 'text-mist'}`}>{m.toFixed(2)}</p>
        </div>
      </div>
    </LabCard>
  )
}
