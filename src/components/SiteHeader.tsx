import { useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SiteHeader.css'

import { site } from '../site'
const logo = '/ababeel-icon-square.png'

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

  const mobileItems = useMemo(
    () =>
      items.map((item) => {
        if (item.kind === 'link') return { to: item.to, label: item.label }
        return { to: '/projects', label: item.label }
      }),
    [items],
  )

  return (
    <header className={`site-header ${mobileOpen ? 'menu-open' : ''}`}>
      <div className="content header-inner">
        <Link to="/" className="brand" aria-label={`${site.name} home`}>
          <img className="header-logo" src={logo} alt={site.name} />
          <span className="brand-name">{site.name}</span>
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

        <div className="site-header-actions">
          <Link className="header-cta" to={site.donateUrl}>
            Donate Now
          </Link>
          <button
            type="button"
            className={`header-mobile-toggle ${mobileOpen ? 'is-open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className="mobile-scroll-nav content" aria-label="Mobile navigation">
        {mobileItems.map((item) => (
          <NavLink key={`mobile-scroll-${item.to}-${item.label}`} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {mobileOpen ? (
        <div className="header-mobile" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="header-mobile-panel">
            <div className="header-mobile-head">
              <span className="header-mobile-title">Menu</span>
              <button
                type="button"
                className="header-mobile-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="header-mobile-links">
              {mobileItems.map((item) => (
                <NavLink key={`${item.to}-${item.label}`} to={item.to} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="header-mobile-footer">
              <Link className="header-cta header-cta-full" to={site.donateUrl}>
                Donate Now
              </Link>
              <a className="header-secondary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="header-secondary" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <button
            type="button"
            className="header-mobile-backdrop"
            aria-label="Close"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      ) : null}
    </header>
  )
}
