import { FoundationPage } from '../components/ui/FoundationPage.tsx'

export function ContactPage() {
  return (
    <FoundationPage
      eyebrow="[ 03 // CONTACT ]"
      title={
        <>
          Here&apos;s how you can <span className="text-accent">contact</span> me.
        </>
      }
      description="Phone, email, and LinkedIn contact cards will be composed here in the next implementation phase."
    />
  )
}
