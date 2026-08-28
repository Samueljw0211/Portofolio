import { NavLink } from 'react-router'
import { MobileNav } from '../navigation/MobileNav.tsx'
import { PrimaryNav } from '../navigation/PrimaryNav.tsx'
import { SocialLinks } from '../navigation/SocialLinks.tsx'
import { PageContainer } from './PageContainer.tsx'

export function SiteHeader() {
  return (
    <header className="site-header">
      <PageContainer className="site-header__inner">
        <NavLink className="site-brand" to="/" aria-label="Samuel Jeremy Winoto, home">
          <span className="site-brand__prompt" aria-hidden="true">
            &gt;
          </span>
          <span>SAMUEL JEREMY WINOTO</span>
        </NavLink>

        <PrimaryNav className="site-header__desktop-nav" />
        <SocialLinks className="site-header__desktop-social" />
        <MobileNav />
      </PageContainer>
    </header>
  )
}
