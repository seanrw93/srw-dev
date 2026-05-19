import { useEffect, useRef, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  threshold?: number
  from?: 'right'
}

export default function Reveal({ children, delay = 0, className = '', threshold = 0.08, from }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('revealed'), delay)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const variantClass = from ? `reveal--${from}` : ''

  return (
    <div ref={ref} className={`reveal ${variantClass} ${className}`.trim()}>
      {children}
    </div>
  )
}
