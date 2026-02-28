import { Link } from 'react-router-dom'
import './Footer.css'

import { site } from '../site'
import logo from '../assets/footer-logo-new.png'

export default function Footer() {
  const socialLinks = [
    { label: 'WhatsApp', href: site.social.whatsapp },
    { label: 'Instagram', href: site.social.instagram },
    { label: 'Facebook', href: site.social.facebook },
    { label: 'LinkedIn', href: site.social.linkedin },
    { label: 'Youtube', href: site.social.youtube },
  ].filter((item) => item.href && item.href !== '#')

  return (
    <footer className="site-footer" aria-label="Footer" data-reveal="up">
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
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="content footer-bottom">
        <span>© Ababeel Foundation. All rights reserved.</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  )
}
