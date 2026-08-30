import { PageContainer } from '../components/layout/PageContainer.tsx'
import { ProjectCard } from '../components/projects/ProjectCard.tsx'
import { projects } from '../data/projects.ts'
import './WorkPage.css'

export function WorkPage() {
  const featuredProject = projects.find(
    (project) => project.variant === 'featured',
  )
  const secondaryProjects = projects.filter(
    (project) => project.variant !== 'featured',
  )

  return (
    <main className="work-page" data-node-id="16:178">
      <PageContainer className="work-main" width="standard">
        <header className="work-header" data-node-id="16:181">
          <h1>
            SELECTED <span>PROJECTS</span>
          </h1>
          <p>
            Engineering-grade design solutions focusing on machine learning
            interfaces, spatial computing, and technical UX architecture.
          </p>
        </header>

        {featuredProject ? <ProjectCard project={featuredProject} /> : null}

        <div className="work-project-grid" data-node-id="16:228">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </PageContainer>
    </main>
  )
}
