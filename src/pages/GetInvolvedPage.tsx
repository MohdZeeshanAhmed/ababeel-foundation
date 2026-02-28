import Footer from '../components/Footer'
import './SimplePage.css'

const ways = [
  'Volunteer your time',
  'Sponsor a student',
  'Support a family',
  'Partner for SEHAT healthcare support',
  'Skill training collaborations',
]

export default function GetInvolvedPage() {
  return (
    <>
      <section className="page container simple-page" aria-label="Get involved">
        <header className="simple-head">
          <p className="eyebrow">Get Involved</p>
          <h1 className="simple-title">Ways to Get Involved</h1>
          <p className="simple-subtitle">Together, we can create lasting change.</p>
        </header>

        <div className="simple-card simple-cta-box">
          <h2>How You Can Contribute</h2>
          <ul className="simple-list">
            {ways.map((way) => (
              <li key={way}>{way}</li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  )
}
