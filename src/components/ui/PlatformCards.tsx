import Reveal from './Reveal'

interface Platform {
  name: string
  benefit: string
  logo: string
  badge?: boolean
}

const PLATFORMS: Platform[] = [
  { name: 'Shopify',     logo: '/images/tech/shopify.svg',     benefit: 'La solution clé en main, idéale pour démarrer vite et vendre partout.' },
  { name: 'PrestaShop',  logo: '/images/tech/prestashop.svg',  benefit: 'Open source et flexible, parfaite pour des catalogues complexes.', badge: true },
  { name: 'WooCommerce', logo: '/images/tech/woocommerce.svg', benefit: 'Intégré à WordPress, pour gérer boutique et contenu au même endroit.' },
]

function PlatformCard({ name, benefit, logo, badge }: Platform) {
  return (
    <div className="platform-card">
      {badge && <span className="platform-badge">Recommandé</span>}
      <img src={logo} alt="" aria-hidden="true" className="platform-card-logo" />
      <h3 className="platform-card-name">{name}</h3>
      <p className="platform-card-benefit">{benefit}</p>
    </div>
  )
}

export default function PlatformCards() {
  return (
    <div className="platform-section">
      <h2 className="platform-section-title">Les plateformes que j'utilise</h2>
      <div className="platform-cards">
        {PLATFORMS.map(({ name, benefit, logo, badge }, i) => (
          <Reveal key={name} delay={i * 80} threshold={0.5}>
            <PlatformCard name={name} benefit={benefit} logo={logo} badge={badge} />
          </Reveal>
        ))}
      </div>
      <a href="#contact" className="about-cta" style={{ marginTop: '24px' }}>
        Vous ne savez pas laquelle choisir ? Je vous conseille selon votre budget, votre catalogue, et vos objectifs. <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}
