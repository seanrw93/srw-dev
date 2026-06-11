interface LogoProps {
  size?: 'full' | 'mark'
  className?: string
}

export default function Logo({ size = 'full', className }: LogoProps) {
  if (size === 'mark') {
    return (
      <svg
        viewBox="0 0 88 28"
        height="28"
        aria-label="srw:dev"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          y="21"
          fontFamily="'Space Grotesk', monospace"
          fontWeight="700"
          fontSize="18"
          letterSpacing="-0.5"
          fill="#c8b89a"
        >
          {'{'}srw:dev{'}'}
        </text>
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 148 28"
      height="28"
      aria-label="{ srw : dev }"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        fontFamily="'Space Grotesk', monospace"
        fontWeight="700"
        fontSize="18"
        letterSpacing="-0.3"
      >
        <tspan y="21" fill="#c8b89a">{'{ '}</tspan>
        <tspan fill="#f5f0e8">srw</tspan>
        <tspan fill="#c8b89a"> : </tspan>
        <tspan fill="#f5f0e8">dev</tspan>
        <tspan fill="#c8b89a">{' }'}</tspan>
      </text>
    </svg>
  )
}
