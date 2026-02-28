import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const metrics = [
  { target: 70, suffix: '+', label: 'Hospitals, diagnostic centers & clinics' },
  { target: 300000, suffix: '+', label: 'Beneficiaries across 7 states', compact: true },
  { target: 450, suffix: '+', label: 'Dedicated volunteers powering the mission' },
  { target: 15, suffix: '+ yrs', label: 'Experience delivering dignified care' },
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
