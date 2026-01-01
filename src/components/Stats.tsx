import './Stats.css'

const metrics = [
  { value: '70+', label: 'Hospitals, diagnostic centers & clinics' },
  { value: '3L+', label: 'Beneficiaries across 7 states' },
  { value: '450+', label: 'Dedicated volunteers powering the mission' },
  { value: '15+ yrs', label: 'Experience delivering dignified care' },
]

export default function Stats(){
  return (
    <section id="impact" className="stats content">
      {metrics.map((m) => (
        <div key={m.value} className="stat">
          <div className="value">{m.value}</div>
          <p>{m.label}</p>
        </div>
      ))}
    </section>
  )
}
