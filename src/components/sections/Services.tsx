import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'

const SERVICES = [
  {
    title: 'Création de sites web',
    desc: "Vous avez besoin d'un site qui inspire confiance dès le premier regard. Je conçois et développe des sites sur mesure, rapides, mobiles, et pensés pour transformer vos visiteurs en clients.",
    link: 'Comment je travaille',
    route: '/services/creation-site-web',
    img: '/images/services/creation.webp',
    alt: "Écran d'ordinateur affichant un site web moderne en cours de conception",
  },
  {
    title: 'Boutique en ligne',
    desc: "Vous voulez vendre en ligne sans vous perdre dans la technique. Je construis des boutiques simples à gérer, rapides à charger, et conçues pour vendre. Pas juste pour exister.",
    link: 'Lancer ma boutique',
    route: '/services/boutique-en-ligne',
    img: '/images/services/ecommerce.webp',
    alt: "Boutique en ligne avec produits et panier d'achat",
  },
  {
    title: 'Performance & vitesse',
    desc: "Un site lent fait fuir vos visiteurs avant même qu'ils aient lu une ligne. J'identifie ce qui ralentit votre site et je le corrige, pour une expérience fluide et un meilleur positionnement Google.",
    link: 'Pourquoi la vitesse compte',
    route: '/services/performance-vitesse',
    img: '/images/services/performance.webp',
    alt: 'Tableau de bord Lighthouse montrant un score de performance élevé',
  },
  {
    title: 'SEO technique',
    desc: "Être invisible sur Google, c'est comme ne pas exister. Je m'occupe de la structure, du balisage et de l'indexation pour que votre site ait une vraie chance d'être trouvé par vos clients.",
    link: "Ce que j'optimise",
    route: '/services/seo-technique',
    img: '/images/services/seo.webp',
    alt: 'Résultats de recherche Google avec un site bien positionné',
  },
  {
    title: 'Maintenance & support',
    desc: "Une fois votre site en ligne, je reste disponible. Mises à jour, corrections, nouvelles pages : vous avez un interlocuteur direct, sans ticket d'agence ni délai à rallonge.",
    link: 'Comment fonctionne le support',
    route: '/services/maintenance-support',
    img: '/images/services/support.webp',
    alt: 'Développeur apportant un support technique à un client',
  },
]

export default function Services() {
  return (
    <section id="services" className="section section--dark">
      <div className="section-inner">
        <span className="section-label">Ce que je fais</span>
        <Reveal>
          <h2 className="section-title">Ce que je fais pour vous</h2>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map(({ title, desc, link, route, img, alt }, i) => (
            <Reveal key={title} delay={i * 55}>
              <Link to={route} className="service-card">
                <div className="service-card-bg">
                  <img
                    src={img}
                    alt={alt}
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-title">{title}</h3>
                  <p className="service-desc">{desc}</p>
                  <span className="service-link">{link}</span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={SERVICES.length * 55}>
            <a href="#contact" className="service-card service-card--cta">
              <p className="service-cta-label">Un projet en tête ?</p>
              <p className="service-cta-desc">Décrivez-moi votre besoin en quelques lignes. Je vous réponds sous 24h avec un avis honnête, sans engagement.</p>
              <span className="service-cta-btn">Parlons-en</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
