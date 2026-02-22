import Footer from '../components/Footer'
import './SimplePage.css'

const categories = ['Founders & Trustees', 'Core Team', 'Volunteers', 'Medical & Academic Advisors']

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

        <div className="simple-grid">
          {categories.map((category) => (
            <article className="simple-card" key={category}>
              <h2>{category}</h2>
              <figure className="photo-placeholder" role="img" aria-label={`${category} group photo placeholder`}>
                <div className="photo-placeholder-box">Photo placement</div>
                <figcaption>Individual or group photos</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
