import { useState, useRef, useEffect, ReactNode, Children, cloneElement, isValidElement } from 'react'
import ToggleIcon from './ToggleIcon'

interface AccordionProps {
  children: ReactNode
}

export function Accordion({ children }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="accordion">
      {Children.map(children, (child, i) =>
        isValidElement(child)
          ? cloneElement(child as React.ReactElement<AccordionItemProps>, {
              _index: i,
              _open: openIndex === i,
              _onToggle: () => setOpenIndex(openIndex === i ? null : i),
            })
          : child
      )}
    </div>
  )
}

interface AccordionItemProps {
  question: ReactNode
  children: ReactNode
  _index?: number
  _open?: boolean
  _onToggle?: () => void
}

export function AccordionItem({ question, children, _index = 0, _open = false, _onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    el.style.maxHeight = _open ? el.scrollHeight + 'px' : '0'
  }, [_open])

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
        aria-expanded={_open}
        onClick={_onToggle}
      >
        {question}
        <ToggleIcon open={_open} />
      </button>
      <div ref={contentRef} className="accordion__content">
        <div className="accordion__content-inner">
          {children}
        </div>
      </div>
    </div>
  )
}
