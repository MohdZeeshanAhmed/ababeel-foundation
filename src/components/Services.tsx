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
    title: 'Healthcare',
    href: '/services/healthcare',
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
    desc: 'Partner hospitals, clinics and diagnostics providing accessible, affordable care.',
  },
  {
    title: 'Finance',
    href: '/services/finance',
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path
            d="M6 7h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M8 12h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Icon>
    ),
    desc: 'Support through financial aid, repayments, and stability for families in need.',
  },
  {
    title: 'Education',
    href: '/services/education',
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
    desc: 'Fee support and education initiatives that keep students learning and thriving.',
  },
  {
    title: 'Urgent Relief',
    href: '/services/urgent-relief',
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path
            d="M12 2 2.5 20h19L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M12 9v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 17h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </Icon>
    ),
    desc: 'Rapid support during emergencies and disasters with essentials and care.',
  },
  {
    title: 'Social Welfare',
    href: '/services/social-welfare',
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path
            d="M12 21s-7-4.4-9.3-9C1 8.5 3.2 6 6 6c1.6 0 3.1.9 4 2.2C10.9 6.9 12.4 6 14 6c2.8 0 5 2.5 3.3 6-2.3 4.6-9.3 9-9.3 9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </Icon>
    ),
    desc: 'Food and essential aid programs supporting vulnerable communities.',
  },
  {
    title: 'Food Distribution',
    href: '/services/food-distribution',
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
    desc: 'Nutrition drives and meal support for vulnerable communities.',
  },
  {
    title: 'Blanket Distribution',
    href: '/services/blanket-distribution',
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
    desc: 'Seasonal winter outreach to keep families warm and safe.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services content">
      <div className="section-head">
        <p className="eyebrow">What We Do</p>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We support communities through healthcare, education, urgent relief and long-term welfare initiatives.
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
