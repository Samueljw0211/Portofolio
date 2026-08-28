import { FoundationPage } from '../components/ui/FoundationPage.tsx'

export function WorkPage() {
  return (
    <FoundationPage
      eyebrow="[ 01 // WORK ]"
      title={
        <>
          SELECTED <span className="text-accent">PROJECTS</span>
        </>
      }
      description="Engineering-grade design solutions focused on machine learning interfaces, spatial computing, and thoughtful technical experiences."
    />
  )
}
