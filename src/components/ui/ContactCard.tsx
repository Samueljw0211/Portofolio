import type { ContactCardData } from '../../data/contact.ts'

interface ContactCardProps {
  contact: ContactCardData
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <a
      aria-label={contact.ariaLabel}
      className="contact-card"
      data-node-id={contact.nodeId}
      href={contact.href}
      rel={contact.external ? 'noreferrer' : undefined}
      target={contact.external ? '_blank' : undefined}
    >
      <div className="contact-card__heading">
        <img
          aria-hidden="true"
          alt=""
          height={contact.height}
          src={contact.icon}
          width={contact.width}
        />
        <h2>{contact.title}</h2>
      </div>
      <p className="contact-card__action">
        <span aria-hidden="true">&gt;</span> {contact.action}
      </p>
    </a>
  )
}
