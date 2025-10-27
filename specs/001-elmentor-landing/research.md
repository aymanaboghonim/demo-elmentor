# Research: Elmentor Landing Page

**Date**: 2025-10-27  
**Objective**: Resolve open implementation questions and document best practices for the Elmentor landing page.

## Decision 1: Bilingual content architecture
- **Decision**: Store text content in locale-specific JSON files (`src/i18n/en.json`, `src/i18n/ar.json`) and hydrate sections via a lightweight translation helper that toggles text direction.
- **Rationale**: Keeps translations editable without touching layout code, supports GitHub Pages static hosting, and allows language toggle to swap content instantly without reloading.
- **Alternatives considered**:
  - Separate HTML files per language (`index-en.html`, `index-ar.html`): rejected because it duplicates layout logic and complicates smooth-scrolling anchors.
  - Client-side i18n library (e.g., i18next): rejected to honor the "minimal dependencies" constraint.

## Decision 2: Embedded form submission on GitHub Pages
- **Decision**: Submit the Join/Contact form to a Formspree endpoint using `fetch`, displaying inline success/error feedback while preventing page navigation.
- **Rationale**: Satisfies FR-008 without provisioning a backend, works with static hosting, and keeps the visitor on the landing page with clear feedback.
- **Alternatives considered**:
  - `mailto:` submission: rejected because it opens an external email client and violates the spec requirement to remain on-page.
  - GitHub Actions-driven form handler: rejected due to high latency and operational complexity for a marketing site.

## Decision 3: Smooth scrolling and RTL layout handling
- **Decision**: Use native `Element.scrollIntoView({ behavior: "smooth" })` with a custom easing fallback for browsers lacking smooth scrolling, and apply logical properties plus `dir` switching to support Arabic RTL layouts.
- **Rationale**: Delivers compliant smooth scrolling within the 1-second window, keeps code lightweight, and ensures right-to-left layouts render correctly without duplicating styles.
- **Alternatives considered**:
  - Including a third-party smooth-scroll library: rejected to keep bundle size low and avoid dependency maintenance.
  - Duplicating CSS files for RTL: rejected in favor of logical properties (`margin-inline`, `padding-inline`) to reduce maintenance overhead.
