import './App.css'
import About from './content/About/About'
import Experience from './content/Experience/Experience'
import Projects from './content/Projects/Projects'
import Achievements from './content/Achievements/Achievements'
import Tech from './content/Tech/Tech'
import Contacts from './content/Contacts/Contacts'

function App() {
  return (
    <>
    <h1>This is the App page</h1>

      {/* MAIN CONTENT */}
      <main>
        {/* Navbar */}
        
        {/* About */}
        <About />
        {/* Experience */}
        <Experience />
        {/* Projects */}
        <Projects />
        {/* Achievements */}
        <Achievements />
        {/* Tech stack */}
        <Tech />
        {/* Contacts */}
        <Contacts />
      </main>

    </>
  )
}

export default App
