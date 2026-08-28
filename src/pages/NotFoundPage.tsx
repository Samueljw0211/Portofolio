import { FoundationPage } from '../components/ui/FoundationPage.tsx'

export function NotFoundPage() {
  return (
    <FoundationPage
      eyebrow="[ 404 // NOT FOUND ]"
      title={
        <>
          This route has moved <span className="text-accent">off-grid.</span>
        </>
      }
      description="Use the navigation above to return to a portfolio page."
    />
  )
}
