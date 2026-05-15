import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

interface Metric {
  val: string
  label: string
}

export interface CaseCardProps {
  tag: string
  title: string
  desc: string
  metrics: Metric[]
  image?: string
  imageAlt?: string
  url?: string
  tech?: string[]
}

export default function CaseCard({ tag, title, desc, metrics, image, imageAlt, url, tech }: CaseCardProps) {
  if (image) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="case-card case-card--visual"
      >
        <img src={image} alt={imageAlt} className="case-img" loading="lazy" />
        <div className="case-overlay" />
        <div className="case-external-icon" aria-hidden="true">
          <HiArrowTopRightOnSquare />
        </div>
        <div className="case-static">
          <p className="case-tag">{tag}</p>
          <h3 className="case-title">{title}</h3>
          {tech && (
            <div className="case-tech">
              {tech.map(t => <span key={t} className="case-tech-pill">{t}</span>)}
            </div>
          )}
        </div>
        <div className="case-hover">
          <p className="case-tag">{tag}</p>
          <h3 className="case-title">{title}</h3>
          <p className="case-desc">{desc}</p>
          {tech && (
            <div className="case-tech">
              {tech.map(t => <span key={t} className="case-tech-pill case-tech-pill--light">{t}</span>)}
            </div>
          )}
          <div className="case-metrics">
            {metrics.map(({ val, label }) => (
              <div key={label} className="case-metric">
                <div className="case-metric-val">{val}</div>
                <div className="case-metric-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </a>
    )
  }

  return (
    <div className="case-card">
      <div className="case-body">
        <p className="case-tag">{tag}</p>
        <h3 className="case-title">{title}</h3>
        <p className="case-desc">{desc}</p>
        <div className="case-metrics">
          {metrics.map(({ val, label }) => (
            <div key={label} className="case-metric">
              <div className="case-metric-val">{val}</div>
              <div className="case-metric-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
