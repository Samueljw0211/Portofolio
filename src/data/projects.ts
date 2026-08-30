import aeraPerspective from '../assets/projects/aera-perspective.png'
import aeraScreen from '../assets/projects/aera-screen.png'
import feeloDashboard from '../assets/projects/feelo-dashboard.png'
import mofoneHandTracking from '../assets/projects/mofone-hand-tracking.png'
import mofoneRecording from '../assets/projects/mofone-recording.png'

export type ProjectVariant = 'featured' | 'fullWidth' | 'standard'

export interface ProjectImage {
  alt: string
  height: number
  src: string
  width: number
}

export interface Project {
  description?: string
  href: string
  images?: ProjectImage[]
  nodeId: string
  role: string
  slug: string
  status?: string
  subtitle: string
  technologies: string[]
  title: string
  variant: ProjectVariant
}

export const projects: Project[] = [
  {
    description:
      'User research, Apple Vision-powered interaction. Bridging the gap between emotional intelligence and spatial computing for the next generation.',
    href: 'https://github.com/kata-sam-kapitalisme/feelo',
    images: [
      {
        alt: 'Feelo emotion-learning application dashboard',
        height: 1284,
        src: feeloDashboard,
        width: 1674,
      },
    ],
    nodeId: '16:187',
    role: 'Visual Designer + Front-End Developer',
    slug: 'feelo',
    subtitle: 'Emotion Learning for Children',
    technologies: ['SwiftUI', 'Apple HIG', 'AVFoundation', 'Gestalt'],
    title: 'Feelo',
    variant: 'featured',
  },
  {
    href: 'https://github.com/ValentinoTriadi/valen-n-valen',
    images: [
      {
        alt: 'Aera running recommendation application shown in perspective',
        height: 656,
        src: aeraPerspective,
        width: 540,
      },
      {
        alt: 'Aera running recommendation detail screen',
        height: 920,
        src: aeraScreen,
        width: 450,
      },
    ],
    nodeId: '16:229',
    role: 'UI/UX Designer + Front-End Developer',
    slug: 'aera',
    subtitle: 'AI-Assisted Running Time Recommendation',
    technologies: ['SwiftUI', 'Figma', 'Apple HIG', 'Gestalt'],
    title: 'Aera',
    variant: 'standard',
  },
  {
    href: 'https://github.com/Samueljw0211/MoFone',
    images: [
      {
        alt: 'MoFone hand-tracking vocal-effects screen',
        height: 920,
        src: mofoneHandTracking,
        width: 450,
      },
      {
        alt: 'MoFone voice-recording screen',
        height: 920,
        src: mofoneRecording,
        width: 450,
      },
    ],
    nodeId: '16:255',
    role: 'Individual Designer + Developer',
    slug: 'mofone',
    subtitle: 'Gesture-Controlled Vocal Effects',
    technologies: ['SwiftUI', 'Vision', 'AVFoundation'],
    title: 'MoFone',
    variant: 'standard',
  },
  {
    description:
      'A cryptocurrency news interpretation platform designed to help beginner investors understand complex market information more easily. The product transforms cryptocurrency news into concise summaries and sentiment insights, helping users quickly identify the key information and overall market context behind major crypto assets.',
    href: 'https://github.com/N4NCHOs/Pragma',
    nodeId: '16:283',
    role: 'Data Collection, Model Development & Training',
    slug: 'undergraduate-thesis',
    status: 'STATUS: IN DEVELOPMENT',
    subtitle: 'NLP for Cryptocurrency News Sentiment Analysis',
    technologies: ['Feedparser', 'Trafilatura', 'FLAN-T5', 'DeBERTa'],
    title: 'Undergraduate Thesis',
    variant: 'fullWidth',
  },
]
