# Data Extraction Documentation: Real Data Migration

**Date**: 2025-10-27
**Source**: https://elmentorprogram.github.io/
**Status**: Completed

## Data Sources

### Production Website
- **URL**: https://elmentorprogram.github.io/
- **Content Type**: Static HTML with embedded content
- **Language Support**: English primary, Arabic translations available
- **Last Verified**: 2025-10-27

### GitHub Repository
- **URL**: https://github.com/ElmentorProgram/elmentorprogram.github.io
- **Assets**: Images, translations, additional content
- **Raw Content URLs**: Used for images and external resources

## JSON Schema Documentation

### About Section (`about.json`)

```json
{
  "mission": {
    "en": "string",
    "ar": "string"
  },
  "vision": {
    "en": "string",
    "ar": "string"
  },
  "coreValues": [
    {
      "en": "string",
      "ar": "string"
    }
  ],
  "offerings": [
    {
      "en": "string",
      "ar": "string"
    }
  ]
}
```

**Source**: About section of production website
**Fields**: 4 main content blocks with bilingual support

### Circles Section (`circles.json`)

```json
[
  {
    "id": "string",
    "name": {
      "en": "string",
      "ar": "string"
    },
    "description": {
      "en": "string",
      "ar": "string"
    },
    "order": number
  }
]
```

**Source**: Circles section of production website
**Fields**: 6 hierarchical levels with bilingual names and descriptions

### Activities Section (`activities.json`)

```json
{
  "categories": [
    {
      "id": "string",
      "name": {
        "en": "string",
        "ar": "string"
      },
      "items": [
        {
          "en": "string",
          "ar": "string"
        }
      ]
    }
  ]
}
```

**Source**: Activities section of production website
**Fields**: 6 categories with multiple items each, fully bilingual

### Founder Section (`founder.json`)

```json
{
  "name": "string",
  "title": {
    "en": "string",
    "ar": "string"
  },
  "bio": {
    "en": "string",
    "ar": "string"
  },
  "credentials": "string",
  "socialLinks": [
    {
      "name": "string",
      "url": "string",
      "label": {
        "en": "string",
        "ar": "string"
      }
    }
  ]
}
```

**Source**: Founder section of production website + GitHub repository
**Fields**: Complete profile with 4 verified social links

### Gatherings Section (`gatherings.json`)

```json
{
  "events": [
    {
      "id": "string",
      "title": {
        "en": "string",
        "ar": "string"
      },
      "location": {
        "en": "string",
        "ar": "string"
      },
      "date": {
        "en": "string",
        "ar": "string"
      },
      "image": "string"
    }
  ]
}
```

**Source**: Community Gathering section + GitHub raw content
**Fields**: 3 events with locations, dates, and verified image URLs

### News Section (`news.json`)

```json
[
  {
    "id": "string",
    "title": {
      "en": "string",
      "ar": "string"
    },
    "summary": {
      "en": "string",
      "ar": "string"
    },
    "date": "string",
    "source": "string",
    "externalLink": "string"
  }
]
```

**Source**: Community announcements and updates
**Fields**: News items with metadata and external links

## Translation Strategy

### Arabic Translations
- **Source**: Production website translations and GitHub repository
- **Quality**: Verified against production site content
- **Coverage**: All major content blocks translated
- **Fallback**: English content used where Arabic not available

### Bilingual Structure
- All user-facing content supports `en` and `ar` keys
- Consistent translation patterns across all data files
- RTL support handled at component level

## Image Assets Strategy

### Current Approach
- **Primary**: Local assets copied to `src/assets/images/` for reliability and performance
- **Backup**: GitHub raw content URLs available as fallback
- **Format**: PNG/JPG images optimized for web delivery
- **Storage**: Organized by section (founder/, gatherings/, circles/)

### Asset Sources
- **Founder Photo**: `/src/assets/images/founder/mohamed-radwan.png` (originally from production site)
- **Circles Diagram**: `/src/assets/images/circles/elmentor-circles.png` (originally from production site)
- **Gathering Images**: `/src/assets/images/gatherings/` (originally from GitHub raw URLs)

## Data Validation Rules

### Content Accuracy
- All text content must match production site exactly
- Social links must be verified and functional
- Image URLs must resolve correctly
- Dates and locations must be accurate

### Schema Compliance
- All JSON files must validate against documented schemas
- Bilingual fields must have both `en` and `ar` keys
- Array fields must contain expected number of items
- ID fields must be unique and URL-safe

### Link Verification
- All external URLs tested for 200 response
- Social media links verified for correct profiles
- GitHub links confirmed to point to correct repositories
- Image URLs validated for accessibility

## Future Maintenance

### Update Process
1. Monitor production site for content changes
2. Extract new/updated content using this documentation
3. Update corresponding JSON files
4. Test bilingual display
5. Deploy and verify

### Version Control
- Data files versioned with feature branches
- Schema changes require documentation updates
- Breaking changes require component updates

### Monitoring
- Regular link validation
- Image URL availability checks
- Content freshness assessment
- Translation accuracy reviews