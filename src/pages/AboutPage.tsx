import { Link } from 'react-router-dom'
import '../App.css'

function AboutPage() {
  return (
    <>
      <p>About Page</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </>
  )
}

export default AboutPage
