import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

import hero1 from '../assets/home-hero-1.jpeg'
import hero2 from '../assets/home-hero-2.jpeg'
import hero3 from '../assets/home-hero-3.jpeg'

type HeroSlide = {
  title: string
  subtitle: string
  badge: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
  background: string
}

const slides: HeroSlide[] = [
  {
    title: 'ABABEEL FOUNDATION',
    subtitle: 'Assisting in Basic Aid, Betterment and Education for Economically weak and Less privileged',
    badge: 'Empowering families through education, health and sustainable support.',
    primary: { label: 'Explore Our Projects', href: '/projects' },
    secondary: { label: 'Get Involved', href: '/get-involved' },
    background: hero1,
  },
  {
    title: 'Breaking the cycle of poverty through education, health, and skills.',
    subtitle:
      'Ababeel Foundation is a community-driven nonprofit working to uplift underprivileged families by ensuring access to education, healthcare, food security and livelihood skills.',
    badge: 'Community-based • Education-first • Dignity with accountability',
    primary: { label: 'Explore Our Projects', href: '/projects' },
    secondary: { label: 'Get Involved', href: '/get-involved' },
    background: hero2,
  },
  {
    title: 'Together, we can create lasting change.',
    subtitle:
      'From SHAMA and MANNA SALWA to SEHAT and HUNAR, every program is built to deliver long-term impact for families.',
    badge: 'Sustainable and community-led programs',
    primary: { label: 'Get Involved', href: '/get-involved' },
    secondary: { label: 'Contact Us', href: '/contact' },
    background: hero3,
  },
]

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIdx((current) => (current + 1) % slides.length), 6500)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setIdx((current) => (current - 1 + slides.length) % slides.length)
  const next = () => setIdx((current) => (current + 1) % slides.length)

  const slide = slides[idx]

  return (
    <section id="home" className="hero" aria-label="Homepage hero">
      <div className="carousel">
        {slides.map((item, index) => (
          <div
            key={item.title}
            className={`slide ${index === idx ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.background})` }}
            aria-hidden={index !== idx}
          />
        ))}

        <div className="hero-content content">
          <span className="pill">{slide.badge}</span>
          <h1>{slide.title}</h1>
          <p className="lead">{slide.subtitle}</p>
          <div className="hero-cta">
            <Link className="btn primary" to={slide.primary.href}>
              {slide.primary.label}
            </Link>
            <Link className="btn ghost" to={slide.secondary.href}>
              {slide.secondary.label}
            </Link>
          </div>
          <div className="hero-kicker" aria-label="Key stats">
            <div>
              <strong>7</strong>
              <span>Focused Programs</span>
            </div>
            <div>
              <strong>2024</strong>
              <span>Started</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Community-first approach</span>
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
