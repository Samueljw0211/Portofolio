import { useState } from 'react'
import { PrimaryNav } from './PrimaryNav.tsx'
import { SocialLinks } from './SocialLinks.tsx'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav__trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((current) => !current)}
      >
        [ {isOpen ? 'CLOSE' : 'MENU'} ]
      </button>

      <div
        className={`mobile-nav__panel${isOpen ? ' mobile-nav__panel--open' : ''}`}
        id="mobile-navigation-panel"
        hidden={!isOpen}
      >
        <PrimaryNav onNavigate={closeMenu} />
        <SocialLinks />
      </div>
    </div>
  )
}
