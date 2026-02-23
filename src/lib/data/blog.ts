/**
 * Blog post metadata for EXT Lighting
 * Content components are in src/components/blog/
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  readTime: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "permanent-outdoor-lights-cost-sacramento",
    title:
      "How Much Do Permanent Outdoor Lights Cost in Sacramento? (2026 Pricing Guide)",
    description:
      "Detailed pricing breakdown for permanent outdoor LED lighting installation in Sacramento. Compare costs by home size, learn what affects price, and see how permanent lights save money vs. temporary installations.",
    excerpt:
      "Sacramento homeowners typically invest between $3,000 and $8,000 for a permanent outdoor lighting system. Here's exactly what determines your price and how the numbers compare to hiring temporary light installers year after year.",
    publishedAt: "2026-02-22T00:00:00Z",
    updatedAt: "2026-02-22T00:00:00Z",
    category: "Pricing",
    readTime: "10 min read",
    keywords: [
      "permanent outdoor lights cost",
      "permanent Christmas lights cost Sacramento",
      "permanent lighting price",
      "exterior LED lighting cost",
      "Sacramento permanent lights installation cost",
    ],
    ogTitle:
      "Permanent Outdoor Lights Cost in Sacramento | 2026 Pricing Guide",
    ogDescription:
      "How much do permanent outdoor lights cost in Sacramento? Get real pricing data by home size, cost comparisons, and learn what factors affect your quote.",
  },
  {
    slug: "are-permanent-outdoor-lights-worth-it",
    title:
      "Are Permanent Outdoor Lights Worth It? ROI, Home Value, and the Real Numbers",
    description:
      "An honest look at whether permanent outdoor lights are worth the investment for Sacramento homeowners. Real ROI data, home value impact, cost savings analysis, and HOA benefits.",
    excerpt:
      "Permanent outdoor lights cost several thousand dollars upfront. But when you factor in eliminated annual costs, increased home value, and year-round functionality, the numbers tell a compelling story for Sacramento homeowners.",
    publishedAt: "2026-02-20T00:00:00Z",
    updatedAt: "2026-02-20T00:00:00Z",
    category: "Buying Guide",
    readTime: "12 min read",
    keywords: [
      "are permanent outdoor lights worth it",
      "permanent lights ROI",
      "outdoor lighting home value",
      "permanent Christmas lights worth it",
      "permanent lights investment",
    ],
    ogTitle:
      "Are Permanent Outdoor Lights Worth It? | ROI & Home Value Analysis",
    ogDescription:
      "Are permanent outdoor lights a smart investment? See the real ROI numbers, home value impact, and 5-year cost comparison for Sacramento homeowners.",
  },
  {
    slug: "how-long-do-permanent-outdoor-lights-last",
    title:
      "How Long Do Permanent Outdoor Lights Last in Sacramento's Climate?",
    description:
      "Learn how Sacramento's heat, UV exposure, and weather affect permanent outdoor light lifespan. Covers LED ratings, IP protection, maintenance schedules, and what to look for in a durable system.",
    excerpt:
      "Professional-grade permanent LED lights are rated for 50,000+ hours. But Sacramento's extreme summer heat and UV exposure create unique challenges. Here's what actually determines how long your system will last.",
    publishedAt: "2026-02-18T00:00:00Z",
    updatedAt: "2026-02-18T00:00:00Z",
    category: "Maintenance",
    readTime: "11 min read",
    keywords: [
      "how long do permanent outdoor lights last",
      "permanent lights durability",
      "LED lights lifespan Sacramento",
      "permanent outdoor lights maintenance",
      "permanent lights Sacramento heat",
    ],
    ogTitle:
      "How Long Do Permanent Outdoor Lights Last? | Sacramento Climate Guide",
    ogDescription:
      "How long do permanent outdoor lights really last in Sacramento's heat? Get honest lifespan data, maintenance tips, and what to look for in a durable system.",
  },
];

export const getBlogPostBySlug = (
  slug: string
): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getAllBlogSlugs = (): string[] => {
  return blogPosts.map((post) => post.slug);
};
