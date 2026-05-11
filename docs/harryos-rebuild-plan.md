# HarryOS Rebuild Plan

## 2026-05-11 Update

The site has now been rebuilt around a dark blue-violet neumorphism system instead of the earlier command-center plus Apple-storytelling direction.

Current implementation direction:

- unified dark neumorphic surface system
- responsive full-width layout
- centered primary navigation with right-aligned language switch
- interactive hero scenes with subtle hover depth
- project catalog driven from shared project and tech-stack data
- breadcrumb navigation on secondary routes
- home page absorbs the most important personal/about content
- deployment and security removed from the primary navigation, but their routes still exist as secondary reference pages

Open refinement targets:

- replace remaining placeholder links with real production links
- keep upgrading project-specific hero visuals when more logo and screenshot assets are available
- continue polishing language-specific typography so long Chinese and Dutch titles stay on one line when possible

## Objective

Turn the current Harry portfolio into a command-center home page plus Apple-style project storytelling system, while keeping the codebase maintainable inside the current Vite + React + TypeScript stack.

## Current State Summary

Current strengths:

- existing routing already covers home, projects, detail pages, contact, downloads, and docs
- project data is centralized
- the repo already has deploy and documentation structure

Current issues:

- global CSS is extremely large and mixes old/new directions
- home page is conventional and does not have a strong concept
- project records are not rich enough for case-study storytelling
- styling primitives are not clearly separated from page-specific rules

## Reference Synthesis

From `awesome-design-md`:

- `apple/DESIGN.md`: pacing, sticky storytelling, editorial spacing
- `linear.app/DESIGN.md`: dark software polish, surface hierarchy, restrained accent use
- `raycast/DESIGN.md`: developer-tool identity, command-surface framing
- `framer/DESIGN.md`: selective atmosphere and poster-like headline confidence

Adopt:

- Apple section pacing for project pages
- Linear dark surface discipline for the global system
- Raycast-inspired command center hero and terminal language

Reject:

- Apple white/light-dominant surface system as the primary site shell
- Framer-style large gradient cards as a repeating motif
- Raycast's very product-specific red stripe motif

## Final UX Direction

Home page:

- system arrival
- dark command center
- floating software windows
- featured project story track
- capability constellation
- growth timeline
- terminal CTA

Project pages:

- clean product hero
- sticky case-study sections
- architecture framing
- decision and outcome sections

## Data Model Refactor

Extend current `Project` model toward case-study support.

Suggested additions:

- `role`
- `year`
- `summary`
- `heroLabel`
- `heroVisual`
- `problem`
- `solution`
- `highlights`
- `architecture`
- `storySteps`
- `outcomes`
- `learnings`
- `capabilities`
- `accent`

Potential nested structures:

- `storySteps: { id, label, title, body, visualType, points }[]`
- `architecture: { title, description }[]`
- `outcomes: { label, value, context }[]`

## Codebase Refactor Strategy

### Phase 1 - Foundation

- create new design docs
- introduce a token-driven visual layer
- create shared section/card/badge primitives
- isolate or replace the heaviest legacy CSS sections

### Phase 2 - Content Layer

- redesign project types
- enrich project data
- add capability and timeline content data

### Phase 3 - Home Page

- rebuild hero
- rebuild featured systems section
- rebuild skills and timeline
- rebuild contact terminal

### Phase 4 - Project Pages

- redesign project listing grid
- rebuild project detail page with Apple-style narrative

### Phase 5 - Supporting Pages

- align about, contact, downloads, security pages to the new system
- reduce visual mismatch across routes

### Phase 6 - Cleanup

- remove obsolete classes
- minimize duplicated CSS
- verify responsive behavior

## Implementation Notes

- Start by replacing from the top of the experience down: shell, home, then projects.
- Keep route paths stable where possible.
- Prefer new components over patching more behavior into the current page files.
- If the existing CSS becomes a blocker, replace page areas incrementally instead of trying to preserve every selector.

## Immediate Execution Order

1. Document the design system and rebuild strategy.
2. Refactor the data model to support real case studies.
3. Create new shared layout and UI primitives.
4. Rebuild the home page around the command-center concept.
5. Rebuild project detail pages with sticky story sections.
6. Reconcile remaining pages into the same design language.
7. Run `npm run type-check` and `npm run build`.

## Immediate Follow-Up Tasks After First Rebuild

1. Tighten typography and reduce oversized page intros.
2. Restore language switching and preserve existing utility behavior.
3. Increase content density across supporting pages.
4. Re-check visual choices directly against Apple, Linear, and Raycast design patterns:
   - Apple: pacing and headline restraint
   - Linear: card density, line treatment, dark surface hierarchy
   - Raycast: compact software chrome and command-surface framing
5. Replace any placeholder-feeling copy with authored product language.

## Risks

- legacy CSS collisions during incremental rebuild
- content gaps if project data is not enriched enough
- over-animating before the layout is solid
- shipping a strong home page but weaker detail pages

## Guardrails

- narrative clarity beats spectacle
- keep the home page visually strongest, but not at the expense of detail pages
- every animation must have a content job
- mobile must feel intentional, not stripped-down leftovers
