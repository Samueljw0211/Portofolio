import { NavLink } from 'react-router'
import { navigationItems } from '../../data/navigation.ts'

interface PrimaryNavProps {
  className?: string
  onNavigate?: () => void
}

export function PrimaryNav({ className = '', onNavigate }: PrimaryNavProps) {
  const classes = ['primary-nav', className].filter(Boolean).join(' ')

  return (
    <nav className={classes} aria-label="Primary navigation">
      <ul className="primary-nav__list">
        {navigationItems.map((item) => (
          <li key={item.path}>
            <NavLink
              className={({ isActive }) =>
                `primary-nav__link${isActive ? ' primary-nav__link--active' : ''}`
              }
              to={item.path}
              end={item.path === '/'}
              onClick={onNavigate}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
