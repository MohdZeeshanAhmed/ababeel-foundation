import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  )
}
