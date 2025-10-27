# Core Prompts Used for Data Migration Feature (002-data-migration)

This document collects the exact prompts used at each major phase of the data migration project, with a brief description of their function. These can be reused to reproduce the workflow or adapt it for similar data migration projects.

**Date**: 2025-10-27
**Feature**: 002-data-migration
**Status**: Phase 3 Complete, Phase 4 Pending

---

## 1. Initial Data Migration Request
**Prompt:**
> "Scrap data from previous website...make a new specs, put plan, tasks, then implement section by section... Follow instructions in speckit.implement.prompt.md"

**Function:**
- Initiates the data migration process from the production website
- Establishes the requirement to follow speckit methodology
- Sets up the phased approach for data extraction and implementation

---

## 2. Data Extraction Phase
**Prompt:**
> "Extract authentic content from https://elmentorprogram.github.io/ - focus on bilingual content (English/Arabic), download images locally, create comprehensive JSON schemas for maintainability, ensure 100% content matching with production site"

**Function:**
- Defines the data extraction strategy with bilingual requirements
- Specifies local asset management for reliability
- Establishes quality standards for content accuracy

---

## 3. JSON Schema Creation
**Prompt:**
> "Create JSON data files for each section with bilingual structure: {contentField: {en: 'English', ar: 'العربية'}}. Include all metadata and ensure schema consistency across files"

**Function:**
- Defines the JSON data structure pattern for bilingual content
- Ensures consistent schema across all data files
- Prepares data structure for component integration

---

## 4. Component Integration Strategy
**Prompt:**
> "Update section components to consume real data from JSON files instead of i18n translations. Maintain existing component structure, preserve bilingual toggle functionality, implement section-by-section: About → Circles → Activities → Founder → Gatherings → News"

**Function:**
- Defines the component update strategy for real data integration
- Maintains existing UI/UX while switching data sources
- Establishes the implementation order for systematic rollout

---

## 5. Validation and Testing
**Prompt:**
> "Validate all JSON files for syntax correctness, ensure i18n labels are updated, test component rendering with real data, verify bilingual functionality, and confirm build success"

**Function:**
- Defines comprehensive validation requirements
- Ensures data integrity and component functionality
- Validates the complete migration pipeline

---

## 6. Git Workflow Management
**Prompt:**
> "Use feature branch workflow for development, push directly to main branch for completed phases, maintain clean commit history with descriptive messages for each phase completion"

**Function:**
- Establishes version control best practices
- Ensures clean, traceable commit history
- Manages branch strategy for phased development

---

## Reproducible Workflow Steps

Each prompt above can be reused in a data migration workflow to:

1. **Extract authentic content** from production websites
2. **Create structured JSON schemas** for maintainable data
3. **Implement component integration** systematically
4. **Validate data integrity** and functionality
5. **Manage version control** effectively

## Key Patterns for Reproducibility

### Data Structure Pattern
```json
{
  "contentField": {
    "en": "English content",
    "ar": "المحتوى العربي"
  },
  "metadata": "Shared across languages"
}
```

### Component Integration Pattern
```javascript
import { getCurrentLang } from '../components/language-toggle.js';
import data from '../assets/data/section.json';

export function renderSection() {
  const lang = getCurrentLang();
  // Use data.field[lang] for bilingual content
  // Use data.metadata for shared content
}
```

### Validation Pattern
```powershell
Get-ChildItem -Path "src/assets/data/*.json" | ForEach-Object {
  Get-Content $_.FullName | ConvertFrom-Json | Out-Null
  Write-Host "✓ $($_.Name) validated"
}
```

## Success Criteria for Reproduction

- **Content Accuracy**: 100% match with production site
- **Bilingual Support**: Seamless language switching
- **Data Integrity**: Valid JSON schemas and syntax
- **Component Functionality**: Real data rendering without errors
- **Build Success**: No compilation or runtime errors

---

*This file documents the core prompts used for the 002-data-migration feature. Update as new prompts are developed or the workflow evolves.*</content>
<parameter name="filePath">d:\Copilot_demo\spec-driven-dev-demo\demo-elmentor\specs\002-data-migration\core-prompts.md