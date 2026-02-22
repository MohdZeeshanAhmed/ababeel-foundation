import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './FloatingDonateButton.module.css'

type FloatingDonateButtonProps = {
  onClick?: () => void
}

type Mode = 'shown' | 'disintegrating' | 'assembling'

type ParticleStyle = React.CSSProperties & {
  '--dx': string
  '--dy': string
  '--dly': string
}

const ANIM_MS = 520

const FloatingDonateButton: React.FC<FloatingDonateButtonProps> = ({ onClick }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [mode, setMode] = useState<Mode>('shown')

  const timerRef = useRef<number | null>(null)
  const prevPathRef = useRef<string>(pathname)

  const clearTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = null
  }

  const particles = useMemo(() => {
    const count = 44
    return Array.from({ length: count }).map((_, i) => {
      const dx = 40 + Math.random() * 160
      const dy = (Math.random() * 2 - 1) * 90
      const dly = Math.floor(Math.random() * 110)
      const size = 3 + Math.random() * 5
      return { id: i, dx, dy, dly, size }
    })
  }, [])

  useEffect(() => {
    const handler = () => {
      setMode('disintegrating')
      clearTimer()
      timerRef.current = window.setTimeout(() => {
        navigate('/donate')
      }, ANIM_MS)
    }

    window.addEventListener('ababeel:donateNavigate', handler as EventListener)
    return () => {
      window.removeEventListener('ababeel:donateNavigate', handler as EventListener)
      clearTimer()
    }
  }, [navigate])

  useEffect(() => {
    const prev = prevPathRef.current
    prevPathRef.current = pathname

    const isDonate = pathname === '/donate' || pathname === '/donete'
    const wasDonate = prev === '/donate' || prev === '/donete'

    if (isDonate) return

    if (wasDonate && !isDonate) {
      setMode('assembling')
      clearTimer()
      timerRef.current = window.setTimeout(() => {
        setMode('shown')
      }, ANIM_MS)
      return
    }

    if (mode !== 'disintegrating') setMode('shown')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  if (pathname === '/donate' || pathname === '/donete') return null

  const handleClick = () => {
    setMode('disintegrating')
    clearTimer()

    timerRef.current = window.setTimeout(() => {
      if (onClick) {
        onClick()
        return
      }
      navigate('/donate')
    }, ANIM_MS)
  }

  const showParticles = mode === 'disintegrating' || mode === 'assembling'

  return (
    <div className={`${styles.wrapper} ${styles[mode]}`}>
      {showParticles && (
        <div className={styles.particles} aria-hidden="true">
          {particles.map((p) => {
            const particleStyle: ParticleStyle = {
              '--dx': `${p.dx}px`,
              '--dy': `${p.dy}px`,
              '--dly': `${p.dly}ms`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }

            return <span key={p.id} className={styles.particle} style={particleStyle} />
          })}
        </div>
      )}

      <button
        type="button"
        className={styles.floatingDonateBtn}
        onClick={handleClick}
        aria-label="Donate Now"
        title="Donate Now"
      >
        <div className={styles.inner}>
          <div className={styles.iconBox} aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path
                fill="currentColor"
                d="M12 21a1 1 0 0 1-.48-.12c-2.86-1.6-5.1-3.52-6.66-5.71C3.2 12.88 3 11.1 3 10a4.5 4.5 0 0 1 8-2.83A4.5 4.5 0 0 1 19 10c0 1.1-.2 2.88-1.86 5.17-1.56 2.19-3.8 4.11-6.66 5.71A1 1 0 0 1 12 21"
              />
            </svg>
          </div>

          <div className={styles.text}>
            <div className={styles.title}>Donate Now</div>
            <div className={styles.sub}>Support a noble cause</div>
            <div className={styles.sub}>Support Ababeel Foundation</div>
          </div>

          <div className={styles.chev} aria-hidden="true">
            ›
          </div>
        </div>
      </button>
    </div>
  )
}

export default FloatingDonateButton
