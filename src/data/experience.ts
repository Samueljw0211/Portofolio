export interface ExperienceEntry {
  current?: boolean
  date: string
  description: string
  id: 'apple-developer-academy' | 'bncc' | 'himti'
  nodeId: string
  organization: string
  role: string
}

export const experienceEntries: ExperienceEntry[] = [
  {
    current: true,
    date: 'Mar 2026 – Present',
    description:
      'Engaged in intensive Challenge-Based Learning, focusing on user-centric product research, rapid prototyping, and cross-functional collaboration within the Apple ecosystem. Driving technical exploration to solve complex design challenges.',
    id: 'apple-developer-academy',
    nodeId: '16:492',
    organization: 'Apple Developer Academy @ BINUS',
    role: 'Learner',
  },
  {
    date: 'Mar 2025 – Mar 2026',
    description:
      'Supported event preparation and technical operations as a member of the HIMTI Techno Event Committee’s Technical Subdivision.',
    id: 'himti',
    nodeId: '16:510',
    organization: 'HIMTI BINUS University',
    role: 'Activist of Academic Event',
  },
  {
    date: 'Oct 2024 – Oct 2025',
    description:
      'Completed back-end development training focused on Laravel. Participated in leadership and professional development training.',
    id: 'bncc',
    nodeId: '16:523',
    organization: 'Bina Nusantara Computer Club (BNCC)',
    role: 'Activist, Regeneration Candidate',
  },
]
