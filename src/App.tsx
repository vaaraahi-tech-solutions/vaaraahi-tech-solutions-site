import './index.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Process from './components/sections/Process'
import Technologies from './components/sections/Technologies'
import Team from './components/sections/Team'
import Blog from './components/sections/Blog'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Partners from './components/sections/Partners'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Stats />
        <Services />
        <Testimonials />
        <About />
        <WhyChooseUs />
        <Process />
        <Technologies />
        <Team />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
