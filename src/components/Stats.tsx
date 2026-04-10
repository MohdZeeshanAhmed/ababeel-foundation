import { useEffect, useRef, useState } from 'react'
import './Stats.css'

type Metric = {
  target: number
  label: string
  suffix?: string
  compact?: boolean
}

const metrics: Metric[] = [
  { target: 3964, label: 'Health camp beneficiaries' },
  { target: 118, label: 'TOSS students supported for 10th & Intermediate' },
  { target: 19, label: 'Skill development beneficiaries' },
  { target: 1434, label: 'Document correction beneficiaries' },
  { target: 300, suffix: ' families', label: 'Project Upcycle beneficiaries' },
  { target: 300, suffix: ' families', label: 'Manna Salwa beneficiaries' },
  { target: 518, label: 'Beyond Books students benefitted' },
]

function formatMetric(value: number, compact = false) {
  if (compact) {
    if (value >= 100000) return `${Math.round(value / 100000)}L`
    if (value >= 1000) return `${Math.round(value / 1000)}K`
  }
  return new Intl.NumberFormat('en-IN').format(Math.round(value))
}

export default function Stats() {
  const [values, setValues] = useState(metrics.map(() => 0))
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
          setValues(metrics.map((m) => m.target * eased))
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
        <div key={m.label} className="stat">
          <div className="value">
            {formatMetric(values[i], m.compact)}
            {m.suffix}
          </div>
          <p>{m.label}</p>
        </div>
      ))}
    </section>
  )
}
