// src/App.tsx
import Services from './components/Services'
import Industries from './components/Industries'
import Statistics from './components/Statistics'
import CaseStudies from './components/Case-studies'
import Reviews from './components/Reviews'
import Solution from './components/Solution'
import ContactSection from './components/Contact-section'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Statistics />
      <CaseStudies />
      <Reviews />
      <Solution />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
