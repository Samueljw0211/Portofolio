import type { ReactNode } from 'react'
import statusMarker from '../../assets/icons/status-marker.svg'
import { PageContainer } from '../layout/PageContainer.tsx'

interface FoundationPageProps {
  description: string
  eyebrow: string
  title: ReactNode
}

export function FoundationPage({
  description,
  eyebrow,
  title,
}: FoundationPageProps) {
  return (
    <section className="foundation-page" aria-labelledby="foundation-page-title">
      <PageContainer width="standard">
        <div className="foundation-page__content">
          <p className="foundation-page__eyebrow">
            <img src={statusMarker} alt="" width="11" height="11" />
            {eyebrow}
          </p>
          <h1 id="foundation-page-title">{title}</h1>
          <p className="foundation-page__description">{description}</p>
          <p className="foundation-page__status">[ SHARED FOUNDATION READY ]</p>
        </div>
      </PageContainer>
    </section>
  )
}
