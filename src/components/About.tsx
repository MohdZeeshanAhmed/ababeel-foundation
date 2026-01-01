import './About.css'

import { site } from '../site'
import aboutImg from '../assets/hero5.jpg'

const pillars = [
  {
    title: 'Our Journey',
    text: 'Founded in 2018 by Mr. SM Mustafa Ahmed, Ababeel Foundation grew from personal tragedy into a movement for dignified healthcare.',
  },
  {
    title: 'Our Mission',
    text: 'Make healthcare accessible and affordable for underprivileged and middle-class families, reducing financial burdens.',
  },
  {
    title: 'Our Vision',
    text: 'Build a healthcare ecosystem where no one suffers because care is inaccessible or unaffordable.',
  },
]

export default function About() {
  return (
    <section id="about" className="about container" aria-label={`About ${site.name}`}>
      <div className="about-main">
        <div className="about-image">
          <img src={aboutImg} alt={`${site.name} in action`} loading="lazy" />
        </div>

        <div className="about-copy">
          <p className="eyebrow">About Us</p>
          <h2 className="section-title">My Personal Story that Give Health To A Mission</h2>
          <p className="section-subtitle">
            Founded in 2018 by Mr. SM Mustafa Ahmed, the Ababeel Foundation emerged from a deeply personal tragedy and
            grew into a mission to provide affordable healthcare and support to underprivileged families.
          </p>

          <div className="impact-grid">
            <div>
              <strong>37,000</strong>
              <span>Families impacted</span>
            </div>
            <div>
              <strong>₹19.25 Cr</strong>
              <span>Total annual benefit</span>
            </div>
            <div>
              <strong>150</strong>
              <span>Patients served each health camp</span>
            </div>
          </div>

          <div className="cta-row">
            <a className="btn primary" href={site.cardUrl}>
              Get a Card
            </a>
            <a className="btn ghost" href={site.contactUrl}>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="pillars">
        {pillars.map((p) => (
          <div key={p.title} className="pillar">
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
