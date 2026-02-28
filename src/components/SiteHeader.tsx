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

  const items: NavItem[] = useMemo(
    () => [
      { kind: 'link', to: '/', label: 'Home' },
      { kind: 'link', to: '/about', label: 'About Us' },
      {
        kind: 'dropdown',
        label: 'Our Projects',
        items: [
          { to: '/projects', label: 'All Projects' },
          { to: '/services/shama', label: 'SHAMA' },
          { to: '/services/manna-salwa', label: 'MANNA SALWA' },
          { to: '/services/medical-camps', label: 'SEHAT' },
          { to: '/services/hunar', label: 'HUNAR' },
        ],
      },
      { kind: 'link', to: '/founders', label: 'Founders' },
      { kind: 'link', to: '/gallery', label: 'Gallery' },
      { kind: 'link', to: '/get-involved', label: 'Get Involved' },
      { kind: 'link', to: '/contact', label: 'Contact Us' },
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
              return (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
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
          <Link className="cta" to={site.donateUrl}>
            Donate Now
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
                  return (
                    <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)}>
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
              <Link className="cta full" to={site.donateUrl}>
                Donate Now
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
