import './HealthCard.css'
import { site } from '../site'

const benefits = [
  'Annual family health card for dignified, affordable care',
  'Access partner hospitals, clinics and diagnostics',
  'Guidance from on-ground volunteers when you need it',
  'Designed to reduce barriers to essential healthcare',
  'Support initiatives that reach families across communities',
]

export default function HealthCard() {
  return (
    <section id="card" className="healthcard container">
      <div className="copy">
        <p className="eyebrow">What is Ababeel Foundation&apos;s Ummeed Health Card?</p>
        <h2 className="section-title">One card. Countless benefits for every family.</h2>
        <p className="section-subtitle">
          An annual family health card that provides affordable and dignified medical support across Hyderabad, backed
          by hospitals and diagnostics partners.
        </p>
        <ul className="benefits">
          {benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="cta-row">
          <a className="btn primary" href={site.contactUrl}>
            Get A Card
          </a>
          <a className="btn ghost" href={site.donateUrl}>
            Contact for sponsorship
          </a>
        </div>
      </div>
      <div className="card-panel">
        <div className="panel">
          <h3>Affordable Healthcare</h3>
          <p>Building a healthier tomorrow with partner hospitals and diagnostics.</p>
          <div className="panel-stat">
            <strong>70+</strong>
            <span>Hospitals & Partners</span>
          </div>
          <div className="panel-stat">
            <strong>3L+</strong>
            <span>Beneficiaries</span>
          </div>
        </div>
        <div className="panel secondary">
          <h4>How it works</h4>
          <ol>
            <li>Get or sponsor an Ummeed Health Card.</li>
            <li>Visit partner hospitals/diagnostics for supported care.</li>
            <li>Volunteers guide admissions and follow-up.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
