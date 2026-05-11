# DESIGN.md - HarryOS

## Product Vision

HarryOS is an interactive software engineering portfolio.
It should feel like entering a premium software command center that opens into cinematic product stories.
The site must prove four things at once:

- Harry can design polished product experiences.
- Harry can structure real systems and explain them clearly.
- Harry can build interaction-heavy interfaces without losing usability.
- Harry can turn technical work into a memorable narrative.

## Experience Model

The site uses two visual modes:

- Home page: Route 1, software command center.
- Project detail pages: Route 2, Apple-style product storytelling.

This split is intentional.
The home page should feel like entering Harry's operating system.
The project pages should feel like stepping into focused case studies with cleaner pacing and larger editorial sections.

## Brand Personality

- Technical but human
- Cinematic but disciplined
- Premium but not corporate
- Dark and atmospheric but still readable
- Experimental in interaction, conservative in information clarity
- Memorable because of system craft, not random spectacle

## Core Narrative

The page should communicate:

`I design and build software systems that feel fast, intelligent, and alive.`

Secondary framing:

- I work across frontend systems, AI product engineering, backend/data flows, and delivery polish.
- I care about architecture, interaction design, performance, and narrative clarity.

## Visual Direction

Primary inspirations to blend:

- Apple: long-form product pacing, sticky story sections, editorial whitespace
- Linear: dark software sophistication, precise hierarchy, quiet premium feel
- Raycast: command-palette energy, developer-tool atmosphere, product-as-interface framing

Use:

- dark canvases
- near-black surfaces
- glass and graphite panels
- code-window and terminal metaphors
- large typography with tight rhythm
- subtle cyan-blue accents
- occasional restrained violet support accents
- UI-inspired diagrams and data-flow visuals

Avoid:

- generic neon cyberpunk
- random blob gradients
- overusing purple
- template portfolio cards
- fake dashboards with no meaning
- heavy 3D assets
- motion that delays reading

## Color System

Foundation:

- Obsidian: `#05060A`
- Deep Navy: `#0A1020`
- Graphite: `#111827`
- Surface 1: `#0F172A`
- Surface 2: `#121A2B`
- Surface 3: `#182235`

Text:

- Warm White: `#F8FAFC`
- Soft Slate: `#CBD5E1`
- Muted Slate: `#94A3B8`
- Quiet Slate: `#64748B`

Accents:

- Signal Cyan: `#38BDF8`
- Signal Cyan Strong: `#0EA5E9`
- Support Violet: `#8B5CF6`
- Success Green: `#22C55E`
- Warning Amber: `#F59E0B`

Rules:

- Cyan is the primary interaction color.
- Violet is support only, never the dominant wash.
- Green appears for status or system health only.
- Large backgrounds should stay dark, layered, and restrained.

## Typography

Headings:

- Use a modern grotesk or geometric sans with strong presence.
- Feel should land between product marketing and software UI.
- Tight tracking on large headlines.

Body:

- Calm, readable, mid-density paragraphs.
- Avoid long marketing copy blocks.

Monospace:

- Use for metrics, commands, tags, architecture labels, and terminal interactions.

Tone:

- Short, high-confidence sentences
- Proof over buzzwords
- Product language over resume language

## Layout Principles

- Large, memorable first screen
- Each section should prove a capability
- Prefer wide editorial bands over dense card walls
- Home page should alternate between atmospheric scenes and precise software panels
- Project detail pages should use sticky, scroll-led storytelling
- Mobile layouts must simplify, not mimic desktop theatrics

## Motion Principles

Motion should reveal system behavior.

Use:

- cursor-aware parallax in hero
- subtle 3D hover on cards
- sticky scroll narrative for featured projects
- gradual content reveal tied to scroll progress
- light terminal typing or command execution moments
- panel shimmer and scan-line accents used sparingly

Avoid:

- bouncy animations
- constant floating everywhere
- oversized page-load delays
- scroll hijacking
- long auto-playing loops that distract from reading

Accessibility:

- honor `prefers-reduced-motion`
- never hide essential copy behind animation states
- maintain keyboard visibility

## Information Architecture

Home page sections:

1. Boot Sequence / arrival
2. Hero Command Center
3. Featured Systems
4. Engineering Stack
5. Growth Timeline
6. Selected Project Grid
7. Contact Terminal

Project detail page sections:

1. Product Hero
2. Problem
3. System Architecture
4. Interaction Story
5. Technical Decisions
6. Outcome / Learnings
7. Links / Related Projects

## Component Direction

Home-specific components:

- BootOverlay
- HeroCommandCenter
- FloatingSoftwarePanels
- CommandPaletteCTA
- FeaturedSystemsStory
- SkillConstellation
- TimelineRail
- TerminalContact

Shared components:

- SectionShell
- Eyebrow
- MetricPill
- SystemBadge
- GlassCard
- StoryFrame
- CaseStudyPanel
- LinkCluster

Project-page components:

- ProjectHeroScene
- StickyCaseStudy
- ArchitectureStrip
- TechnicalDecisionList
- OutcomeMetrics

## Interaction Requirements

- Home hero responds to cursor position with subtle depth.
- Featured systems section uses sticky storytelling on desktop.
- Project cards tilt slightly on hover and flatten on touch devices.
- At least one section uses code-window framing as a narrative device.
- Contact area behaves like a lightweight terminal interface.
- Mobile degrades sticky experiences into stacked editorial cards.

## Accessibility

- Maintain strong contrast in all major sections.
- Use semantic sections and headings.
- Ensure keyboard navigation works in nav, CTAs, and project links.
- Preserve readable focus states.
- Decorative visuals must not be required for comprehension.

## Performance

- Prefer CSS and lightweight motion for most effects.
- Avoid mandatory WebGL in v1.
- Lazy-load heavy visual components if 3D is added later.
- Compress project imagery and use responsive asset sizing.
- Keep first-screen interaction smooth on modern laptops.

## Engineering Direction For This Repo

Current repo is Vite + React + TypeScript, not Next.js.
For this rebuild:

- preserve Vite unless migration becomes necessary later
- modernize the design system inside the current stack
- reorganize data for richer case-study content
- reduce legacy CSS sprawl
- prefer component-scoped structure backed by a single token system

## Success Criteria

The redesign succeeds if:

- the homepage has a strong first impression and distinct identity
- project detail pages feel like real product case studies
- the site better communicates technical depth than the current catalog shell
- the motion feels premium but not gratuitous
- the codebase becomes easier to extend than the current CSS-heavy version

## Page-Specific Rhythm

### Home Page

- hero should feel layered and software-native
- headline should be strong but not oversized to the point of empty space
- supporting copy should sit near 60 to 68 characters per line
- panels should read as real software fragments, not decorative filler

### Project Detail Pages

- open with product context quickly
- reduce dead vertical space before the first useful proof point
- keep every long section tied to either problem, system, interaction, or result
- use dark software surfaces for mockups and architecture frames
- keep copy blocks editorial, not dashboard-like

## Navigation Rules

- header should stay compact
- nav labels should be short
- language switcher must always remain available
- mobile nav should open in-place, not as a giant visual interruption

## Content Density Rules

- avoid single-sentence sections unless they are deliberate interstitials
- every major page should have at least one proof-oriented block
- project summaries should include role, stack, and a meaningful technical point
- supporting pages must still feel authored, not placeholder shells

## Interaction Constraints

- command center hero may use layered hover depth, but only lightly
- sticky storytelling should degrade cleanly on mobile
- buttons should feel compact and software-like, not oversized marketing pills
- cards should use precise hairlines and restrained glows instead of broad soft blobs
