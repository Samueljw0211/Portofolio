import { Timeline } from '../components/experience/Timeline.tsx'
import { PageContainer } from '../components/layout/PageContainer.tsx'
import { experienceEntries } from '../data/experience.ts'
import './ExperiencePage.css'

export function ExperiencePage() {
  return (
    <main className="experience-page" data-node-id="16:463">
      <PageContainer className="experience-main" width="standard">
        <header className="experience-header" data-node-id="16:486">
          <h1>TIMELINE_</h1>
        </header>

        <Timeline entries={experienceEntries} />
      </PageContainer>

      <div className="experience-progress" aria-hidden="true">
        <span />
      </div>
    </main>
  )
}
