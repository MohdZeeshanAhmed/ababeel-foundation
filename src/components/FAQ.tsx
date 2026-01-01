import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'

type Item = { title: string; body: string }

export default function FAQ() {
  const items: Item[] = useMemo(
    () => [
      {
        title: 'Healthcare',
        body: 'Health cards help beneficiaries access a wide range of services so families can receive healthcare without financial burdens — supported by partner hospitals, clinics and diagnostics.',
      },
      {
        title: 'Finance',
        body: 'Ababeel Foundation supports families through repayments, financial aid and essential services — bringing hope and stability to those in need.',
      },
      {
        title: 'Education',
        body: 'Ababeel Foundation supports education for underprivileged children and youth by covering school and college fees so financial barriers do not prevent deserving students from pursuing their academic goals.',
      },
      {
        title: 'Urgent Relief',
        body: 'Ababeel Foundation responds swiftly to emergencies and disasters by providing relief support so affected families receive timely aid such as food, shelter and basic necessities during critical times.',
      },
      {
        title: 'Social Welfare',
        body: 'Welfare programs nourish the underserved and meet critical needs such as clean drinking water, hygiene and essential assistance for vulnerable communities.',
      },
      {
        title: 'Food Distribution',
        body: 'Regular nutrition drives to support families and communities with meals and essentials.',
      },
      {
        title: 'Blanket Distribution',
        body: 'Seasonal winter outreach to keep vulnerable families warm and safe.',
      },
    ],
    [],
  )

  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="faq container" aria-label="Benefits">
      <div className="faq-grid">
        <div className="faq-left">
          <p className="eyebrow">Benefits</p>
          <h2 className="section-title">Empowering families together, we make a difference</h2>
          <p className="section-subtitle">
            Ababeel Foundation supports communities through education, healthcare, food distribution, relief and welfare
            services — empowering lives with dignity, compassion and sustainable assistance.
          </p>
          <Link className="faq-btn" to="/services/healthcare">
            Learn how to get help
          </Link>
        </div>

        <div className="faq-right" role="list">
          {items.map((item, idx) => {
            const isOpen = idx === activeIdx
            return (
              <div key={item.title} className={`acc ${isOpen ? 'open' : ''}`} role="listitem">
                <button
                  type="button"
                  className="acc-title"
                  onClick={() => setActiveIdx((v) => (v === idx ? -1 : idx))}
                  aria-expanded={isOpen}
                >
                  <span>{item.title}</span>
                  <span className="acc-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen ? (
                  <div className="acc-body">
                    <p>{item.body}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

