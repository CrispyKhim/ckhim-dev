import Intro from '../content/Intro/Intro'
import About from '../content/About/About'
import Projects from '../content/Projects/Projects'
import Contacts from '../content/Contacts/Contacts'
import Footer from '../content/Footer/Footer'

export default function HomePage() {
  return (
    <div className='max-w-screen mx-auto'>
      <Intro />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}