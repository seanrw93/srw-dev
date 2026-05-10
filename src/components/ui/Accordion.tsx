import { useState, useRef, useEffect, ReactNode } from 'react'

interface AccordionProps {
  children: ReactNode
}

export function Accordion({ children }: AccordionProps) {
  return <div className="accordion">{children}</div>
}

interface AccordionItemProps {
  question: string
  children: ReactNode
}

export function AccordionItem({ question, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    if (open) {
      el.style.maxHeight = el.scrollHeight + 'px'
    } else {
      el.style.maxHeight = '0'
    }
  }, [open])

  return (
    <div className="accordion__item">
      <button
        className="accordion__trigger"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        {question}
        <span className={`accordion__icon${open ? ' accordion__icon--open' : ''}`} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="7" y1="0" x2="7" y2="14" stroke="#c4a882" strokeWidth="1.5" strokeLinecap="round" className="accordion__icon-v" />
            <line x1="0" y1="7" x2="14" y2="7" stroke="#c4a882" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div ref={contentRef} className="accordion__content">
        <div className="accordion__content-inner">
          {children}
        </div>
      </div>
    </div>
  )
}
