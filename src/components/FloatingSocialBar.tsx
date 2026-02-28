import './FloatingSocialBar.css'
import { site } from '../site'
import { useLocation } from 'react-router-dom'

import type { ReactNode } from 'react'

type SocialItem = {
  name: string
  href: string
  className: string
  label: string
  icon: ReactNode
}

const socials: SocialItem[] = [
  {
    name: 'WhatsApp',
    href: site.social.whatsapp,
    className: 'whatsapp',
    label: 'WhatsApp',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.36-1.67a11.86 11.86 0 0 0 5.7 1.45h.01c6.57 0 11.91-5.34 11.91-11.9 0-3.18-1.24-6.17-3.46-8.4Zm-8.45 18.3h-.01a9.95 9.95 0 0 1-5.06-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.95 9.95 0 0 1-1.53-5.31c0-5.49 4.47-9.96 9.96-9.96 2.66 0 5.16 1.04 7.04 2.92a9.9 9.9 0 0 1 2.92 7.04c0 5.49-4.47 9.96-9.96 9.96Zm5.46-7.48c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47a8.96 8.96 0 0 1-1.67-2.08c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.06 2.86 1.2 3.06.15.2 2.08 3.18 5.03 4.46.7.3 1.25.48 1.68.62.71.22 1.36.19 1.87.12.57-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.45-.08-.13-.28-.2-.58-.35Z"
        />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: site.social.facebook,
    className: 'facebook',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.3-1.6 1.7-1.6h1.5V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.3H8v3.1h2.6V22z"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: site.social.youtube,
    className: 'youtube',
    label: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M23 12s0-3.1-.4-4.6a2.4 2.4 0 0 0-1.7-1.7C19.3 5.3 12 5.3 12 5.3s-7.3 0-8.9.4a2.4 2.4 0 0 0-1.7 1.7C1 8.9 1 12 1 12s0 3.1.4 4.6a2.4 2.4 0 0 0 1.7 1.7c1.6.4 8.9.4 8.9.4s7.3 0 8.9-.4a2.4 2.4 0 0 0 1.7-1.7C23 15.1 23 12 23 12m-13 3.7V8.3L16.4 12z"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: site.social.instagram,
    className: 'instagram',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4zM18.4 5.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: site.social.linkedin,
    className: 'linkedin',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M6.9 8A1.9 1.9 0 1 1 7 4.1 1.9 1.9 0 0 1 6.9 8M5.3 9.5h3.2V20H5.3zm5.1 0h3v1.4h.1a3.3 3.3 0 0 1 3-1.7c3.2 0 3.8 2.1 3.8 4.9V20H17v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20h-3.1z"
        />
      </svg>
    ),
  },
]

export default function FloatingSocialBar() {
  const { pathname } = useLocation()
  if (pathname === '/donate' || pathname === '/donete') return null

  const visibleSocials = socials.filter((item) => item.href && item.href !== '#')

  return (
    <nav className="floating-social" aria-label="Social media">
      {visibleSocials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`social-item ${item.className}`}
          aria-label={item.label}
          target="_blank"
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </nav>
  )
}
