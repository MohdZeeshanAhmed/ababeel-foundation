import { useEffect, useState } from 'react'
import './Hero.css'

import { site } from '../site'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

const slides = [
  {
    title: 'Serving The Middle Class With Dignity & Care',
    subtitle:
      'An annual family health card that keeps healthcare affordable and respectful across Hyderabad.',
    badge: 'One Card • Countless Benefits',
    primary: { label: 'Get a Card', href: site.cardUrl },
    secondary: { label: 'Contact Us', href: site.contactUrl },
    background: hero1,
  },
  {
    title: 'From a Vision to a Movement',
    subtitle:
      'Founded in 2018 to make healthcare accessible and dignified for every family we touch.',
    badge: 'Since 2018 • Compassion in action',
    primary: { label: 'Explore Programs', href: '/#services' },
    secondary: { label: 'About Us', href: '/about' },
    background: hero2,
  },
  {
    title: 'Impact You Can See',
    subtitle:
      'On-ground volunteers, camps, and partners delivering care when it matters most.',
    badge: '70+ hospitals • 3L+ beneficiaries',
    primary: { label: 'Our Services', href: '/#services' },
    secondary: { label: 'View Gallery', href: '/gallery' },
    background: hero3,
  },
]

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6500)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIdx((i) => (i + 1) % slides.length)

  const slide = slides[idx]

  return (
    <section id="home" className="hero">
      <div className="carousel">
        {slides.map((item, i) => (
          <div
            key={item.title}
            className={`slide ${i === idx ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.background})` }}
            aria-hidden={i !== idx}
          />
        ))}

        <div className="hero-content content">
          <span className="pill">{slide.badge}</span>
          <h1>{slide.title}</h1>
          <p className="lead">{slide.subtitle}</p>
          <div className="hero-cta">
            <a className="btn primary" href={slide.primary.href}>
              {slide.primary.label}
            </a>
            <a className="btn ghost" href={slide.secondary.href}>
              {slide.secondary.label}
            </a>
          </div>
          <div className="hero-kicker" aria-label="Key stats">
            <div>
              <strong>70+</strong>
              <span>Hospitals & Partners</span>
            </div>
            <div>
              <strong>3L+</strong>
              <span>Beneficiaries</span>
            </div>
            <div>
              <strong>450+</strong>
              <span>Volunteers</span>
            </div>
          </div>
        </div>

        <button className="carousel-prev" onClick={prev} aria-label="Previous slide">
          ‹
        </button>
        <button className="carousel-next" onClick={next} aria-label="Next slide">
          ›
        </button>
      </div>
    </section>
  )
}
