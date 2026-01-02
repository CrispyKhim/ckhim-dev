import { Link } from 'react-router-dom'
import '../App.css'
import MyButton from '../components/Button/Button'

function HomePage() {
  return (
    <>
      <p>Portfolio website in the making!</p>
      <MyButton text='Hi' />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </>
  )
}

export default HomePage
