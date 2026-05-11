import { useState, useRef, useEffect } from 'react'
import TechOrbit from './TechOrbit'
import { Accordion, AccordionItem } from './Accordion'
import Reveal from './Reveal'

export const TECHS = [
  { name: 'React',        logo: '/images/tech/react.svg',      alt: 'React logo',        desc: 'Idéal pour les applications web complexes et les tableaux de bord interactifs. Les interfaces construites en React sont rapides, fluides, et évolutives, parfaites si votre projet doit grandir.' },
  { name: 'Next.js',      logo: '/images/tech/nextjs.svg',     alt: 'Next.js logo',      desc: 'Le choix privilégié pour les sites vitrines et e-commerce qui veulent performer sur Google. Le rendu côté serveur améliore le référencement naturel et réduit les temps de chargement perçus.' },
  { name: 'TypeScript',   logo: '/images/tech/typescript.svg', alt: 'TypeScript logo',   desc: 'Un code plus fiable, moins de bugs en production. TypeScript détecte les erreurs avant qu\'elles n\'atteignent vos utilisateurs. Un investissement invisible qui se ressent dans la stabilité du produit.' },
  { name: 'Tailwind CSS', logo: '/images/tech/tailwind.svg',   alt: 'Tailwind CSS logo', desc: 'Des interfaces soignées et cohérentes, développées rapidement. Chaque détail visuel (espacement, couleur, typographie) est maîtrisé avec précision, sans compromis sur la vitesse de livraison.' },
  { name: 'Figma',        logo: '/images/tech/figma.svg',      alt: 'Figma logo',        desc: 'Avant d\'écrire une ligne de code, vous voyez exactement ce que vous allez recevoir. Les maquettes interactives permettent de valider le design ensemble et d\'éviter les allers-retours coûteux.' },
  { name: 'WordPress',    logo: '/images/tech/wordpress.svg',  alt: 'WordPress logo',    desc: 'La solution idéale si vous voulez gérer votre contenu en autonomie. Publiez des articles, mettez à jour vos pages, et gérez votre boutique WooCommerce ou Shopify sans toucher au code.' },
  { name: 'Vercel',       logo: '/images/tech/vercel.svg',     alt: 'Vercel logo',       desc: 'Votre site en ligne en quelques secondes, partout dans le monde. Vercel assure des temps de chargement ultra-rapides grâce à un réseau de diffusion global, avec déploiements automatiques à chaque mise à jour.' },
  { name: 'GitHub',       logo: '/images/tech/github.svg',     alt: 'GitHub logo',       desc: 'Votre projet vit sur GitHub : vous pouvez suivre l\'avancement en temps réel, voir chaque modification apportée, et collaborer sans friction. Rien n\'est jamais perdu, tout est traçable.' },
  { name: 'Express',      logo: '/images/tech/express.svg',    alt: 'Express logo',      desc: 'La colonne vertébrale des projets nécessitant une logique serveur sur mesure : formulaires avancés, authentification, connexion à une base de données, ou intégration d\'APIs tierces.' },
  { name: 'HTML',         logo: '/images/tech/html.svg',       alt: 'HTML logo',         desc: 'La fondation de chaque page web. Un HTML bien structuré améliore l\'accessibilité pour tous les utilisateurs et envoie les bons signaux aux moteurs de recherche pour un meilleur référencement.' },
  { name: 'CSS',          logo: '/images/tech/css.svg',        alt: 'CSS logo',          desc: 'Ce qui transforme une structure brute en expérience visuelle. Animations fluides, mise en page responsive, identité graphique fidèle : tout ce que l\'utilisateur voit et ressent passe par le CSS.' },
]

const MOBILE_ORDER = ['Figma', 'WordPress', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'HTML', 'CSS', 'Vercel', 'GitHub', 'Express']
const TECHS_MOBILE = MOBILE_ORDER.map(name => TECHS.find(t => t.name === name)!)

// Duration of the flex collapse CSS transition (must match CSS)
const COLLAPSE_MS = 550

export default function TechSection() {
  // selected: which pill is faded/chosen (immediate on click)
  const [selected, setSelected] = useState<number | null>(null)
  // expanded: triggers logo grow (fires after collapse animation finishes)
  const [expanded, setExpanded] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const lastTechRef = useRef<typeof TECHS[0] | null>(null)
  if (selected !== null) lastTechRef.current = TECHS[selected]
  const displayTech = lastTechRef.current

  const handleSelect = (i: number) => {
    setSelected(i)
    timerRef.current = setTimeout(() => setExpanded(i), COLLAPSE_MS)
  }

  const handleClose = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setExpanded(null)
    // Give logo time to spring back to scale 1 before re-enabling movement
    timerRef.current = setTimeout(() => setSelected(null), 200)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  return (
    <Reveal>
    <div className="tech-section">
      <h2 className="tech-section-title">Technologies que j'utilise</h2>
      <div className="tech-section-orbit">
        <div className={`tech-orbit-layout${selected !== null ? ' tech-orbit-layout--open' : ''}`}>
          <div className="tech-orbit-wrap">
            <TechOrbit selected={selected} expanded={expanded} onSelect={handleSelect} />
          </div>
          <div
            className={`tech-detail${selected !== null ? ' tech-detail--visible' : ''}`}
            aria-hidden={selected === null}
          >
            {displayTech && (
              <>
                <button
                  className="tech-detail-close"
                  aria-label="Fermer"
                  onClick={handleClose}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <h3 className="tech-detail-name">{displayTech.name}</h3>
                <p className="tech-detail-desc">{displayTech.desc}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="tech-section-accordion">
        <Accordion>
          {TECHS_MOBILE.map(({ name, logo, alt, desc }) => (
            <AccordionItem
              key={name}
              question={
                <span className="tech-accordion-trigger">
                  <img src={logo} alt={alt} width={22} height={22} className="tech-accordion-logo" />
                  {name}
                </span>
              }
            >
              <p>{desc}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    </Reveal>
  )
}
