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
    tag: 'Boutique en ligne',
    title: 're:wear — mode de seconde main',
    desc: "Conception et développement d'une boutique e-commerce dédiée à la mode de seconde main haut de gamme. Expérience utilisateur optimisée, catalogue produits, gestion des commandes, paiement sécurisé et administration simplifiée pour les vendeurs.",
    metrics: [
      { val: '0.8s', label: 'Première image visible' },
      { val: '100/100', label: 'Score SEO Google' },
    ],
    image: '/images/cases/rewear.png',
    imageAlt: 'Capture d’écran de la boutique en ligne re:wear',
    url: '#',
    tech: ['WordPress', 'WooCommerce'],
  },
  {
    tag: 'Site vitrine',
    title: 'Urban Move Studio — École de danse',
    desc: "Création d'un site vitrine pour une école de hip-hop et urban dance à Puteaux. Design sombre et dynamique, galerie photos, présentation des cours et formulaire d'inscription.",
    metrics: [
      { val: '4 jours', label: 'Délai de livraison' },
      { val: '100/100', label: 'Score mobile Lighthouse' },
    ],
    image: '/images/cases/sofia-marchand.png',
    imageAlt: "Capture d'écran du site Urban Move Studio",
    url: 'https://urban-move-studio.vercel.app/',
    tech: ['React', 'Jotform'],
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
