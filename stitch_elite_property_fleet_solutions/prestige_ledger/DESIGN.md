---
name: Prestige Ledger
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001a42'
  on-tertiary-container: '#3980f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style

The design system is engineered for a premium high-value transaction environment, blending real estate brokerage with automotive leasing. The brand personality is **authoritative, precise, and dependable**, designed to reassure users during significant financial commitments. 

The visual style is **Corporate / Modern** with a focus on **Minimalism**. It utilizes expansive white space to denote luxury and clarity, while sharp, structured elements convey professional discipline. The interface must prioritize lead generation through a clear information hierarchy that highlights trust signals and facilitates effortless inquiry paths.

## Colors

This design system utilizes a palette rooted in stability and growth. 

- **Primary (Deep Navy):** Used for headers, core branding, and primary typography to establish institutional trust.
- **Secondary (Emerald Green):** The primary action color for CTAs, signaling growth, approval, and "Go" signals.
- **Tertiary (Electric Blue):** Reserved for interactive elements like text links, informational badges, and secondary actions.
- **Neutral (Slate & Sky):** A range of greys from `#F8FAFC` for backgrounds to `#64748B` for secondary text ensures a clean, non-distracting canvas.

Avoid using the secondary color for anything other than conversion-oriented buttons or "Verified" trust badges to maintain its psychological impact.

## Typography

The typography strategy pairs the geometric authority of **Montserrat** for headings with the systematic legibility of **Inter** for data-heavy content. 

- **Headings:** Use Montserrat in Semi-Bold or Bold weights. Tighten letter-spacing slightly on larger displays to maintain a premium "editorial" feel.
- **Body:** Use Inter for all long-form text and property/vehicle specifications. Its high x-height ensures readability even at smaller sizes in technical data sheets.
- **Labels:** Use `label-bold` for metadata, trust badges (e.g., "GST REGISTERED"), and categories. The uppercase styling adds a layer of formal certification.

## Layout & Spacing

The layout follows a **Fixed Grid** system for desktop to ensure a controlled, high-end presentation, transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid is used for desktop. Property and car listings should span 4 columns (3-up) or 6 columns (2-up) to maximize visual impact.
- **Rhythm:** Use an 8px base unit. All internal component padding should be increments of 8px (e.g., 16px, 24px, 32px).
- **Whitespace:** Emphasize vertical rhythm. Use large `section-gap` values (80px+) between major landing page blocks to prevent the "cluttered marketplace" look.

## Elevation & Depth

This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a sense of physical importance without looking dated.

1.  **Base Layer:** The primary background uses the neutral `#F8FAFC`.
2.  **Surface Layer:** Cards and containers use pure white (`#FFFFFF`) with a subtle 1px border in `#E2E8F0`.
3.  **Elevated State:** Hovered cards or active modals use a "Soft High-Trust" shadow: `0px 10px 15px -3px rgba(15, 23, 42, 0.08)`. The shadow color is tinted with the Primary Navy to keep it grounded and professional.
4.  **Trust Signals:** Badges like "Government Approved" should be flat or slightly recessed (inset shadow) to feel like an official stamp or seal.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle modern touch while maintaining the "sharp" lines associated with professional consultancy and legal documents.

- **Standard Elements:** Input fields, small buttons, and tags use `0.25rem` (4px).
- **Cards:** Property/Car listing cards use `rounded-lg` (0.5rem / 8px) to feel distinct from the background.
- **CTA Buttons:** Primary action buttons use `rounded-lg` to make them feel more substantial and touch-friendly.

## Components

### Buttons
- **Primary:** Background: Secondary Emerald; Text: White; Weight: 600. High contrast is mandatory.
- **Secondary:** Background: Transparent; Border: 2px Primary Navy; Text: Primary Navy.
- **Shadows:** Use a subtle bottom-heavy shadow on primary buttons to provide a "tactile" feel that encourages clicking.

### Trust Badges
- Official badges (GST, Govt Approved) must be rendered in a monochromatic style (Primary Navy or Secondary Green) to avoid looking like third-party advertisements. They should appear in the header and near final lead capture forms.

### Listing Cards
- Cards must feature high-quality imagery with a fixed aspect ratio (3:2). 
- Footers of cards should use a light grey background with `label-bold` text for key specs (e.g., "4 BEDROOMS" or "AUTOMATIC").

### Input Fields
- Use a "floating label" or high-contrast top-aligned label. 
- Active states should use a 2px Primary Navy border to signal focus and formal data entry.

### Navigation
- A clean, sticky top-bar with a "Request Quote" or "Book Consultation" primary button as the final item on the right.
- Use simple, thin-stroke line icons (24px) for car/property categories to assist with quick visual scanning.