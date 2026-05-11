import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Développeur Web Freelance Île-de-France | srwdev</title>
        <meta name="description" content="Création de sites web sur mesure, SEO technique et boutiques en ligne. Développeur web freelance basé à Puteaux, disponible partout en France. Devis gratuit." />
        <meta property="og:title" content="Développeur Web Freelance Île-de-France | srw.dev" />
        <meta property="og:description" content="Création de sites web sur mesure, SEO technique et boutiques en ligne. Développeur web freelance basé à Puteaux, disponible partout en France. Devis gratuit." />
        <link rel="canonical" href="https://srwdev.fr/" />
      </Helmet>
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
