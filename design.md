# Portfolio Design System and React Architecture

## Document status

- Source: [Figma portfolio canvas](https://www.figma.com/design/zJYztGImrLvwX9HC7xRWxS/Untitled?node-id=23-709)
- Inspected node: `23:709` (`Frame 6`)
- Target stack: React 19, Vite 8, TypeScript 6, plain CSS
- Scope: design analysis and implementation architecture only
- Last reviewed: 2026-08-28

The selected Figma node is a presentation canvas containing four separate desktop page frames. It is not one continuous webpage. The four frames share a header and footer language and should be implemented as related routes or page views.

The current repository is still the Vite starter. It has one `App` component, starter CSS, and starter image/SVG assets; no portfolio components, router, content model, or portfolio-specific design tokens exist yet.

## Source-design caveats

The visual language is consistent, but the Figma file is not yet formalized as a component library:

- All four designs are 1280 px desktop frames; no tablet or mobile frame is present.
- No Figma components, component sets, or instances are used inside the selected canvas.
- No prototype reactions are authored, so hover, focus, click, and page-transition behavior is unspecified.
- There are no local text, paint, or effect styles.
- The file has one generic variable collection (`Mode 1`) with only two color variables, `Moderate` and `grey contrast`; both use unrestricted scopes. They are not sufficient to represent the visual system below.
- The featured project layer is named `Section - Featured Project: Aera`, but its visible content is Feelo.
- The contact layer named `Link - GitHub Card` visibly represents LinkedIn.
- Several navbar layers are named “Mobile Focus” or “Visible on Mobile/Tablet,” but they are still 1200 px wide desktop compositions. The names alone are not a mobile specification.

For implementation, visible content takes precedence over stale layer names. Responsive and interaction rules in this document are therefore marked as proposed where Figma does not specify them.

## Confirmed implementation decisions and links

The owner approved the four-route architecture and the responsive and interaction proposals in this document on 2026-08-28.

| Purpose | Display value | Destination |
| --- | --- | --- |
| Phone | `081392235584` | `tel:+6281392235584` |
| Email | `samueljw.02@gmail.com` | `mailto:samueljw.02@gmail.com` |
| LinkedIn | `linkedin.com/in/samuelwinoto` | [LinkedIn profile](https://www.linkedin.com/in/samuelwinoto) |
| CV | `Download CV` | [Canva CV](https://canva.link/re2w254k51dqueq) |
| Feelo | Project repository | [GitHub](https://github.com/kata-sam-kapitalisme/feelo) |
| Aera | Project repository | [GitHub](https://github.com/ValentinoTriadi/valen-n-valen) |
| MoFone | Project repository | [GitHub](https://github.com/Samueljw0211/MoFone) |
| NLP / Pragma | Project repository | [GitHub](https://github.com/N4NCHOs/Pragma) |

The Canva CV destination is an external webpage rather than a direct PDF download. Until a PDF is supplied, the CV CTA should open it in a new tab and should not use the HTML `download` attribute.

## Page structure

### Shared shell

Every page uses the same dark, technical portfolio language:

1. A translucent top navigation bar with brand, primary navigation, and phone/email/LinkedIn icon links.
2. One page-specific main content area.
3. A dark footer with identity text, a “Let's Talk!” statement, a short biography, and footer navigation.

The navigation model is:

- About/Home
- Work
- Experience
- Contact

The active item uses mint text and a 2 px mint underline. Footer navigation labels the landing route as `Home`, while the header labels it `About`.

### Home / About

Figma frame: `About & Skills | Samuel Jeremy Winoto`, 1280 × 1838.

1. Hero section, 800 px tall
   - Eyebrow/name line
   - Large three-line value proposition
   - Supporting biography
   - Primary `View My Work` CTA
   - Secondary `Download CV` CTA
   - Framed portrait/abstract-tech visual
2. About and skills section
   - Left: section label, large “Building products for humans” statement, and supporting copy
   - Right: 2 × 2 skills-card grid
3. Shared footer

### Work

Figma frame: `Work | Samuel Jeremy Winoto`, 1280 × 2395.

1. Section header
   - `[ 01 // WORK ]` eyebrow
   - `SELECTED PROJECTS` display heading
   - Introductory copy
2. Full-width featured project: Feelo
3. Two-column secondary-project row: Aera and MoFone
4. Full-width thesis project
5. Shared footer

### Experience

Figma frame: `Html → Body`, 1280 × 1465.

1. `TIMELINE_` display heading
2. Vertical experience timeline
   - Current Apple Developer Academy entry, visually emphasized as a bordered card
   - HIMTI entry
   - BNCC entry
3. Fixed-looking vertical scroll-progress HUD at the right edge
4. Shared footer

### Contact

Figma frame: `Contact | Samuel Jeremy Winoto`, 1280 × 918.

1. Compact heading: “Here's how you can contact me,” with `contact` highlighted
2. Three equal contact cards
   - Phone Number
   - Email
   - LinkedIn
3. Shared footer

## Layout system

### Desktop geometry

| Token | Authored value | Use |
| --- | ---: | --- |
| `viewport-reference` | 1280 px | Width of every page frame |
| `shell-max` | 1200 px | Centered navigation/main shell where used |
| `content-wide` | 1120 px | Hero and footer content after 80 px page gutters |
| `content-standard` | 1040 px | Work, contact, and experience content column |
| `page-gutter` | 80 px | Primary desktop side padding |
| `shell-offset` | 40 px | Centers a 1200 px shell in the 1280 px frame |
| `grid-columns` | 12 | About, project, and timeline alignment |
| `grid-gap` | 24 px | Standard card/column gap |

The designs alternate between an 1120 px wide layout (`1280 - 2 × 80`) and a narrower 1040 px layout nested inside a centered 1200 px shell. Preserve both as explicit container variants instead of treating the discrepancy as accidental.

Recommended container API:

- `PageContainer width="wide"` → maximum 1120 px
- `PageContainer width="standard"` → maximum 1040 px
- Both use fluid inline padding below desktop size.

### Spacing scale

The design strongly follows an 8 px base rhythm, with a few optical exceptions.

| Token | Value | Typical use |
| --- | ---: | --- |
| `space-1` | 4 px | Tight text grouping |
| `space-2` | 8 px | Label/title grouping, inline icon gaps |
| `space-3` | 16 px | Card content gaps, CTA gaps |
| `space-4` | 24 px | Grid gaps, card padding, footer links |
| `space-5` | 32 px | Section sub-spacing, project-card padding |
| `space-6` | 40 px | Media/text gaps and shell offset |
| `space-7` | 48 px | Footer rhythm, featured-card content padding |
| `space-8` | 64 px | Work section and project-grid separation |
| `space-9` | 80 px | Desktop page gutters and large section spacing |
| `space-10` | 96 px | Page top/bottom section padding |
| `space-11` | 128 px | Major experience-page section separation |

Optical exceptions visible in Figma include 25 px contact-card padding, 33 px skills-card padding, and 49 px footer top padding. In code, normalize these to 24, 32, and 48 px unless pixel comparison proves the extra pixel is intentional.

### Borders, radii, and effects

- Default border: 1 px `border-subtle` (`#2a2a2a`).
- Strong divider/nav/footer border: 1 px `border-strong` (`#3c4a46`).
- Active navigation underline: 2 px mint.
- Contact cards and small controls: 2 px radius.
- Secondary project cards: 4 px radius.
- Featured project: 8 px radius.
- Portrait frame: 12 px radius.
- Navigation backdrop: dark translucent fill with 6 px backdrop blur.
- Page background includes a very subtle technical grid/texture at approximately 50% layer opacity.
- No drop-shadow system is authored; depth is expressed with borders, contrast, and inset media panels.

## Color system

| Proposed token | Value | Authored role |
| --- | --- | --- |
| `--color-bg-page` | `#131313` | Primary page and project-card surface |
| `--color-bg-footer` | `#0e0e0e` | Footer and inset media surface |
| `--color-bg-elevated` | `#1c1b1b` | Contact and skills cards |
| `--color-bg-muted` | `#2a2a2a` | Badges and track surfaces |
| `--color-border-subtle` | `#2a2a2a` | Default card/divider border |
| `--color-border-strong` | `#3c4a46` | Nav, footer, media, and timeline borders |
| `--color-accent` | `#57f1db` | Highlight text, active navigation, terminal markers, timeline progress |
| `--color-accent-solid` | `#2dd4bf` | Filled primary CTA |
| `--color-accent-soft` | `rgba(87, 241, 219, 0.1)` | Skill icon tiles |
| `--color-accent-border` | `rgba(87, 241, 219, 0.3)` | Featured-project badge border |
| `--color-text-primary` | `#e5e2e1` | Headings and high-emphasis text |
| `--color-text-secondary` | `#bacac5` | Body copy, navigation, metadata |
| `--color-text-secondary-soft` | `rgba(186, 202, 197, 0.8)` | Lower-emphasis timeline descriptions |
| `--color-text-status` | `#c8c6c5` | In-development status |
| `--color-decoration` | `#3a3a3a` | Portrait/abstract visual border |
| `--color-nav-glass` | `rgba(19, 19, 19, 0.4)` | Translucent navigation background |

This is a dark-only design. Figma does not provide a light theme.

## Typography system

Use Geist for expressive and readable interface copy, and JetBrains Mono for navigation, metadata, labels, tags, dates, and terminal-style accents. Font files are not currently present in the repository and will need to be added or loaded when implementation begins.

| Proposed token | Font | Weight | Size / line | Tracking | Use |
| --- | --- | ---: | ---: | ---: | --- |
| `display-xl` | Geist | 700 | 64 / 72 px | -1.28 px | Hero, page titles, `TIMELINE_` |
| `heading-xl` | Geist | 700 | 40 / 48 px | -0.8 px | Footer CTA heading |
| `heading-lg` | Geist | 600 | 32 / 40 px | -0.32 px | Project titles, primary timeline title |
| `heading-md` | Geist | 700 | 32 / 24 px | -0.4 px | Compact contact heading; preserve carefully because the authored line height is unusually tight |
| `heading-sm` | Geist | 400 | 24 / 32 px | 0 | Contact-card titles |
| `title-sm` | Geist | 400 | 20 / 32 px | 0 | Timeline titles, intro copy |
| `body-lg` | Geist | 400 | 18 / 28 px | 0 | Long body copy and project descriptions |
| `body-md` | Geist | 400 | 16 / 28 px | 0 | Skills-card descriptions |
| `nav-active` | Geist | 700 | 16 / 24 px | 0 | Active desktop navigation item |
| `mono-heading` | JetBrains Mono | 700 | 20 / 28 px | 0 | Skills-card headings |
| `mono-label` | JetBrains Mono | 500 | 14 / 20 px | +0.7 px | Eyebrows, dates, role metadata, CTAs |
| `mono-label-wide` | JetBrains Mono | 500 | 14 / 20 px | +1.4 px | `MY SKILLS` label |
| `mono-brand` | JetBrains Mono | 700 | 14 / 20 px | -0.7 px | Header identity |
| `mono-small` | JetBrains Mono | 500 | 12 / 16 px | 0 | Tags, footer navigation, status text |

Avoid encoding visual line breaks directly into strings. Give headings and copy authored maximum widths and allow normal wrapping so the typography can respond to viewport width.

## Reusable component patterns

### Site header

- Glass background, 6 px backdrop blur, strong bottom border.
- Brand at left: mint `>` followed by the name in primary text.
- Four centered navigation links.
- Three 23–25 px social/contact icons at right with 25 px gaps.
- Active route: Geist bold 16 px, mint, 2 px underline; inactive route: JetBrains Mono medium 14 px, secondary text.

### Footer

- Shared across all four screens; 398 px desktop reference height.
- Top row is split between identity and a 422.5 px contact statement.
- 48 px section gap and 80 px side padding.
- Footer navigation sits below a subtle top border.

### Section heading

- Optional terminal eyebrow such as `[ 01 // WORK ]`.
- 64 px Geist display heading with selectively mint text.
- Supporting copy capped around 672 px.

### Project cards

All project variants should share one typed data model and one component family rather than separate hardcoded components.

#### Featured project

- Desktop reference: 1040 × 450 px.
- Two-panel layout: large media panel on the left and approximately 509 px content panel on the right.
- 8 px outer radius; page-surface fill and subtle border.
- Small case-study badge at the top right.
- 32 px project title, 20 px mint subtitle, 18 px body copy.
- Role row, technology tags, and terminal-style project CTA.

#### Standard project

- Desktop reference: 508 × 516 px in a two-column grid with a 24 px gap.
- 4 px outer radius and subtle border.
- Header and role metadata above an inset media panel.
- Media panel uses the footer-dark surface and strong border.
- Bottom terminal-style CTA.

#### Full-width project

- Desktop reference: 1040 × 455 px.
- Text-led layout with no large media panel.
- Status badge in the top right.
- Title, subtitle, detailed description, role, technology tags, and CTA.

Recommended API:

```ts
type ProjectCardVariant = 'featured' | 'standard' | 'fullWidth'

interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  role: string
  technologies: string[]
  imageAssets?: Array<{ src: string; alt: string }>
  href?: string
  status?: string
  variant: ProjectCardVariant
}
```

### Skill card

- Four cards in a 2 × 2 grid, each approximately 357 px wide.
- Elevated fill, subtle border, 32 px padding.
- 48 px mint-tinted icon tile.
- JetBrains Mono bold title and Geist body copy.

### Contact card

- Three equal cards, approximately 331 × 192 px, separated by 24 px.
- Elevated fill, subtle border, 2 px radius, 24 px padding.
- Icon and 24 px title at top; terminal CTA at bottom.
- The entire card should be one semantic link, not a link nested inside a clickable container.

### Timeline item

- Date/status column spans roughly three of twelve columns.
- Content spans the remaining nine columns.
- A 2 px vertical line and 24 px circular nodes establish chronology.
- Current item uses a full bordered/elevated card and mint inner node.
- Historical items use a restrained left-divider treatment.

## Responsive behavior

### Authored evidence

- Every page is designed at 1280 px.
- Primary content frames use `STRETCH` constraints and mostly auto-layout or grid.
- Contact links use a horizontal auto-layout row with fixed-width cards.
- Secondary projects use a two-column grid; the thesis spans both columns.
- Skills use a two-column grid.
- The timeline uses a 12-column grid with 3/9 date-to-content proportions.
- No mobile/tablet dimensions, component variants, or responsive prototype flows are authored.

### Proposed implementation rules

These rules should be validated with the designer before final implementation:

| Range | Proposed behavior |
| --- | --- |
| `>= 1200 px` | Match the authored 1280 px composition; 80 px gutters, 1040/1120 px content variants |
| `768–1199 px` | Use 40 px gutters; keep skills/projects in two columns where at least 320 px remains per card; stack the featured-project media and copy below roughly 960 px |
| `< 768 px` | Use 20–24 px gutters; collapse navigation into a compact menu; stack project, skills, contact, footer, and hero columns; remove forced desktop heights |

Specific mobile adaptations:

- Header: keep brand visible, replace centered link row with a menu trigger, and move contact icons into the menu or retain only the primary contact action.
- Hero: content first, portrait second; display heading should use `clamp()` and naturally reflow.
- Work: all card variants become a single column; media keeps an intrinsic aspect ratio.
- Skills and contact: one card per row.
- Timeline: place date/status above each entry, move the line and nodes to the left edge, and let item heights hug content.
- Footer: stack identity, contact statement, and navigation; remove the desktop 398 px fixed reference height.
- Scroll-progress HUD: hide below desktop unless it can be kept clear of content and browser chrome.

## Images and assets

The production-relevant Figma assets were exported into the repository on 2026-08-28. Temporary Figma URLs are not used. Lower-resolution duplicates returned by Figma were inspected and intentionally omitted in favor of their matching high-resolution originals.

### Raster assets

- `src/assets/projects/feelo-dashboard.png` — featured Feelo interface, 1674 × 1284
- `src/assets/projects/aera-perspective.png` — angled Aera device mockup, 540 × 656
- `src/assets/projects/aera-screen.png` — straight Aera screen mockup, 450 × 920
- `src/assets/projects/mofone-hand-tracking.png` — MoFone hand-tracking screen, 450 × 920
- `src/assets/projects/mofone-recording.png` — MoFone recording screen, 450 × 920
- `src/assets/profile/samuel-winoto.jpg` — original profile portrait, 2316 × 3088

### SVG assets

- `src/assets/icons/phone.svg`, `email.svg`, and `linkedin.svg` — compact header icons
- `src/assets/icons/contact-phone.svg`, `contact-email.svg`, and `linkedin-contact.svg` — contact-card exports
- `src/assets/icons/skill-ui-ux-product.svg`
- `src/assets/icons/skill-development.svg`
- `src/assets/icons/skill-ai-ml.svg`
- `src/assets/icons/skill-currently-exploring.svg`
- `src/assets/icons/arrow-download.svg` and `arrow-right.svg` — CTA icons
- `src/assets/icons/status-marker.svg` — mint hero/status marker
- `src/assets/icons/experience-current-decoration.svg` — low-opacity current-experience decoration

Implementation requirements:

- Use the stored Figma exports rather than redrawing them.
- Give every meaningful image useful alternative text; use empty `alt` only for genuinely decorative duplicates.
- Store project imagery under `src/assets/projects/`, portrait imagery under `src/assets/profile/`, and UI icons under `src/assets/icons/`.
- Use explicit width/height or `aspect-ratio` to prevent layout shift.
- Preserve `object-fit: cover` only where the authored crop requires it.

## Hover, focus, and interaction states

### Authored states

Figma contains no reactions or component variants for hover, press, focus, or page transitions. The only explicit state is the active navigation treatment. Everything below is an implementation proposal.

### Proposed interaction system

- Use a consistent 160–200 ms transition with an ease-out curve for color, border, background, and transform.
- Navigation links: secondary text → primary/mint on hover; preserve the mint underline for the active route.
- Primary CTA: `accent-solid` → brighter `accent`, with no large movement.
- Secondary CTA: strong border → accent border and mint text.
- Project/contact cards: subtle border → accent-border; optional `translateY(-2px)` only when pointer precision is available.
- Project media: optional 1–2% scale on card hover, clipped by the card boundary.
- Inline terminal links: secondary/mint → primary text with a visible underline or underline offset.
- Icons: inherit the parent link state; do not animate each glyph independently.
- All interactive elements must have a 2 px `:focus-visible` outline in mint with at least a 2 px offset.
- Pressed state should remove any hover lift and slightly reduce brightness, not scale the entire layout dramatically.
- Respect `prefers-reduced-motion: reduce` by disabling transforms and shortening or removing nonessential transitions.
- Phone, email, LinkedIn, project, and CV actions must use real semantic links (`tel:`, `mailto:`, external `https:`, or download link).

## Proposed React component architecture

The designs are separate page frames, so a small route-based architecture is the cleanest match. `react-router-dom` is not currently installed; add it only when implementation begins, or use an equally explicit route mechanism.

```text
src/
├── app/
│   ├── App.tsx
│   └── routes.tsx
├── components/
│   ├── layout/
│   │   ├── PageContainer.tsx
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   └── PageBackground.tsx
│   ├── navigation/
│   │   ├── PrimaryNav.tsx
│   │   ├── MobileNav.tsx
│   │   └── SocialLinks.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectMedia.tsx
│   │   ├── ProjectMeta.tsx
│   │   └── ProjectTags.tsx
│   ├── experience/
│   │   ├── Timeline.tsx
│   │   └── TimelineItem.tsx
│   └── ui/
│       ├── ButtonLink.tsx
│       ├── ContactCard.tsx
│       ├── SectionHeading.tsx
│       ├── SkillCard.tsx
│       ├── StatusBadge.tsx
│       └── TerminalLink.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── WorkPage.tsx
│   ├── ExperiencePage.tsx
│   └── ContactPage.tsx
├── data/
│   ├── contact.ts
│   ├── experience.ts
│   ├── navigation.ts
│   ├── projects.ts
│   └── skills.ts
├── styles/
│   ├── reset.css
│   ├── tokens.css
│   ├── typography.css
│   └── globals.css
└── assets/
    ├── icons/
    ├── profile/
    └── projects/
```

### Component responsibilities

- `SiteHeader` owns desktop/mobile navigation composition and active-route presentation.
- `SiteFooter` is shared unchanged across all routes and consumes navigation/contact data.
- `PageContainer` centralizes the 1120 px and 1040 px container variants.
- `SectionHeading` handles terminal eyebrow, display title, accent span, and supporting copy.
- `ProjectCard` renders `featured`, `standard`, and `fullWidth` variants from one `Project` model.
- `ButtonLink` covers filled and outlined hero CTAs.
- `TerminalLink` covers small `>` actions used in cards.
- `Timeline` owns line geometry; `TimelineItem` owns semantic content and current/historical variants.
- Content belongs in typed data modules so page components remain compositional and projects can be reordered without rewriting markup.

### Suggested routes

| Route | Page |
| --- | --- |
| `/` | `HomePage` |
| `/work` | `WorkPage` |
| `/experience` | `ExperiencePage` |
| `/contact` | `ContactPage` |

## Implementation acceptance checklist

Before the website implementation is considered design-complete:

- Responsive and interaction proposals have been approved; revisit them only if visual QA reveals a usability issue.
- Contact, CV, and project destinations have been confirmed.
- Rename stale Figma layers or document that visible content is authoritative.
- Exact source assets have been exported and stored in `src/assets/`.
- Add Geist and JetBrains Mono with the authored weights.
- Convert the colors and spacing above into CSS custom properties.
- Test active, hover, focus-visible, pressed, and reduced-motion states.
- Verify 1280 px desktop fidelity and test at 1024, 768, 390, and 320 px widths.
- Check color contrast, keyboard navigation, heading order, link semantics, image alt text, and layout shift.
