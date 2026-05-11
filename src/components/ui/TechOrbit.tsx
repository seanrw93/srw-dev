import { useEffect, useRef, useState } from 'react'
import { TECHS } from './TechSection'

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const SPRING_K = 0.18
const SPRING_DAMP = 0.72

interface PillState {
  x: number; y: number; vx: number; vy: number
  paused: boolean; w: number; h: number
  scale: number; scaleV: number; targetScale: number
}

interface TechOrbitProps {
  selected: number | null
  expanded: number | null
  onSelect: (index: number) => void
}

export default function TechOrbit({ selected, expanded, onSelect }: TechOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pillRefs = useRef<(HTMLDivElement | null)[]>([])
  const state = useRef<PillState[]>(TECHS.map(() => ({
    x: 0, y: 0, vx: 0, vy: 0, paused: false, w: 0, h: 0,
    scale: 1, scaleV: 0, targetScale: 1,
  })))
  const rafRef = useRef<number>(0)
  const selectedRef = useRef<number | null>(null)
  const [visible, setVisible] = useState<boolean[]>(TECHS.map(() => false))

  // When selected changes: pause/fade others, stop the chosen pill
  useEffect(() => {
    selectedRef.current = selected
    if (selected !== null) {
      state.current.forEach((s) => { s.paused = true })
    } else {
      state.current.forEach((s) => {
        s.targetScale = 1
        s.paused = false
      })
    }
  }, [selected])

  // When expanded fires (after collapse): grow the logo to fill the shrunken container
  useEffect(() => {
    const container = containerRef.current
    if (!container || expanded === null) return

    const cw = container.clientWidth
    const ch = container.clientHeight
    const s = state.current[expanded]

    s.x = cw / 2 - s.w / 2
    s.y = ch / 2 - s.h / 2

    const imgSize = 100
    const maxFit = Math.min(cw, ch) * 0.75
    s.targetScale = maxFit / imgSize
  }, [expanded])

  // When expanded resets to null (close): spring logo back
  useEffect(() => {
    if (expanded === null && selected !== null) {
      state.current[selected].targetScale = 1
    }
  }, [expanded, selected])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const cw = container.clientWidth
    const ch = container.clientHeight

    pillRefs.current.forEach((el, i) => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      state.current[i].w = rect.width
      state.current[i].h = rect.height
    })

    state.current.forEach((s) => {
      s.x = rand(0, Math.max(0, cw - s.w))
      s.y = rand(0, Math.max(0, ch - s.h))
      const speed = rand(1.2, 2.2)
      const angle = Math.random() * Math.PI * 2
      s.vx = Math.cos(angle) * speed
      s.vy = Math.sin(angle) * speed
    })

    pillRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.transform = `translate(${state.current[i].x}px, ${state.current[i].y}px) scale(1)`
    })

    // Sequential fade-up reveal on scroll into view — drives React state, not DOM directly
    const timers: ReturnType<typeof setTimeout>[] = []
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        TECHS.forEach((_, i) => {
          timers.push(
            setTimeout(() => setVisible(prev => {
              const next = [...prev]
              next[i] = true
              return next
            }), i * 80)
          )
        })
      },
      { threshold: 0.5 },
    )
    observer.observe(container)

    const tick = () => {
      const cw2 = container.clientWidth
      const ch2 = container.clientHeight
      state.current.forEach((s, i) => {
        const scaleErr = s.targetScale - s.scale
        s.scaleV += scaleErr * SPRING_K
        s.scaleV *= SPRING_DAMP
        s.scale += s.scaleV

        if (!s.paused) {
          s.x += s.vx
          s.y += s.vy
          if (s.x <= 0)          { s.x = 0;          s.vx =  Math.abs(s.vx) }
          if (s.x >= cw2 - s.w) { s.x = cw2 - s.w;  s.vx = -Math.abs(s.vx) }
          if (s.y <= 0)          { s.y = 0;           s.vy =  Math.abs(s.vy) }
          if (s.y >= ch2 - s.h) { s.y = ch2 - s.h;   s.vy = -Math.abs(s.vy) }
        }
        const el = pillRefs.current[i]
        if (el) el.style.transform = `translate(${s.x}px, ${s.y}px) scale(${s.scale})`
      })
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="tech-orbit" ref={containerRef}>
      {TECHS.map((tech, i) => (
        <div
          key={tech.name}
          role="button"
          tabIndex={selected === null ? 0 : -1}
          aria-label={tech.name}
          className={[
            'tech-pill',
            visible[i] ? 'tech-pill--visible' : '',
            selected === i ? 'tech-pill--selected' : '',
            selected !== null && selected !== i ? 'tech-pill--faded' : '',
          ].filter(Boolean).join(' ')}
          ref={el => { pillRefs.current[i] = el }}
          onClick={() => { if (selected === null) onSelect(i) }}
          onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && selected === null) { e.preventDefault(); onSelect(i) } }}
          onMouseEnter={() => {
            if (selectedRef.current !== null) return
            state.current[i].paused = true
            state.current[i].targetScale = 1.2
            const el = pillRefs.current[i]
            if (el) el.classList.add('tech-pill--hovered')
          }}
          onMouseLeave={() => {
            if (selectedRef.current !== null) return
            state.current[i].paused = false
            state.current[i].targetScale = 1
            const el = pillRefs.current[i]
            if (el) el.classList.remove('tech-pill--hovered')
          }}
        >
          <img src={tech.logo} alt="" width={20} height={20} aria-hidden="true" />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
