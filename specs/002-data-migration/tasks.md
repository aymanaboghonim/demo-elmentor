# Tasks: Real Data Migration from Elmentor Website

**Input**: Design documents from `/specs/002-data-migration/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Content verification through side-by-side comparison with production site. JSON schema validation for data files.

**Organization**: Tasks are grouped by section to enable independent implementation and testing.

## Phase 1: Data Extraction & Documentation

**Purpose**: Extract all real content from production website and document data structure.

- [X] T001 Scrape About section content (mission, values, offerings) from production site in English and Arabic
- [X] T002 Extract Circles data (6 levels with names/descriptions) from production site
- [X] T003 Extract Activities data (6 categories with items) from production site
- [X] T004 Extract Founder profile (bio, credentials, social links) from production site
- [X] T005 Extract Community Gatherings (events with dates, locations, images) from production site
- [X] T006 Extract News items (title, date, summary, links) from production site
- [X] T007 Document data structure and create JSON schemas for each section
- [X] T008 Verify all extracted external links (LinkedIn, GitHub, YouTube, news sources)
- [X] T009 Download and optimize images (founder photo, gathering photos, circles diagram)

---

## Phase 2: Data File Creation

**Purpose**: Create structured JSON data files with real content.

- [ ] T010 Create `src/assets/data/about.json` with mission, values, and offerings (bilingual)
- [ ] T011 Update `src/assets/data/circles.json` with 6 real circle definitions (bilingual)
- [ ] T012 Create `src/assets/data/activities.json` with 6 categories and items (bilingual)
- [ ] T013 Create `src/assets/data/founder.json` with Mohamed Radwan profile and links
- [ ] T014 Create `src/assets/data/gatherings.json` with community event data
- [ ] T015 Update `src/assets/data/news.json` with real news items (sorted by date)
- [ ] T016 Validate all JSON files for syntax and schema correctness
- [ ] T017 Update `src/i18n/en.json` with missing section labels and translations
- [ ] T018 Update `src/i18n/ar.json` with verified Arabic translations

---

## Phase 3: About Section Implementation (US1)

**Goal**: Replace placeholder about content with real Elmentor mission and offerings.

**Independent Test**: Load About section and verify content matches production site exactly.

- [ ] T019 [US1] Update `src/sections/about.js` to import and use `about.json`
- [ ] T020 [US1] Render mission statement from data file
- [ ] T021 [US1] Render core values list from data file
- [ ] T022 [US1] Render "What We Offer" items from data file
- [ ] T023 [US1] Test bilingual display toggle for About section
- [ ] T024 [US1] Verify content accuracy against production site

---

## Phase 4: Circles Section Implementation (US2)

**Goal**: Display authentic 6-level Elmentor Circles hierarchy.

**Independent Test**: Verify all 6 circles display with correct names and descriptions in both languages.

- [ ] T025 [US2] Update `src/sections/circles.js` to use real circles.json data
- [ ] T026 [US2] Render 6 circle cards in hierarchical order (Audience → Executives)
- [ ] T027 [US2] Display circle names and descriptions from data
- [ ] T028 [US2] Add circles diagram image (optional visual enhancement)
- [ ] T029 [US2] Test bilingual display for all circle descriptions
- [ ] T030 [US2] Verify circles match production site structure

---

## Phase 5: Activities Section Implementation (US3)

**Goal**: Organize activities into 6 categories with real content.

**Independent Test**: Confirm 6 activity categories display with authentic items.

- [ ] T031 [US3] Create `src/sections/activities.js` to use activities.json
- [ ] T032 [US3] Render 6 activity categories (Technical Skills, Soft Skills, etc.)
- [ ] T033 [US3] Display activity items under each category
- [ ] T034 [US3] Add category-specific styling or icons
- [ ] T035 [US3] Test bilingual display for categories and items
- [ ] T036 [US3] Verify activities match production site content

---

## Phase 6: Founder Section Implementation (US4)

**Goal**: Display Mohamed Radwan's authentic profile and credentials.

**Independent Test**: Verify founder name, title, bio, and 3+ social links work correctly.

- [ ] T037 [US4] Update `src/sections/founder.js` to use founder.json
- [ ] T038 [US4] Display founder name and full credentials
- [ ] T039 [US4] Render authentic bio content
- [ ] T040 [US4] Add working social links (LinkedIn, GitHub, Blog, YouTube)
- [ ] T041 [US4] Add founder photo if available
- [ ] T042 [US4] Test all external links navigate correctly
- [ ] T043 [US4] Verify content matches production site

---

## Phase 7: Community Gatherings Section Implementation (US5)

**Goal**: Create new section displaying community gathering events.

**Independent Test**: Verify 3+ gatherings display with location, date, and images.

- [ ] T044 [US5] Create `src/sections/gatherings.js` component
- [ ] T045 [US5] Import and use gatherings.json data
- [ ] T046 [US5] Render gathering cards with title, location, date
- [ ] T047 [US5] Display gathering images (from GitHub raw URLs or local)
- [ ] T048 [US5] Create `src/assets/styles/gatherings.css` for section styling
- [ ] T049 [US5] Add gatherings section to main layout in `src/main.js`
- [ ] T050 [US5] Add navigation link for gatherings section
- [ ] T051 [US5] Test bilingual display for gathering content
- [ ] T052 [US5] Verify gatherings match production site events

---

## Phase 8: News Section Implementation (US6)

**Goal**: Replace mock news with real news items.

**Independent Test**: Confirm news displays real items sorted by date with working links.

- [ ] T053 [US6] Update `src/sections/news.js` to use real news.json data
- [ ] T054 [US6] Remove mock/placeholder news content
- [ ] T055 [US6] Render news items sorted by most recent first
- [ ] T056 [US6] Display title, date, summary, and external link for each item
- [ ] T057 [US6] Test "Read more" links navigate to correct sources
- [ ] T058 [US6] Test bilingual display for news titles and summaries
- [ ] T059 [US6] Verify news content matches production site

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Final testing, documentation, and deployment.

- [ ] T060 Perform side-by-side content comparison with production site
- [ ] T061 Verify all external links work (social, news, resources)
- [ ] T062 Test all images load correctly
- [ ] T063 Test complete bilingual functionality across all sections
- [ ] T064 Verify no performance regression (load time, bundle size)
- [ ] T065 Create data source documentation in `specs/002-data-migration/data-extraction.md`
- [ ] T066 Update quickstart.md with data migration results
- [ ] T067 Run build and verify production bundle
- [ ] T068 Deploy to GitHub Pages and test live site

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Data Extraction)** → prerequisite for all other phases
- **Phase 2 (Data File Creation)** → depends on Phase 1; blocks all implementation phases
- **Phase 3-8 (Section Implementation)** → depend on Phase 2; can run in parallel once data files exist
- **Phase 9 (Polish)** → depends on completion of all section implementations

### User Story Dependencies

- **US1-US6** are independent once Phase 2 is complete
- Each US can be implemented and tested separately
- US5 (Gatherings) requires new component creation

### Within-Phase Ordering

- Data extraction (T001-T009) must complete before data file creation (T010-T018)
- JSON files must be created before component updates
- Component updates precede bilingual testing
- Content verification is final step for each section

### Parallel Opportunities

- After Phase 2, all section implementations (Phases 3-8) can run in parallel
- Data extraction tasks (T001-T006) can run concurrently
- Image download/optimization (T009) can run parallel to data extraction
- Testing tasks within each section can overlap

---

## Implementation Strategy

### Data-First Approach

1. Complete Phases 1-2 (Data Extraction & File Creation) fully before starting components
2. Validate all JSON files before proceeding to implementation
3. Ensure bilingual content is complete and accurate

### Section-by-Section Implementation

1. Implement one section completely (code + test + verify) before moving to next
2. Recommended order: About → Circles → Activities → Founder → News → Gatherings
3. This allows for incremental testing and validation

### Testing Strategy

- Manual side-by-side comparison with production site for each section
- Automated JSON schema validation
- Bilingual testing after each section implementation
- Final cross-browser and performance testing

### Deployment Flow

- After each section is complete and verified, commit changes
- Run build to ensure no errors
- Deploy to staging/preview environment for review
- Final deployment after all sections complete

---

## Data Quality Checklist

For each section, verify:
- [ ] Content matches production site 100%
- [ ] Bilingual support (English/Arabic) complete
- [ ] All external links work
- [ ] Images load correctly
- [ ] JSON schema valid
- [ ] No hardcoded content in components
- [ ] i18n labels properly used

---

*Created 2025-10-27 for systematic real data migration from Elmentor production website*
