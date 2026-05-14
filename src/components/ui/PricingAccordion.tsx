import { useState, useRef, useEffect } from 'react'
import ToggleIcon from './ToggleIcon'

interface PricingOption {
  label: string
  price: string
  recommended?: boolean
}

interface PricingGroup {
  heading: string
  items: PricingOption[]
}

const GROUPS: PricingGroup[] = [
  {
    heading: 'Contenu',
    items: [
      { label: 'Rédaction des textes de votre site', price: 'dès 150€' },
      { label: 'Mise en place Google Analytics', price: '80€' },
    ],
  },
  {
    heading: 'Conformité légale',
    items: [
      { label: 'Mentions légales & politique de confidentialité (RGPD)', price: '120€' },
    ],
  },
  {
    heading: 'Formation',
    items: [
      { label: 'Session 1h visio pour gérer votre site en autonomie', price: '90€' },
    ],
  },
  {
    heading: 'Suivi mensuel',
    items: [
      { label: 'Maintenance & mises à jour', price: '49€/mois' },
      { label: 'Hébergement inclus', price: '39€/mois' },
      { label: 'Rapport de visibilité Google mensuel', price: '69€/mois' },
      { label: 'Pack complet (maintenance + hébergement + rapport)', price: '129€/mois', recommended: true },
    ],
  },
]

export default function PricingAccordion() {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    el.style.maxHeight = open ? el.scrollHeight + 'px' : '0'
  }, [open])

  return (
    <div className="pricing-extras">
      <button
        className="pricing-extras__toggle"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span>Options et services complémentaires</span>
        <ToggleIcon open={open} />
      </button>

      <div ref={contentRef} className="pricing-extras__body">
        <div className="pricing-extras__inner">
          {GROUPS.map(group => (
            <div key={group.heading} className="pricing-extras__group">
              <div className="pricing-extras__heading">{group.heading}</div>
              {group.items.map(item => (
                <div key={item.label} className="pricing-extras__row">
                  <span className="pricing-extras__label">
                    {item.label}
                    {item.recommended && (
                      <span className="pricing-extras__badge">Recommandé</span>
                    )}
                  </span>
                  <span className="pricing-extras__price">{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
