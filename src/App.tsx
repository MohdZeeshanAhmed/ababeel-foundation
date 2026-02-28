import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import SiteHeader from './components/SiteHeader'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ServicePage from './pages/ServicePage'
import DoctorsMeetPage from './pages/DoctorsMeetPage'
import DonatePage from './pages/DonatePage'
import FloatingDonateButton from './components/FloatingDonateButton'
import FloatingSocialBar from './components/FloatingSocialBar'
import ProjectsPage from './pages/ProjectsPage'
import FoundersPage from './pages/FoundersPage'
import GetInvolvedPage from './pages/GetInvolvedPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = decodeURIComponent(hash.replace('#', ''))
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Shell() {
  const { pathname } = useLocation()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.revealed)'))
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    )

    const raf = window.requestAnimationFrame(() => {
      targets.forEach((el) => observer.observe(el))
    })

    return () => {
      window.cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [pathname])

  return (
    <div className="app-shell">
      <SiteHeader />
      <FloatingDonateButton />
      <FloatingSocialBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/our-projects" element={<ProjectsPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/founders" element={<FoundersPage />} />
          <Route path="/members" element={<FoundersPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/doctors-meet" element={<DoctorsMeetPage />} />
          <Route path="/mhf-doctors-meet" element={<DoctorsMeetPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donete" element={<DonatePage />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Shell />
    </BrowserRouter>
  )
}

export default App
