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
        <title>Création de Sites Web pour Petites Entreprises | srw-dev — Puteaux, Paris</title>
        <meta name="description" content="Vous avez besoin d'un site web professionnel pour votre petite entreprise ? Je crée des sites rapides, modernes et faciles à gérer — vitrine ou boutique en ligne. Basé à Puteaux, disponible partout en France." />
        <meta property="og:title" content="srw-dev — Création de Sites Web pour Petites Entreprises" />
        <meta property="og:description" content="Site vitrine ou boutique en ligne — je crée votre présence web professionnelle, rapide et facile à gérer. Basé à Puteaux, disponible partout en France." />
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
