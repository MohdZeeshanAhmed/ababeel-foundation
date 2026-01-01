import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import HealthCard from '../components/HealthCard'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <HealthCard />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}
