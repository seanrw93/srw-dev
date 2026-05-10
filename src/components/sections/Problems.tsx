import { useEffect, useRef, useState } from 'react'

const PROBLEMS = [
  { title: 'Site lent' },
  { title: 'Mauvais référencement SEO' },
  { title: 'Site non responsive' },
  { title: 'Design dépassé' },
  { title: 'Mauvaise accessibilité' },
  { title: 'UX confuse' },
  { title: 'Ou tout simplement... aucun site ?' },
]

function ProblemItem({ title, index }: { title: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const fromRight = index % 2 !== 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="problem-item"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : `translateX(${fromRight ? '60px' : '-60px'})`,
        transition: visible ? 'opacity 0.4s ease-out, transform 0.4s ease-out' : 'none',
        textAlign: fromRight ? 'right' : 'left',
      }}
    >
      <div className="problem-item-title">{title}</div>
      <div className={`problem-item-line${fromRight ? ' problem-item-line--right' : ''}`} />
    </div>
  )
}

export default function Problems() {
  return (
    <section id="problems" className="section section--card">
      <div className="section-inner">
        <span className="section-label">Problèmes fréquents</span>
        <h2 className="section-title">
          Vous vous reconnaissez dans l&apos;un de ces problèmes&nbsp;?
        </h2>
        <div className="problems-sequence">
          {PROBLEMS.map(({ title }, i) => (
            <ProblemItem key={title} title={title} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
