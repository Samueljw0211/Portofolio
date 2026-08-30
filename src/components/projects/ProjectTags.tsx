interface ProjectTagsProps {
  bordered?: boolean
  technologies: string[]
}

export function ProjectTags({
  bordered = false,
  technologies,
}: ProjectTagsProps) {
  return (
    <ul
      className={`project-tags${bordered ? ' project-tags--bordered' : ''}`}
      aria-label="Technologies used"
    >
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  )
}
