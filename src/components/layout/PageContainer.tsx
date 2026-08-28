import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
  width?: 'standard' | 'wide'
}

export function PageContainer({
  children,
  className = '',
  width = 'wide',
}: PageContainerProps) {
  const classes = ['page-container', `page-container--${width}`, className]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}
