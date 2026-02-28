import { Link } from 'react-router-dom'
import './About.css'

import { site } from '../site'
import aboutImg from '../assets/about-team-field.jpeg'

type AboutProps = {
  headingLevel?: 'h1' | 'h2'
}

const approach = ['Community-based', 'Education-first model', 'Dignity, not dependency', 'Accountability and follow-up']
const values = [
  'Education as empowerment',
  'Transparency & trust',
  'Compassion with accountability',
  'Long-term impact',
]

export default function About({ headingLevel = 'h2' }: AboutProps) {
  const HeadingTag = headingLevel

  return (
    <section id="about" className="about container" aria-label={`About ${site.name}`} data-reveal="up">
      <div className="about-main">
        <div className="about-image">
          <img src={aboutImg} alt="Ababeel Foundation team and field activity" loading="lazy" />
        </div>

        <div className="about-copy">
          <HeadingTag className="section-title">Who We Are</HeadingTag>
          <p className="section-subtitle">
            Ababeel Foundation - started in 2024 - is a grassroots nonprofit initiative focused on empowering
            marginalized families by addressing the root causes of poverty - lack of education, healthcare, nutrition,
            and sustainable income.
          </p>

          <h3>Why We Exist</h3>
          <p className="section-subtitle">
            Many families discontinue their children&apos;s education due to financial stress, health issues, or lack of
            awareness. Ababeel Foundation intervenes by supporting the entire family, not just the child.
          </p>

          <div className="about-extra" aria-label="About highlights">
            <h3>At a Glance</h3>
            <ul>
              <li>Started in 2024 as a grassroots nonprofit.</li>
              <li>Focused on education, health, nutrition and sustainable income.</li>
              <li>Community-led support for families and children.</li>
            </ul>
            <div className="about-actions">
              <Link className="btn primary" to="/projects">
                Explore Our Projects
              </Link>
              <Link className="btn ghost" to="/get-involved">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pillars">
        <div className="pillar">
          <h3>Our Approach</h3>
          <ul>
            {approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="pillar">
          <h3>Vision</h3>
          <p>
            A society where every child learns, every family is healthy and every individual has the skills to earn
            with dignity.
          </p>
        </div>
        <div className="pillar">
          <h3>Mission</h3>
          <p>
            To enable education, health access and livelihood opportunities for underprivileged communities through
            sustainable, ethical and community-led programs.
          </p>
        </div>
        <div className="pillar">
          <h3>Core Values</h3>
          <ul>
            {values.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pillars" id="awards">
        <div className="pillar">
          <h3>Awards and Recognition</h3>
          <p>This section highlights recognitions and partner acknowledgements earned by {site.name}.</p>
        </div>
      </div>
    </section>
  )
}
