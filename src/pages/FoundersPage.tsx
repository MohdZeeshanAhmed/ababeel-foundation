import Footer from '../components/Footer'
import './SimplePage.css'
import teamImg5081 from '../assets/IMG_5081.jpeg'
import teamImg5317 from '../assets/IMG_5317.jpeg'
import teamImg9799 from '../assets/IMG_9799.jpeg'
import teamImg9807 from '../assets/IMG_9807.jpeg'

const teamSections = [
  { title: 'Founders & Trustees', image: teamImg5081, layout: 'landscape' },
  { title: 'Core Team', image: teamImg5317, layout: 'portrait' },
  { title: 'Volunteers', image: teamImg9799, layout: 'portrait' },
  { title: 'Medical & Academic Advisors', image: teamImg9807, layout: 'portrait' },
]

export default function FoundersPage() {
  return (
    <>
      <section className="page container simple-page" aria-label="Founders and members">
        <header className="simple-head">
          <p className="eyebrow">Founders</p>
          <h1 className="simple-title">Our Team</h1>
          <p className="simple-subtitle">
            Ababeel Foundation is driven by dedicated professionals, volunteers and community members.
          </p>
        </header>

        <div className="simple-grid team-grid">
          {teamSections.map((section) => (
            <article className={`simple-card team-card team-card-${section.layout}`} key={section.title}>
              <h2>{section.title}</h2>
              <figure className="photo-placeholder">
                <div className="team-photo-frame">
                  <img
                    className="team-photo"
                    src={section.image}
                    alt={`${section.title} members`}
                    loading="lazy"
                  />
                </div>
              </figure>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
