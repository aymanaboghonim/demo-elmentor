# Tasks: Elmentor Landing Page

**Input**: Design documents from `/specs/001-elmentor-landing/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Story-specific automated tests are included where they strengthen acceptance confidence. Final QA and deployment verification occur in the Polish phase.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Vite project and baseline structure required for all subsequent work.

- [ ] T001 Initialize Vite 5 vanilla JavaScript scaffold updating `package.json`, `vite.config.js`, and `index.html` at the repository root.
- [ ] T002 Install ESLint, Prettier, Vitest, @testing-library/dom, and configure npm scripts in `package.json`.
- [ ] T003 Create baseline folders and placeholder imports in `src/main.js`, `src/components/`, `src/sections/`, `src/assets/styles/`, `src/i18n/`, `src/assets/data/`, and `tests/`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared utilities, styling, and localization infrastructure required by every user story.

- [ ] T004 Build root render pipeline in `src/main.js` to mount section containers and load shared CSS.
- [ ] T005 Author initial bilingual dictionaries with section keys in `src/i18n/en.json` and `src/i18n/ar.json`.
- [ ] T006 [P] Implement direction helpers to toggle `dir` and logical properties in `src/utils/rtl-helpers.js`.
- [ ] T007 [P] Implement header language toggle controller in `src/components/language-toggle.js`.
- [ ] T008 [P] Implement smooth scrolling utility for internal anchors in `src/components/smooth-scroll.js`.
- [ ] T009 [P] Establish global typography, spacing, and utility classes in `src/assets/styles/globals.css` and `src/assets/styles/sections.css`.
- [ ] T010 Define section anchor containers and root layout shell in `index.html` to support smooth navigation.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

---

## Phase 3: User Story 1 - Discover & Express Interest (Priority: P1) 🎯 MVP

**Goal**: Ensure visitors immediately understand the program’s mission, can toggle languages, and submit interest via the on-page Join form.

**Independent Test**: In English and Arabic, confirm hero communicates mission within 10 seconds, CTA scrolls to Join section, and form submission shows inline success without leaving the page.

### Tests for User Story 1

- [ ] T011 [US1] Create smooth-scroll CTA smoke test covering hero-to-join interaction in `tests/smoke/smooth-scroll.spec.js`.

### Implementation for User Story 1

- [ ] T012 [US1] Implement navigation + hero markup, copy bindings, and CTA button in `src/sections/hero.js`.
- [ ] T013 [US1] Wire hero CTA to smooth-scroll handler and register hero/nav anchors in `src/main.js`.
- [ ] T014 [US1] Implement bilingual Join/Contact form markup with role selector in `src/sections/join.js`.
- [ ] T015 [US1] Implement Formspree submission workflow with success/error states in `src/components/form-handler.js`.
- [ ] T016 [US1] Apply hero and join layout styling, gradients, and focus states in `src/assets/styles/sections.css`.
- [ ] T017 [US1] Populate hero, navigation, and join translations plus CTA labels in `src/i18n/en.json` and `src/i18n/ar.json`.

**Checkpoint**: User Story 1 independently delivers the MVP funnel and bilingual CTA experience.

---

## Phase 4: User Story 2 - Explore Program Depth (Priority: P2)

**Goal**: Provide detailed About, Circles, and Activities & Benefits sections so visitors can evaluate relevance before committing.

**Independent Test**: Confirm visitors can name three circles and three benefits after scanning mid-page sections in either language.

### Tests for User Story 2

- [ ] T018 [US2] Add render test ensuring four circle cards and activity list appear per locale in `tests/dom/circles-section.spec.js`.

### Implementation for User Story 2

- [ ] T019 [US2] Implement About section content block with bilingual copy in `src/sections/about.js`.
- [ ] T020 [US2] Define circle dataset structure and ordering in `src/assets/data/circles.json`.
- [ ] T021 [US2] Implement Circles section to iterate dataset and render descriptors in `src/sections/circles.js`.
- [ ] T022 [US2] Implement Activities & Benefits grid layout in `src/sections/activities.js`.
- [ ] T023 [US2] Extend translations for about, circles, and activities items in `src/i18n/en.json` and `src/i18n/ar.json`.
- [ ] T024 [P] [US2] Apply responsive layouts and iconography for mid-page sections in `src/assets/styles/sections.css`.
- [ ] T025 [US2] Register about, circles, and activities sections with navigation anchors in `src/main.js`.

**Checkpoint**: User Stories 1 and 2 both operate independently, enabling deeper exploration.

---

## Phase 5: User Story 3 - Trust & Context Building (Priority: P3)

**Goal**: Present founder vision and current updates with bilingual support and graceful fallback messaging to build trust.

**Independent Test**: Confirm founder name and vision render in both languages, news items sort newest-first, and fallback copy displays when no updates exist.

### Tests for User Story 3

- [ ] T026 [US3] Add fallback test asserting localized "Updates coming soon" renders with empty data in `tests/dom/news-fallback.spec.js`.

### Implementation for User Story 3

- [ ] T027 [US3] Implement Founder Story section with portrait support in `src/sections/founder.js`.
- [ ] T028 [US3] Implement News & Updates section with chronological sorting and fallback in `src/sections/news.js`.
- [ ] T029 [US3] Add optional updates dataset template in `src/assets/data/news.json` and integrate with news rendering.
- [ ] T030 [US3] Populate founder and news translations plus fallback strings in `src/i18n/en.json` and `src/i18n/ar.json`.
- [ ] T031 [P] [US3] Style founder and news sections, emphasizing trust cues, in `src/assets/styles/sections.css`.
- [ ] T032 [US3] Register founder and news sections within navigation + smooth-scroll sequencing in `src/main.js`.

**Checkpoint**: All priority stories function independently with trust-building content.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finalize responsiveness, accessibility, documentation, and deployment to GitHub Pages.

- [ ] T033 Implement mobile and tablet breakpoints across sections in `src/assets/styles/sections.css`.
- [ ] T034 Harden accessibility by adding aria labels, focus management, and reduced-motion guards in `src/sections/hero.js`, `src/sections/join.js`, and `src/components/language-toggle.js`.
- [ ] T035 Update bilingual QA and smoke-test checklist in `specs/001-elmentor-landing/quickstart.md`.
- [ ] T036 Configure GitHub Pages workflow for Vite build in `.github/workflows/deploy.yml`.
- [ ] T037 Set Vite base path and deploy scripts for Pages in `vite.config.js` and `package.json`.
- [ ] T038 Run `npm run test`, `npm run build`, and document results plus deployment URL in `specs/001-elmentor-landing/quickstart.md`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)** → prerequisite for all other phases.
- **Phase 2 (Foundational)** → depends on Phase 1; blocks every user story until complete.
- **Phase 3 (US1)** → starts after Phase 2; delivers MVP.
- **Phase 4 (US2)** and **Phase 5 (US3)** → start after Phase 2; may run in parallel once their dependencies from Phases 1-2 are satisfied.
- **Phase 6 (Polish)** → begins after desired user stories finish.

### User Story Dependencies

- **US1** has no story-level dependencies once foundations exist.
- **US2** relies on shared localization/utilities from Phase 2 but not on US1 deliverables.
- **US3** relies on the same foundation; it only touches news data, so it can run parallel to US2.

### Within-Story Ordering

- Story-specific tests (T011, T018, T026) precede implementation.
- Section components precede styling adjustments that reference their markup.
- Navigation registration in `src/main.js` follows individual section creation.

### Parallel Opportunities

- Marked `[P]` tasks (T006, T007, T008, T009, T024, T031) can execute concurrently once prerequisites complete.
- After Phase 2, teams can tackle US1, US2, and US3 in parallel streams provided their internal order is respected.

---

## Parallel Execution Examples

### User Story 1

```text
T012 [US1] Implement navigation + hero markup in src/sections/hero.js
T014 [US1] Implement bilingual Join/Contact form in src/sections/join.js
T016 [US1] Apply hero and join styling in src/assets/styles/sections.css
```

These can be split once T011 completes; styling (T016) waits for markup (T012, T014).

### User Story 2

```text
T020 [US2] Define circle dataset in src/assets/data/circles.json
T021 [US2] Implement Circles section in src/sections/circles.js
T024 [P] [US2] Apply responsive layouts in src/assets/styles/sections.css
```

Dataset and section implementation can proceed together; styling runs in parallel once structure stabilizes.

### User Story 3

```text
T027 [US3] Implement Founder Story section in src/sections/founder.js
T028 [US3] Implement News & Updates section in src/sections/news.js
T031 [P] [US3] Style founder and news sections in src/assets/styles/sections.css
```

Sections can be developed side-by-side with styling following immediately after.

---

## Implementation Strategy

### MVP First (User Story 1)

1. Complete Phases 1 and 2 to establish tooling, localization, and utilities.
2. Deliver Phase 3 (US1) to launch a functional bilingual hero + join funnel.
3. Validate using T011 and manual checks before progressing.

### Incremental Delivery

1. Add Phase 4 (US2) to deepen content after MVP validation.
2. Add Phase 5 (US3) to layer in trust-building content.
3. Finish with Phase 6 polish steps before public release.

### Deployment Flow

- After each completed phase, run `npm run test` and `npm run build` to ensure stability.
- Deploy to GitHub Pages once Polish tasks T033–T038 are complete, following the quickstart guide updates.
