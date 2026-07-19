'use client'

import { useMemo, useState } from 'react'
import LabCard from './LabCard'

const W = 400
const H = 220
const X_MIN = -Math.PI * 2
const X_MAX = Math.PI * 2
const Y_MAX = 2.6

const sx = (x: number) => ((x - X_MIN) / (X_MAX - X_MIN)) * W
const sy = (y: number) => H / 2 - (y / Y_MAX) * (H / 2)

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  const fill = ((value - min) / (max - min)) * 100
  return (
    <label className="flex items-center gap-3">
      <span className="w-4 font-mono text-sm text-electric-400 italic">{label}</span>
      <input
        type="range"
        className="lab-slider"
        style={{ '--fill': `${fill}%` } as React.CSSProperties}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={`coefficient ${label}`}
      />
      <span className="w-11 text-right font-mono text-xs text-ice-dim tabular-nums">{value.toFixed(1)}</span>
    </label>
  )
}

export default function FunctionGrapher() {
  const [a, setA] = useState(1.4)
  const [b, setB] = useState(1)
  const [c, setC] = useState(0)

  const path = useMemo(() => {
    const pts: string[] = []
    for (let px = 0; px <= W; px += 2) {
      const x = X_MIN + (px / W) * (X_MAX - X_MIN)
      const y = a * Math.sin(b * x + c)
      pts.push(`${px === 0 ? 'M' : 'L'}${px},${sy(y).toFixed(2)}`)
    }
    return pts.join(' ')
  }, [a, b, c])

  return (
    <LabCard title="The Wave Machine" topic="Trigonometry" hint="Drag the coefficients — watch the wave obey.">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl bg-navy-950/70">
        {/* grid */}
        {[...Array(7)].map((_, i) => (
          <line key={`v${i}`} x1={(i * W) / 6} y1={0} x2={(i * W) / 6} y2={H} stroke="#60a5fa" strokeOpacity={0.08} />
        ))}
        {[...Array(5)].map((_, i) => (
          <line key={`h${i}`} x1={0} y1={(i * H) / 4} x2={W} y2={(i * H) / 4} stroke="#60a5fa" strokeOpacity={0.08} />
        ))}
        <line x1={0} y1={H / 2} x2={W} y2={H / 2} stroke="#93c5fd" strokeOpacity={0.3} />
        <line x1={sx(0)} y1={0} x2={sx(0)} y2={H} stroke="#93c5fd" strokeOpacity={0.3} />
        {/* faint parent curve for contrast */}
        <path d={`M0,${sy(Math.sin(X_MIN))} ${[...Array(100)].map((_, i) => {
          const x = X_MIN + ((i + 1) / 100) * (X_MAX - X_MIN)
          return `L${sx(x).toFixed(1)},${sy(Math.sin(x)).toFixed(1)}`
        }).join(' ')}`} fill="none" stroke="#93c5fd" strokeOpacity={0.18} strokeDasharray="3 5" />
        <path d={path} fill="none" stroke="url(#waveGrad)" strokeWidth={2.4} strokeLinecap="round" />
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="0.5" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>

      <p className="mt-4 text-center font-mono text-sm text-ice">
        y = <span className="text-electric-400">{a.toFixed(1)}</span> · sin(
        <span className="text-electric-400">{b.toFixed(1)}</span>x +{' '}
        <span className="text-electric-400">{c.toFixed(1)}</span>)
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <Slider label="a" value={a} min={0.2} max={2.4} step={0.1} onChange={setA} />
        <Slider label="b" value={b} min={0.5} max={4} step={0.1} onChange={setB} />
        <Slider label="c" value={c} min={0} max={6.3} step={0.1} onChange={setC} />
      </div>
    </LabCard>
  )
}
