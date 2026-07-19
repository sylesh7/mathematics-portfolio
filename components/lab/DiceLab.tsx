'use client'

import { useMemo, useState } from 'react'
import LabCard from './LabCard'

const SUMS = Array.from({ length: 11 }, (_, i) => i + 2) // 2..12
const THEORY = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1].map((n) => n / 36)

export default function DiceLab() {
  const [counts, setCounts] = useState<number[]>(() => Array(11).fill(0))
  const [last, setLast] = useState<[number, number] | null>(null)

  const total = useMemo(() => counts.reduce((a, b) => a + b, 0), [counts])
  const maxFrac = Math.max(0.18, ...counts.map((c) => (total ? c / total : 0)))

  const roll = (n: number) => {
    const next = [...counts]
    let lastPair: [number, number] = [1, 1]
    for (let i = 0; i < n; i++) {
      const d1 = 1 + Math.floor(Math.random() * 6)
      const d2 = 1 + Math.floor(Math.random() * 6)
      next[d1 + d2 - 2]++
      lastPair = [d1, d2]
    }
    setCounts(next)
    setLast(lastPair)
  }

  const mean = total ? SUMS.reduce((acc, s, i) => acc + s * counts[i], 0) / total : 0

  return (
    <LabCard title="The Casino Always Wins" topic="Probability" hint="Roll two dice. Watch the law of large numbers emerge.">
      {/* histogram */}
      <div className="flex h-44 items-end gap-1.5 rounded-xl bg-navy-950/70 px-3 pt-4 pb-1 sm:gap-2">
        {SUMS.map((s, i) => {
          const frac = total ? counts[i] / total : 0
          const isLast = last && last[0] + last[1] === s
          return (
            <div key={s} className="group/bar relative flex flex-1 flex-col items-center justify-end self-stretch">
              {/* theoretical marker */}
              <div
                className="absolute right-0 left-0 z-10 border-t border-dashed border-mist/50"
                style={{ bottom: `${(THEORY[i] / maxFrac) * 82 + 8}%` }}
              />
              <div
                className={`w-full rounded-t-sm transition-[height] duration-500 ease-out ${
                  isLast ? 'bg-gradient-to-t from-electric-600 to-mist' : 'bg-gradient-to-t from-electric-700 to-electric-400'
                }`}
                style={{ height: `${(frac / maxFrac) * 82}%` }}
              />
              <span className={`mt-1 font-mono text-[10px] ${isLast ? 'text-ice' : 'text-ice-dim/60'}`}>{s}</span>
            </div>
          )
        })}
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-xs text-ice-dim">
        <span>
          n = <span className="text-ice tabular-nums">{total}</span>
          {total > 0 && (
            <>
              {' '}· mean = <span className="text-electric-400 tabular-nums">{mean.toFixed(2)}</span>
              <span className="text-ice-dim/60"> (E[X] = 7)</span>
            </>
          )}
        </span>
        {last && (
          <span className="text-ice">
            🎲 {last[0]} + {last[1]} = {last[0] + last[1]}
          </span>
        )}
      </div>
      <p className="mt-1 font-mono text-[10px] text-ice-dim/50">- - - theoretical probability</p>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {[1, 10, 100].map((n) => (
          <button
            key={n}
            onClick={() => roll(n)}
            className="rounded-xl bg-electric-600/20 py-2.5 font-mono text-sm text-electric-400 transition-colors hover:bg-electric-600/40 hover:text-ice"
          >
            ×{n}
          </button>
        ))}
        <button
          onClick={() => {
            setCounts(Array(11).fill(0))
            setLast(null)
          }}
          className="rounded-xl border border-mist/15 py-2.5 font-mono text-sm text-ice-dim transition-colors hover:border-mist/40 hover:text-ice"
        >
          reset
        </button>
      </div>
    </LabCard>
  )
}
