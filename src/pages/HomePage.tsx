import About from '../componants/about/About'
import Contact from '../componants/contact/Contact'
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
    </>
  )
}

export default HomePage
