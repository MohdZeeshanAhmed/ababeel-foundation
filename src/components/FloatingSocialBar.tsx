import './FloatingSocialBar.css'
import { site } from '../site'

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
    name: 'X',
    href: '#',
    className: 'x',
    label: 'X (Twitter)',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.8 7.7L23 22h-6.2l-4.9-6.6L6 22H3l7.2-8.2L1 2h6.3l4.4 6zM17.8 20h1.7L5.1 3.9H3.3z"
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
  return (
    <nav className="floating-social" aria-label="Social media">
      {socials.map((item) => (
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
