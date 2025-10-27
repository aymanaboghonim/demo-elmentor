# Feature Specification: Real Data Migration from Elmentor Website

**Feature Branch**: `002-data-migration`  
**Created**: 2025-10-27  
**Status**: Draft  
**Input**: Extract real content from https://elmentorprogram.github.io/ and populate the demo-elmentor landing page with authentic data.

## Overview

Migrate from placeholder/mock data to real Elmentor Program content by scraping the existing production website and repository, then systematically populating each section with accurate information, links, and assets.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Accurate About & Mission Content (Priority: P1)

Visitors see the authentic Elmentor Program mission, vision, and "What We Offer" content instead of generic placeholder text.

**Why this priority**: Core program identity and value proposition must be authentic to build trust and credibility.

**Independent Test**: Load the About section and confirm it displays the actual Elmentor Program mission, DevOps Visions affiliation, and core values exactly as shown on the production site.

**Acceptance Scenarios**:
1. **Given** visitor on About section, **When** reading mission statement, **Then** content matches "Elmentor Program is a private community operated by DevOps Visions professional services..."
2. **Given** visitor viewing "What We Offer", **When** scanning benefits, **Then** at least 5 distinct offerings appear (mentorship from MVPs, knowledge resources, networking, hands-on projects, career support)
3. **Given** bilingual toggle, **When** switching language, **Then** both English and Arabic content accurately reflect the production site

---

### User Story 2 - Authentic Circles Data (Priority: P1)

Display the actual Elmentor Circles (Audience, Guests, Members, Group Advisory, Lead GA, Executives) with correct descriptions and visual hierarchy.

**Why this priority**: The circles model is unique to Elmentor and central to understanding community structure.

**Independent Test**: Verify the Circles section displays all 6 levels with accurate names and descriptions matching the production site diagram.

**Acceptance Scenarios**:
1. **Given** visitor on Circles section, **When** viewing circles, **Then** 6 distinct levels appear in hierarchical order (Audience → Executives)
2. **Given** circles data, **When** reading descriptions, **Then** each circle has a concise definition (≤30 words per language)
3. **Given** circles diagram reference, **When** checking content, **Then** matches https://elmentorprogram.github.io/assets/circles/elmentor-circles.png structure

---

### User Story 3 - Real Activities & Benefits (Priority: P2)

Replace generic activity lists with actual Elmentor activities organized by category (Technical Skills, Soft Skills, Networking, Career Development, Mentorship Services).

**Why this priority**: Shows tangible value and scope of community engagement.

**Independent Test**: Confirm activities section has 6 categories with authentic content from production site.

**Acceptance Scenarios**:
1. **Given** activities section, **When** viewing categories, **Then** 6 distinct groups appear (Technical Skills, Soft Skills, Networking, Career Development, Growth & Support, Mentorship Services)
2. **Given** each category, **When** reading items, **Then** activities match production site (e.g., "DevOps Public Sessions", "CV Reviews", "One-on-One Mentorship")
3. **Given** bilingual support, **When** toggling language, **Then** all activity names and categories are properly translated

---

### User Story 4 - Founder: Mohamed Radwan (Priority: P1)

Display Mohamed Radwan's authentic bio, credentials (Microsoft DevOps MVP, 24+ years experience), and social links.

**Why this priority**: Founder credibility is essential for program legitimacy and trust.

**Independent Test**: Verify founder section shows Mohamed Radwan with exact title, bio excerpt, and at least 3 social links (LinkedIn, GitHub, YouTube).

**Acceptance Scenarios**:
1. **Given** founder section, **When** reading name and title, **Then** displays "Mohamed Radwan, Microsoft DevOps MVP, Founder of DevOps Visions & Elmentor Program (24+ years experience)"
2. **Given** founder bio, **When** reading vision, **Then** content matches production site bio (experience, passion for automation, mentorship focus)
3. **Given** social links, **When** clicking links, **Then** navigates to correct profiles (LinkedIn, GitHub, Blog, YouTube)

---

### User Story 5 - Community Gatherings (Priority: P3)

Populate the gatherings section with real event data (Japan/Tokyo Nov 2022, Egypt/Cairo Feb 2023, USA/Seattle April 2023) including images and dates.

**Why this priority**: Demonstrates active, global community engagement.

**Independent Test**: Verify gatherings section shows 3+ events with location, date, and image.

**Acceptance Scenarios**:
1. **Given** gatherings section, **When** viewing events, **Then** at least 3 gatherings appear with location and date
2. **Given** each event, **When** viewing details, **Then** includes city/country, month/year, and image
3. **Given** image sources, **When** loading, **Then** images load from correct URLs (GitHub raw content or local assets)

---

### User Story 6 - Latest News & Updates (Priority: P2)

Replace mock news with real Elmentor news items (GitHub Copilot sessions, community events, etc.).

**Why this priority**: Shows program activity and currency.

**Independent Test**: Confirm news section displays real news items sorted by date with links to sources.

**Acceptance Scenarios**:
1. **Given** news section, **When** viewing items, **Then** at least 3 real news articles appear
2. **Given** each news item, **When** reading, **Then** includes title, date, summary, and external link
3. **Given** news sorting, **When** comparing dates, **Then** items appear in descending chronological order

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: About section MUST display authentic Elmentor mission: "Elmentor Program is a private community operated by DevOps Visions professional services..."
- **FR-002**: About section MUST list 5+ core offerings (mentorship from MVPs, knowledge resources, networking, hands-on projects, career support)
- **FR-003**: Circles section MUST display 6 hierarchical levels with accurate names and descriptions from production site
- **FR-004**: Activities section MUST organize content into 6 categories matching production site structure
- **FR-005**: Founder section MUST show Mohamed Radwan with exact credentials: "Microsoft DevOps MVP, Founder of DevOps Visions & Elmentor Program (24+ years experience)"
- **FR-006**: Founder section MUST include at least 3 working social links (LinkedIn, GitHub, YouTube)
- **FR-007**: Community gatherings MUST display at least 3 events with location, date, and image
- **FR-008**: News section MUST populate with real news items sorted by most recent first
- **FR-009**: All content MUST support bilingual display (English/Arabic)
- **FR-010**: Data sources MUST be documented for future updates and maintenance

### Key Entities *(include if feature involves data)*

- **AboutContent**: mission statement, core values, offerings list
- **Circle**: name (en/ar), description (en/ar), hierarchy order (1-6)
- **ActivityCategory**: category name (en/ar), activity items list
- **FounderProfile**: name, title, bio, credentials, social links (LinkedIn, GitHub, Blog, YouTube)
- **CommunityGathering**: title, location, date, image URL
- **NewsItem**: title, summary, date, source, external link

### Data Sources

- **Production Website**: https://elmentorprogram.github.io/
- **GitHub Repository**: https://github.com/ElmentorProgram/elmentorprogram.github.io
- **Asset References**: Images from GitHub raw content or production CDN
- **Social Links**: LinkedIn, GitHub, YouTube verified URLs

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: About section content is 100% accurate vs. production site (verified by side-by-side comparison)
- **SC-002**: All 6 circles appear with correct names and descriptions in both languages
- **SC-003**: Activities section displays 6 categories with ≥15 total activity items matching production
- **SC-004**: Founder bio, title, and credentials match production site exactly
- **SC-005**: At least 3 social links work and navigate to correct profiles
- **SC-006**: Gatherings section shows 3+ events with valid images and dates
- **SC-007**: News section contains ≥3 real news items with working external links
- **SC-008**: All content displays correctly in both English and Arabic
- **SC-009**: Zero broken links or missing images after migration
- **SC-010**: Data source documentation exists for all migrated content

## Assumptions

- Production website content is stable and represents canonical source of truth
- Images will be referenced from GitHub raw content URLs or copied to local assets
- Bilingual content exists in production site or can be accurately translated
- Social media links are current and will remain stable
- News items are curated and verified before inclusion
- Manual verification of scraped data quality is acceptable before deployment

## Open Clarification Items (Max 3)

1. **Image Strategy**: Should we copy images locally or reference GitHub raw URLs? (Recommendation: Local copy for reliability)
2. **News Update Frequency**: How often should news be manually updated vs. automated feed? (Recommendation: Manual curation initially)
3. **Translation Quality**: Are existing Arabic translations verified or should we use professional translation service? (Recommendation: Use production site translations as-is)

## Specification Status

Draft - Ready for planning and task breakdown.
