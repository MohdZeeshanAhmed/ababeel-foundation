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
  return (
    <div className="app-shell">
      <SiteHeader />
        <FloatingDonateButton />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/doctors-meet" element={<DoctorsMeetPage />} />
          <Route path="/mhf-doctors-meet" element={<DoctorsMeetPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donete"element={<DonatePage />} />
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
