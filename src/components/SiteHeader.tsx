import { useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SiteHeader.css'

import { site } from '../site'
import logo from '../assets/AbabeelFoundation_Logo.jpg'

type NavItem =
  | { kind: 'link'; to: string; label: string }
  | { kind: 'dropdown'; label: string; items: Array<{ to: string; label: string }> }

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // =======================
  // ✅ ADDED: helper to trigger particle animation before navigation
  // =======================
  const triggerDonateNavigate = (to: string) => {
    window.dispatchEvent(new CustomEvent('ababeel:donateNavigate', { detail: { to } }))
  }

  const items: NavItem[] = useMemo(
    () => [
      { kind: 'link', to: '/', label: 'Home' },
      { kind: 'link', to: '/about', label: 'About Us' },
      {
        kind: 'dropdown',
        label: 'Our Services',
        items: [
          { to: '/services/healthcare', label: 'Healthcare' },
          { to: '/services/finance', label: 'Finance' },
          { to: '/services/education', label: 'Education' },
          { to: '/services/urgent-relief', label: 'Urgent Relief' },
          { to: '/services/social-welfare', label: 'Social Welfare' },
          { to: '/services/food-distribution', label: 'Food Distribution' },
          { to: '/services/blanket-distribution', label: 'Blanket Distribution' },
        ],
      },
      { kind: 'link', to: '/gallery', label: 'Gallery' },
      { kind: 'link', to: '/contact', label: 'Contact' },
      { kind: 'link', to: '/donate', label: 'Donate' }, // ← Donate handled specially
      { kind: 'link', to: '/doctors-meet', label: 'Ababeel Doctors Meet' },
      { kind: 'link', to: '/privacy-policy', label: 'Privacy Policy' },
    ],
    [],
  )

  return (
    <header className="site-header">
      <div className="content header-inner">
        <Link to="/" className="brand" aria-label={`${site.name} home`}>
          <img className="logo" src={logo} alt={site.name} />
        </Link>

        <nav className="nav desktop" aria-label="Main">
          {items.map((item) => {
            if (item.kind === 'link') {
              const isDonate = item.to === '/donate'

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={(e) => {
                    if (isDonate) {
                      e.preventDefault() // stop instant navigation
                      triggerDonateNavigate('/donate') // 🔥 trigger particle vanish
                    }
                  }}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              )
            }

            return (
              <div key={item.label} className="dropdown">
                <button type="button" className="dropdown-trigger" aria-haspopup="true">
                  {item.label} <span className="caret">▾</span>
                </button>
                <div className="dropdown-menu" role="menu">
                  {item.items.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      role="menuitem"
                      className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>

        <div className="actions">
          <Link className="cta" to={site.cardUrl}>
            Get A Card
          </Link>
          <button
            type="button"
            className="mobile-toggle"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mobile" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-panel">
            <div className="mobile-head">
              <span className="mobile-title">Menu</span>
              <button type="button" className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close">
                ×
              </button>
            </div>

            <div className="mobile-links">
              {items.map((item) => {
                if (item.kind === 'link') {
                  const isDonate = item.to === '/donate'

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={(e) => {
                        setMobileOpen(false)
                        if (isDonate) {
                          e.preventDefault()
                          triggerDonateNavigate('/donate') // 🔥 particle vanish on mobile
                        }
                      }}
                    >
                      {item.label}
                    </NavLink>
                  )
                }

                return (
                  <div key={item.label} className="mobile-group">
                    <div className="mobile-group-title">{item.label}</div>
                    {item.items.map((sub) => (
                      <NavLink key={sub.to} to={sub.to} onClick={() => setMobileOpen(false)}>
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )
              })}
            </div>

            <div className="mobile-footer">
              <Link className="cta full" to={site.cardUrl}>
                Get A Card
              </Link>
              <a className="secondary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="secondary" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <button type="button" className="mobile-backdrop" aria-label="Close" onClick={() => setMobileOpen(false)} />
        </div>
      ) : null}
    </header>
  )
}
