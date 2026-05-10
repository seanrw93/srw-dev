import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Problems from '../components/sections/Problems'
import Services from '../components/sections/Services'
import Pricing from '../components/sections/Pricing'
import About from '../components/sections/About'
import Cases from '../components/sections/Cases'
import Contact from '../components/sections/Contact'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => clearTimeout(timer)
  }, [hash])

  return (
    <main>
      <Hero />
      <Problems />
      <Services />
      <Pricing />
      <About />
      <Cases />
      <Contact />
    </main>
  )
}
