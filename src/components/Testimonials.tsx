import './Testimonials.css'
import t1 from '../assets/IMG_5317.jpeg'
import t2 from '../assets/IMG_9807.jpeg'
import t3 from '../assets/IMG_9799.jpeg'

const testimonials = [
  {
    name: 'Beneficiary family',
    role: 'Hyderabad',
    image: t1,
    quote:
      'Ababeel Foundation guided my family through diagnostics and treatment when we needed it most. The support made care feel possible.',
  },
  {
    name: 'Partner hospital',
    role: 'Community partner',
    image: t2,
    quote:
      'Their volunteers ensure families arrive informed and supported. It improves trust, coordination, and outcomes.',
  },
  {
    name: 'Volunteer',
    role: 'Field team',
    image: t3,
    quote: 'From camps to urgent relief, we respond quickly so families do not feel alone in crisis.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials container" aria-label="Testimonials" data-reveal="up">
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
            <div className="testimonial-person">
              <img src={t.image} alt={t.name} loading="lazy" />
              <p className="name">
                {t.name}
                <span>{t.role}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
