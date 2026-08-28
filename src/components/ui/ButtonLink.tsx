import type { ReactNode } from 'react'
import { Link } from 'react-router'

interface ButtonLinkProps {
  children: ReactNode
  external?: boolean
  href?: string
  icon: string
  to?: string
  variant?: 'primary' | 'secondary'
}

export function ButtonLink({
  children,
  external = false,
  href,
  icon,
  to,
  variant = 'primary',
}: ButtonLinkProps) {
  const className = `button-link button-link--${variant}`
  const content = (
    <>
      <span>{children}</span>
      <img aria-hidden="true" alt="" height="12" src={icon} width="12" />
    </>
  )

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    )
  }

  return (
    <a
      className={className}
      href={href}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {content}
    </a>
  )
}
