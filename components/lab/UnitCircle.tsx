'use client'

import { useRef, useState } from 'react'
import LabCard from './LabCard'

const S = 320
const CX = S / 2
const CY = S / 2
const R = 108

export default function UnitCircle() {
  const svgRef = useRef<SVGSVGElement>(null)
  const dragging = useRef(false)
  const [angle, setAngle] = useState(Math.PI / 4)

  const px = CX + R * Math.cos(angle)
  const py = CY - R * Math.sin(angle)
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  const deg = ((angle * 180) / Math.PI + 360) % 360

  const setFromPointer = (e: React.PointerEvent) => {
    const rect = svgRef.current!.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * S - CX
    const y = CY - ((e.clientY - rect.top) / rect.height) * S
    setAngle(Math.atan2(y, x))
  }

  // arc path for the angle indicator
  const arcR = 30
  const large = deg > 180 ? 1 : 0
  const arc = `M ${CX + arcR} ${CY} A ${arcR} ${arcR} 0 ${large} 0 ${CX + arcR * cos} ${CY - arcR * sin}`

  return (
    <LabCard title="The Circle That Started It All" topic="Unit circle" hint="Drag the point around the circle.">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${S} ${S}`}
          className="w-full max-w-[280px] touch-none rounded-xl bg-navy-950/70 select-none"
          onPointerDown={(e) => {
            dragging.current = true
            ;(e.target as Element).setPointerCapture?.(e.pointerId)
            setFromPointer(e)
          }}
          onPointerMove={(e) => dragging.current && setFromPointer(e)}
          onPointerUp={() => (dragging.current = false)}
          role="slider"
          aria-label="Angle on the unit circle"
          aria-valuenow={Math.round(deg)}
          aria-valuemin={0}
          aria-valuemax={360}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') setAngle((a) => a + Math.PI / 36)
            if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') setAngle((a) => a - Math.PI / 36)
          }}
        >
          <line x1={0} y1={CY} x2={S} y2={CY} stroke="#93c5fd" strokeOpacity={0.25} />
          <line x1={CX} y1={0} x2={CX} y2={S} stroke="#93c5fd" strokeOpacity={0.25} />
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="#3b82f6" strokeOpacity={0.55} strokeWidth={1.5} />
          <path d={arc} fill="none" stroke="#60a5fa" strokeWidth={2} strokeOpacity={0.8} />
          {/* cos leg */}
          <line x1={CX} y1={CY} x2={px} y2={CY} stroke="#93c5fd" strokeWidth={2.5} />
          {/* sin leg */}
          <line x1={px} y1={CY} x2={px} y2={py} stroke="#60a5fa" strokeWidth={2.5} strokeDasharray="4 3" />
          {/* radius */}
          <line x1={CX} y1={CY} x2={px} y2={py} stroke="#dbeafe" strokeWidth={1.6} />
          <circle cx={px} cy={py} r={9} fill="#dbeafe" stroke="#2563eb" strokeWidth={3} className="cursor-grab active:cursor-grabbing" />
          <circle cx={px} cy={py} r={16} fill="#3b82f6" fillOpacity={0.2} className="animate-pulse-glow" />
        </svg>

        <div className="grid w-full grid-cols-3 gap-2 font-mono text-sm sm:grid-cols-1">
          <div className="glass rounded-xl px-3 py-2.5 text-center sm:text-left">
            <p className="text-[10px] tracking-widest text-ice-dim/70 uppercase">θ</p>
            <p className="text-ice tabular-nums">{deg.toFixed(0)}°</p>
          </div>
          <div className="glass rounded-xl px-3 py-2.5 text-center sm:text-left">
            <p className="text-[10px] tracking-widest text-mist uppercase">cos θ</p>
            <p className="text-ice tabular-nums">{cos.toFixed(3)}</p>
          </div>
          <div className="glass rounded-xl px-3 py-2.5 text-center sm:text-left">
            <p className="text-[10px] tracking-widest text-electric-400 uppercase">sin θ</p>
            <p className="text-ice tabular-nums">{sin.toFixed(3)}</p>
          </div>
        </div>
      </div>
    </LabCard>
  )
}
