import PricingAccordion from '../ui/PricingAccordion'
import PricingCard from '../ui/PricingCard'
import Reveal from '../ui/Reveal'

const PLANS = [
  {
    name: 'Site Vitrine',
    price: 'dès 499€',
    note: 'Pour les artisans, freelances et petits commerces qui veulent exister en ligne',
    features: [
      '1 à 5 pages (accueil, services, contact…)',
      'Design moderne adapté mobile et ordinateur',
      'Formulaire de contact directement dans votre boîte mail',
      'Visible sur Google dès la mise en ligne',
      'Livraison en 7 jours',
    ],
    cta: 'Démarrer',
    popular: false,
  },
  {
    name: 'Site Professionnel',
    price: 'dès 849€',
    note: 'Pour les petites entreprises qui veulent attirer plus de clients en ligne',
    features: [
      "Jusqu'à 10 pages personnalisées",
      'Design sur-mesure à votre image',
      'Chargement rapide pour ne perdre aucun visiteur',
      'Bien positionné sur Google (SEO inclus)',
      'Facile à mettre à jour vous-même',
      'Livraison en 14 jours',
    ],
    cta: 'Travailler avec moi',
    popular: true,
  },
  {
    name: 'Refonte & Optimisation',
    price: 'dès 299€',
    note: 'Votre site existe déjà mais il est lent, vieillissant ou invisible sur Google',
    features: [
      'Diagnostic complet de votre site actuel',
      'Site rendu 2x plus rapide',
      'Meilleure visibilité sur Google',
      'Rapport clair avec les problèmes corrigés',
      'Livraison en 5 jours',
    ],
    cta: 'Améliorer mon site',
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
          <PricingAccordion />
        </Reveal>

      </div>
    </section>
  )
}
