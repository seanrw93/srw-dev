import CaseCard, { type CaseCardProps } from '../ui/CaseCard'
import Reveal from '../ui/Reveal'

const CASES: CaseCardProps[] = [
  {
    tag: 'Boutique en ligne',
    title: 'Spiral Sounds — Disquaire en ligne',
    desc: "Création d'une boutique e-commerce complète pour un disquaire spécialisé vinyle. Catalogue produits, panier, paiement sécurisé et interface d'administration sur mesure.",
    metrics: [
      { val: '0.8s', label: 'Première image visible' },
      { val: '100/100', label: 'Score SEO Google' },
    ],
    image: '/images/cases/spiral-sounds.webp',
    imageAlt: 'Capture d\'écran de la boutique Spiral Sounds',
    url: 'https://spiralsounds.shop',
    tech: ['JavaScript', 'Express', 'Stripe'],
  },
  {
    tag: 'Performance',
    title: "Optimisation performance d'une PME",
    desc: "Audit complet, compression d'images, lazy loading, suppression des scripts inutiles. Le site est passé de 6s à 1.8s de chargement.",
    metrics: [
      { val: '6s → 1.8s', label: 'Temps de chargement' },
      { val: '+25pts', label: 'Score Google' },
    ],
  },
  {
    tag: 'Refonte',
    title: "Refonte complète d'un site vieillissant",
    desc: "Modernisation d'un site obsolète, design sur-mesure, contenu revu pour convertir. Résultat visible dès la mise en ligne.",
    metrics: [
      { val: '−60%', label: 'Taux de rebond' },
      { val: '×2', label: 'Demandes de contact' },
    ],
  },
]

export default function Cases() {
  return (
    <section id="cases" className="section section--card">
      <div className="section-inner">
        <span className="section-label">Études de cas</span>
        <Reveal>
          <h2 className="section-title">Des résultats concrets, pas des promesses</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="section-sub">Voici quelques exemples de ce que j'ai livré pour des clients réels.</p>
        </Reveal>
        <div className="cases-grid">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <CaseCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
