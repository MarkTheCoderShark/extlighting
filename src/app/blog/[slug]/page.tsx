import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, CalendarDays } from "lucide-react";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { CTASection } from "@/components/cta-section";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { business } from "@/lib/data/business";
import { CostGuideContent } from "@/components/blog/cost-guide";
import { WorthItContent } from "@/components/blog/worth-it";
import { HowLongLastContent } from "@/components/blog/how-long-last";
import { PermanentVsChristmasContent } from "@/components/blog/permanent-vs-christmas";
import { InstallationProcessContent } from "@/components/blog/installation-process";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.ogTitle,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.ogTitle,
      description: post.ogDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [business.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.ogTitle,
      description: post.ogDescription,
    },
  };
}

const contentComponents: Record<string, React.ComponentType> = {
  "permanent-outdoor-lights-cost-sacramento": CostGuideContent,
  "are-permanent-outdoor-lights-worth-it": WorthItContent,
  "how-long-do-permanent-outdoor-lights-last": HowLongLastContent,
  "permanent-outdoor-lights-vs-christmas-lights": PermanentVsChristmasContent,
  "permanent-light-installation-process": InstallationProcessContent,
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const ContentComponent = contentComponents[slug];

  if (!ContentComponent) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: business.name,
      url: "https://extlighting.com",
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: "https://extlighting.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://extlighting.com/blog/${slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  // Get other blog posts for "Related Articles"
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section pt-28 md:pt-36 bg-background">
        <div className="container">
          <BreadcrumbNav
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.category },
            ]}
            className="mb-8"
          />

          <div className="max-w-3xl mx-auto">
            {/* Post Header */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-800">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-500">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-500">
                  <CalendarDays className="h-3 w-3" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-charcoal-900 leading-tight">
                {post.title}
              </h1>

              <p className="mt-4 text-lg text-charcoal-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Post Content */}
            <article className="prose prose-lg prose-charcoal max-w-none prose-headings:text-charcoal-900 prose-headings:font-bold prose-a:text-gold-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal-900 prose-li:text-charcoal-700">
              <ContentComponent />
            </article>

            {/* Author / Company Card */}
            <div className="mt-12 p-6 rounded-xl bg-charcoal-50 border border-charcoal-200">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 font-bold text-lg">
                  EXT
                </div>
                <div>
                  <p className="font-bold text-charcoal-900">{business.name}</p>
                  <p className="text-sm text-charcoal-600 mt-1">
                    Sacramento&apos;s premier permanent exterior LED lighting
                    company. Serving {business.serviceArea.primary} and
                    surrounding areas with professional installation and lifetime
                    warranty.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-charcoal-900 mb-6">
                  Related Articles
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group rounded-xl bg-white border border-charcoal-100 p-5 shadow-sm hover:shadow-md hover:border-gold-200 transition-all"
                    >
                      <span className="text-xs font-medium text-gold-700 mb-2 block">
                        {related.category}
                      </span>
                      <h3 className="font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors text-sm leading-snug">
                        {related.title}
                      </h3>
                      <p className="text-xs text-charcoal-500 mt-2">
                        {related.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-600 hover:text-gold-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to See What Permanent Lighting Looks Like on Your Home?"
        subtitle="Get a free, no-obligation quote from Sacramento's permanent lighting experts. We'll visit your property, answer all your questions, and design a custom lighting plan."
        variant="gold"
      />
    </>
  );
}
