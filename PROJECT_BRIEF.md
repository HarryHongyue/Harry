# PROJECT_BRIEF.md - HarryOS Rebuild

## Goal

Rebuild the current Harry portfolio into `HarryOS`, an interactive software portfolio with:

- a command-center home page
- Apple-style project storytelling pages
- stronger project case-study structure
- cleaner content architecture
- a more maintainable design system

## Context

The current site is a Vite + React + TypeScript portfolio shell with:

- broad multi-page navigation
- project catalog and detail pages
- multilingual/localized content
- a large legacy global stylesheet

The current implementation is functional but visually generic for the new goal.
It does not yet express a strong personal concept or a convincing interaction-first narrative.

## Primary Audience

- recruiters evaluating frontend and full-stack craft
- engineers reviewing technical communication quality
- collaborators looking for product taste and execution ability
- hiring managers scanning for memorable differentiation

## What The Site Must Prove

1. Harry can ship polished interfaces, not just functional pages.
2. Harry understands software systems, not just visuals.
3. Harry can connect architecture, UX, and implementation.
4. Harry has recognizable product taste.

## Site Strategy

Home page:

- act like an operating system entry point
- feel immersive, technical, and memorable
- summarize capabilities and featured work quickly

Project detail pages:

- slow the pace down
- explain each project like a launched product
- emphasize problem, architecture, interaction, and outcomes

## Chosen Direction

Home page reference blend:

- Raycast for command-surface framing
- Linear for dark product precision
- Framer only for selective atmosphere, not broad gradient use

Project page reference blend:

- Apple for editorial pacing and sticky narrative
- Linear for software screenshot framing

## Content Model Changes Needed

Current project records are too thin for real case studies.
Projects need richer fields such as:

- summary statement
- role
- timeline or phase
- problem
- solution
- key highlights
- architecture items
- interaction notes
- outcomes or impact
- learnings
- screenshots or visual descriptors
- featured metrics

## Routing Strategy

Keep the current route families but restyle and restructure them:

- `/`
- `/projects`
- `/projects/:slug`
- `/about`
- `/contact`
- `/downloads`
- `/security`

Likely consolidation:

- home page absorbs the strongest parts of about/skills/contact
- about page becomes a quieter supporting page
- project list and project details become more visually consistent

## Design System Requirements

- define a clear token layer
- move away from theme sprawl and repeated overrides
- create reusable section shells and card primitives
- use one dark-first visual language across the site

## Motion Requirements

Phase 1:

- cursor parallax
- sticky project storytelling
- card tilt
- reveal transitions
- terminal interaction cues

Phase 2 optional:

- light 3D hero
- command palette interactions
- architecture diagram animation

## Technical Constraints

- current stack is Vite, React, TypeScript
- network-reliant package changes should be minimized unless needed
- the repo already has existing routes and data files
- legacy CSS must be reduced carefully to avoid accidental regressions

## Deliverables

1. `DESIGN.md`
2. `PROJECT_BRIEF.md`
3. `COMPONENT_SPEC.md`
4. `docs/harryos-rebuild-plan.md`
5. rebuilt UI and content structure
6. verification via build and type-check

## Definition Of Done

- home page reflects the command center concept
- project detail pages use Apple-style narrative structure
- project data supports richer storytelling
- legacy visual clutter is removed
- typography, color, spacing, and motion feel coherent
- responsive and reduced-motion behavior are handled

## Working Rules For Further Iterations

1. Do not remove important existing functionality in the name of visual cleanup.
2. Multi-language navigation must keep working during all redesign rounds.
3. If a page becomes visually stronger but content-thinner, the iteration is incomplete.
4. Prefer denser, more purposeful sections over oversized hero copy and empty space.
5. Supporting pages must inherit the same visual language instead of falling back to generic layouts.
