import { useEffect, useMemo, useState } from 'react'
import './Gallery.css'

import hero1 from '../assets/gallery-1.jpeg'
import hero2 from '../assets/gallery-2.jpeg'
import hero3 from '../assets/gallery-3.jpeg'
import hero4 from '../assets/gallery-4.jpeg'
import hero5 from '../assets/gallery-5.jpeg'
import hero6 from '../assets/home-hero-3.jpeg'

type GalleryItem = { src: string; alt: string }

type GalleryProps = {
  headingLevel?: 'h1' | 'h2'
}

export default function Gallery({ headingLevel = 'h2' }: GalleryProps) {
  const HeadingTag = headingLevel

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
    <section id="gallery" className="gallery content" aria-label="Gallery" data-reveal="up">
      <div className="section-head">
        <p className="eyebrow">Gallery</p>
        <HeadingTag className="section-title">Moments from the field</HeadingTag>
        <p className="section-subtitle">A glimpse into camps, outreach programs, and community support initiatives.</p>
      </div>

      <div className="gallery-grid">
        {items.map((img) => (
          <button
            key={img.src}
            type="button"
            className="tile"
            onClick={() => setActive(img)}
            aria-label={`Open image: ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {active ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
          <button type="button" className="gallery-backdrop" onClick={() => setActive(null)} aria-label="Close" />
          <div className="gallery-panel">
            <img src={active.src} alt={active.alt} />
            <button type="button" className="gallery-close" onClick={() => setActive(null)} aria-label="Close">
              ×
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
