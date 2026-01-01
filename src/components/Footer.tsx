import { Link } from 'react-router-dom'
import './Footer.css'

import { site } from '../site'
import logo from '../assets/AbabeelFoundation_Logo.jpg'

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="content footer-top">
        <div className="footer-col about">
          <Link to="/" className="footer-logo" aria-label="Home">
            <img src={logo} alt={site.name} />
          </Link>
          <p className="footer-text">
            {site.name} is dedicated to serving communities through healthcare access, education support, urgent relief,
            and social welfare initiatives.
          </p>
          <Link className="footer-donate" to={site.donateUrl}>
            Donate Now
          </Link>
        </div>

        <div className="footer-col">
          <h3>Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to={site.donateUrl}>Donate Now</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <div className="footer-col">
          <h3>Our Services</h3>
          <Link to="/services/healthcare">Healthcare</Link>
          <Link to="/services/finance">Finance</Link>
          <Link to="/services/education">Education</Link>
          <Link to="/services/urgent-relief">Urgent Relief</Link>
          <Link to="/services/social-welfare">Social Welfare</Link>
          <Link to="/services/food-distribution">Food Distribution</Link>
          <Link to="/services/blanket-distribution">Blanket Distribution</Link>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <a href={site.mapUrl} target="_blank" rel="noreferrer">
            {site.address}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </div>
      </div>

      <div className="content footer-bottom">
        <span>{'\u00A9'} {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <a href="/#home" className="backtotop">
          Back to top
        </a>
      </div>
    </footer>
  )
}
