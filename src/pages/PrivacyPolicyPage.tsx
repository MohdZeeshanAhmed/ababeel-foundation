import Footer from '../components/Footer'
import './SimplePage.css'

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page container simple-page" aria-label="Privacy policy">
        <header className="simple-head">
          <p className="eyebrow">Privacy</p>
          <h1 className="simple-title">Privacy Policy</h1>
          <p className="simple-subtitle">
            This is a lightweight placeholder page to match the public site navigation.
          </p>
        </header>

        <div className="simple-card">
          <p>
            Add your full Privacy Policy text here (data collection, cookies, donations, contact forms, and third-party
            services).
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
