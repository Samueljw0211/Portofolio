interface SkillCardProps {
  description: string
  icon: string
  nodeId: string
  title: string
}

export function SkillCard({
  description,
  icon,
  nodeId,
  title,
}: SkillCardProps) {
  return (
    <li className="skill-card" data-node-id={nodeId}>
      <div className="skill-card__icon" aria-hidden="true">
        <img alt="" src={icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
