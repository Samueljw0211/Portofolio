import { contactLinks } from '../../data/contact.ts'

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  const classes = ['social-links', className].filter(Boolean).join(' ')

  return (
    <ul className={classes} aria-label="Contact links">
      {contactLinks.map((link) => (
        <li key={link.id}>
          <a
            className="social-links__link"
            href={link.href}
            aria-label={link.ariaLabel}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            <img src={link.icon} alt="" width={link.width} height={link.height} />
          </a>
        </li>
      ))}
    </ul>
  )
}
