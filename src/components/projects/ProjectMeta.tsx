import { ProjectTags } from './ProjectTags.tsx'

interface ProjectMetaProps {
  borderedTags?: boolean
  role: string
  technologies: string[]
}

export function ProjectMeta({
  borderedTags = false,
  role,
  technologies,
}: ProjectMetaProps) {
  return (
    <div className="project-meta">
      <div className="project-meta__role">
        <p className="project-meta__label">ROLE</p>
        <p className="project-meta__value">{role}</p>
      </div>
      <ProjectTags bordered={borderedTags} technologies={technologies} />
    </div>
  )
}
