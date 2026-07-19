'use client'

import type { ReactNode } from 'react'

type Props = {
  title: string
  topic: string
  hint: string
  children: ReactNode
}

/** Glass shell shared by every Lessons Lab demo. */
export default function LabCard({ title, topic, hint, children }: Props) {
  return (
    <article className="lab-card glass group flex h-full flex-col rounded-3xl p-6 hover:glass-bright sm:p-7">
      <header className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-ice sm:text-2xl">{title}</h3>
          <p className="mt-1.5 text-xs text-ice-dim/80">{hint}</p>
        </div>
        <span className="shrink-0 rounded-full border border-electric-500/30 bg-electric-600/15 px-3 py-1 font-mono text-[10px] tracking-widest text-electric-400 uppercase">
          {topic}
        </span>
      </header>
      <div className="min-h-0 flex-1">{children}</div>
    </article>
  )
}
