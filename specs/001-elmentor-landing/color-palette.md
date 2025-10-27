---
# Color Palette & Usage: Elmentor Landing Page

## Primary Color Set

| Name              | Variable                | Value / Description                       |
|-------------------|------------------------|-------------------------------------------|
| Primary           | --color-primary        | #4f46e5 (Indigo 600)                      |
| Secondary         | --color-secondary      | #06b6d4 (Cyan 500)                        |
| Accent            | --color-accent         | #7c3aed (Violet 600)                      |
| Background        | --color-bg             | #f8fafc (Light background)                |
| Alt Background    | --color-bg-alt         | #f1f5f9 (Section alt background)          |
| Hero Gradient     | --color-bg-hero        | linear-gradient(135deg, #667eea 0%, #764ba2 100%) |
| Nav Gradient      | --color-bg-nav         | linear-gradient(90deg, #4f46e5 0%, #06b6d4 100%) |
| Footer            | --color-bg-footer      | #22223b (Footer dark)                     |
| Text              | --color-text           | #22223b (Main text)                       |
| Muted Text        | --color-text-light     | #64748b (Muted text)                      |
| Invert Text       | --color-text-invert    | #fff (For dark/gradient backgrounds)      |
| Border            | --color-border         | #e0e7ef (Border)                          |

## Usage Guidelines

- **Nav Bar:** `var(--color-bg-nav)`, text `var(--color-text-invert)`
- **Hero & Join:** `var(--color-bg-hero)`, text `var(--color-text-invert)`
- **About, Circles, Activities, News, Founder:** `var(--color-bg-alt)` or `#f8fafc`, text `var(--color-text)`
- **Footer:** `var(--color-bg-footer)`, text `var(--color-text-invert)`
- **Cards/Sections:** Use white or `var(--color-bg-alt)` for contrast
- **Buttons/Links:** Use `var(--color-primary)` or `var(--color-secondary)` for emphasis

## Accessibility

- All text on gradients or dark backgrounds uses `--color-text-invert` (#fff)
- Sufficient contrast is maintained for readability

---
*Documented for design consistency and future reference.*