interface TerminalLinkProps {
  children: string
  href: string
}

export function TerminalLink({ children, href }: TerminalLinkProps) {
  return (
    <a
      className="project-link"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <span aria-hidden="true">&gt;</span> {children}
    </a>
  )
}
