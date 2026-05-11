# COMPONENT_SPEC.md - HarryOS

## App Shell

### `SiteChrome`

Purpose:
Own global layout, background layers, route transitions, and the compact header/footer shell.

Requirements:

- dark-first canvas
- subtle background atmosphere
- route-aware header styling
- reduced-motion-safe transitions

### `Header`

Purpose:
Persistent, compact navigation that feels like software chrome rather than a marketing navbar.

Requirements:

- translucent dark surface
- clear active route state
- mobile menu without layout jank

## Home Page

### `BootSequence`

Purpose:
Provide a short arrival moment that frames the site as a system booting into HarryOS.

Rules:

- must finish quickly
- must be skippable by reduced-motion users
- should not block content for more than a brief moment

### `HeroCommandCenter`

Purpose:
Primary hero section for the home page.

Content:

- positioning statement
- short supporting copy
- main CTA
- secondary CTA
- visual cluster of software panels

Interaction:

- cursor-aware depth
- animated panel drift
- optional command-palette prompt

### `FloatingSoftwarePanels`

Purpose:
Render code windows, terminal panels, architecture cards, and metrics as the hero visual system.

Rules:

- use lightweight DOM/CSS transforms first
- keep each panel meaningful
- avoid fake lorem ipsum dashboards

### `FeaturedSystemsStory`

Purpose:
A sticky storytelling section on the home page that previews top projects.

Desktop:

- sticky copy column
- visual stack on the opposite side
- scroll progress activates each project

Mobile:

- stacked case-study cards

### `ProjectMemoryGrid`

Purpose:
Show all projects in a more editorial grid after the featured story.

Rules:

- cards should feel like software modules
- include role, stack, and one impact statement
- 3D hover only on pointer-capable devices

### `SkillConstellation`

Purpose:
Show capabilities as grouped systems rather than a logo wall.

Content groups:

- Frontend Systems
- Interactive Interfaces
- AI Product Engineering
- Backend and Data
- Developer Tooling

Behavior:

- hovering a capability can reveal related projects or notes

### `TimelineRail`

Purpose:
Present growth as a capability path, not a resume dump.

Desktop:

- horizontal or segmented narrative rail

Mobile:

- stacked progression cards

### `TerminalContact`

Purpose:
Strong end-of-page CTA with developer personality.

Behavior:

- command-style prompts
- clear links for email, GitHub, LinkedIn, resume
- keyboard-focus friendly

## Projects Listing

### `ProjectsIndexHero`

Purpose:
Introduce the project catalog with a calmer but still branded presentation.

### `ProjectFilterBar`

Purpose:
Filter by capability or project type without overwhelming the page.

### `ProjectIndexCard`

Purpose:
Compact project entry for listing pages.

Content:

- name
- tagline
- category
- stack summary
- one outcome or proof point

## Project Detail Page

### `ProjectHeroScene`

Purpose:
Open each project like a product landing page.

Content:

- title
- tagline
- role
- stack
- top actions
- visual frame or mockup

### `StickyCaseStudy`

Purpose:
Core Apple-style narrative module for project pages.

Structure:

- left sticky editorial content
- right visual frame
- multiple story steps

Each step should map to:

- problem
- system
- interaction
- impact

### `ArchitectureStrip`

Purpose:
Show the major system pieces without overloading readers.

Visual language:

- cards
- arrows
- flow labels
- restrained code-window style

### `TechnicalDecisionList`

Purpose:
Explain tradeoffs and engineering choices with proof.

### `OutcomeMetrics`

Purpose:
Summarize what the project delivered or what was learned.

### `RelatedProjects`

Purpose:
Cross-link similar projects or adjacent capability areas.

## Shared Primitives

### `SectionShell`

Purpose:
Control width, spacing, and section background variants.

### `Eyebrow`

Purpose:
Small system label above major headlines.

### `GlassCard`

Purpose:
Reusable translucent or graphite panel for hero and system content.

### `SystemBadge`

Purpose:
Unified badge for stack, role, status, category, or metric labels.

### `MetricPill`

Purpose:
Small metric component for quick proof points.

### `StoryFrame`

Purpose:
Frame screenshots, code windows, architecture cards, or terminal visuals consistently.

## Responsive Rules

- Sticky storytelling becomes stacked cards on smaller screens.
- Cursor-dependent motion disables on touch devices.
- Dense multi-panel hero simplifies to a single visual stack on mobile.
- Typography should stay bold but not collapse into oversized line wraps.

## Density Rules

- Header height should remain visually compact.
- Large headlines should be used sparingly and scaled down on secondary pages.
- Section intros should not dominate the viewport before content appears.
- Cards should expose useful content within the first screenful on laptop displays.

## Language Rules

- Header owns language switching.
- Core navigational content must be localized.
- Section headings and major CTA copy should be localizable even if lower-priority details remain English-first temporarily.

## Accessibility Rules

- focus states remain visible
- interactive cards remain keyboard reachable
- motion respects user preference
- content order remains logical without visuals
