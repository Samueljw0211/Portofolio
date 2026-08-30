import { PageContainer } from '../components/layout/PageContainer.tsx'
import { ContactCard } from '../components/ui/ContactCard.tsx'
import { contactCards } from '../data/contact.ts'
import './ContactPage.css'

export function ContactPage() {
  return (
    <main className="contact-page" data-node-id="16:92">
      <PageContainer className="contact-page__content" width="standard">
        <h1>
          Heres how you can <span>contact</span> me
        </h1>

        <div className="contact-grid" data-node-id="16:104">
          {contactCards.map((contact) => (
            <ContactCard contact={contact} key={contact.id} />
          ))}
        </div>
      </PageContainer>
    </main>
  )
}
