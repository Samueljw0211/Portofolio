import type { ProjectImage, ProjectVariant } from '../../data/projects.ts'

interface ProjectMediaProps {
  images: ProjectImage[]
  projectSlug: string
  variant: ProjectVariant
}

export function ProjectMedia({
  images,
  projectSlug,
  variant,
}: ProjectMediaProps) {
  return (
    <div
      className={`project-media project-media--${variant}`}
      data-project={projectSlug}
    >
      {images.map((image, index) => (
        <img
          key={image.src}
          alt={image.alt}
          className={`project-media__image project-media__image--${index + 1}`}
          height={image.height}
          src={image.src}
          width={image.width}
        />
      ))}
    </div>
  )
}
