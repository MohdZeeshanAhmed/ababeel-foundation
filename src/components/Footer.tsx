import { Link } from 'react-router-dom'
import './Footer.css'

import { site } from '../site'
import logo from '../assets/footer-logo-new.png'

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="content footer-top">
        <div className="footer-col footer-about">
          <Link to="/" className="footer-logo" aria-label="Home">
            <img src={logo} alt={site.name} />
          </Link>
          <p className="footer-text">{site.tagline}</p>
          <Link className="footer-donate" to={site.getInvolvedUrl}>
            Get Involved
          </Link>
        </div>

        <div className="footer-col">
          <h3>Footer Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Our Projects</Link>
          <Link to="/members">Members</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <a href={site.mapUrl} target="_blank" rel="noreferrer">
            {site.address}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </div>

        <div className="footer-col">
          <h3>Social Media</h3>
          <a href={site.social.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={site.social.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={site.social.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.social.youtube} target="_blank" rel="noreferrer">
            Youtube
          </a>
        </div>
      </div>

      <div className="content footer-bottom">
        <span>© Ababeel Foundation. All rights reserved.</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  )
}
