import About from '../content/About/About'
import Experience from '../content/Experience/Experience'
import Projects from '../content/Projects/Projects'
import Tech from '../content/Tech/Tech'
import Contacts from '../content/Contacts/Contacts'

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <About />
      <Experience />
      <Projects />
      <Tech />
      <Contacts />
    </>
  )
}