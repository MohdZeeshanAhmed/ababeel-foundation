import Footer from '../components/Footer'
import { site } from '../site'
import './SimplePage.css'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <>
      <section className="page container simple-page contact-page" aria-label="Contact">
        <header className="simple-head">
          <p className="eyebrow">Contact Us</p>
          <h1 className="simple-title">Let&apos;s Build Sustainable Social Change Together</h1>
          <p className="simple-subtitle">
            We welcome individuals, donors and partners who believe in sustainable social change.
          </p>
        </header>

        <div className="simple-grid contact-grid">
          <div className="simple-card contact-card">
            <h2>Address</h2>
            <a href={site.mapUrl} target="_blank" rel="noreferrer">
              {site.address}
            </a>
          </div>
          <div className="simple-card contact-card">
            <h2>Phone</h2>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </div>
          <div className="simple-card contact-card">
            <h2>Email</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>

        <div className="simple-card contact-social-card">
          <h2>Social Media</h2>
          <div className="simple-social contact-social-icons" aria-label="Social media links">
            <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4zM18.4 5.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
                />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.3-1.6 1.7-1.6h1.5V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.3H8v3.1h2.6V22z"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M6.9 8A1.9 1.9 0 1 1 7 4.1 1.9 1.9 0 0 1 6.9 8M5.3 9.5h3.2V20H5.3zm5.1 0h3v1.4h.1a3.3 3.3 0 0 1 3-1.7c3.2 0 3.8 2.1 3.8 4.9V20H17v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20h-3.1z"
                />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={site.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M23 12s0-3.1-.4-4.6a2.4 2.4 0 0 0-1.7-1.7C19.3 5.3 12 5.3 12 5.3s-7.3 0-8.9.4a2.4 2.4 0 0 0-1.7 1.7C1 8.9 1 12 1 12s0 3.1.4 4.6a2.4 2.4 0 0 0 1.7 1.7c1.6.4 8.9.4 8.9.4s7.3 0 8.9-.4a2.4 2.4 0 0 0 1.7-1.7C23 15.1 23 12 23 12m-13 3.7V8.3L16.4 12z"
                />
              </svg>
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
