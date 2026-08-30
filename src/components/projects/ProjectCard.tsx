import type { Project } from '../../data/projects.ts'
import { TerminalLink } from '../ui/TerminalLink.tsx'
import { ProjectMedia } from './ProjectMedia.tsx'
import { ProjectMeta } from './ProjectMeta.tsx'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const media = project.images?.length ? (
    <ProjectMedia
      images={project.images}
      projectSlug={project.slug}
      variant={project.variant}
    />
  ) : null

  if (project.variant === 'featured') {
    return (
      <article
        className="project-card project-card--featured"
        data-node-id={project.nodeId}
      >
        <p className="project-badge">FEATURED_CASE_STUDY</p>
        <div className="project-card__featured-layout">
          {media}
          <div className="project-card__featured-content">
            <h2>{project.title}</h2>
            <p className="project-card__subtitle">{project.subtitle}</p>
            <p className="project-card__description">{project.description}</p>
            <ProjectMeta
              role={project.role}
              technologies={project.technologies}
            />
            <TerminalLink href={project.href}>Explore On Github</TerminalLink>
          </div>
        </div>
      </article>
    )
  }

  if (project.variant === 'fullWidth') {
    return (
      <article
        className="project-card project-card--full-width"
        data-node-id={project.nodeId}
      >
        {project.status ? (
          <p className="project-status">
            <span aria-hidden="true" />
            {project.status}
          </p>
        ) : null}
        <div className="project-card__full-content">
          <h2>{project.title}</h2>
          <p className="project-card__kicker">{project.subtitle}</p>
          <p className="project-card__description">{project.description}</p>
          <ProjectMeta
            borderedTags
            role={project.role}
            technologies={project.technologies}
          />
          <TerminalLink href={project.href}>Explore On Github</TerminalLink>
        </div>
      </article>
    )
  }

  return (
    <article
      className="project-card project-card--standard"
      data-node-id={project.nodeId}
    >
      <h2>{project.title}</h2>
      <p className="project-card__kicker">{project.subtitle}</p>
      {media}
      <ProjectMeta
        borderedTags
        role={project.role}
        technologies={project.technologies}
      />
      <TerminalLink href={project.href}>Explore On Github</TerminalLink>
    </article>
  )
}
