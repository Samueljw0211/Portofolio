import arrowDownload from '../assets/icons/arrow-download.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
import statusMarker from '../assets/icons/status-marker.svg'
import portrait from '../assets/profile/samuel-winoto.jpg'
import { PageContainer } from '../components/layout/PageContainer.tsx'
import { ButtonLink } from '../components/ui/ButtonLink.tsx'
import { SkillCard } from '../components/ui/SkillCard.tsx'
import { contactDetails } from '../data/contact.ts'
import { skills } from '../data/skills.ts'
import './HomePage.css'

const aboutCopy =
  'I like understanding a problem before jumping into a solution. With a Computer Science background, I combine research, UI/UX design, and development to build products around real user needs, while exploring how AI and machine learning can be turned into useful, understandable experiences.'

export function HomePage() {
  return (
    <div className="home-page" data-node-id="16:345">
      <section
        className="home-hero"
        aria-labelledby="home-title"
        data-node-id="16:412"
      >
        <PageContainer className="home-hero__grid">
          <div className="home-hero__content" data-node-id="16:422">
            <p className="home-hero__eyebrow">
              <img aria-hidden="true" alt="" src={statusMarker} />
              Samuel Jeremy Winoto
            </p>

            <h1
              id="home-title"
              aria-label="I research, design, and build products around people."
            >
              <span aria-hidden="true">I research, design, and</span>
              <span aria-hidden="true">build products around</span>
              <span aria-hidden="true">people.</span>
            </h1>

            <p className="home-hero__description">
              Computer Science undergraduate and Apple Developer Academy learner
              exploring the intersection between user-centered product design and
              intelligent systems.
            </p>

            <div className="home-hero__actions">
              <ButtonLink icon={arrowRight} to="/work">
                View My Work
              </ButtonLink>
              <ButtonLink
                external
                href={contactDetails.cv.href}
                icon={arrowDownload}
                variant="secondary"
              >
                Download CV
              </ButtonLink>
            </div>
          </div>

          <div
            className="home-portrait"
            data-node-id="16:416"
            role="img"
            aria-label="Portrait of Samuel Jeremy Winoto"
          >
            <div className="home-portrait__image-frame" aria-hidden="true">
              <img alt="" src={portrait} />
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        className="home-skills"
        aria-labelledby="skills-title"
        data-node-id="16:346"
      >
        <PageContainer className="home-skills__grid">
          <div className="home-skills__intro">
            <p className="section-label">MY SKILLS</p>
            <h2 id="skills-title" aria-label="Building products for humans">
              <span aria-hidden="true">Building</span>
              <span aria-hidden="true">products</span>
              <span aria-hidden="true">for humans</span>
            </h2>
            <span className="home-skills__marker" aria-hidden="true" />
            <p className="home-skills__description">{aboutCopy}</p>
          </div>

          <ul className="home-skills__cards">
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                description={skill.description}
                icon={skill.icon}
                nodeId={skill.nodeId}
                title={skill.title}
              />
            ))}
          </ul>
        </PageContainer>
      </section>
    </div>
  )
}
