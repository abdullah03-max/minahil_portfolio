import { useSmoothScroll } from './hooks/useSmoothScroll'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import PageLoader from './components/PageLoader'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <PageLoader />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
