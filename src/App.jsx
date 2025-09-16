import Navbar   from './components/Navbar.jsx'
import Hero     from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills   from './components/Skills.jsx'
import Contact  from './components/Contact.jsx'
import Footer   from './components/Footer.jsx'

export default function App(){
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}