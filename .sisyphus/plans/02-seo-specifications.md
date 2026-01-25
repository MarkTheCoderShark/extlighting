# EXT Lighting - SEO Specifications

## SEO Strategy Overview

### Primary Keywords (High Priority)
| Keyword | Target Page | Search Intent |
|---------|-------------|---------------|
| permanent lighting sacramento | Homepage | Transactional |
| permanent exterior lighting | Homepage, Services | Informational |
| permanent LED lighting installation | Services | Transactional |
| exterior house lighting sacramento | Homepage | Transactional |
| [city] permanent lighting | Location pages | Local |

### Secondary Keywords
| Keyword | Target Page |
|---------|-------------|
| year round outdoor lighting | Services |
| app controlled house lights | Services |
| permanent holiday lights | Residential |
| commercial building lighting | Commercial |
| roofline LED lights | Residential |

### Long-Tail Keywords (Location-Specific)
- "permanent lighting installation roseville ca"
- "exterior LED lights el dorado hills"
- "commercial lighting folsom"
- "residential outdoor lighting rocklin"

---

## URL Structure

### Hierarchy
```
extlighting.com/
├── /services
│   ├── /services/residential
│   └── /services/commercial
├── /locations
│   ├── /locations/sacramento
│   │   ├── /locations/sacramento/residential
│   │   └── /locations/sacramento/commercial
│   ├── /locations/roseville
│   │   ├── /locations/roseville/residential
│   │   └── /locations/roseville/commercial
│   └── ... (10 more cities)
├── /gallery
├── /about
├── /contact
├── /quote
└── /faq
```

### URL Rules
- All lowercase
- Hyphens for word separation (not underscores)
- No trailing slashes
- No file extensions
- City names with hyphens: `el-dorado-hills`, `rancho-cordova`

---

## Meta Tags Specifications

### Homepage
```tsx
export const metadata: Metadata = {
  title: "Permanent Exterior LED Lighting Sacramento | EXT Lighting",
  description: "Sacramento's premier permanent exterior lighting installation. Year-round LED lights for homes & businesses. App-controlled, lifetime warranty. Get a free quote today!",
  keywords: ["permanent lighting", "exterior LED lights", "Sacramento lighting installation"],
  openGraph: {
    title: "Permanent Exterior LED Lighting Sacramento | EXT Lighting",
    description: "Transform your home with permanent LED lighting. No more seasonal hassle.",
    type: "website",
    locale: "en_US",
    url: "https://extlighting.com",
    siteName: "EXT Lighting",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Permanent Exterior LED Lighting Sacramento",
    description: "Sacramento's premier permanent lighting installation.",
  },
  alternates: {
    canonical: "https://extlighting.com",
  },
};
```

### Service Pages
| Page | Title (≤60 chars) | Description (≤160 chars) |
|------|-------------------|--------------------------|
| /services | Permanent Exterior Lighting Services \| EXT Lighting | Professional permanent LED lighting for residential & commercial. Roofline, accent, landscape lighting with lifetime warranty. Sacramento area. |
| /services/residential | Residential Permanent Lighting Sacramento \| EXT Lighting | Transform your home with permanent exterior LED lights. App-controlled, year-round beauty. Serving Sacramento, Roseville, Folsom & more. |
| /services/commercial | Commercial Permanent Lighting Sacramento \| EXT Lighting | Professional LED lighting for businesses. Enhance visibility, safety & branding. Restaurants, retail, offices in Greater Sacramento. |

### Location Pages
| Page Pattern | Title Pattern | Description Pattern |
|--------------|---------------|---------------------|
| /locations/[city] | Permanent Lighting [City] CA \| LED Installation \| EXT Lighting | Professional permanent exterior lighting in [City], California. Residential & commercial LED installation. Free quotes for [neighborhoods]. |
| /locations/[city]/residential | [City] Residential Lighting \| Home LED Installation \| EXT Lighting | Permanent home lighting in [City], CA. Roofline, accent & landscape LEDs. App control, lifetime warranty. Serving [neighborhoods]. |
| /locations/[city]/commercial | [City] Commercial Lighting \| Business LED Installation \| EXT Lighting | Commercial permanent lighting for [City] businesses. Enhance curb appeal & safety. Restaurants, retail, offices. Free consultation. |

### Other Pages
| Page | Title | Description |
|------|-------|-------------|
| /gallery | Permanent Lighting Gallery \| Before & After Photos \| EXT Lighting | See our permanent lighting installations. Before/after photos, residential & commercial projects in Sacramento, Roseville, Folsom & more. |
| /about | About EXT Lighting \| Sacramento's Trusted Lighting Experts | Sacramento's premier permanent lighting company. Local team, lifetime warranty, 5-star service. Learn our story and commitment to quality. |
| /contact | Contact EXT Lighting \| Sacramento Permanent Lighting | Contact EXT Lighting for permanent LED installation. Call (916) 555-0123 or visit us. Serving Sacramento, Placer & El Dorado counties. |
| /quote | Get a Free Quote \| Permanent Lighting Installation \| EXT Lighting | Request your free permanent lighting quote. No obligation consultation for Sacramento area homes & businesses. Response within 24 hours. |
| /faq | Permanent Lighting FAQ \| Pricing, Installation, Warranty | Common questions about permanent exterior lighting. Pricing ($3,000-$6,000 typical), installation time, warranty, app control & more. |

---

## Schema Markup

### LocalBusiness (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "@id": "https://extlighting.com/#organization",
  "name": "EXT Lighting",
  "legalName": "EXT Lighting LLC",
  "description": "Professional permanent exterior LED lighting installation for residential and commercial properties in the Sacramento area.",
  "url": "https://extlighting.com",
  "telephone": "+1-916-555-0123",
  "email": "info@extlighting.com",
  "priceRange": "$$$",
  "image": "https://extlighting.com/logo.png",
  "logo": "https://extlighting.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Sacramento",
    "addressRegion": "CA",
    "postalCode": "95814",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.5816,
    "longitude": -121.4944
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Sacramento", "sameAs": "https://en.wikipedia.org/wiki/Sacramento,_California" },
    { "@type": "City", "name": "Roseville" },
    { "@type": "City", "name": "Folsom" },
    { "@type": "City", "name": "Rocklin" },
    { "@type": "City", "name": "El Dorado Hills" },
    { "@type": "City", "name": "Rancho Cordova" },
    { "@type": "City", "name": "Citrus Heights" },
    { "@type": "City", "name": "Orangevale" },
    { "@type": "City", "name": "Fair Oaks" },
    { "@type": "City", "name": "Loomis" },
    { "@type": "City", "name": "Auburn" },
    { "@type": "City", "name": "Grass Valley" }
  ],
  "sameAs": [
    "https://www.facebook.com/extlighting",
    "https://www.instagram.com/extlighting"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Permanent Lighting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Permanent Lighting",
          "description": "Permanent exterior LED lighting for homes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Permanent Lighting",
          "description": "Permanent exterior LED lighting for businesses"
        }
      }
    ]
  }
}
```

### Service Schema (Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Residential Permanent Lighting Installation",
  "provider": {
    "@type": "ElectricalContractor",
    "@id": "https://extlighting.com/#organization"
  },
  "areaServed": {
    "@type": "State",
    "name": "California",
    "containsPlace": [
      { "@type": "City", "name": "Sacramento" },
      { "@type": "City", "name": "Roseville" }
    ]
  },
  "description": "Professional permanent exterior LED lighting installation for residential properties. Includes roofline, trim, soffit, accent, and landscape lighting.",
  "offers": {
    "@type": "Offer",
    "priceRange": "$3000 - $6000"
  }
}
```

### FAQ Schema (FAQ Page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does permanent lighting cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typical residential installations range from $3,000 to $6,000 depending on home size and complexity. Commercial projects vary based on building size and requirements. We provide free, no-obligation quotes."
      }
    },
    {
      "@type": "Question",
      "name": "How long does installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential installations are completed in one day. Larger homes or commercial properties may take 2-3 days. We work efficiently to minimize disruption to your daily routine."
      }
    }
  ]
}
```

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://extlighting.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Locations",
      "item": "https://extlighting.com/locations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Roseville",
      "item": "https://extlighting.com/locations/roseville"
    }
  ]
}
```

---

## Internal Linking Strategy

### Pillar/Cluster Model

```
PILLAR: Homepage (/)
├── Links to all service pages
├── Links to locations hub
├── Links to gallery
├── Links to quote form
└── Featured location links (3-4 top cities)

PILLAR: Services (/services)
├── Links to residential service
├── Links to commercial service
├── Links to FAQ (pricing questions)
├── Links to quote form
└── Contextual links to relevant locations

PILLAR: Locations (/locations)
├── Links to all 12 city pages
├── Links to services
└── Links to quote form

CLUSTER: City Page (/locations/sacramento)
├── Links to /locations/sacramento/residential
├── Links to /locations/sacramento/commercial
├── Links to 3-4 neighboring cities
├── Links to services pillar
├── Links to gallery
└── Links to quote form

CLUSTER: City/Service (/locations/sacramento/residential)
├── Links to parent city (/locations/sacramento)
├── Links to service pillar (/services/residential)
├── Links to 2-3 neighboring city/residential pages
├── Links to gallery
└── Links to quote form
```

### Contextual Link Guidelines
- Use descriptive anchor text (not "click here")
- 3-5 contextual links per 500 words of content
- Link to both parent (pillar) and sibling (cluster) pages
- Include at least one link to quote form per page
- Vary anchor text for same destination

### Anchor Text Examples
```
✅ Good:
- "residential permanent lighting in Roseville"
- "learn about our commercial lighting services"
- "see our Sacramento area gallery"
- "get a free permanent lighting quote"

❌ Bad:
- "click here"
- "learn more"
- "read more"
- "here"
```

---

## Technical SEO

### Sitemap Configuration
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { locations } from '@/lib/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://extlighting.com';
  
  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/residential`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/commercial`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
  
  // Location pages
  const locationPages = locations.flatMap(location => [
    { url: `${baseUrl}/locations/${location.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/locations/${location.slug}/residential`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/locations/${location.slug}/commercial`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]);
  
  return [...staticPages, ...locationPages];
}
```

### Robots.txt
```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://extlighting.com/sitemap.xml',
  };
}
```

### Canonical URLs
Every page must have a canonical URL set:
```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://extlighting.com/services/residential',
  },
};
```

### Image Optimization for SEO
```tsx
import Image from 'next/image';

<Image
  src="/images/sacramento-home-lighting.jpg"
  alt="Permanent LED lighting on Sacramento home at night showing warm white roofline illumination"
  width={1200}
  height={800}
  priority={isAboveFold}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Alt Text Guidelines**:
- Descriptive and specific
- Include location when relevant
- Include service type when relevant
- 125 characters or less
- No keyword stuffing

---

## Content SEO Guidelines

### Word Count Targets
| Page Type | Minimum Words | Ideal Words |
|-----------|---------------|-------------|
| Homepage | 1,500 | 2,000+ |
| Service Pillar | 2,000 | 2,500+ |
| Service Detail | 2,500 | 3,000+ |
| City Landing | 2,000 | 2,500+ |
| City/Service | 1,500 | 2,000+ |
| About | 1,500 | 2,000+ |
| FAQ | 2,000 | 3,000+ |
| Gallery | 500 | 800+ |
| Contact | 800 | 1,000+ |

### Heading Structure
```
H1: One per page, includes primary keyword
├── H2: Major sections (3-6 per page)
│   ├── H3: Subsections as needed
│   │   └── H4: Rarely used, for deep nesting
│   └── H3: ...
└── H2: ...
```

### Keyword Density
- Primary keyword: 1-2% of content
- Secondary keywords: 0.5-1%
- LSI keywords: Natural inclusion
- No keyword stuffing

### Content Freshness
- Include current year in some content
- Reference recent trends/developments
- Update pricing ranges annually
- Review and refresh location content quarterly

---

## Local SEO Checklist

### NAP Consistency
**Exact format to use everywhere**:
```
EXT Lighting
123 Main Street
Sacramento, CA 95814
(916) 555-0123
```

Must match exactly on:
- [ ] Website header
- [ ] Website footer
- [ ] Contact page
- [ ] All schema markup
- [ ] Google Business Profile
- [ ] Yelp
- [ ] Facebook
- [ ] Other directories

### Google Business Profile Integration
- Verify business ownership
- Complete all profile sections
- Add photos regularly
- Respond to reviews
- Post updates weekly
- Ensure NAP matches website exactly

### Local Citations
Priority directories for home services:
1. Google Business Profile
2. Yelp
3. Facebook
4. Angi (formerly Angie's List)
5. HomeAdvisor
6. BBB
7. Nextdoor
8. Houzz
9. Thumbtack
10. Local Chamber of Commerce

---

## Performance Targets

### Core Web Vitals
| Metric | Target | Threshold |
|--------|--------|-----------|
| LCP (Largest Contentful Paint) | <2.5s | Good |
| FID (First Input Delay) | <100ms | Good |
| CLS (Cumulative Layout Shift) | <0.1 | Good |
| INP (Interaction to Next Paint) | <200ms | Good |

### Lighthouse Scores
| Metric | Target |
|--------|--------|
| Performance | ≥90 |
| Accessibility | ≥95 |
| Best Practices | ≥95 |
| SEO | ≥95 |

### Page Load
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Total page size: <2MB
- Number of requests: <50

---

## SEO Verification Checklist

### Pre-Launch
- [ ] All 44 pages have unique title tags
- [ ] All 44 pages have unique meta descriptions
- [ ] All pages have canonical URLs
- [ ] Sitemap.xml includes all pages
- [ ] Robots.txt allows crawling
- [ ] LocalBusiness schema on all pages
- [ ] FAQ schema on FAQ page
- [ ] Service schema on service pages
- [ ] BreadcrumbList schema on location pages
- [ ] All images have alt text
- [ ] All internal links work
- [ ] Mobile-friendly test passes
- [ ] Core Web Vitals pass
- [ ] OpenGraph images set

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify no crawl errors
- [ ] Monitor indexing status
- [ ] Set up rank tracking for target keywords
- [ ] Verify Google Business Profile connected
