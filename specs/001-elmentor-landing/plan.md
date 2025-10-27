# Implementation Plan: Elmentor Landing Page

**Branch**: `001-elmentor-landing` | **Date**: 2025-10-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-elmentor-landing/spec.md`

## Summary

Deliver a bilingual, responsive marketing page for the Elmentor Program using Vite 5 with vanilla HTML, CSS, and JavaScript. Content loads from structured JSON dictionaries, sections are assembled via lightweight modules, smooth scrolling is handled natively, and the embedded interest form submits asynchronously to a static-friendly form service while keeping visitors on-page.

## Technical Context

**Language/Version**: JavaScript (ES2023) with Vite 5 toolchain  
**Primary Dependencies**: Vite 5 core, Formspree REST endpoint (client-side fetch only)  
**Storage**: N/A (static assets only)  
**Testing**: Vitest + @testing-library/dom for interaction tests; manual Lighthouse/axe runs documented  
**Target Platform**: Modern desktop & mobile browsers served via GitHub Pages  
**Project Type**: Single-page static web frontend  
**Performance Goals**: Hero render and language toggle copy visible in <1s; smooth scroll completes within 1s; bundle under 200KB gzipped  
**Constraints**: No backend, minimal third-party JS, must support LTR/RTL, offline-safe static assets  
**Scale/Scope**: Single marketing page (~8 sections) with low concurrent traffic but global reach

## Constitution Check

No explicit governance rules defined in `.specify/memory/constitution.md`; no gates triggered. Proceed while ensuring future updates revisit once the constitution is populated.

## Project Structure

### Documentation (this feature)

```

├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── checklists/
```

### Source Code (repository root)

```
.
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── images/           # Optimized JPEG/PNG/SVG assets
├── src/
│   ├── main.js           # Bootstraps language state and section rendering
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── sections.css
│   │   └── data/
│   │       └── circles.json
│   ├── i18n/
│   │   ├── en.json
│   │   └── ar.json
│   ├── components/
│   │   ├── language-toggle.js
│   │   ├── smooth-scroll.js
│   │   └── form-handler.js
│   ├── sections/
│   │   ├── hero.js
│   │   ├── about.js
│   │   ├── circles.js
│   │   ├── activities.js
│   │   ├── founder.js
│   │   ├── news.js
│   │   ├── join.js
│   │   └── footer.js
│   └── utils/
│       └── rtl-helpers.js
└── tests/
    ├── dom/
    │   └── language-toggle.spec.js
    └── smoke/
        └── smooth-scroll.spec.js
```

**Structure Decision**: Single Vite frontend project colocating assets and section modules; tests live alongside `src/` under `tests/` to keep the static bundle clean and support automated checks without bundling test code.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|--------------------------------------|
| External form endpoint | Required to deliver embedded form submissions without backend | GitHub Pages cannot process form posts; mailto link would break on-page submission requirement |

