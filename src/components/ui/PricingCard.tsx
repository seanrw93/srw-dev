import { BsCheckCircleFill } from 'react-icons/bs'

interface PricingCardProps {
  name: string
  price: string
  note: string
  features: string[]
  cta: string
  popular?: boolean
}

export default function PricingCard({ name, price, note, features, cta, popular = false }: PricingCardProps) {
  return (
    <div className={`pricing-card${popular ? ' pricing-card--popular' : ''}`}>
      {popular && (
        <div className="popular-badge">
          <span aria-hidden="true">⭐</span> Le plus populaire
        </div>
      )}
      <h3 className="pricing-name">{name}</h3>
      <div className="pricing-price">{price}</div>
      <div className="pricing-note">{note}</div>
      <ul className="pricing-features">
        {features.map(f => (
          <li key={f}>
            <BsCheckCircleFill className="pricing-check" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <a href="#contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
        {cta}
      </a>
    </div>
  )
}
