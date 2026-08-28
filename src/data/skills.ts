import aiMlIcon from '../assets/icons/skill-ai-ml.svg'
import exploringIcon from '../assets/icons/skill-currently-exploring.svg'
import developmentIcon from '../assets/icons/skill-development.svg'
import uiUxProductIcon from '../assets/icons/skill-ui-ux-product.svg'

export interface Skill {
  description: string
  icon: string
  id: 'ai-ml' | 'development' | 'exploring' | 'ui-ux-product'
  nodeId: string
  title: string
}

export const skills: Skill[] = [
  {
    description:
      'Figma, Prototyping, Wireframing, User Research, Design Systems, Interaction Design',
    icon: uiUxProductIcon,
    id: 'ui-ux-product',
    nodeId: '16:359',
    title: 'UI/UX & PRODUCT',
  },
  {
    description:
      'JavaScript / TS, React, Tailwind CSS, HTML5/CSS3, Git, Swift',
    icon: developmentIcon,
    id: 'development',
    nodeId: '16:367',
    title: 'DEVELOPMENT',
  },
  {
    description:
      'Python, TensorFlow, Data Analysis, Prompt Engineering',
    icon: aiMlIcon,
    id: 'ai-ml',
    nodeId: '16:375',
    title: 'AI / ML',
  },
  {
    description: 'DevOps, Docker, MLOps',
    icon: exploringIcon,
    id: 'exploring',
    nodeId: '16:383',
    title: 'CURRENTLY EXPLORING',
  },
]
