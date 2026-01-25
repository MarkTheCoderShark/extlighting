# EXT Lighting - Professional Lead Generation Website

## Reference Documents

| Document | Purpose | Use When |
|----------|---------|----------|
| [01-design-system.md](./01-design-system.md) | Colors, typography, components, spacing | Building any UI component |
| [02-seo-specifications.md](./02-seo-specifications.md) | Meta tags, schema markup, linking strategy | Creating/editing any page |
| [03-content-requirements.md](./03-content-requirements.md) | Page-by-page content specs, copy guidelines | Writing page content |
| [04-location-data.md](./04-location-data.md) | 12 cities with unique content, neighborhoods | Building location pages |

---

## Context

### Original Request
Build a professional lead-generation website for EXT Lighting, a permanent exterior LED lighting installation company serving the Sacramento, CA region. The site must be SEO-optimized, mobile-first, and business-ready for deployment.

### Interview Summary
**Key Decisions**:
- **Stack**: Next.js 15 (App Router) + React + Tailwind CSS + shadcn/ui
- **Hosting**: Vercel
- **Forms**: Resend for email notifications
- **Branding**: "Clean Luxury" light theme with warm gold accent
- **Services**: Residential + Commercial (two categories)
- **Locations**: 12 cities in Greater Sacramento region
- **Testing**: No automated testing - manual verification only
- **Timeline**: Quality-first, parallel agent deployment

**Research Findings**:
- Competitors lack pricing transparency (differentiation opportunity)
- Multi-step forms convert 260% better than single-page
- Day/night photo comparisons critical for lighting industry
- Local SEO requires exact NAP consistency across all pages
- Location pages need unique content to avoid duplicate content penalties

### Metis Review
**Identified Gaps** (addressed with defaults):
- Admin email: `leads@extlighting.com` (placeholder)
- Domain: `extlighting.com`
- NAP format: Standardized in single source of truth file
- Form fields: Name, Email, Phone, City, Service Type, Message
- Location content: Unique neighborhood lists + city-specific intros
- Business hours: Mon-Fri 8am-6pm, Sat 9am-4pm

---

## Work Objectives

### Core Objective
Build and deploy a production-ready, SEO-optimized lead generation website for EXT Lighting with 44 pages, comprehensive local SEO, and professional content that positions the business as the premium permanent lighting provider in the Sacramento region.

### Concrete Deliverables
- Fully functional Next.js 15 website deployed to Vercel
- 8 core pages with long-form SEO content
- 12 city landing pages with unique localized content
- 24 city/service pages (12 cities × 2 services)
- Multi-step quote request form with Resend integration
- Mobile-responsive design with click-to-call
- Complete SEO infrastructure (sitemap, robots.txt, schema markup)
- Professional brand design system

### Definition of Done
- [ ] All 44 pages render without errors
- [ ] Quote form successfully sends emails via Resend
- [ ] Lighthouse Performance ≥90, SEO ≥95 on homepage
- [ ] All pages have unique meta titles and descriptions
- [ ] LocalBusiness schema validates on Google Rich Results Test
- [ ] Mobile tap targets ≥44px, no iOS zoom on form inputs
- [ ] Site deployed and accessible on Vercel

### Must Have
- Next.js 15 App Router architecture
- shadcn/ui component library
- Tailwind CSS styling with custom gold accent theme
- Resend email integration for quote form
- LocalBusiness JSON-LD schema on all pages
- Responsive mobile-first design
- SEO-optimized long-form content on all pages
- Internal linking structure (pillar/cluster model)
- Sitemap.xml and robots.txt
- Click-to-call phone links
- Image optimization with Next.js Image

### Must NOT Have (Guardrails)
- No Pages Router (App Router only)
- No database or lead storage (email notification only)
- No user authentication
- No payment processing
- No blog/CMS functionality
- No live chat widget
- No scheduling/calendar system
- No A/B testing infrastructure
- No client-side email sending (Server Actions only)
- No more than 6 form fields
- No identical location page content (must differentiate)

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: NO (greenfield project)
- **User wants tests**: NO
- **Framework**: None
- **QA approach**: Manual verification with Playwright browser

### Manual Verification Approach
Each task includes specific verification steps using:
- Playwright browser automation for visual verification
- `curl` commands for API/form testing
- Lighthouse CLI for performance audits
- Google Rich Results Test for schema validation

---

## Color Palette & Design Tokens

```css
/* Primary Colors */
--background: #fafaf9        /* Warm white */
--background-alt: #f5f5f4    /* Slightly darker for sections */
--foreground: #1c1917        /* Near black text */

/* Accent - Warm Gold */
--gold-50: #fffbeb
--gold-100: #fef3c7
--gold-200: #fde68a
--gold-300: #fcd34d
--gold-400: #fbbf24
--gold-500: #f59e0b
--gold-600: #d97706
--gold-700: #b45309           /* Primary accent */
--gold-800: #92400e
--gold-900: #78350f

/* Secondary/Text */
--charcoal-50: #f9fafb
--charcoal-100: #f3f4f6
--charcoal-200: #e5e7eb
--charcoal-300: #d1d5db
--charcoal-400: #9ca3af
--charcoal-500: #6b7280
--charcoal-600: #4b5563
--charcoal-700: #374151        /* Body text */
--charcoal-800: #1f2937
--charcoal-900: #111827

/* Gallery Dark Section */
--gallery-bg: #0f0f0f
--gallery-text: #fafaf9
```

---

## Site Architecture

### URL Structure
```
/                                    # Homepage (pillar)
├── /services                        # Services overview (pillar)
│   ├── /services/residential        # Residential detail
│   └── /services/commercial         # Commercial detail
├── /locations                       # Locations hub (pillar)
│   ├── /locations/sacramento
│   │   ├── /locations/sacramento/residential
│   │   └── /locations/sacramento/commercial
│   ├── /locations/roseville
│   │   ├── /locations/roseville/residential
│   │   └── /locations/roseville/commercial
│   └── ... (10 more cities)
├── /gallery                         # Photo gallery
├── /about                           # About us
├── /contact                         # Contact page
├── /quote                           # Quote request form
└── /faq                             # FAQ/Pricing
```

### Internal Linking Strategy (SEO Pillar/Cluster)
```
PILLAR: Homepage
  └── Links to: All service pages, featured locations, gallery, quote

PILLAR: /services
  └── Links to: Residential, Commercial, related locations
  
PILLAR: /locations  
  └── Links to: All 12 city pages
  
CLUSTER: Each city page
  └── Links to: City/residential, city/commercial, neighboring cities, services pillar
  
CLUSTER: Each city/service page
  └── Links to: Parent city, service pillar, quote form, gallery
```

---

## Task Flow

```
Phase 1: Foundation (Sequential)
  [1] Project Setup → [2] Design System → [3] Core Components

Phase 2: Core Pages (Parallel after Phase 1)
  [4] Homepage ─┬─ [5] Services Overview ─┬─ [6] Residential ─┬─ [7] Commercial
                │                         │                   │
                ├─ [8] About             ├─ [9] Gallery       ├─ [10] FAQ
                │                         │                   │
                └─ [11] Contact ─────────┴─ [12] Quote Form ──┘

Phase 3: Location Infrastructure (After Phase 1)
  [13] Location Data + Templates → [14] generateStaticParams setup

Phase 4: Location Pages (Parallel after Phase 3)
  [15-26] 12 City Landing Pages (can run in parallel)
  
Phase 5: City/Service Pages (Parallel after Phase 4)
  [27-50] 24 City/Service Pages (can run in parallel)

Phase 6: SEO & Polish (After all pages)
  [51] Sitemap + Robots → [52] Schema Validation → [53] Performance Audit

Phase 7: Deployment
  [54] Vercel Deployment → [55] Final Verification
```

---

## Parallelization

| Group | Tasks | Reason |
|-------|-------|--------|
| A | 4, 5, 8, 9, 10 | Independent core pages after foundation |
| B | 6, 7 | Service detail pages (after services overview) |
| C | 11, 12 | Contact/quote pages |
| D | 15-26 | All 12 city pages (independent after template) |
| E | 27-50 | All 24 city/service pages (independent after city pages) |
| F | 51, 52, 53 | SEO tasks (after all pages complete) |

| Task | Depends On | Reason |
|------|------------|--------|
| 2 | 1 | Design system needs project setup |
| 3 | 2 | Components need design tokens |
| 4-12 | 3 | Pages need components |
| 6, 7 | 5 | Service details need overview |
| 14 | 13 | Static params needs location data |
| 15-26 | 14 | City pages need template infrastructure |
| 27-50 | 15-26 | City/service pages need parent city pages |
| 51-53 | All pages | SEO verification needs complete site |
| 54 | 51-53 | Deployment after SEO verification |

---

## TODOs

### Phase 1: Foundation

- [ ] 1. Project Initialization

  **What to do**:
  - Initialize Next.js 15 project with App Router
  - Configure TypeScript with strict mode
  - Install dependencies: tailwindcss, shadcn/ui, resend, react-hook-form, zod
  - Set up project structure as defined in architecture
  - Configure next.config.js with image optimization (AVIF, WebP)
  - Set up environment variables template (.env.example)

  **Must NOT do**:
  - Do not use Pages Router
  - Do not install unnecessary dependencies
  - Do not set up database connections

  **Parallelizable**: NO (foundation task)

  **References**:
  - Next.js 15 App Router: https://nextjs.org/docs/app
  - shadcn/ui installation: https://ui.shadcn.com/docs/installation/next

  **Acceptance Criteria**:
  - [ ] `npm run dev` starts without errors
  - [ ] TypeScript compiles with no errors
  - [ ] Project structure matches architecture spec
  - [ ] `next.config.js` has image optimization configured

  **Commit**: YES
  - Message: `feat(init): initialize Next.js 15 project with TypeScript and dependencies`
  - Files: `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`, `.env.example`

---

- [ ] 2. Design System & Theme Setup

  **What to do**:
  - Configure Tailwind with custom color palette (gold accent, warm whites, charcoal)
  - Create CSS custom properties in globals.css
  - Set up shadcn/ui with custom theme colors
  - Create typography scale (responsive font sizes)
  - Define spacing scale and container widths
  - Create dark gallery section variant

  **Must NOT do**:
  - Do not use default shadcn colors without customization
  - Do not use inline styles
  - Do not create more than one dark theme variant

  **Parallelizable**: NO (depends on 1)

  **References**:
  - Color palette defined in this plan (Color Palette & Design Tokens section)
  - Tailwind CSS customization: https://tailwindcss.com/docs/customizing-colors
  - shadcn/ui theming: https://ui.shadcn.com/docs/theming

  **Acceptance Criteria**:
  - [ ] `globals.css` contains all CSS custom properties
  - [ ] `tailwind.config.ts` extends theme with gold palette
  - [ ] Typography classes render correctly at all breakpoints
  - [ ] Gold accent color visible in component examples

  **Commit**: YES
  - Message: `feat(design): implement Clean Luxury theme with gold accent palette`
  - Files: `app/globals.css`, `tailwind.config.ts`, `components.json`

---

- [ ] 3. Core Component Library

  **What to do**:
  - Install shadcn/ui components: Button, Card, Form, Input, Textarea, Select, Label, Badge, Separator
  - Create custom components:
    - `Header` - Responsive nav with mobile hamburger, click-to-call button
    - `Footer` - NAP info, service area, navigation links, social links
    - `CTAButton` - Primary gold gradient button with hover effects
    - `SectionHeading` - Consistent H2 styling with optional subhead
    - `TrustBadge` - Warranty, reviews, certification badges
    - `ServiceCard` - Card for service type with icon and description
    - `TestimonialCard` - Customer quote with name and location
    - `BeforeAfterSlider` - Clip-path image comparison slider
    - `ImageGallery` - Responsive grid with dark background variant
    - `QuoteFormMultiStep` - 2-step form with progress indicator
    - `ClickToCall` - Mobile-optimized phone button
    - `LocationCard` - City card with link to location page
    - `BreadcrumbNav` - SEO-friendly breadcrumbs with schema
  - Create single source of truth files:
    - `lib/data/business.ts` - NAP, hours, contact info
    - `lib/data/locations.ts` - 12 cities with neighborhoods, coords
    - `lib/data/services.ts` - Service definitions

  **Must NOT do**:
  - Do not create components with hardcoded data
  - Do not skip mobile responsiveness
  - Do not use any touch targets smaller than 44x44px

  **Parallelizable**: NO (depends on 2)

  **References**:
  - shadcn/ui components: https://ui.shadcn.com/docs/components
  - Before/after slider: CSS clip-path technique
  - Mobile touch targets: WCAG 2.1 AA guidelines

  **Acceptance Criteria**:
  - [ ] All shadcn components installed and themed
  - [ ] Header renders with mobile menu on <768px
  - [ ] Footer displays NAP from business.ts
  - [ ] CTAButton has gold gradient hover effect
  - [ ] BeforeAfterSlider works with mouse/touch drag
  - [ ] Click-to-call uses `tel:` link
  - [ ] All components pass accessibility lint

  **Commit**: YES
  - Message: `feat(components): create core UI component library with data sources`
  - Files: `components/ui/*`, `components/*.tsx`, `lib/data/*.ts`

---

### Phase 2: Core Pages

- [ ] 4. Homepage

  **What to do**:
  - Create compelling hero section with:
    - Headline: "Sacramento's Premier Permanent Exterior Lighting"
    - Subheadline emphasizing year-round beauty, no ladder hassle
    - Hero image placeholder (dark section to showcase lighting)
    - Dual CTA: "Get Free Quote" (primary) + "View Our Work" (secondary)
    - Trust signals: warranty badge, review count, years in business
  - Create "How It Works" section (4 steps with icons)
  - Create services overview section linking to /services
  - Create "Why Choose EXT Lighting" benefits section (4-6 benefits)
  - Create featured gallery preview (6 images) linking to /gallery
  - Create testimonials section (3 testimonials)
  - Create service area map/list section linking to /locations
  - Create final CTA section with quote form teaser
  - Write 1500+ words of SEO content throughout sections
  - Implement internal links to all pillar pages

  **Must NOT do**:
  - Do not use stock photos (use styled placeholders with brand colors)
  - Do not create thin content sections
  - Do not forget mobile responsive design

  **Parallelizable**: YES (with 5, 8, 9, 10 after Phase 1)

  **References**:
  - Competitor hero patterns from research
  - Internal linking to: /services, /gallery, /locations, /quote, /about

  **SEO Requirements**:
  - Title: "Permanent Exterior LED Lighting Sacramento | EXT Lighting"
  - Meta description: ~155 chars including "Sacramento", "permanent lighting", primary benefit
  - H1: "Sacramento's Premier Permanent Exterior Lighting"
  - H2s for each major section
  - Schema: LocalBusiness + Organization
  - OpenGraph image

  **Acceptance Criteria**:
  - [ ] Page renders at `/`
  - [ ] Hero CTAs link to `/quote` and `/gallery`
  - [ ] All sections responsive on mobile
  - [ ] Word count ≥1500
  - [ ] Internal links to all pillar pages present
  - [ ] Lighthouse SEO score ≥95

  **Commit**: YES
  - Message: `feat(pages): create homepage with hero, benefits, and SEO content`
  - Files: `app/page.tsx`, `app/layout.tsx`

---

- [ ] 5. Services Overview Page

  **What to do**:
  - Create pillar page for all services at `/services`
  - Write comprehensive intro (500+ words) explaining permanent exterior lighting
  - Create service category cards linking to detail pages:
    - Residential Lighting → /services/residential
    - Commercial Lighting → /services/commercial
  - Create "What's Included" section explaining full service
  - Create comparison section: Permanent vs. Temporary lighting
  - Create "Our Process" detailed breakdown
  - Create FAQ section with 5-8 service-related questions
  - Add internal links to location pages and quote form
  - Write 2000+ words total SEO content

  **Must NOT do**:
  - Do not create more than 2 service categories
  - Do not duplicate content from homepage
  - Do not forget to link to child pages

  **Parallelizable**: YES (with 4, 8, 9, 10 after Phase 1)

  **References**:
  - Service definitions from `lib/data/services.ts`
  - Link to: /services/residential, /services/commercial, /quote, /locations

  **SEO Requirements**:
  - Title: "Permanent Exterior Lighting Services | Residential & Commercial | EXT Lighting"
  - Meta description emphasizing both service types
  - H1: "Professional Permanent Exterior Lighting Services"
  - Schema: Service (array of 2 services)

  **Acceptance Criteria**:
  - [ ] Page renders at `/services`
  - [ ] Both service cards link to detail pages
  - [ ] FAQ section has FAQ schema markup
  - [ ] Word count ≥2000
  - [ ] Comparison table renders responsively

  **Commit**: YES
  - Message: `feat(pages): create services pillar page with comprehensive content`
  - Files: `app/services/page.tsx`

---

- [ ] 6. Residential Services Page

  **What to do**:
  - Create detailed page for residential lighting at `/services/residential`
  - Write comprehensive content (2500+ words) covering:
    - What is residential permanent lighting
    - Benefits for homeowners (convenience, curb appeal, safety, value)
    - Applications: roofline, trim, soffit, accent, landscape
    - How app control works
    - Warranty and maintenance info
  - Create visual sections showing different applications
  - Create "Ideal For" section (target customer profiles)
  - Create pricing transparency section (ranges, not exact)
  - Add testimonial specific to residential
  - Create strong CTA section for quote
  - Link to all residential location pages

  **Must NOT do**:
  - Do not list exact prices (use ranges like "$3,000 - $6,000 typical")
  - Do not duplicate services overview content
  - Do not forget internal links to locations

  **Parallelizable**: YES (with 7 after 5)

  **References**:
  - Parent: /services
  - Link to: /locations/[city]/residential pages, /quote, /gallery

  **SEO Requirements**:
  - Title: "Residential Permanent Lighting Sacramento | Home LED Installation | EXT Lighting"
  - Meta description focusing on homeowner benefits
  - H1: "Residential Permanent Exterior Lighting"
  - Schema: Service (Residential-specific)

  **Acceptance Criteria**:
  - [ ] Page renders at `/services/residential`
  - [ ] Breadcrumb shows: Home > Services > Residential
  - [ ] Word count ≥2500
  - [ ] Links to at least 6 location/residential pages
  - [ ] Pricing range section present

  **Commit**: YES
  - Message: `feat(pages): create residential services page with detailed content`
  - Files: `app/services/residential/page.tsx`

---

- [ ] 7. Commercial Services Page

  **What to do**:
  - Create detailed page for commercial lighting at `/services/commercial`
  - Write comprehensive content (2500+ words) covering:
    - Commercial permanent lighting benefits
    - ROI for businesses (reduced maintenance, branding, safety)
    - Applications: building outline, signage accent, parking areas
    - Case for different property types (retail, restaurant, office, HOA)
    - Project timeline and process for commercial
  - Create "Property Types We Serve" section with examples
  - Create ROI/business case section
  - Add commercial-focused testimonial
  - Create strong CTA section for consultation
  - Link to all commercial location pages

  **Must NOT do**:
  - Do not target same keywords as residential page
  - Do not use residential testimonials
  - Do not forget B2B language and value props

  **Parallelizable**: YES (with 6 after 5)

  **References**:
  - Parent: /services
  - Link to: /locations/[city]/commercial pages, /quote, /gallery

  **SEO Requirements**:
  - Title: "Commercial Permanent Lighting Sacramento | Business LED Installation | EXT Lighting"
  - Meta description focusing on business benefits, ROI
  - H1: "Commercial Permanent Exterior Lighting"
  - Schema: Service (Commercial-specific)

  **Acceptance Criteria**:
  - [ ] Page renders at `/services/commercial`
  - [ ] Breadcrumb shows: Home > Services > Commercial
  - [ ] Word count ≥2500
  - [ ] ROI/business case section present
  - [ ] Links to at least 6 location/commercial pages

  **Commit**: YES
  - Message: `feat(pages): create commercial services page with B2B content`
  - Files: `app/services/commercial/page.tsx`

---

- [ ] 8. About Us Page

  **What to do**:
  - Create compelling about page at `/about`
  - Write brand story (1500+ words):
    - Why EXT Lighting was founded
    - Mission and values
    - Local Sacramento roots and community connection
    - Commitment to quality and customer service
  - Create "Our Team" section (can use placeholders)
  - Create "Our Promise" section with guarantees
  - Create certifications/credentials section
  - Add company timeline or milestones
  - Include trust signals (insurance, licensing, warranty)
  - Strong CTA to get quote

  **Must NOT do**:
  - Do not create fake team member bios
  - Do not make unverifiable claims
  - Do not forget local Sacramento mentions for SEO

  **Parallelizable**: YES (with 4, 5, 9, 10 after Phase 1)

  **References**:
  - Business info from `lib/data/business.ts`
  - Link to: /services, /locations, /quote, /gallery

  **SEO Requirements**:
  - Title: "About EXT Lighting | Sacramento's Trusted Lighting Experts"
  - Meta description emphasizing local, trusted, professional
  - H1: "About EXT Lighting"
  - Schema: Organization + LocalBusiness

  **Acceptance Criteria**:
  - [ ] Page renders at `/about`
  - [ ] Word count ≥1500
  - [ ] Trust signals (warranty, insurance) visible
  - [ ] Sacramento/local mentioned 5+ times
  - [ ] CTA links to /quote

  **Commit**: YES
  - Message: `feat(pages): create about page with brand story and trust signals`
  - Files: `app/about/page.tsx`

---

- [ ] 9. Gallery Page

  **What to do**:
  - Create visual gallery page at `/gallery`
  - Implement dark background section for photo showcase
  - Create filter tabs: All, Residential, Commercial, Holiday, Security
  - Implement responsive image grid (masonry-style or uniform)
  - Create before/after comparison section using BeforeAfterSlider
  - Add image placeholders with proper aspect ratios
  - Create captions with project type and location
  - Write intro content (500+ words) about portfolio
  - Add CTA section: "Want results like these?"

  **Must NOT do**:
  - Do not add lightbox/modal functionality
  - Do not exceed 24 images total
  - Do not use images without alt text

  **Parallelizable**: YES (with 4, 5, 8, 10 after Phase 1)

  **References**:
  - BeforeAfterSlider component from task 3
  - Link to: /quote, /services, /locations

  **SEO Requirements**:
  - Title: "Permanent Lighting Gallery | Before & After Photos | EXT Lighting"
  - Meta description emphasizing visual proof, Sacramento area
  - H1: "Our Work: Permanent Lighting Gallery"
  - Schema: ImageGallery

  **Acceptance Criteria**:
  - [ ] Page renders at `/gallery`
  - [ ] Dark background section displays correctly
  - [ ] Filter tabs work (show/hide images by category)
  - [ ] Before/after slider functional
  - [ ] All images have descriptive alt text
  - [ ] Responsive grid on mobile

  **Commit**: YES
  - Message: `feat(pages): create gallery page with filters and before/after slider`
  - Files: `app/gallery/page.tsx`

---

- [ ] 10. FAQ Page

  **What to do**:
  - Create comprehensive FAQ page at `/faq`
  - Write 15-20 questions with detailed answers covering:
    - Pricing questions (ranges, what affects cost, financing)
    - Installation process (timeline, disruption, weather)
    - Product questions (durability, warranty, lifespan)
    - Technical questions (app control, smart home, colors)
    - Service area questions
    - Maintenance and support
  - Implement accordion UI for questions
  - Create pricing transparency section with ranges
  - Add "Still have questions?" CTA to contact

  **Must NOT do**:
  - Do not provide exact pricing (ranges only)
  - Do not create thin 1-sentence answers
  - Do not forget FAQ schema markup

  **Parallelizable**: YES (with 4, 5, 8, 9 after Phase 1)

  **References**:
  - FAQ content from PRD
  - Link to: /quote, /contact, /services

  **SEO Requirements**:
  - Title: "Permanent Lighting FAQ | Pricing, Installation, Warranty | EXT Lighting"
  - Meta description with common question keywords
  - H1: "Frequently Asked Questions"
  - Schema: FAQPage (CRITICAL for featured snippets)

  **Acceptance Criteria**:
  - [ ] Page renders at `/faq`
  - [ ] 15+ questions with substantive answers
  - [ ] Accordion opens/closes correctly
  - [ ] FAQ schema validates in Rich Results Test
  - [ ] Pricing ranges present (not exact prices)

  **Commit**: YES
  - Message: `feat(pages): create FAQ page with schema markup and pricing info`
  - Files: `app/faq/page.tsx`

---

- [ ] 11. Contact Page

  **What to do**:
  - Create contact page at `/contact`
  - Display full business NAP from single source of truth
  - Include click-to-call phone number (prominent)
  - Include email link
  - Create service area section with list of cities
  - Add Google Maps embed placeholder (or static map)
  - Include business hours
  - Add simple contact form (alternative to full quote form)
  - Write content (800+ words) about reaching out

  **Must NOT do**:
  - Do not hardcode NAP (use business.ts)
  - Do not create duplicate of quote form
  - Do not forget LocalBusiness schema

  **Parallelizable**: YES (with 12 after Phase 1)

  **References**:
  - NAP from `lib/data/business.ts`
  - Service area from `lib/data/locations.ts`
  - Link to: /quote, /locations, /services

  **SEO Requirements**:
  - Title: "Contact EXT Lighting | Sacramento Permanent Lighting Experts"
  - Meta description with phone number and service area
  - H1: "Contact Us"
  - Schema: LocalBusiness with full NAP

  **Acceptance Criteria**:
  - [ ] Page renders at `/contact`
  - [ ] Phone number is click-to-call on mobile
  - [ ] NAP matches exactly across site
  - [ ] Business hours displayed
  - [ ] Service area cities listed

  **Commit**: YES
  - Message: `feat(pages): create contact page with NAP and service area`
  - Files: `app/contact/page.tsx`

---

- [ ] 12. Quote Request Page & Form

  **What to do**:
  - Create quote request page at `/quote`
  - Implement multi-step form (2 steps):
    - Step 1: Service info (Service Type, Property Type, City dropdown, Message)
    - Step 2: Contact info (Name, Email, Phone)
  - Implement form validation with react-hook-form + zod
  - Create Server Action for form submission
  - Integrate Resend for email notifications
  - Create email template using react-email
  - Implement spam prevention:
    - Honeypot field (hidden)
    - Timing validation (min 3 seconds)
  - Create success/error states
  - Add trust signals near form
  - Write persuasive content (800+ words) around form

  **Must NOT do**:
  - Do not store leads in database (email only)
  - Do not add more than 6 fields
  - Do not use client-side email sending
  - Do not skip server-side validation

  **Parallelizable**: YES (with 11 after Phase 1)

  **References**:
  - react-hook-form + zod pattern: https://ui.shadcn.com/docs/components/form
  - Resend Server Action pattern: https://resend.com/docs/send-with-nextjs
  - Form fields: Name, Email, Phone, City, Service Type, Message

  **SEO Requirements**:
  - Title: "Get a Free Quote | Permanent Lighting Installation | EXT Lighting"
  - Meta description emphasizing free quote, no obligation
  - H1: "Get Your Free Quote"
  - Schema: ContactPage

  **Acceptance Criteria**:
  - [ ] Page renders at `/quote`
  - [ ] Form has 2 steps with progress indicator
  - [ ] Client-side validation shows inline errors
  - [ ] Server-side validation with zod works
  - [ ] Successful submission sends email via Resend
  - [ ] Honeypot submissions silently "succeed"
  - [ ] Success message displays after submission
  - [ ] Error message displays if Resend fails

  **Commit**: YES
  - Message: `feat(forms): create multi-step quote form with Resend integration`
  - Files: `app/quote/page.tsx`, `app/quote/actions.ts`, `components/quote-form.tsx`, `lib/resend.ts`, `components/emails/quote-notification.tsx`

---

### Phase 3: Location Infrastructure

- [ ] 13. Location Data & Content

  **What to do**:
  - Create comprehensive location data in `lib/data/locations.ts`:
    ```typescript
    {
      slug: 'sacramento',
      name: 'Sacramento',
      county: 'Sacramento County',
      neighborhoods: ['Downtown', 'Midtown', 'East Sacramento', 'Land Park', 'Natomas'],
      nearbyAreas: ['West Sacramento', 'Arden-Arcade'],
      coordinates: { lat: 38.5816, lng: -121.4944 },
      description: 'As the state capital...',
      uniqueContent: '...',
    }
    ```
  - Write unique content for each of 12 cities:
    - 2-3 paragraph intro specific to each city (300+ words each)
    - Neighborhood list (5-10 per city)
    - Nearby areas served
    - City-specific value props
  - Create helper functions for location data retrieval

  **Must NOT do**:
  - Do not create identical content for cities
  - Do not forget coordinates (needed for schema)
  - Do not hardcode data in components

  **Parallelizable**: NO (needed before location pages)

  **References**:
  - 12 cities: Sacramento, Rancho Cordova, Citrus Heights, Orangevale, Fair Oaks, Roseville, Rocklin, Loomis, Auburn, Grass Valley, Folsom, El Dorado Hills

  **Acceptance Criteria**:
  - [ ] `lib/data/locations.ts` exports all 12 cities
  - [ ] Each city has unique 300+ word description
  - [ ] Each city has 5+ neighborhoods listed
  - [ ] Coordinates present for all cities
  - [ ] Helper functions work correctly

  **Commit**: YES
  - Message: `feat(data): create comprehensive location data for 12 Sacramento area cities`
  - Files: `lib/data/locations.ts`

---

- [ ] 14. Location Page Templates & Dynamic Routes

  **What to do**:
  - Create dynamic route structure:
    - `app/locations/page.tsx` - Locations hub
    - `app/locations/[city]/page.tsx` - City landing
    - `app/locations/[city]/[service]/page.tsx` - City + service
  - Implement `generateStaticParams()` for all routes
  - Implement `generateMetadata()` for dynamic SEO
  - Create reusable location page template component
  - Create city/service page template component
  - Set up proper breadcrumb navigation
  - Create internal linking between related pages

  **Must NOT do**:
  - Do not use getServerSideProps (use static generation)
  - Do not forget canonical URLs
  - Do not create pages without generateStaticParams

  **Parallelizable**: NO (depends on 13)

  **References**:
  - Location data from task 13
  - Next.js generateStaticParams: https://nextjs.org/docs/app/api-reference/functions/generate-static-params

  **Acceptance Criteria**:
  - [ ] `generateStaticParams` returns all 12 city slugs
  - [ ] `generateStaticParams` returns all 24 city/service combinations
  - [ ] Dynamic metadata generates unique titles/descriptions
  - [ ] Breadcrumbs render correctly on all location pages
  - [ ] No build errors for static generation

  **Commit**: YES
  - Message: `feat(locations): create dynamic route infrastructure with static generation`
  - Files: `app/locations/page.tsx`, `app/locations/[city]/page.tsx`, `app/locations/[city]/[service]/page.tsx`

---

### Phase 4: City Landing Pages (12 Pages)

- [ ] 15. Sacramento City Page

  **What to do**:
  - Create city landing page at `/locations/sacramento`
  - Write 2000+ words of unique, SEO-optimized content:
    - Introduction to permanent lighting in Sacramento
    - Why Sacramento homeowners choose permanent lighting
    - Sacramento-specific benefits (climate, property values, etc.)
    - Neighborhoods served (Downtown, Midtown, East Sacramento, Land Park, Natomas, etc.)
    - Local testimonial or case study
  - Create service cards linking to /sacramento/residential and /sacramento/commercial
  - Create "Neighborhoods We Serve" section
  - Create local trust signals section
  - Add map or visual of service area
  - Internal links to neighboring cities, services, quote

  **Must NOT do**:
  - Do not copy content from other city pages
  - Do not forget Sacramento-specific keywords
  - Do not skip internal linking

  **Parallelizable**: YES (with tasks 16-26 after Phase 3)

  **References**:
  - Location data from `lib/data/locations.ts`
  - Link to: /locations/sacramento/residential, /locations/sacramento/commercial, /quote, /services

  **SEO Requirements**:
  - Title: "Permanent Lighting Sacramento CA | LED Installation | EXT Lighting"
  - Meta description with Sacramento-specific keywords
  - H1: "Permanent Exterior Lighting in Sacramento, CA"
  - Schema: LocalBusiness with Sacramento address

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/sacramento`
  - [ ] Word count ≥2000
  - [ ] Sacramento neighborhoods listed
  - [ ] Links to both service sub-pages
  - [ ] Schema includes Sacramento coordinates

  **Commit**: YES (group with other city pages)
  - Message: `feat(locations): create Sacramento city landing page`
  - Files: Content in `app/locations/[city]/page.tsx` (template-driven)

---

- [ ] 16. Rancho Cordova City Page

  **What to do**:
  - Create city landing page at `/locations/rancho-cordova`
  - Write 2000+ words unique content focusing on:
    - Rancho Cordova's growing community and new developments
    - Family-friendly neighborhoods
    - Local landmarks and character
  - Include neighborhoods: Anatolia, Sunridge, Gold River adjacent areas
  - Link to neighboring cities: Sacramento, Folsom, Citrus Heights

  **Parallelizable**: YES (with other city pages)

  **SEO Requirements**:
  - Title: "Permanent Lighting Rancho Cordova CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Rancho Cordova, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/rancho-cordova`
  - [ ] Word count ≥2000
  - [ ] Content unique from Sacramento page

  **Commit**: YES (group)

---

- [ ] 17. Citrus Heights City Page

  **What to do**:
  - Create city landing page at `/locations/citrus-heights`
  - Write 2000+ words unique content focusing on:
    - Citrus Heights' established neighborhoods
    - Mix of mid-century and newer homes
    - Community pride and local events
  - Include neighborhoods: Sunrise Mall area, Greenback corridor, Stock Ranch
  - Link to neighboring cities: Sacramento, Orangevale, Fair Oaks, Roseville

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting Citrus Heights CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Citrus Heights, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/citrus-heights`
  - [ ] Word count ≥2000

  **Commit**: YES (group)

---

- [ ] 18. Orangevale City Page

  **What to do**:
  - Create city landing page at `/locations/orangevale`
  - Write 2000+ words unique content focusing on:
    - Orangevale's rural-suburban character
    - Larger lots and equestrian properties
    - Strong community identity
  - Include areas: Main Avenue corridor, Hazel Avenue area
  - Link to neighboring cities: Fair Oaks, Citrus Heights, Folsom

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting Orangevale CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Orangevale, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/orangevale`
  - [ ] Word count ≥2000

  **Commit**: YES (group)

---

- [ ] 19. Fair Oaks City Page

  **What to do**:
  - Create city landing page at `/locations/fair-oaks`
  - Write 2000+ words unique content focusing on:
    - Fair Oaks' historic village and charm
    - American River proximity and outdoor lifestyle
    - Mix of historic and modern homes
  - Include areas: Fair Oaks Village, Fair Oaks Bluffs, Phoenix Park
  - Link to neighboring cities: Orangevale, Citrus Heights, Carmichael

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting Fair Oaks CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Fair Oaks, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/fair-oaks`
  - [ ] Word count ≥2000

  **Commit**: YES (group)

---

- [ ] 20. Roseville City Page

  **What to do**:
  - Create city landing page at `/locations/roseville`
  - Write 2000+ words unique content focusing on:
    - Roseville as Placer County's largest city
    - Growing master-planned communities
    - Excellent schools and family appeal
    - Galleria mall area and commercial growth
  - Include neighborhoods: West Roseville, Sun City, Woodcreek, Blue Oaks
  - Link to neighboring cities: Rocklin, Citrus Heights, Granite Bay

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting Roseville CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Roseville, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/roseville`
  - [ ] Word count ≥2000

  **Commit**: YES (group)

---

- [ ] 21. Rocklin City Page

  **What to do**:
  - Create city landing page at `/locations/rocklin`
  - Write 2000+ words unique content focusing on:
    - Rocklin's rapid growth and new developments
    - Whitney Ranch and Stanford Ranch communities
    - Top-rated schools
    - Quarry history and character
  - Include neighborhoods: Whitney Ranch, Stanford Ranch, Whitney Oaks, Sunset Whitney
  - Link to neighboring cities: Roseville, Loomis, Lincoln

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting Rocklin CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Rocklin, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/rocklin`
  - [ ] Word count ≥2000

  **Commit**: YES (group)

---

- [ ] 22. Loomis City Page

  **What to do**:
  - Create city landing page at `/locations/loomis`
  - Write 2000+ words unique content focusing on:
    - Loomis' small-town charm
    - Larger estate properties and rural character
    - Equestrian community
    - Historic downtown
  - Include areas: Del Mar Estates, Horseshoe Bar, Sierra College area
  - Link to neighboring cities: Rocklin, Auburn, Granite Bay

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting Loomis CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Loomis, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/loomis`
  - [ ] Word count ≥2000

  **Commit**: YES (group)

---

- [ ] 23. Auburn City Page

  **What to do**:
  - Create city landing page at `/locations/auburn`
  - Write 2000+ words unique content focusing on:
    - Auburn as Placer County seat
    - Historic Old Town charm
    - Gateway to Gold Country
    - Outdoor recreation (trails, American River)
  - Include areas: Old Town Auburn, North Auburn, Lake of the Pines nearby
  - Link to neighboring cities: Loomis, Grass Valley, Rocklin

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting Auburn CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Auburn, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/auburn`
  - [ ] Word count ≥2000

  **Commit**: YES (group)

---

- [ ] 24. Grass Valley City Page

  **What to do**:
  - Create city landing page at `/locations/grass-valley`
  - Write 2000+ words unique content focusing on:
    - Grass Valley's Gold Rush history
    - Nevada County character
    - Arts and culture scene
    - Mountain living appeal
  - Include areas: Downtown Grass Valley, Loma Rica, Penn Valley nearby
  - Link to neighboring cities: Auburn, Nevada City

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting Grass Valley CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Grass Valley, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/grass-valley`
  - [ ] Word count ≥2000

  **Commit**: YES (group)

---

- [ ] 25. Folsom City Page

  **What to do**:
  - Create city landing page at `/locations/folsom`
  - Write 2000+ words unique content focusing on:
    - Folsom's historic downtown and modern growth
    - Folsom Lake recreation
    - Excellent schools and family appeal
    - Mix of established and new developments
  - Include neighborhoods: Broadstone, Empire Ranch, Folsom Ranch, Historic Folsom
  - Link to neighboring cities: El Dorado Hills, Rancho Cordova, Orangevale

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting Folsom CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in Folsom, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/folsom`
  - [ ] Word count ≥2000

  **Commit**: YES (group)

---

- [ ] 26. El Dorado Hills City Page

  **What to do**:
  - Create city landing page at `/locations/el-dorado-hills`
  - Write 2000+ words unique content focusing on:
    - El Dorado Hills' affluent master-planned communities
    - Town Center and upscale shopping
    - Top-rated schools
    - Premium home values and curb appeal focus
  - Include neighborhoods: Serrano, Blackstone, Town Center, Promontory
  - Link to neighboring cities: Folsom, Cameron Park, Shingle Springs

  **Parallelizable**: YES

  **SEO Requirements**:
  - Title: "Permanent Lighting El Dorado Hills CA | LED Installation | EXT Lighting"
  - H1: "Permanent Exterior Lighting in El Dorado Hills, CA"

  **Acceptance Criteria**:
  - [ ] Page renders at `/locations/el-dorado-hills`
  - [ ] Word count ≥2000

  **Commit**: YES (group)
  - Message: `feat(locations): create all 12 city landing pages with unique SEO content`
  - Files: Location content in data file, rendered via template

---

### Phase 5: City + Service Pages (24 Pages)

- [ ] 27-38. Residential Service Pages for All Cities (12 pages)

  **What to do**:
  - Create `/locations/[city]/residential` for all 12 cities
  - Each page needs 1500+ words unique content:
    - City-specific residential lighting benefits
    - Local home styles and how lighting enhances them
    - Neighborhood-specific considerations
    - Local climate and durability factors
  - Use template but with city-specific:
    - H1: "Residential Permanent Lighting in [City], CA"
    - Opening paragraph with city name and character
    - Neighborhood focus section
    - Local testimonial if available
  - Internal links to:
    - Parent city page
    - /services/residential pillar
    - /quote form
    - Neighboring city/residential pages

  **Must NOT do**:
  - Do not use identical content across cities
  - Do not forget city name in key positions (H1, intro, conclusion)
  - Do not skip internal linking

  **Parallelizable**: YES (all 12 can run in parallel after Phase 4)

  **SEO Requirements** (per city):
  - Title: "[City] Residential Lighting | Home LED Installation | EXT Lighting"
  - Unique meta description per city
  - H1 includes city name
  - Schema: Service with areaServed = specific city

  **Acceptance Criteria**:
  - [ ] All 12 pages render correctly
  - [ ] Each page has 1500+ unique words
  - [ ] City name appears in H1, intro, and conclusion
  - [ ] Breadcrumbs: Home > Locations > [City] > Residential
  - [ ] Links to parent city and services pillar

  **Commit**: YES
  - Message: `feat(locations): create residential service pages for all 12 cities`

---

- [ ] 39-50. Commercial Service Pages for All Cities (12 pages)

  **What to do**:
  - Create `/locations/[city]/commercial` for all 12 cities
  - Each page needs 1500+ words unique content:
    - City-specific commercial lighting opportunities
    - Local business districts and commercial areas
    - Property types common in that city
    - Local business community and networking
  - Use template but with city-specific:
    - H1: "Commercial Permanent Lighting in [City], CA"
    - Business districts section
    - Local commercial testimonial if available
  - Internal links to:
    - Parent city page
    - /services/commercial pillar
    - /quote form
    - Neighboring city/commercial pages

  **Must NOT do**:
  - Do not use identical content across cities
  - Do not use residential testimonials on commercial pages
  - Do not forget B2B language

  **Parallelizable**: YES (all 12 can run in parallel after Phase 4)

  **SEO Requirements** (per city):
  - Title: "[City] Commercial Lighting | Business LED Installation | EXT Lighting"
  - Unique meta description per city with B2B keywords
  - H1 includes city name
  - Schema: Service with areaServed = specific city

  **Acceptance Criteria**:
  - [ ] All 12 pages render correctly
  - [ ] Each page has 1500+ unique words
  - [ ] City name appears in H1, intro, and conclusion
  - [ ] Breadcrumbs: Home > Locations > [City] > Commercial
  - [ ] Links to parent city and services pillar

  **Commit**: YES
  - Message: `feat(locations): create commercial service pages for all 12 cities`

---

### Phase 6: SEO & Polish

- [ ] 51. Sitemap, Robots.txt, and Metadata

  **What to do**:
  - Create `app/sitemap.ts` with all 44 pages
  - Create `app/robots.ts` allowing all crawlers
  - Verify `metadataBase` set in root layout
  - Create default OpenGraph image
  - Verify all pages have:
    - Unique title (≤60 chars)
    - Unique meta description (≤160 chars)
    - Canonical URL
    - OpenGraph tags
  - Add JSON-LD LocalBusiness schema to all pages
  - Add FAQ schema to FAQ page
  - Add Service schema to service pages

  **Must NOT do**:
  - Do not block any pages in robots.txt
  - Do not use duplicate meta descriptions
  - Do not forget canonical URLs

  **Parallelizable**: YES (with 52, 53 after all pages)

  **References**:
  - Next.js sitemap: https://nextjs.org/docs/app/api-reference/file-conventions/sitemap
  - Schema markup patterns from Metis review

  **Acceptance Criteria**:
  - [ ] `/sitemap.xml` accessible and lists all 44 pages
  - [ ] `/robots.txt` allows all crawlers
  - [ ] All pages have unique titles and descriptions
  - [ ] Schema validates on Google Rich Results Test

  **Commit**: YES
  - Message: `feat(seo): add sitemap, robots.txt, and comprehensive schema markup`
  - Files: `app/sitemap.ts`, `app/robots.ts`, schema files

---

- [ ] 52. Internal Linking Audit

  **What to do**:
  - Audit all pages for proper internal linking
  - Ensure pillar pages link to all cluster pages
  - Ensure cluster pages link back to pillars
  - Ensure neighboring city pages cross-link
  - Add contextual links within content (not just navigation)
  - Verify no broken internal links
  - Create link map documentation

  **Must NOT do**:
  - Do not create orphan pages (no incoming links)
  - Do not over-link (max 3-5 contextual links per 500 words)
  - Do not use "click here" anchor text

  **Parallelizable**: YES (with 51, 53)

  **Acceptance Criteria**:
  - [ ] Every page has 3+ incoming internal links
  - [ ] Pillar pages link to all cluster pages
  - [ ] No broken internal links
  - [ ] Contextual anchor text used

  **Commit**: YES
  - Message: `fix(seo): audit and improve internal linking structure`

---

- [ ] 53. Performance Audit & Optimization

  **What to do**:
  - Run Lighthouse audit on homepage, services, and 2 location pages
  - Optimize images (ensure all use Next.js Image)
  - Verify lazy loading on below-fold images
  - Check Core Web Vitals:
    - LCP < 2.5s
    - FID < 100ms
    - CLS < 0.1
  - Optimize fonts (use next/font)
  - Verify mobile responsiveness on all page types
  - Fix any accessibility issues (WCAG 2.1 AA)

  **Must NOT do**:
  - Do not skip mobile testing
  - Do not ignore accessibility warnings
  - Do not use unoptimized images

  **Parallelizable**: YES (with 51, 52)

  **Acceptance Criteria**:
  - [ ] Homepage Lighthouse Performance ≥90
  - [ ] Homepage Lighthouse SEO ≥95
  - [ ] Homepage Lighthouse Accessibility ≥95
  - [ ] All images use Next.js Image component
  - [ ] No accessibility errors

  **Commit**: YES
  - Message: `perf(optimize): improve Core Web Vitals and accessibility`

---

### Phase 7: Deployment

- [ ] 54. Vercel Deployment

  **What to do**:
  - Initialize git repository
  - Create initial commit with all code
  - Connect to Vercel
  - Configure environment variables:
    - RESEND_API_KEY
    - NEXT_PUBLIC_SITE_URL
  - Configure custom domain (if available)
  - Deploy to production
  - Verify build succeeds

  **Must NOT do**:
  - Do not commit .env file with secrets
  - Do not skip environment variable setup
  - Do not deploy without build verification

  **Parallelizable**: NO (final step)

  **Acceptance Criteria**:
  - [ ] Git repository initialized with all code
  - [ ] Vercel deployment succeeds
  - [ ] Environment variables configured
  - [ ] Production URL accessible
  - [ ] All pages render on production

  **Commit**: YES
  - Message: `chore(deploy): prepare for Vercel deployment`
  - Files: `.gitignore`, `vercel.json` (if needed)

---

- [ ] 55. Final Verification

  **What to do**:
  - Test all 44 pages load on production
  - Test quote form submission (end-to-end)
  - Verify email received via Resend
  - Test click-to-call on mobile
  - Verify sitemap accessible
  - Run Google Rich Results Test on 3 pages
  - Check mobile responsiveness on real device
  - Verify no console errors
  - Create launch checklist documentation

  **Must NOT do**:
  - Do not skip form testing
  - Do not ignore mobile testing
  - Do not launch without email verification

  **Parallelizable**: NO (final verification)

  **Acceptance Criteria**:
  - [ ] All 44 pages load without errors
  - [ ] Quote form sends email successfully
  - [ ] Click-to-call works on mobile
  - [ ] Schema validates on Rich Results Test
  - [ ] No console errors on any page
  - [ ] Site ready for business use

  **Commit**: NO (verification only)

---

## Commit Strategy

| After Task(s) | Message | Files |
|---------------|---------|-------|
| 1 | `feat(init): initialize Next.js 15 project` | package.json, config files |
| 2 | `feat(design): implement Clean Luxury theme` | globals.css, tailwind.config.ts |
| 3 | `feat(components): create core UI library` | components/*, lib/data/* |
| 4 | `feat(pages): create homepage` | app/page.tsx |
| 5 | `feat(pages): create services pillar page` | app/services/page.tsx |
| 6 | `feat(pages): create residential services page` | app/services/residential/* |
| 7 | `feat(pages): create commercial services page` | app/services/commercial/* |
| 8 | `feat(pages): create about page` | app/about/page.tsx |
| 9 | `feat(pages): create gallery page` | app/gallery/page.tsx |
| 10 | `feat(pages): create FAQ page with schema` | app/faq/page.tsx |
| 11 | `feat(pages): create contact page` | app/contact/page.tsx |
| 12 | `feat(forms): create quote form with Resend` | app/quote/*, lib/resend.ts |
| 13 | `feat(data): create location data for 12 cities` | lib/data/locations.ts |
| 14 | `feat(locations): create dynamic route infrastructure` | app/locations/* |
| 15-26 | `feat(locations): create all 12 city landing pages` | app/locations/[city]/* |
| 27-38 | `feat(locations): create residential pages for all cities` | city/residential content |
| 39-50 | `feat(locations): create commercial pages for all cities` | city/commercial content |
| 51 | `feat(seo): add sitemap, robots, schema markup` | app/sitemap.ts, app/robots.ts |
| 52 | `fix(seo): improve internal linking structure` | various pages |
| 53 | `perf(optimize): improve Core Web Vitals` | various optimizations |
| 54 | `chore(deploy): prepare for Vercel deployment` | .gitignore, vercel.json |

---

## Success Criteria

### Verification Commands
```bash
# Build verification
npm run build  # Expected: Build succeeds with no errors

# Development server
npm run dev    # Expected: Server starts, all routes accessible

# Lighthouse audit
npx lighthouse http://localhost:3000 --output=json  # Expected: Performance ≥90, SEO ≥95
```

### Final Checklist
- [ ] All 44 pages render without errors
- [ ] Quote form sends emails successfully
- [ ] All pages have unique SEO metadata
- [ ] LocalBusiness schema validates on all pages
- [ ] Mobile responsive on all pages
- [ ] Click-to-call works on mobile
- [ ] Lighthouse Performance ≥90
- [ ] Lighthouse SEO ≥95
- [ ] Sitemap includes all pages
- [ ] No broken internal links
- [ ] All images optimized
- [ ] Site deployed to Vercel
- [ ] Business ready for launch

---

## Appendix: Business Data Defaults

### NAP (Name, Address, Phone)
```typescript
// lib/data/business.ts
export const business = {
  name: "EXT Lighting",
  legalName: "EXT Lighting LLC",
  phone: "(916) 555-0123", // PLACEHOLDER - Update before launch
  email: "info@extlighting.com",
  address: {
    street: "123 Main Street", // PLACEHOLDER
    city: "Sacramento",
    state: "CA",
    zip: "95814",
    country: "US",
  },
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
  },
  social: {
    facebook: "https://facebook.com/extlighting",
    instagram: "https://instagram.com/extlighting",
  },
  coordinates: {
    lat: 38.5816,
    lng: -121.4944,
  },
};
```

### 12 Cities Reference
| City | Slug | County |
|------|------|--------|
| Sacramento | sacramento | Sacramento |
| Rancho Cordova | rancho-cordova | Sacramento |
| Citrus Heights | citrus-heights | Sacramento |
| Orangevale | orangevale | Sacramento |
| Fair Oaks | fair-oaks | Sacramento |
| Roseville | roseville | Placer |
| Rocklin | rocklin | Placer |
| Loomis | loomis | Placer |
| Auburn | auburn | Placer |
| Grass Valley | grass-valley | Nevada |
| Folsom | folsom | Sacramento |
| El Dorado Hills | el-dorado-hills | El Dorado |
