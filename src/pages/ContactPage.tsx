import Footer from '../components/Footer'
import { site } from '../site'
import './SimplePage.css'

export default function ContactPage() {
  return (
    <>
      <section className="page container simple-page" aria-label="Contact">
        <header className="simple-head">
          <p className="eyebrow">Contact</p>
          <h1 className="simple-title">Get in touch</h1>
          <p className="simple-subtitle">
            Reach out for help, partnerships, volunteering, or any questions about {site.name}.
          </p>
        </header>

        <div className="simple-grid">
          <div className="simple-card">
            <h2>Email</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="simple-card">
            <h2>Phone</h2>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </div>
          <div className="simple-card">
            <h2>Address</h2>
            <a href={site.mapUrl} target="_blank" rel="noreferrer">
              {site.address}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
