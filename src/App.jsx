import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Interests from './components/Interests.jsx'
import Contact from './components/Contact.jsx'
import { LanguageProvider } from './components/contexts/LanguageContext.jsx'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <LanguageProvider>
        <Nav />
        <main>
          <Hero />
          <Stats />
          <Experience />
          <Projects />
          <Achievements />
          <Interests />
          <Contact />
        </main>
      </LanguageProvider>
    </div>
  )
}
