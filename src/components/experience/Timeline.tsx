import type { ExperienceEntry } from '../../data/experience.ts'
import { TimelineItem } from './TimelineItem.tsx'

interface TimelineProps {
  entries: ExperienceEntry[]
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="timeline" data-node-id="16:489">
      <span className="timeline__line" aria-hidden="true" />
      <ol className="timeline__entries">
        {entries.map((entry) => (
          <TimelineItem entry={entry} key={entry.id} />
        ))}
      </ol>
    </div>
  )
}
