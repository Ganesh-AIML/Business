# Siddhart LifeSpace — Product Specification Document

**Version:** 1.0  
**Date:** 2026-08-19  
**Type:** Business Portfolio & Lead Generation Website  
**Stack:** React 18 + Vite + Tailwind CSS v3 + React Router v6

---

## 1. Brand Identity

| Attribute | Value |
|---|---|
| **Business Name** | Siddhart LifeSpace |
| **Tagline** | Expert Property & Vehicle Solutions Tailored to Your Needs |
| **Phone** | +91 9819288352 |
| **WhatsApp** | +91 9819288352 |
| **Email** | info@siddharthlifespace.com *(placeholder)* |
| **Location** | Goregaon East, Mumbai |
| **Credentials** | Government Approved · GST Registered |
| **Primary Color** | `#000000` (Black) |
| **Accent Color** | `#006c49` (Emerald Green) |
| **Fonts** | Montserrat (headings) · Inter (body) |

### Business Verticals
1. **Real Estate** — Property buying & renting assistance (residential flats, commercial shops, offices)
2. **Corporate Car Leasing** — Long-term fleet leasing, employee pickup/drop transportation
3. **Car Rental** — Short/medium-term personal and corporate vehicle rentals

### Brand Personality
Authoritative · Precise · Dependable · Premium · Trustworthy

---

## 2. Site Architecture

```
Siddhart LifeSpace Website
│
├── / ─────────────────── Home (Landing Page)
├── /about ─────────────── About Us
├── /real-estate ────────── Real Estate Services
├── /properties ─────────── Available Properties (Listings)
├── /car-leasing ────────── Car Leasing & Rental Overview
├── /vehicles ───────────── Available Fleet (Vehicle Listings)
├── /services ───────────── Services & Client Testimonials
├── /community ──────────── Social & Community Initiatives
└── /contact ────────────── Contact & Enquiry
```

### Navigation Bar (Shared — all pages)
- **Logo:** "Siddhart LifeSpace" text (Montserrat Bold) — links to `/`
- **Links:** Real Estate → `/real-estate` | Car Leasing → `/car-leasing` | About → `/about` | Social → `/community` | Contact → `/contact`
- **Active State:** Green underline (`border-b-2 border-secondary`) on current section
- **CTA:** "Enquire Now" button → opens `/contact`
- **Mobile:** Hamburger icon → slide-down full-width dropdown menu
- **Behavior:** Sticky top, shadow increases on scroll

### Footer (Shared — all pages)
- **Left:** "Siddhart LifeSpace" brand name + short description + copyright `© {currentYear} Siddhart LifeSpace. All rights reserved.`
- **Right:** Privacy Policy | Terms of Service | GST Verification (badge) | Govt Approved Status (badge)
- **Background:** Black (`#000000`) · Text: White

---

## 3. Page Specifications

---

### 3.1 Home Page (`/`)

**Purpose:** First impression, lead generation hub, service overview

#### Sections (top to bottom):

**A. Navbar** *(shared)*

**B. Hero Section**
- Full-width, 819px tall
- Background image: City skyline + luxury car (AI placeholder, 40% opacity with gradient overlay)
- Gradient: left-to-right `from-white to-transparent` overlay
- Left-aligned content block (8/12 cols):
  - **H1:** "Expert Property & Vehicle Solutions Tailored to Your Needs."
  - **Body:** "Professional Real Estate Assistance & Corporate Car Leasing Solutions. Secure your next high-value asset with confidence and precision."
  - **Buttons:**
    - Primary (green): "Find a Property" → `/properties`
    - Secondary (outline): "Lease a Vehicle" → `/car-leasing`

**C. Trust Bar**
- Light grey background, bordered top/bottom
- Left: ✓ verified icon + "Government Approved | GST Registered"
- Right: Three statistics:
  - "500+" / PROPERTIES ASSISTED
  - "100+" / VEHICLES LEASED
  - "10+" / YEARS EXPERIENCE
- *Note: Statistics are placeholder — update when real data provided*

**D. Core Services Section**
- Section heading: "Our Core Services"
- Sub-heading: "Comprehensive solutions for your real estate and automotive requirements, delivered with uncompromising professionalism."
- 3-column card grid:
  - **Card 1:** `location_city` icon | "Real Estate" | "Expert brokerage for premium commercial spaces, luxury apartments, and retail shops in prime locations." | Link: "Explore Properties →" → `/properties`
  - **Card 2:** `directions_car` icon | "Car Leasing" | "Flexible, tax-efficient corporate leasing structures for executive sedans and luxury SUVs." | Link: "View Fleet →" → `/vehicles`
  - **Card 3:** `car_rental` icon | "Car Rental" | "Short to medium-term premium vehicle rentals for corporate visits and special engagements." | Link: "Book Rental →" → `/contact`
- Cards: white bg, outlined border, hover shadow + icon color transition

**E. CTA Section**
- Full-width black background
- Centered content:
  - **H2:** "Ready to Start?"
  - **Body:** "Get Property Assistance or Request a Vehicle Today. Our experts are ready to structure the perfect solution for you."
  - **Buttons:**
    - Primary (green): "Request Property Quote" → `/contact`
    - Secondary (outline white border): "Book Vehicle Consultation" → `/contact`

**F. Footer** *(shared)*

---

### 3.2 About Page (`/about`)

**Purpose:** Builds trust, humanizes the business, establishes credentials

#### Sections:

**A. Navbar** *(About link active)*

**B. Hero Section**
- Left-aligned, no image, max-width container
- **H1:** "Decades of Excellence in Real Estate & Logistics."
- **Body:** "Siddhart LifeSpace represents the pinnacle of professional advisory, guiding discerning clients through high-value property acquisitions and premium corporate transportation solutions with unwavering precision."

**C. Core Disciplines Section** (`bg-surface-container-low`)
- **H2:** "Our Core Disciplines"
- 3-column grid of value cards:
  - `verified_user` | **Absolute Trust** | "Operating with complete fiduciary responsibility. We safeguard our clients' interests in every transaction, ensuring confidentiality and security are never compromised."
  - `visibility` | **Clear Transparency** | "No hidden fees, no ambiguous terms. We provide exhaustive documentation and clear communication at every stage of the real estate or leasing process."
  - `precision_manufacturing` | **Steadfast Reliability** | "Delivering on commitments with military precision. Whether securing a prime commercial lease or a fleet of executive vehicles, our execution is flawless."
- Cards: white bg, rounded, hover shadow

**D. Expertise & Trust Section**
- 2-column layout (5 cols image | 6 cols text):
  - **Left (image column):**
    - Portrait image (3:4 aspect ratio, `rounded-lg`)
    - Two floating trust badges (absolute positioned, bottom-right):
      - `verified` (green) | GOVT APPROVED | "Certified Brokerage"
      - `receipt_long` (black) | GST REGISTERED | "Fully Compliant"
  - **Right (content column):**
    - **H2:** "Unrivaled Expertise Across Domains"
    - **Body:** "With over a decade of embedded market intelligence, we operate at the intersection of premium property acquisition and executive logistics. Our dual-focus allows comprehensive asset management for high-net-worth individuals and corporate entities."
    - Two expertise rows (with divider):
      - `domain` icon (green) | **Commercial & Prime Real Estate** | description
      - `directions_car` icon (green) | **Corporate Fleet Leasing** | description

**E. Footer** *(shared)*

---

### 3.3 Real Estate Services Page (`/real-estate`)

**Purpose:** Explains the real estate offering in depth, drives users to `/properties`

#### Sections:

**A. Navbar** *(Real Estate link active)*

**B. Hero Section** (`bg-surface-container-lowest`, bordered bottom)
- 2-column layout:
  - **Left (6 cols):**
    - **H1:** "Navigating Your Real Estate Journey with Precision."
    - **Body:** "Comprehensive assistance for buying, selling, and renting premium residential and commercial properties. We transform complex transactions into seamless experiences."
    - **Buttons:**
      - Primary: "Find My Property" → `/properties`
      - Secondary outline: "Explore Categories" → scrolls to categories section
  - **Right (6 cols):**
    - Property image (500px tall, `rounded-lg`, cover, shadow)

**C. Search Teaser Bar** (`bg-primary-fixed` light blue tint)
- Single-row card:
  - Left: `location_on` (green, filled) | "Location-based search tailored to your budget." | "Discover the perfect space in your ideal neighborhood."
  - Right: "Start Search" button (green) → `/properties`

**D. Services Grid (Bento)**
- Section: "Expert Assistance at Every Step"
- 12-col bento grid:
  - **Left card (8 cols):** `real_estate_agent` icon | **Property Buying Assistance** | full description | checkmark list: Market Valuation & Analysis, Exclusive Off-Market Listings, Legal & Compliance Review
  - **Right card (4 cols):** `key` icon | **Property Renting Assistance** | description | text link "View Rental Process →"
- Background decorative blur orb in large card

**E. Categories Section** (`bg-surface-container-low`)
- **H2:** "Explore Our Portfolio"
- 2-column image card grid:
  - **Flats & Residences** — image + gradient overlay + title + "Premium apartments and penthouses." + east arrow
  - **Shops & Commercial** — image + gradient overlay + title + "Prime retail spaces and corporate offices." + east arrow
- Both cards link to `/properties` with filtered state

**F. Footer** *(shared)*

---

### 3.4 Available Properties Page (`/properties`)

**Purpose:** Show and filter available properties, generate enquiries

#### Sections:

**A. Navbar** *(Real Estate link active)*

**B. Page Header & Filter Bar**
- **H1:** "Premium Properties in Prime Locations."
- Filter bar card (`bg-white`, shadow, rounded):
  - **Intent toggle:** Buy | Rent (segmented button)
  - **Location input:** text field with `location_on` icon, placeholder "City, Area or Locality"
  - **Property Type select:** All Types / Luxury Flat / Commercial Shop / Penthouse / Office Space
  - **Search button** (black): `search` icon + "Search"

**C. Property Grid**
- Sub-header: "Curated Listings" (left) + "Showing X-Y of Z results" (right)
- 3-column grid (12-col layout, `md:col-span-4` each)
- Each **PropertyCard** contains:
  - Image (3:2 aspect ratio, hover scale animation)
  - Status badge (FOR SALE / FOR LEASE / FOR RENT) — top-left overlay
  - Optional: "Govt Approved" badge — top-right overlay
  - Favorite button (heart icon) — top-right (only if no Govt badge)
  - Location: `location_on` icon + area name
  - Property name (headline-sm)
  - Price (headline-md, green) + optional "/mo" for rentals
  - Specs bar: Beds | Baths | Sq Ft (residential) OR Floor | Ceiling | Sq Ft (commercial)
  - CTA row: "Enquire Now" (green, full) | "WhatsApp" (outline black) → `wa.me/919819288352`

**D. Load More Button**
- Centered, outline style
- "Load More Properties" → reveals additional cards (or links to contact for full list)

**E. Footer** *(shared)*

#### Sample Property Data (placeholder):
```js
// Residential
{ id: 1, type: 'Flat', status: 'For Sale', location: 'Goregaon East', name: 'Luxury 2BHK Apartment', price: '₹85,00,000', beds: 2, baths: 2, sqft: 950, govtApproved: false }
{ id: 2, type: 'Flat', status: 'For Rent', location: 'Goregaon West', name: 'Spacious 3BHK Flat', price: '₹45,000/mo', beds: 3, baths: 2, sqft: 1200, govtApproved: false }
{ id: 3, type: 'Flat', status: 'For Sale', location: 'Malad East', name: 'Premium 1BHK Studio', price: '₹52,00,000', beds: 1, baths: 1, sqft: 650, govtApproved: false }

// Commercial
{ id: 4, type: 'Shop', status: 'For Lease', location: 'Goregaon East Link Road', name: 'Prime Commercial Shop', price: '₹85,000/mo', floor: 'Ground', ceiling: '14ft', sqft: 800, govtApproved: true }
{ id: 5, type: 'Office', status: 'For Lease', location: 'NESCO IT Park, Goregaon', name: 'Corporate Office Space', price: '₹1,20,000/mo', floor: '4th', ceiling: '10ft', sqft: 1500, govtApproved: true }
{ id: 6, type: 'Shop', status: 'For Sale', location: 'S.V. Road, Goregaon', name: 'Commercial Retail Unit', price: '₹1,80,00,000', floor: 'Ground', ceiling: '12ft', sqft: 600, govtApproved: false }
```

---

### 3.5 Car Leasing & Rental Overview (`/car-leasing`)

**Purpose:** Overview of both corporate leasing and personal rental services, drives to `/vehicles`

#### Sections:

**A. Navbar** *(Car Leasing link active)*

**B. Hero Section**
- 2-column layout:
  - **Left (6 cols):**
    - **H1:** "Premium Mobility Solutions for Business & Leisure"
    - **Body:** "Experience uncompromised quality with Siddhart LifeSpace's corporate leasing and premium rental services. We deliver precision, reliability, and luxury for every journey."
    - **Buttons:**
      - Primary: "Corporate Leasing →" → scrolls to `#corporate` section
      - Secondary outline: "Personal Rental" → scrolls to `#rental` section
  - **Right (6 cols):** Car image (400px tall, `rounded-xl`, shadow)

**C. Corporate Car Leasing Section** (`id="corporate"`, `bg-surface-container-lowest`)
- **H2:** "Corporate Car Leasing"
- **Sub:** "Strategic mobility management designed for modern enterprises. Optimize your corporate fleet with tailored long-term contracts and dedicated logistics support."
- 3 feature cards:
  - `directions_car` (green circle bg) | **Dedicated Vehicles** | "Ensure executive comfort and reliability with our fleet of premium, dedicated vehicles assigned exclusively to your organization."
  - `calendar_month` | **Long-Term Contracts** | "Flexible 12 to 36-month leasing agreements designed to align with your corporate budget and strategic operational needs."
  - `support_agent` | **Managed Logistics** | "Comprehensive logistics management including scheduled employee pickup/drop-off services and 24/7 maintenance support."
- Fleet CTA bar: "Ready to optimize your fleet?" + "Request Corporate Quote" button (black) → `/contact`

**D. Personal Rental Section** (`id="rental"`)
- **H2:** "Premium Car Rental"
- **Sub:** "Whether for business travel or personal leisure, select from our meticulously maintained fleet for short-term and flexible duration rentals."
- 3-column rental category cards (with image, badge, feature list, enquiry-only pricing):
  - **Executive Sedan** | ECONOMY badge | Self-drive available · Daily/Weekly rates · Standard Insurance | "Enquire for Rate" → `/contact`
  - **Premium SUV** | SUV badge | Chauffeur option available · Flexible durations · Premium Insurance | "Enquire for Rate" → `/contact`
  - **Luxury Class** | LUXURY badge | Professional Chauffeur only · Hourly/Daily rates · VIP Support | "Enquire for Rate" → `/contact`
- *Pricing replaced with "Enquire for Rate" (enquiry-only approach, no prices shown)*

**E. Footer** *(shared)*

---

### 3.6 Available Fleet (`/vehicles`)

**Purpose:** Showcase available vehicles, drive booking enquiries

#### Sections:

**A. Navbar** *(Car Leasing link active)*

**B. Hero Section**
- Left-aligned
- **H1:** "Premium Fleet for Corporate & Personal Use."
- **Body:** "Explore our curated selection of luxury vehicles, available for flexible leasing or daily rental. Engineered for comfort and commanding presence."

**C. Filter Bar**
- Card with 3 filters + button:
  - **Rental Type:** All Types / Corporate Lease / Personal Rental
  - **Vehicle Category:** All Categories / Luxury Sedan / Premium SUV / Executive MPV
  - **Seating Capacity:** Any Capacity / 4-5 Seater / 7+ Seater
  - **Apply Filters** button (black)
- Filter state managed in React (local state, no URL params needed for now)

**D. Vehicle Grid**
- Responsive 3-column grid
- Each **VehicleCard** contains:
  - Image (3:2 aspect ratio, hover scale)
  - "Driver Available" badge (black pill, top-left) — shown conditionally
  - Vehicle name (headline-sm)
  - Category subtitle (body-sm, muted)
  - Specs row (2-col grid, divided): Seating | Availability Type
  - "Book / Enquire" button (outline black, hover fills black)

**E. Footer** *(shared)*

#### Sample Vehicle Data (placeholder):
```js
{ id: 1, name: 'Audi A6', category: 'Luxury Sedan', seating: 5, type: 'Daily/Lease', driverAvailable: true }
{ id: 2, name: 'Toyota Innova Crysta', category: 'Executive MPV', seating: 7, type: 'Daily/Lease', driverAvailable: true }
{ id: 3, name: 'BMW 5 Series', category: 'Luxury Sedan', seating: 5, type: 'Corporate Lease', driverAvailable: false }
{ id: 4, name: 'Mercedes GLE', category: 'Premium SUV', seating: 5, type: 'Daily/Lease', driverAvailable: true }
{ id: 5, name: 'Toyota Fortuner', category: 'Premium SUV', seating: 7, type: 'Daily/Lease', driverAvailable: true }
{ id: 6, name: 'Hyundai Tucson', category: 'Premium SUV', seating: 5, type: 'Personal Rental', driverAvailable: false }
```

---

### 3.7 Services & Client Testimonials (`/services`)

**Purpose:** Comprehensive capability showcase + social proof, accessible via "View Full Portfolio" CTA

#### Nav behavior: No dedicated nav link. Accessible via:
- Home page → "Book Vehicle Consultation" CTA
- About page → "Explore Services" (or direct URL)
- Footer note: this page is a conversion-focused page reached mid-funnel

#### Sections:

**A. Navbar** *(no active link)*

**B. Hero Section** (centered)
- **H1:** "Comprehensive Solutions. Unwavering Trust."
- **Body:** "We bridge the gap between premium real estate brokerage and elite automotive leasing, delivering precision and dependability for your most significant commitments."

**C. Full Capabilities Grid**
- **H2:** "Our Full Capabilities"
- 12-col bento grid (2 rows):
  - Row 1: `real_estate_agent` | **Premium Property Brokerage** (8 cols, large) | `domain` | **Corporate Leasing** (4 cols, small)
  - Row 2: `directions_car` (blue bg) | **Elite Automotive Leasing** (6 cols) | `commute` | **Employee Transport** (6 cols)

**D. Client Endorsements Section**
- Header row: "Client Endorsements" (left) | Trust badges: Govt Approved + GST Verified (right)
- Asymmetric 3-column testimonial grid:
  - Col 1: Testimonial 1 (James R., Commercial Acquisition) + Testimonial 4 (Elena W., Fleet Services) — stacked
  - Col 2 (featured): Testimonial 2 (Sarah M., Corporate Car Leasing) — **black bg card, taller** — spans 2 rows
  - Col 3: Testimonial 3 (David K., Residential Rental) + Testimonial 5 (Marcus T., Short-Term Rental) — stacked
- Each TestimonialCard: Star rating | Quote | Avatar + Name + Service type

**E. CTA Section**
- Light card (`bg-surface-container-low`, `rounded-xl`, border)
- **H2:** "Ready to Discuss Your Requirements?"
- **Body:** "Connect with our consultants to build a tailored plan for your real estate or automotive needs."
- **Buttons:** "Enquire for a Service" (green) | "View Full Portfolio" (outline) → `/properties`

**F. Footer** *(shared)*

#### Testimonial Data (placeholder — clearly fictional, to be replaced):
```js
[
  { id: 1, name: 'James R.', service: 'Commercial Acquisition', stars: 5, quote: '"Securing our new corporate headquarters was incredibly streamlined. The negotiations were handled with absolute precision. Their authority in the commercial real estate space is unmatched."', initials: 'JR' },
  { id: 2, name: 'Sarah M.', service: 'Corporate Car Leasing', stars: 5, quote: '"We transitioned our entire executive fleet to this leasing program. The level of service is impeccable, and the transparent pricing structure gave our finance board complete peace of mind."', initials: 'SM', featured: true },
  { id: 3, name: 'David K.', service: 'Residential Rental', stars: 4, quote: '"Found the perfect flat for my relocation. The agent was punctual, knowledgeable, and respected my time constraints."', initials: 'DK' },
  { id: 4, name: 'Elena W.', service: 'Fleet Services', stars: 5, quote: '"The employee transport service has significantly reduced our logistical overhead. Dependable daily operations."', initials: 'EW' },
  { id: 5, name: 'Marcus T.', service: 'Short-Term Car Rental', stars: 5, quote: '"Rented a premium SUV for a month-long business trip. Pristine vehicle condition and zero administrative hassle."', initials: 'MT' }
]
```
*Note: Testimonial names are generic/anonymized. To be replaced with real client feedback.*

---

### 3.8 Social & Community (`/community`)

**Purpose:** Humanizes the brand, shows CSR commitment, builds deeper trust

#### Sections:

**A. Navbar** *(Social link active)*

**B. Hero Section** (`bg-surface-container-low`)
- Centered
- **H1:** "Building More Than Just Business."
- **Body:** "At Siddhart LifeSpace, we believe true success is measured by the positive impact we leave on our communities. Explore our initiatives and partnerships dedicated to fostering sustainable growth, community welfare, and social responsibility."
- **Pill badge:** `handshake` icon + "Committed to Community" (green pill, bordered)

**C. Social Footprint Grid**
- **H2:** "Our Social Footprint"
- **Sub:** "Highlighting our recent community engagement and welfare programs."
- Bento grid (`auto-rows-[280px]`):
  - **Large card (8 cols, 2 rows):** Community event image with dark gradient overlay | "ANNUAL MEETUP" green badge | **"Annual Community Welfare Meetup"** | description
  - **Small card 1 (4 cols, 1 row):** Image (60%) + text (40%) | **"Local Logistics Support"** | "Providing essential transport and logistical backing for regional community drives."
  - **Small card 2 (4 cols, 1 row):** Image (60%) + text (40%) | **"Youth Mentorship"** | "Guiding the next generation of business leaders through mentorship and internship programs."

**D. Pillars of Responsibility Section** (`bg-primary` black)
- **H2:** "Our Pillars of Responsibility" (white)
- **Sub:** "The foundational principles that guide our societal engagements and corporate decisions."
- 3 centered icon cards (dark glass-style):
  - `eco` | **Sustainable Practices** | "Integrating environmentally conscious methods across our real estate dealings and fleet management operations."
  - `diversity_3` | **Community Welfare** | "Actively participating in local Goregaon initiatives to uplift neighborhoods and provide support to those in need."
  - `volunteer_activism` | **Ethical Business** | "Maintaining strict compliance and transparent operations, ensuring trust in every high-value transaction we facilitate."

**E. Footer** *(shared)*

---

### 3.9 Contact & Enquiry (`/contact`)

**Purpose:** Primary lead capture page — dual-form for property and vehicle enquiries

#### Sections:

**A. Navbar** *(Contact link active)*

**B. Hero Section** (`bg-surface-container-low`)
- Centered
- **H1:** "Let's Start a Conversation."
- **Body:** "Whether you are looking for an exclusive property or a premium vehicle lease, our consultants are ready to assist you."

**C. Main Layout Grid (12 cols)**

**Left: Dual Form Panel (8 cols)**
- Tab switcher: "Property Enquiry" | "Vehicle Leasing" (pill-style toggle)
- **Property Enquiry Form:**
  - Intent: Buy / Rent (select)
  - Preferred Location: text input (placeholder: "e.g. Goregaon East, Andheri...")
  - Estimated Budget: text input (placeholder: "₹ Budget")
  - Property Type: Villa / Apartment / Commercial / Shop / Office (select)
  - Additional Requirements: textarea
  - Submit: "Submit Property Enquiry" (green button) → `mailto:info@siddharthlifespace.com` with pre-filled subject
- **Vehicle Leasing Form:**
  - Lease Type: Corporate Fleet / Personal Lease (select)
  - Vehicle Category: Luxury Sedan / SUV / Executive MPV (select)
  - Preferred Start Date: date input
  - Require Chauffeur Service: checkbox
  - Special Requests: textarea
  - Submit: "Submit Vehicle Enquiry" (green button) → `mailto:info@siddharthlifespace.com`

**Right: Contact & Location Panel (4 cols)**
- **Direct Contact Card** (black bg):
  - `call` icon (green) | PHONE | +91 9819288352
  - `chat` icon (green) | WHATSAPP | +91 9819288352 (clickable → `wa.me/919819288352`)
  - `mail` icon (green) | EMAIL | info@siddharthlifespace.com
  - Divider
  - `schedule` icon | BUSINESS HOURS | Mon – Sat: 9:00 AM – 7:00 PM | "Sunday viewings by appointment only."
- **Location Card** (white bg, bordered):
  - `location_on` icon | HEADQUARTERS | Goregaon East, Mumbai
  - Map image (static placeholder)
- **Social Connect** (icon buttons, circular):
  - Globe (Website placeholder)
  - Camera (Instagram placeholder)
  - Briefcase (LinkedIn placeholder)

**D. Footer** *(shared)*

---

## 4. Component Inventory

### 4.1 Layout Components
| Component | File | Description |
|---|---|---|
| `Navbar` | `components/layout/Navbar.jsx` | Sticky nav with mobile hamburger |
| `Footer` | `components/layout/Footer.jsx` | Black footer with trust badges |
| `MainLayout` | `layouts/MainLayout.jsx` | Wraps Navbar + `<Outlet>` + Footer |

### 4.2 UI Primitive Components
| Component | File | Props |
|---|---|---|
| `Button` | `components/ui/Button.jsx` | `variant` (primary/secondary/outline-white/black/text), `size`, `href`, `onClick`, `icon` |
| `Badge` | `components/ui/Badge.jsx` | `variant` (status/category/driver/trust/initiative), `label`, `icon` |
| `SectionHeading` | `components/ui/SectionHeading.jsx` | `title`, `subtitle`, `align` (center/left) |
| `StarRating` | `components/ui/StarRating.jsx` | `rating` (1–5) |
| `TrustBar` | `components/ui/TrustBar.jsx` | `stats` array |
| `MaterialIcon` | `components/ui/MaterialIcon.jsx` | `name`, `filled`, `size`, `className` |

### 4.3 Card Components
| Component | File | Props |
|---|---|---|
| `PropertyCard` | `components/cards/PropertyCard.jsx` | `property` object |
| `VehicleCard` | `components/cards/VehicleCard.jsx` | `vehicle` object |
| `ServiceCard` | `components/cards/ServiceCard.jsx` | `icon`, `title`, `description`, `link`, `linkLabel` |
| `TestimonialCard` | `components/cards/TestimonialCard.jsx` | `testimonial` object, `featured` bool |
| `ValueCard` | `components/cards/ValueCard.jsx` | `icon`, `title`, `description` |
| `InitiativeCard` | `components/cards/InitiativeCard.jsx` | `size` (large/small), `image`, `tag`, `title`, `description` |

### 4.4 Section Components
| Component | File | Description |
|---|---|---|
| `CTASection` | `components/sections/CTASection.jsx` | Full-width CTA (black or light variant) |
| `PropertyFilterBar` | `components/sections/PropertyFilterBar.jsx` | Buy/Rent + Location + Type + Search |
| `VehicleFilterBar` | `components/sections/VehicleFilterBar.jsx` | Type + Category + Seating + Apply |
| `TestimonialWall` | `components/sections/TestimonialWall.jsx` | Asymmetric 3-col grid with featured center |
| `BentoGrid` | `components/sections/BentoGrid.jsx` | Generic 12-col bento layout wrapper |

### 4.5 Form Components
| Component | File | Description |
|---|---|---|
| `PropertyEnquiryForm` | `components/forms/PropertyEnquiryForm.jsx` | Controlled form with mailto submission |
| `VehicleLeasingForm` | `components/forms/VehicleLeasingForm.jsx` | Controlled form with mailto submission |
| `ContactFormTabs` | `components/forms/ContactFormTabs.jsx` | Tab container switching between the two forms |

---

## 5. Data Models

### 5.1 Property
```typescript
{
  id: number,
  name: string,
  type: 'Flat' | 'Shop' | 'Office' | 'Penthouse' | 'Villa',
  status: 'For Sale' | 'For Rent' | 'For Lease',
  location: string,        // e.g. "Goregaon East"
  price: string,           // e.g. "₹85,00,000" or "₹45,000/mo"
  priceUnit: 'total' | 'monthly',
  govtApproved: boolean,
  image: string,           // image URL or import path
  // Residential specs:
  beds?: number,
  baths?: number,
  // Commercial specs:
  floor?: string,
  ceiling?: string,
  // Common:
  sqft: number,
  description?: string
}
```

### 5.2 Vehicle
```typescript
{
  id: number,
  name: string,           // e.g. "Audi A6"
  category: 'Luxury Sedan' | 'Premium SUV' | 'Executive MPV',
  seating: number,
  type: 'Daily/Lease' | 'Corporate Lease' | 'Personal Rental',
  driverAvailable: boolean,
  image: string
}
```

### 5.3 Testimonial
```typescript
{
  id: number,
  name: string,
  service: string,
  stars: number,
  quote: string,
  initials: string,
  image?: string,         // Optional avatar URL
  featured?: boolean      // Featured = dark card, center position
}
```

---

## 6. Interactions & Behaviors

### 6.1 Navbar
- **Scroll behavior:** `shadow-sm` → `shadow-md` transition when `scrollY > 10px` (via `scroll` event listener + `useEffect`)
- **Mobile menu:** Toggle open/close with state. Full-width dropdown below navbar on mobile
- **Active link:** Determined by React Router `useLocation()` — matches pathname

### 6.2 Property Filter
- `intent` state: `'buy'` | `'rent'`
- `location` state: string (input value)
- `propertyType` state: string (select value)
- On "Search": filters the local `properties.js` data array and updates displayed cards
- No URL parameters in Phase 1 (simple local state)

### 6.3 Vehicle Filter
- `rentalType` state
- `category` state
- `seating` state
- On "Apply Filters": filters local `vehicles.js` data array

### 6.4 Contact Form Tabs
- `activeTab` state: `'property'` | `'vehicle'`
- Tab click updates state, renders corresponding form
- Tab styles update to active/inactive based on state

### 6.5 Form Submission (mailto approach)
```js
// Property form submit handler
const subject = `Property Enquiry - ${intent} - ${propertyType} - ${location}`
const body = `Intent: ${intent}\nLocation: ${location}\nBudget: ${budget}\nType: ${propertyType}\nRequirements: ${requirements}`
window.location.href = `mailto:info@siddharthlifespace.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
```

### 6.6 WhatsApp Links
- Property card "WhatsApp" button: `https://wa.me/919819288352?text=Hi%2C%20I%20am%20interested%20in%20${property.name}`
- Contact page WhatsApp: `https://wa.me/919819288352`

### 6.7 Load More (Properties page)
- `displayCount` state starts at 6
- "Load More Properties" increments by 3
- If no more items, button changes to "Contact Us for Latest Listings" → `/contact`

### 6.8 Hover Animations (all cards)
- Cards: `hover:-translate-y-1 transition-transform duration-300`
- Card images: `group-hover:scale-105 transition-transform duration-500`
- Category cards (real estate): `group-hover:scale-105 transition-transform duration-500` on inner image
- Nav links: `hover:text-secondary transition-colors duration-200`

---

## 7. Responsive Design Rules

| Breakpoint | Behavior |
|---|---|
| `< 768px` (mobile) | 1-col grids · 16px padding · mobile typography · hamburger nav · stacked forms |
| `768px–1024px` (tablet) | 2-col grids · mixed layouts · full nav appears |
| `> 1024px` (desktop) | 3-col grids · full bento layouts · all typography at max size |

### Specific Responsive Rules:
- **Navbar:** Desktop = full nav + CTA | Mobile = logo + hamburger
- **Hero typography:** `text-display-lg-mobile md:text-display-lg`
- **Service cards:** 1-col → 3-col at `md`
- **Property/Vehicle grid:** 1-col → 3-col at `md`
- **About expertise:** Stack on mobile (image on top), 2-col on `lg`
- **Contact layout:** Stack (forms top, contact info below) on mobile, 8+4 col on `md`
- **Bento grids:** Full grid on `md+`, stacked on mobile
- **Footer:** Stacked on mobile, 2-col on `md`

---

## 8. SEO Configuration

| Page | Title | Meta Description |
|---|---|---|
| `/` | Siddhart LifeSpace — Expert Property & Vehicle Solutions | Premium real estate brokerage and corporate car leasing services in Goregaon East, Mumbai. Government approved, GST registered. |
| `/about` | About Us — Siddhart LifeSpace | Decades of excellence in real estate advisory and corporate automotive leasing. Trusted by businesses across Mumbai. |
| `/real-estate` | Real Estate Services — Siddhart LifeSpace | Expert property buying and renting assistance in Mumbai. Flats, commercial shops, and office spaces. |
| `/properties` | Available Properties — Siddhart LifeSpace | Browse premium residential and commercial properties in Goregaon East and surrounding Mumbai areas. |
| `/car-leasing` | Car Leasing & Rental — Siddhart LifeSpace | Corporate car leasing and premium rental services. Executive sedans, SUVs, and chauffeur-driven vehicles. |
| `/vehicles` | Available Fleet — Siddhart LifeSpace | Explore our premium vehicle fleet available for corporate lease or personal rental in Mumbai. |
| `/services` | Services & Testimonials — Siddhart LifeSpace | Comprehensive real estate and automotive services with verified client testimonials. |
| `/community` | Social & Community — Siddhart LifeSpace | Our commitment to community welfare, sustainable practices, and ethical business in Goregaon East. |
| `/contact` | Contact & Enquiry — Siddhart LifeSpace | Contact Siddhart LifeSpace for property enquiries and vehicle leasing consultations. +91 9819288352 |

---

## 9. Trust & Credibility Signals

These elements appear throughout the site to build authority:

1. **Navbar CTA:** "Enquire Now" — green, prominent
2. **Hero Trust Bar:** "Government Approved | GST Registered" + statistics
3. **About floating badges:** "GOVT APPROVED — Certified Brokerage" + "GST REGISTERED — Fully Compliant"
4. **Property cards:** Optional "Govt Approved" overlay badge on specific listings
5. **Services page:** Trust badge row inline with "Client Endorsements" header
6. **Footer:** GST Verification + Govt Approved Status — appears on every page
7. **Contact direct card:** Phone, WhatsApp, and email prominently displayed in black card

---

## 10. Business Contact Quick Reference

| Channel | Value | Link Format |
|---|---|---|
| Phone | +91 9819288352 | `tel:+919819288352` |
| WhatsApp | +91 9819288352 | `https://wa.me/919819288352` |
| Email | info@siddharthlifespace.com | `mailto:info@siddharthlifespace.com` |
| Address | Goregaon East, Mumbai | Google Maps link (to be provided) |
