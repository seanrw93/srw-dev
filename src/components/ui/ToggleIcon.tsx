interface ToggleIconProps {
  open: boolean
}

export default function ToggleIcon({ open }: ToggleIconProps) {
  return (
    <span className={`toggle-icon${open ? ' toggle-icon--open' : ''}`} aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <line x1="7" y1="0" x2="7" y2="14" stroke="#c4a882" strokeWidth="1.5" strokeLinecap="round" className="toggle-icon__v" />
        <line x1="0" y1="7" x2="14" y2="7" stroke="#c4a882" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}
