import type { ExperienceEntry } from '../../data/experience.ts'

interface TimelineItemProps {
  entry: ExperienceEntry
}

export function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <li
      className={`timeline-item${entry.current ? ' timeline-item--current' : ''}`}
      data-node-id={entry.nodeId}
    >
      <span className="timeline-item__node" aria-hidden="true">
        {entry.current ? <span /> : null}
      </span>

      <div className="timeline-item__grid">
        <div className="timeline-item__date">
          <time>{entry.date}</time>
          {entry.current ? <span>[ CURRENT ]</span> : null}
        </div>

        <article className="timeline-item__content">
          <h2>{entry.role}</h2>
          <p className="timeline-item__organization">{entry.organization}</p>
          <p className="timeline-item__description">{entry.description}</p>
        </article>
      </div>
    </li>
  )
}
