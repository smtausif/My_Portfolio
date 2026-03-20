import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx' // Added this
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import ProjectPage from './components/ProjectPage.jsx'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <Experience /> {/* Added this between Projects and Skills */}
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Dynamic single project page */}
        <Route path="/project/:slug" element={<ProjectPage />} />

      </Routes>
    </>
  )
}