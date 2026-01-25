# EXT Lighting - Design System Reference

## Brand Identity

**Company**: EXT Lighting  
**Tagline Options**:
- "Light It Once. Love It Forever."
- "Permanent Exterior Brilliance"
- "Sacramento's Premier Permanent Lighting"

**Brand Voice**:
- Professional, confident, approachable
- Premium but not pretentious
- Local and personal (not corporate franchise feel)

**Voice Examples**:
- ✅ "Light your home once. Enjoy it forever."
- ✅ "No ladders. No hassle. Just beautiful lighting year-round."
- ❌ "BEST PRICES IN TOWN!!!"
- ❌ "Cheap and fast holiday lights"

---

## Color Palette

### Primary - Warm Neutrals (Light Theme)

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#fafaf9` | Page background |
| `--background-alt` | `#f5f5f4` | Alternate sections |
| `--background-muted` | `#e7e5e4` | Subtle backgrounds |
| `--foreground` | `#1c1917` | Primary text |
| `--foreground-muted` | `#78716c` | Secondary text |

### Accent - Warm Gold

| Token | Hex | Usage |
|-------|-----|-------|
| `--gold-50` | `#fffbeb` | Subtle gold tint |
| `--gold-100` | `#fef3c7` | Light gold background |
| `--gold-200` | `#fde68a` | Hover states |
| `--gold-300` | `#fcd34d` | - |
| `--gold-400` | `#fbbf24` | - |
| `--gold-500` | `#f59e0b` | Primary gold |
| `--gold-600` | `#d97706` | Hover on primary |
| `--gold-700` | `#b45309` | **Primary accent** |
| `--gold-800` | `#92400e` | Dark gold |
| `--gold-900` | `#78350f` | Darkest gold |

### Secondary - Charcoal

| Token | Hex | Usage |
|-------|-----|-------|
| `--charcoal-50` | `#f9fafb` | - |
| `--charcoal-100` | `#f3f4f6` | - |
| `--charcoal-200` | `#e5e7eb` | Borders |
| `--charcoal-300` | `#d1d5db` | Disabled |
| `--charcoal-400` | `#9ca3af` | Placeholder |
| `--charcoal-500` | `#6b7280` | Secondary text |
| `--charcoal-600` | `#4b5563` | - |
| `--charcoal-700` | `#374151` | **Body text** |
| `--charcoal-800` | `#1f2937` | Headings |
| `--charcoal-900` | `#111827` | Near black |

### Gallery Dark Section

| Token | Hex | Usage |
|-------|-----|-------|
| `--gallery-bg` | `#0f0f0f` | Dark gallery background |
| `--gallery-text` | `#fafaf9` | Light text on dark |
| `--gallery-muted` | `#a1a1aa` | Secondary on dark |

---

## Typography

### Font Stack

```css
--font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-heading: 'Inter', var(--font-sans);
```

**Recommendation**: Use `next/font` with Inter for optimal loading.

### Type Scale

| Element | Size (Mobile) | Size (Desktop) | Weight | Line Height |
|---------|---------------|----------------|--------|-------------|
| H1 | 2.25rem (36px) | 3.75rem (60px) | 700 | 1.1 |
| H2 | 1.875rem (30px) | 2.5rem (40px) | 600 | 1.2 |
| H3 | 1.5rem (24px) | 1.875rem (30px) | 600 | 1.3 |
| H4 | 1.25rem (20px) | 1.5rem (24px) | 600 | 1.4 |
| Body | 1rem (16px) | 1.125rem (18px) | 400 | 1.6 |
| Small | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.5 |
| Caption | 0.75rem (12px) | 0.75rem (12px) | 400 | 1.4 |

### Tailwind Classes

```tsx
// Headings
<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
<h2 className="text-3xl md:text-4xl font-semibold">
<h3 className="text-2xl md:text-3xl font-semibold">
<h4 className="text-xl md:text-2xl font-semibold">

// Body
<p className="text-base md:text-lg text-charcoal-700 leading-relaxed">

// Small/Caption
<span className="text-sm text-charcoal-500">
```

---

## Spacing & Layout

### Container Widths

| Breakpoint | Max Width | Padding |
|------------|-----------|---------|
| sm (640px) | 100% | 1rem |
| md (768px) | 100% | 1.5rem |
| lg (1024px) | 1024px | 2rem |
| xl (1280px) | 1280px | 2rem |
| 2xl (1536px) | 1400px | 2rem |

### Section Spacing

```tsx
// Standard section
<section className="py-16 md:py-24">

// Hero section
<section className="py-20 md:py-32">

// Compact section
<section className="py-12 md:py-16">
```

### Grid System

```tsx
// Two column
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

// Three column
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

// Four column (features/benefits)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

---

## Component Specifications

### Buttons

**Primary CTA (Gold Gradient)**
```tsx
<Button className="bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
  Get Free Quote
</Button>
```

**Secondary CTA (Outline)**
```tsx
<Button variant="outline" className="border-2 border-gold-700 text-gold-700 hover:bg-gold-50 font-semibold px-8 py-3 rounded-lg">
  View Our Work
</Button>
```

**Ghost Button**
```tsx
<Button variant="ghost" className="text-charcoal-700 hover:text-gold-700 hover:bg-gold-50">
  Learn More
</Button>
```

### Cards

**Service Card**
```tsx
<Card className="bg-white border border-charcoal-200 rounded-xl p-6 hover:shadow-lg hover:border-gold-300 transition-all duration-200">
  <CardHeader>
    <Icon className="w-12 h-12 text-gold-600 mb-4" />
    <CardTitle className="text-xl font-semibold text-charcoal-800">
      Residential Lighting
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-charcoal-600">Description text...</p>
  </CardContent>
  <CardFooter>
    <Link className="text-gold-700 font-medium hover:text-gold-800">
      Learn More →
    </Link>
  </CardFooter>
</Card>
```

**Testimonial Card**
```tsx
<Card className="bg-gold-50 border-none rounded-xl p-8">
  <blockquote className="text-lg text-charcoal-700 italic mb-4">
    "Quote text..."
  </blockquote>
  <footer className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-gold-200" /> {/* Avatar placeholder */}
    <div>
      <p className="font-semibold text-charcoal-800">John Smith</p>
      <p className="text-sm text-charcoal-500">Roseville, CA</p>
    </div>
  </footer>
</Card>
```

### Navigation

**Header (Desktop)**
```tsx
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-charcoal-100">
  <div className="container mx-auto px-4 h-20 flex items-center justify-between">
    <Logo />
    <nav className="hidden md:flex items-center gap-8">
      <NavLink>Services</NavLink>
      <NavLink>Locations</NavLink>
      <NavLink>Gallery</NavLink>
      <NavLink>About</NavLink>
      <NavLink>FAQ</NavLink>
    </nav>
    <div className="flex items-center gap-4">
      <ClickToCall className="hidden sm:flex" />
      <CTAButton>Get Quote</CTAButton>
      <MobileMenuButton className="md:hidden" />
    </div>
  </div>
</header>
```

**Footer**
```tsx
<footer className="bg-charcoal-900 text-white py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Column 1: Logo + Description */}
      {/* Column 2: Quick Links */}
      {/* Column 3: Service Areas */}
      {/* Column 4: Contact Info + NAP */}
    </div>
    <div className="mt-12 pt-8 border-t border-charcoal-700 text-center text-charcoal-400">
      © 2024 EXT Lighting. All rights reserved.
    </div>
  </div>
</footer>
```

### Form Elements

**Input Field**
```tsx
<div className="space-y-2">
  <Label className="text-charcoal-700 font-medium">Your Name</Label>
  <Input 
    className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-base" 
    placeholder="John Smith"
  />
  {error && <p className="text-red-600 text-sm">{error}</p>}
</div>
```

**Select Field**
```tsx
<Select>
  <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:border-gold-500">
    <SelectValue placeholder="Select service type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="residential">Residential</SelectItem>
    <SelectItem value="commercial">Commercial</SelectItem>
  </SelectContent>
</Select>
```

**Form Progress Indicator**
```tsx
<div className="flex items-center gap-4 mb-8">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full bg-gold-600 text-white flex items-center justify-center font-semibold">1</div>
    <span className="font-medium text-charcoal-800">Service Info</span>
  </div>
  <div className="flex-1 h-1 bg-charcoal-200">
    <div className="h-full bg-gold-600" style={{ width: step === 1 ? '0%' : '100%' }} />
  </div>
  <div className="flex items-center gap-2">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${step >= 2 ? 'bg-gold-600 text-white' : 'bg-charcoal-200 text-charcoal-500'}`}>2</div>
    <span className={step >= 2 ? 'font-medium text-charcoal-800' : 'text-charcoal-500'}>Contact Info</span>
  </div>
</div>
```

---

## Image Guidelines

### Hero Images
- **Aspect Ratio**: 16:9 or 21:9 for hero banners
- **Minimum Resolution**: 1920x1080
- **Style**: Nighttime shots showing lit homes, warm glow
- **Treatment**: Can overlay with subtle gradient for text readability

### Gallery Images
- **Aspect Ratio**: 4:3 or 3:2 for consistency
- **Minimum Resolution**: 1200x900
- **Categories**: Residential, Commercial, Holiday, Security
- **Before/After**: Use clip-path slider for comparisons

### Placeholder Strategy
Until real photos available:
```tsx
// Placeholder with brand colors
<div className="aspect-video bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-xl flex items-center justify-center">
  <div className="text-center text-white/60">
    <HomeIcon className="w-16 h-16 mx-auto mb-4" />
    <p>Photo Coming Soon</p>
  </div>
</div>
```

---

## Iconography

**Recommended**: Lucide React icons (already included with shadcn/ui)

**Key Icons**:
| Usage | Icon |
|-------|------|
| Phone/Call | `Phone` |
| Location | `MapPin` |
| Email | `Mail` |
| Calendar | `Calendar` |
| Check/Success | `Check`, `CheckCircle` |
| Arrow | `ArrowRight`, `ChevronRight` |
| Menu | `Menu`, `X` |
| Home/Residential | `Home` |
| Building/Commercial | `Building2` |
| Light/Lighting | `Lightbulb`, `Sun` |
| Shield/Warranty | `Shield`, `ShieldCheck` |
| Star/Review | `Star` |
| Clock/Hours | `Clock` |

---

## Animation Guidelines

**Principle**: Subtle, purposeful animations. Luxury = restraint.

### Allowed Animations
```css
/* Hover transitions */
transition-all duration-200

/* Button hover */
hover:scale-[1.02]

/* Card hover */
hover:shadow-lg hover:-translate-y-1

/* Page transitions */
animate-in fade-in duration-300
```

### Forbidden
- No auto-playing carousels
- No bouncing elements
- No excessive parallax
- No animations longer than 500ms
- No animation on scroll (except lazy load fade-in)

---

## Responsive Breakpoints

```typescript
// tailwind.config.ts
theme: {
  screens: {
    'sm': '640px',   // Mobile landscape
    'md': '768px',   // Tablet
    'lg': '1024px',  // Desktop
    'xl': '1280px',  // Large desktop
    '2xl': '1536px', // Extra large
  }
}
```

### Mobile-First Approach
Always write mobile styles first, then add responsive modifiers:
```tsx
// ✅ Correct
<div className="text-base md:text-lg lg:text-xl">

// ❌ Wrong
<div className="lg:text-xl md:text-lg text-base">
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 for text, 3:1 for large text
- **Touch Targets**: Minimum 44x44px
- **Focus States**: Visible focus rings on all interactive elements
- **Alt Text**: All images must have descriptive alt text
- **Form Labels**: All inputs must have associated labels
- **Heading Hierarchy**: Proper H1 → H2 → H3 structure

### Focus States
```tsx
// All interactive elements
focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2
```

### Screen Reader Text
```tsx
<span className="sr-only">Call us at</span>
<a href="tel:+19165550123">(916) 555-0123</a>
```
