import Reveal from '../ui/Reveal'

const CASES = [
  {
    tag: 'Performance',
    title: "Optimisation performance d’une PME",
    desc: "Audit complet, compression d’images, lazy loading, suppression des scripts inutiles. Le site est passé de 6s à 1.8s de chargement.",
    metrics: [
      { val: '6s → 1.8s', label: 'Temps de chargement' },
      { val: '+25', label: 'Score Lighthouse' },
    ],
  },
  {
    tag: 'Refonte React',
    title: "Refonte d’une interface legacy en React",
    desc: "Migration d’une interface jQuery monolithique vers React modulaire. Meilleure UX, code maintenable, déploiements plus rapides.",
    metrics: [
      { val: '−60%', label: 'Dette technique' },
      { val: '↑ UX', label: 'Satisfaction utilisateurs' },
    ],
  },
  {
    tag: 'Design System',
    title: 'Design System multi-sites pour grand groupe',
    desc: 'Bibliothèque de composants partagée entre 8 sites. Cohérence visuelle assurée, dette technique réduite, onboarding facilité.',
    metrics: [
      { val: '×8', label: 'Sites unifiés' },
      { val: '−40%', label: 'Temps de dev UI' },
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
          {CASES.map(({ tag, title, desc, metrics }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="case-card">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
