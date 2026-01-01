import './Testimonials.css'

const testimonials = [
  {
    name: 'Beneficiary',
    quote:
      'Ababeel Foundation guided my family through diagnostics and treatment when we needed it most. The support made care feel possible.',
  },
  {
    name: 'Partner hospital',
    quote:
      'Their volunteers ensure families arrive informed and supported. It improves trust, coordination, and outcomes.',
  },
  {
    name: 'Volunteer',
    quote: 'From camps to urgent relief, we respond quickly so families do not feel alone in crisis.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials container" aria-label="Testimonials">
      <div className="section-head">
        <p className="eyebrow">Community voices</p>
        <h2 className="section-title">What people are saying</h2>
        <p className="section-subtitle">
          Stories from beneficiaries, partners, and volunteers who move the mission forward.
        </p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <div key={t.name + t.quote} className="testimonial-card">
            <p className="quote">“{t.quote}”</p>
            <p className="name">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

