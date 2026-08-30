import contactEmailIcon from '../assets/icons/contact-email.svg'
import contactPhoneIcon from '../assets/icons/contact-phone.svg'
import emailIcon from '../assets/icons/email.svg'
import linkedInIcon from '../assets/icons/linkedin.svg'
import linkedInContactIcon from '../assets/icons/linkedin-contact.svg'
import phoneIcon from '../assets/icons/phone.svg'

export interface ContactCardData {
  action: string
  ariaLabel: string
  external?: boolean
  height: number
  href: string
  icon: string
  id: 'email' | 'linkedin' | 'phone'
  nodeId: string
  title: string
  width: number
}

export interface ContactLink {
  ariaLabel: string
  external?: boolean
  height: number
  href: string
  icon: string
  id: 'email' | 'linkedin' | 'phone'
  label: string
  width: number
}

export const contactDetails = {
  cv: {
    href: 'https://canva.link/re2w254k51dqueq',
    label: 'Download CV',
  },
  email: {
    href: 'mailto:samueljw.02@gmail.com',
    label: 'samueljw.02@gmail.com',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/samuelwinoto',
    label: 'linkedin.com/in/samuelwinoto',
  },
  phone: {
    href: 'tel:+6281392235584',
    label: '081392235584',
  },
} as const

export const contactLinks: ContactLink[] = [
  {
    ariaLabel: `Call ${contactDetails.phone.label}`,
    height: 23,
    href: contactDetails.phone.href,
    icon: phoneIcon,
    id: 'phone',
    label: 'Phone',
    width: 23,
  },
  {
    ariaLabel: `Email ${contactDetails.email.label}`,
    height: 20,
    href: contactDetails.email.href,
    icon: emailIcon,
    id: 'email',
    label: 'Email',
    width: 25,
  },
  {
    ariaLabel: 'Open Samuel Jeremy Winoto on LinkedIn',
    external: true,
    height: 25,
    href: contactDetails.linkedin.href,
    icon: linkedInIcon,
    id: 'linkedin',
    label: 'LinkedIn',
    width: 25,
  },
]

export const contactCards: ContactCardData[] = [
  {
    action: 'Contact',
    ariaLabel: `Call ${contactDetails.phone.label}`,
    height: 23,
    href: contactDetails.phone.href,
    icon: contactPhoneIcon,
    id: 'phone',
    nodeId: '16:105',
    title: 'Phone Number',
    width: 23,
  },
  {
    action: 'Send E-Mail',
    ariaLabel: `Email ${contactDetails.email.label}`,
    height: 20,
    href: contactDetails.email.href,
    icon: contactEmailIcon,
    id: 'email',
    nodeId: '16:115',
    title: 'Email',
    width: 25,
  },
  {
    action: 'View Profile',
    ariaLabel: 'Open Samuel Jeremy Winoto on LinkedIn',
    external: true,
    height: 25,
    href: contactDetails.linkedin.href,
    icon: linkedInContactIcon,
    id: 'linkedin',
    nodeId: '16:125',
    title: 'LinkedIn',
    width: 25,
  },
]
