import Reveal from '../ui/Reveal'

const GRID_IMAGES = [
  '/images/banner/pexels-anete-lusina-6331237.webp',
  '/images/banner/pexels-arina-krasnikova-5951328.webp',
  '/images/banner/pexels-imin-technology-276315592-12935042.webp',
  '/images/banner/pexels-kampus-6684764.webp',
  '/images/banner/pexels-mikhail-nilov-6969962.webp',
  '/images/banner/pexels-tim-douglas-6205525.webp',
]

export default function Hero() {
  return (
    <div className="hero-outer">
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />
      <div className="hero-layout">
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

        <div className="hero-grid" aria-hidden="true">
          <div className="hero-grid-col hero-grid-col--up">
            <div className="hero-grid-item"><img src={GRID_IMAGES[0]} alt="" loading="eager" /></div>
            <div className="hero-grid-item"><img src={GRID_IMAGES[3]} alt="" loading="eager" /></div>
          </div>
          <div className="hero-grid-col hero-grid-col--down">
            <div className="hero-grid-item"><img src={GRID_IMAGES[1]} alt="" loading="eager" /></div>
            <div className="hero-grid-item"><img src={GRID_IMAGES[4]} alt="" loading="eager" /></div>
          </div>
          <div className="hero-grid-col hero-grid-col--up">
            <div className="hero-grid-item"><img src={GRID_IMAGES[2]} alt="" loading="eager" /></div>
            <div className="hero-grid-item"><img src={GRID_IMAGES[5]} alt="" loading="eager" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
