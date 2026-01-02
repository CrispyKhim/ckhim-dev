import { Link } from 'react-router-dom'
import '../App.css'
import MyButton from '../components/Button/Button'

function AboutPage() {
  return (
    <>
      <h1>Christopher Khim</h1>
      <MyButton text='Hi' />
      <Link to="/">Back</Link>
    </>
  )
}

export default AboutPage
