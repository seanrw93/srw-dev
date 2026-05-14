import Reveal from '../ui/Reveal'

export default function Hero() {
  return (
    <div className="hero-outer">
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />
      <div className="hero">
        <Reveal>
          <span className="hero-eyebrow">
            Disponible pour missions · Île-de-France & Remote
          </span>
          <h1>
            Votre présence en ligne,<br />
            <em>sans complications.</em>
          </h1>
          <p className="hero-subtitle">
            Sites vitrines et boutiques en ligne pour petites entreprises. Rapide, professionnel, facile à gérer.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              Travailler avec moi
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
