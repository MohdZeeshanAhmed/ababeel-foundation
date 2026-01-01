import Footer from '../components/Footer'
import { site } from '../site'
import './SimplePage.css'

export default function DoctorsMeetPage() {
  return (
    <>
      <section className="page container simple-page" aria-label="Doctors meet">
        <header className="simple-head">
          <p className="eyebrow">Community</p>
          <h1 className="simple-title">{site.name} Doctors Meet</h1>
          <p className="simple-subtitle">Highlights, schedules, and updates for the doctors meet.</p>
        </header>

        <div className="simple-card">
          <p>Add event details, photos, and registration/RSVP links here.</p>
        </div>
      </section>
      <Footer />
    </>
  )
}
