import Home from '../content/Home/Home'
import About from '../content/About/About'
import Projects from '../content/Projects/Projects'
import Contacts from '../content/Contacts/Contacts'

export default function HomePage() {
  return (
    <div className='max-w-screen mx-auto'>
      <Home />
      <About />
      <Projects />
      <Contacts />

      {/* CV */}
      <iframe
        src='public/Ckhim - CV.pdf'
        title='CV'
        width='100%'
        height='100%'
        className='mx-auto'
      />

    </div>
  )
}