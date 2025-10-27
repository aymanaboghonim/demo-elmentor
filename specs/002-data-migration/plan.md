# Implementation Plan: Real Data Migration from Elmentor Website

**Branch**: `002-data-migration` | **Date**: 2025-10-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-data-migration/spec.md`

## Summary

Extract authentic Elmentor Program content from the production website (https://elmentorprogram.github.io/) and populate the demo-elmentor landing page with real data. This includes mission statements, circles definitions, activities, founder information, community gatherings, and news items. All content will be bilingual (English/Arabic) and sourced from verified production data.

## Technical Context

**Language/Version**: JavaScript (ES2023) with Vite 5 toolchain  
**Primary Dependencies**: Vite 5 core, existing i18n infrastructure  
**Data Sources**: Production website HTML/JSON, GitHub repository raw content  
**Storage**: JSON data files in `src/assets/data/`, i18n translation files  
**Testing**: Manual content verification, automated JSON validation  
**Target Platform**: Modern desktop & mobile browsers served via GitHub Pages  
**Project Type**: Data migration and content update  
**Performance Goals**: No performance degradation, maintain <1s load time  
**Constraints**: Must preserve existing site structure, bilingual support mandatory  
**Scale/Scope**: ~20 data entities across 6 sections with 100+ content items

## Constitution Check

No explicit governance rules defined in `.specify/memory/constitution.md`; no gates triggered. Proceed while ensuring content accuracy and bilingual support.

## Project Structure

### Documentation (this feature)

```
specs/002-data-migration/
├── spec.md
├── plan.md
├── tasks.md
├── data-extraction.md (data mapping and sources)
└── quickstart.md
```

### Data Files (repository)

```
src/assets/data/
├── about.json          # About section content
├── circles.json        # Circles hierarchy (already exists, will update)
├── activities.json     # Activities by category
├── founder.json        # Founder profile and links
├── gatherings.json     # Community gathering events
└── news.json           # News items (already exists, will update)
```

### i18n Files (repository)

```
src/i18n/
├── en.json            # English translations (will update)
└── ar.json            # Arabic translations (will update)
```

### Affected Sections (repository)

```
src/sections/
├── about.js           # Will update to use about.json
├── circles.js         # Will update with real circle data
├── activities.js      # Will update to use activities.json
├── founder.js         # Will update to use founder.json
├── news.js            # Will update with real news
└── (new) gatherings.js  # Will create for community gatherings
```

**Structure Decision**: Separate JSON data files for each major section enables easy updates and maintains separation of concerns. i18n files will be updated with production-verified translations.

## Implementation Approach

### Phase 1: Data Extraction & Mapping

1. **Manual Content Scraping**
   - Extract content from production website HTML
   - Document data structure for each section
   - Map English/Arabic pairs
   - Verify social links and external URLs

2. **Data Structure Definition**
   - Define JSON schemas for each data file
   - Ensure consistency with existing structure
   - Plan for future extensibility

3. **Content Verification**
   - Cross-reference with GitHub repository
   - Verify accuracy of translations
   - Validate external links

### Phase 2: Data File Creation

1. **Create/Update JSON Files**
   - `about.json`: Mission, values, offerings
   - `circles.json`: 6 circle levels with descriptions
   - `activities.json`: 6 categories with items
   - `founder.json`: Profile, bio, social links
   - `gatherings.json`: Event data with images
   - `news.json`: Real news items with links

2. **Update i18n Files**
   - Add missing translations
   - Verify Arabic content accuracy
   - Ensure consistency across sections

### Phase 3: Component Updates

1. **Update Existing Components**
   - Modify `about.js` to consume `about.json`
   - Update `circles.js` with real data
   - Enhance `activities.js` for categories
   - Update `founder.js` with profile data
   - Populate `news.js` with real items

2. **Create New Components**
   - Build `gatherings.js` for community events
   - Add to main layout and navigation

3. **Image Handling**
   - Download and optimize images locally
   - Or configure CDN/GitHub raw URLs
   - Update asset references

### Phase 4: Testing & Validation

1. **Content Accuracy**
   - Side-by-side comparison with production
   - Verify all links work
   - Check bilingual display

2. **Functional Testing**
   - Language toggle works correctly
   - All images load
   - External links open correctly

3. **Performance Testing**
   - No performance regression
   - Images optimized
   - Load time < 1s

## Data Extraction Strategy

### Content Sources

| Section | Source URL | Data Points |
|---------|-----------|-------------|
| About | https://elmentorprogram.github.io/#about | Mission, values, offerings |
| Circles | https://elmentorprogram.github.io/#circles | 6 circle definitions |
| Activities | https://elmentorprogram.github.io/#activities | 6 categories, 15+ items |
| Founder | https://elmentorprogram.github.io/#founder | Bio, credentials, 4 links |
| Gatherings | https://elmentorprogram.github.io/#community-gathering | 3 events |
| News | https://elmentorprogram.github.io/#news | Real news items |

### Image Assets

| Asset Type | Source | Strategy |
|------------|--------|----------|
| Founder Photo | GitHub raw | Copy locally |
| Circles Diagram | Production CDN | Copy locally |
| Gathering Photos | GitHub raw | Reference URLs |
| Icons | Existing/Create | Local assets |

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Broken external links | Medium | Verify all links before deployment |
| Large image files | Low | Optimize/compress before copying |
| Translation inconsistency | Medium | Use production site translations |
| Content drift over time | Low | Document update process |
| Missing Arabic content | High | Extract from production or translate |

## Success Metrics

- ✅ All sections display real content
- ✅ 100% bilingual support maintained
- ✅ Zero broken links
- ✅ All images load correctly
- ✅ Content matches production site
- ✅ No performance degradation

## Next Steps

1. Create `tasks.md` with detailed implementation tasks
2. Begin data extraction and mapping
3. Create JSON data files
4. Update components section by section
5. Test and validate
6. Deploy to production

---
*Created 2025-10-27 for Elmentor Program real data migration*
