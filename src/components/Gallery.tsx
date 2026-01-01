import { useEffect, useMemo, useState } from 'react'
import './Gallery.css'

import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'
import hero6 from '../assets/hero6.jpg'

type GalleryItem = { src: string; alt: string }

export default function Gallery() {
  const items: GalleryItem[] = useMemo(
    () => [
      { src: hero1, alt: 'Ababeel Foundation community work' },
      { src: hero2, alt: 'Ababeel Foundation outreach' },
      { src: hero3, alt: 'Ababeel Foundation relief effort' },
      { src: hero4, alt: 'Ababeel Foundation camp support' },
      { src: hero5, alt: 'Ababeel Foundation volunteers' },
      { src: hero6, alt: 'Ababeel Foundation impact moment' },
    ],
    [],
  )

  const [active, setActive] = useState<GalleryItem | null>(null)

  useEffect(() => {
    if (!active) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  return (
    <section id="gallery" className="gallery content" aria-label="Gallery">
      <div className="section-head">
        <p className="eyebrow">Gallery</p>
        <h2 className="section-title">Moments from the field</h2>
        <p className="section-subtitle">A glimpse into camps, outreach programs, and community support initiatives.</p>
      </div>

      <div className="grid">
        {items.map((img) => (
          <button
            key={img.src}
            type="button"
            className="tile"
            onClick={() => setActive(img)}
            aria-label="Open image"
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
          <button type="button" className="backdrop" onClick={() => setActive(null)} aria-label="Close" />
          <div className="panel">
            <img src={active.src} alt={active.alt} />
            <button type="button" className="close" onClick={() => setActive(null)} aria-label="Close">
              ×
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
