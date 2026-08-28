export interface NavigationItem {
  footerLabel?: string
  label: string
  path: '/' | '/contact' | '/experience' | '/work'
}

export const navigationItems: NavigationItem[] = [
  { footerLabel: 'Home', label: 'About', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
]
