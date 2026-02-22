import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

function Icon({ children }: { children: ReactNode }) {
  return (
    <span className="icon" aria-hidden="true">
      {children}
    </span>
  )
}

const items: Array<{ title: string; icon: ReactNode; desc: string; href: string }> = [
  {
    title: 'Education Support – SHAMA',
    href: '/services/shama',
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path
            d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M21 7.5V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Icon>
    ),
    desc: 'Exam support, guidance and mentorship to keep learners in education.',
  },
  {
    title: 'Food Security – MANNA SALWA',
    href: '/services/manna-salwa',
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path
            d="M4 14c0 4 3.6 7 8 7s8-3 8-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M6 14c1.2-3 3.4-5 6-5s4.8 2 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 9V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 9V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 9V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Icon>
    ),
    desc: 'Grocery support linked with a family commitment to children\'s education.',
  },
  {
    title: 'Medical Camps',
    href: '/services/medical-camps',
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path
            d="M3.5 12a8.5 8.5 0 0 1 17 0v6a2.5 2.5 0 0 1-2.5 2.5h-2A2.5 2.5 0 0 1 13.5 18v-2.5M10.5 15.5V18A2.5 2.5 0 0 1 8 20.5H6A2.5 2.5 0 0 1 3.5 18z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M12 7v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 10h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Icon>
    ),
    desc: 'Free checkups, screening, medicines and preventive health awareness.',
  },
  {
    title: 'Skill Development – HUNAR',
    href: '/services/hunar',
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path
            d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9 7h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Icon>
    ),
    desc: 'Vocational and business skills for self-reliance and dignified livelihoods.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services content">
      <div className="section-head">
        <p className="eyebrow">What We Do</p>
        <h2 className="section-title">Focused Programs For Lasting Impact</h2>
        <p className="section-subtitle">
          Ababeel Foundation operates focused programs that address education, nutrition, health and employable skills.
        </p>
      </div>
      <div className="grid">
        {items.map((item) => (
          <Link key={item.title} className="service-card" to={item.href}>
            <div className="icon-wrap">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
