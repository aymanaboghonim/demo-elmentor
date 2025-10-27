# Data Model: Elmentor Landing Page

**Context**: Derived from `spec.md` to guide static content shaping and form payload expectations.

## Circle
- **Purpose**: Describe each participant group showcased in the Circles section.
- **Fields**:
  - `id` (string): Stable identifier used for anchor linking and ordering.
  - `name` (string): Localized title ≤3 words per spec.
  - `description` (string): Localized descriptor ≤20 words.
  - `order` (number): Display ordering.
- **Constraints**:
  - Minimum of four entries must exist per locale.
  - Titles and descriptions require translations for English and Arabic.

## BenefitItem
- **Purpose**: Communicate program activities and benefits.
- **Fields**:
  - `id` (string): Unique key for referencing in tests/analytics.
  - `label` (string): Localized benefit statement ≤12 words.
  - `category` (string, optional): Allows grouping (e.g., "Activity", "Benefit").
  - `order` (number): Display ordering.
- **Constraints**:
  - Minimum of five entries across the section per locale.

## NewsItem
- **Purpose**: Highlight updates or announcements.
- **Fields**:
  - `id` (string): Unique identifier for chronological sorting.
  - `title` (string): Localized headline.
  - `summary` (string): Localized teaser ≤40 words.
  - `date` (ISO 8601 string): Used to order descending.
  - `link` (string, optional): External URL for full story.
- **Constraints**:
  - If collection is empty, UI must render localized fallback.
  - When populated, list must be sorted newest-first.

## FounderStory
- **Purpose**: Present the founder name and vision statement.
- **Fields**:
  - `name` (string): Founder name, localized if necessary.
  - `vision` (string): Localized paragraph ≤150 words.
  - `portrait` (string, optional): Path to local image asset.
- **Constraints**:
  - Vision paragraph must exist in both languages.

## InterestSubmission (Form Payload)
- **Purpose**: Capture visitor intent from the embedded Join/Contact form.
- **Fields**:
  - `name` (string): required, ≤80 characters.
  - `email` (string): required, valid email format.
  - `role` (enum): required, one of `mentor`, `mentee`, `partner`, `other`.
  - `message` (string, optional): free-text input ≤500 characters.
  - `locale` (string): auto-injected to indicate submission language (`en`/`ar`).
  - `timestamp` (string, auto): generated client-side ISO 8601 string for analytics.
- **Constraints**:
  - Client-side validation must block submission until required fields pass.
  - Payload must be serializable to JSON for the Formspree endpoint.

## Global Content Settings
- **Purpose**: Support bilingual, responsive presentation.
- **Fields**:
  - `hero` (object): Localized title, subtitle, CTA label.
  - `navigation` (array): Section anchors with localized labels.
  - `footer` (object): Localized text blocks and contact references.
- **Constraints**:
  - All textual content must exist in both locale files with matching keys.
  - Locale switch must update directionality (`dir="ltr"` / `dir="rtl"`).
