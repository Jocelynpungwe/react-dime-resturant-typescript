import About from '../componants/about/About'
import Contact from '../componants/contact/Contact'
import Footer from '../componants/footer/Footer'
import Hero from '../componants/hero/Hero'
import Reservaction from '../componants/reservation/Reservaction'
import Service from '../componants/service/Service'

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Contact />
      <Reservaction />
      <Footer />
    </>
  )
}

export default HomePage
