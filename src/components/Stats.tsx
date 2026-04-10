import { useEffect, useRef, useState } from 'react'
import './Stats.css'

type Metric = {
  entries: {
    target: number
    label: string
    suffix?: string
  }[]
  heading?: string
  compact?: boolean
}

const metrics: Metric[] = [
  { entries: [{ target: 3964, label: 'Health camp beneficiaries' }] },
  { entries: [{ target: 118, label: 'TOSS students supported for 10th & Intermediate' }] },
  { entries: [{ target: 19, label: 'Skill development beneficiaries' }] },
  { entries: [{ target: 1434, label: 'Document correction beneficiaries' }] },
  {
    entries: [{ target: 300, suffix: ' families', label: '' }],
  },
  { entries: [{ target: 518, label: 'Beyond Books students benefitted' }] },
]

function formatMetric(value: number, compact = false) {
  if (compact) {
    if (value >= 100000) return `${Math.round(value / 100000)}L`
    if (value >= 1000) return `${Math.round(value / 1000)}K`
  }
  return new Intl.NumberFormat('en-IN').format(Math.round(value))
}

export default function Stats() {
  const [values, setValues] = useState(metrics.map((metric) => metric.entries.map(() => 0)))
  const started = useRef(false)
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const duration = 1300

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValues(metrics.map((metric) => metric.entries.map((entry) => entry.target * eased)))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="impact" ref={rootRef} className="stats container" data-reveal="up">
      {metrics.map((m, i) => (
        <div key={m.entries.map((entry) => entry.label).join('-')} className="stat">
          {m.heading ? <p className="stat-heading">{m.heading}</p> : null}
          {m.entries.map((entry, entryIndex) => (
            <div key={entry.label} className={m.entries.length > 1 ? 'stat-entry stat-entry--stacked' : 'stat-entry'}>
              <div className="value">
                {formatMetric(values[i][entryIndex], m.compact)}
                {entry.suffix}
              </div>
              {!m.heading && entry.label ? <p>{entry.label}</p> : null}
            </div>
          ))}
          {!m.heading && m.entries[0]?.suffix === ' families' ? (
            <div className="stat-entry stat-entry--stacked">
              <p>Project Upcycle beneficiaries</p>
              <p>Manna Salwa beneficiaries</p>
            </div>
          ) : null}
        </div>
      ))}
    </section>
  )
}
