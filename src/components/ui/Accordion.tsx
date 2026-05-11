import { useState, useRef, useEffect, ReactNode, Children, cloneElement, isValidElement } from 'react'

interface AccordionProps {
  children: ReactNode
}

export function Accordion({ children }: AccordionProps) {
  return (
    <div className="accordion">
      {Children.map(children, (child, i) =>
        isValidElement(child) ? cloneElement(child as React.ReactElement<AccordionItemProps>, { _index: i }) : child
      )}
    </div>
  )
}

interface AccordionItemProps {
  question: ReactNode
  children: ReactNode
  _index?: number
}

export function AccordionItem({ question, children, _index = 0 }: AccordionItemProps) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    if (open) {
      el.style.maxHeight = el.scrollHeight + 'px'
    } else {
      el.style.maxHeight = '0'
    }
  }, [open])

  useEffect(() => {
    const el = itemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        setTimeout(() => el.classList.add('accordion__item--visible'), _index * 80)
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [_index])

  return (
    <div ref={itemRef} className="accordion__item">
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
