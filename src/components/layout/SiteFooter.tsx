import { NavLink } from 'react-router'
import { contactDetails } from '../../data/contact.ts'
import { navigationItems } from '../../data/navigation.ts'
import { PageContainer } from './PageContainer.tsx'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <PageContainer className="site-footer__content">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <p className="site-footer__brand">
              <span aria-hidden="true">&gt;</span> SAMUEL JEREMY WINOTO
            </p>
            <p className="site-footer__role">
              Aspiring Product Designer &amp; Developer
            </p>
          </div>

          <div className="site-footer__invitation">
            <h2>Let&apos;s Talk!</h2>
            <p>
              I&apos;m always open to connecting with people in tech, learning from
              different perspectives, and discussing product design, AI-powered
              products, and thoughtful technology.
            </p>
            <a className="terminal-link" href={contactDetails.email.href}>
              &gt; Start a conversation
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <nav aria-label="Footer navigation">
            <ul className="site-footer__nav-list">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} end={item.path === '/'}>
                    {item.footerLabel ?? item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} Samuel Jeremy Winoto
          </p>
        </div>
      </PageContainer>
    </footer>
  )
}
