import Reveal from '../ui/Reveal'

const STATS = [
  { num: '+25pts', label: 'Performance gagnée en moyenne par site optimisé' },
  { num: '1.8s', label: 'Temps de chargement moyen livré' },
  { num: '100%', label: 'Projets livrés dans les délais' },
  { num: '24h', label: 'Délai de réponse garanti' },
]

const PILLS = ['React', 'Next.js', 'TypeScript', 'Lighthouse', 'WCAG AA', 'Figma']

const BODY = [
  "Avant de coder, j'enseignais l'anglais. Ce parcours m'a appris quelque chose que beaucoup de développeurs n'ont pas : écouter, expliquer clairement, et adapter mon langage à mon interlocuteur, pas l'inverse.",
  "Quand vous me parlez de votre projet, vous n'avez pas besoin de connaître les termes techniques. Mon travail c'est de comprendre ce que vous voulez accomplir, et de trouver la meilleure façon de le construire.",
  "Avant de passer au freelance, j'ai travaillé sur des projets web à grande échelle pour un grand groupe français, avec des exigences fortes en performance, en accessibilité, et en cohérence sur des dizaines de sites simultanément. Ce niveau d'exigence, je l'applique aujourd'hui à chaque projet, qu'il s'agisse d'un site vitrine ou d'une boutique en ligne.",
  "Travailler avec moi, c'est avoir un interlocuteur unique qui répond à vos messages, respecte vos délais, et ne disparaît pas une fois le site mis en ligne. Pas de ticket d'agence, pas de délai à rallonge, pas de jargon inutile. Juste quelqu'un qui prend votre projet au sérieux du début à la fin.",
  "Si vous avez une idée, même floue, je suis là pour vous aider à la construire.",
]

export default function About() {
  return (
    <section id="about" className="section section--dark">
      <div className="section-inner">
        <div className="about-inner">

          {/* Left */}
          <Reveal>
            <div>
              <span className="section-label">À propos</span>
              <h2 className="section-title">
                Vous méritez un développeur qui vous comprend, pas seulement votre code.
              </h2>
              {BODY.map((para, i) => (
                <p key={i} className="about-body">{para}</p>
              ))}
              <a href="#contact" className="about-cta">
                Parlons de votre projet <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={30} className="about-card-wrap">
            <div className="about-card">
              <div className="about-card-name">Sean Roennau-Wergen</div>
              <div className="about-card-role">Développeur Web Freelance & Expert Optimisation Web</div>
              <div className="pills">
                {PILLS.map(p => <span key={p} className="pill">{p}</span>)}
              </div>
              <div className="about-stat-section-title">Mes engagements</div>
              <div className="about-stat-grid">
                {STATS.map(({ num, label }) => (
                  <div key={label} className="about-stat">
                    <div className="about-stat-num">{num}</div>
                    <div className="about-stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
