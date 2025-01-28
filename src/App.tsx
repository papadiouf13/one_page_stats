import Services from './components/Services'
import ContactSection from './components/Contact-section'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Offre from './components/Offre'
import Client from './components/Client'
import MissionEquipe from './components/breukh'

function App() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden px-4 md:px-0">
      <Header />
      <Hero />
      <Offre />
      <Services />
      <Client />
      <MissionEquipe />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
