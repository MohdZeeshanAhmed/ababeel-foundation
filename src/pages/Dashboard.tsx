import './Dashboard.css'
import { site } from '../site'

const metrics = [
  { value: '70+', label: 'Hospitals & Clinics', detail: 'Network partners' },
  { value: '3L+', label: 'Beneficiaries', detail: 'Across multiple regions' },
  { value: '450+', label: 'Volunteers', detail: 'On-ground and digital' },
  { value: '15+ yrs', label: 'Experience', detail: 'Serving with dignity' },
]

const activities = [
  { date: '2025-12-01', event: 'Free Medical Camp', location: 'City Hall', impact: '156 patients served' },
  { date: '2025-11-15', event: 'Donation Drive', location: 'Community Center', impact: '14.6L in aid' },
  { date: '2025-11-01', event: 'Health Card Outreach', location: 'Hyderabad', impact: '230 cards issued' },
]

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Live impact overview</p>
          <h1>{site.name} Impact Dashboard</h1>
          <p className="subtitle">Track key metrics, recent activity, and program momentum.</p>
        </div>
        <div className="header-actions">
          <a className="btn ghost" href="/">
            Back to site
          </a>
          <a className="btn primary" href="/contact">
            Donate now
          </a>
        </div>
      </header>

      <section className="metrics">
        {metrics.map((m) => (
          <div key={m.label} className="card">
            <h2>{m.value}</h2>
            <p>{m.label}</p>
            <span>{m.detail}</span>
          </div>
        ))}
      </section>

      <section className="recent">
        <div className="section-head">
          <div>
            <p className="eyebrow">Recent activity</p>
            <h3>Field updates</h3>
          </div>
          <div className="sparkline-wrap">
            <h4>Activity (last 6 months)</h4>
            <svg viewBox="0 0 100 30" className="sparkline" preserveAspectRatio="none">
              <polyline points="0,20 20,12 40,8 60,10 80,6 100,4" fill="none" stroke="#16a34a" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Location</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a) => (
              <tr key={a.date + a.event}>
                <td>{a.date}</td>
                <td>{a.event}</td>
                <td>{a.location}</td>
                <td>{a.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
