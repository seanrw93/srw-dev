import PricingCard from '../ui/PricingCard'
import Reveal from '../ui/Reveal'

const PLANS = [
  {
    name: 'Site Starter',
    price: 'dès 350€',
    note: 'Idéal pour démarrer en ligne rapidement',
    features: [
      'Site one-page ou 3–5 pages',
      'Design responsive mobile-first',
      'Formulaire de contact intégré',
      'SEO de base',
      'Livraison sous 7 jours',
    ],
    cta: 'Démarrer',
    popular: false,
  },
  {
    name: 'Site Professionnel',
    price: 'dès 750€',
    note: 'Pour les PME qui veulent performer',
    features: [
      "Jusqu'à 10 pages",
      'Design sur-mesure',
      'Performance & Core Web Vitals',
      'SEO technique complet',
      'Accessibilité WCAG AA',
      'Livraison sous 14 jours',
    ],
    cta: 'Travailler avec moi',
    popular: true,
  },
  {
    name: 'Performance Boost',
    price: '250€',
    note: 'Audit + optimisation de votre site existant',
    features: [
      'Audit Lighthouse complet',
      'Optimisation images & ressources',
      'Amélioration Core Web Vitals',
      'Rapport détaillé remis',
      'Livraison sous 5 jours',
    ],
    cta: 'Booster mon site',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="section section--card">
      <div className="section-inner">
        <span className="section-label">Tarifs</span>
        <Reveal>
          <h2 className="section-title">Des offres claires, sans surprise</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="section-sub">
            Chaque projet est unique. Ces tarifs sont des points de départ, contactez-moi
            pour un devis personnalisé.
          </p>
        </Reveal>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 70}>
              <PricingCard {...plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={210}>
          <div className="pricing-footnote">
            Chaque site livré peut être accompagné d'un suivi mensuel.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
