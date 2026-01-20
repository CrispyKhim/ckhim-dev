import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <div 
        className={`transition-opacity duration-700 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Outlet />
      </div>
    </>
  )
}