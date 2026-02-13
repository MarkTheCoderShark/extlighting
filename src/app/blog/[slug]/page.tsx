import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { CTAButton } from "@/components/cta-button";
import { CTASection } from "@/components/cta-section";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog-posts";

interface BlogPostPageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Blog Post" };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      url: `https://extlighting.com/blog/${post.slug}`,
    },
  };
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    mainEntityOfPage: `https://extlighting.com/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "EXT Lighting",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="section pt-24 md:pt-32 bg-background-alt">
        <div className="container">
          <BreadcrumbNav
            items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
            className="text-charcoal-500"
          />
          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-700">
              {post.category}
            </p>
            <h1 className="mt-3">{post.title}</h1>
            <p className="mt-4 text-lg text-charcoal-600">{post.description}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-charcoal-500">
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime}</span>
            </div>
            <div className="mt-6 rounded-xl border border-gold-200 bg-gold-50 p-5 text-sm text-charcoal-700">
              {post.summary}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <aside className="space-y-6">
            <div className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-700">
                Table of Contents
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                {post.toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-gold-700">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-700">
                Need a Custom Plan?
              </h3>
              <p className="mt-3 text-sm text-charcoal-600">
                Get a personalized lighting quote tailored to your property and
                goals.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <CTAButton href="/quote" size="sm">
                  Get a Free Quote
                </CTAButton>
                <CTAButton href="/contact" variant="outline" size="sm">
                  Talk to an Expert
                </CTAButton>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-charcoal-900">FAQ</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {post.faq.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-charcoal-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-charcoal-900">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm text-charcoal-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="image"
        title="Ready to Transform Your Property?"
        subtitle="Get a free, no‑obligation quote and a custom lighting plan tailored to your home or business."
        primaryCTA={{ text: "Get Your Free Quote", href: "/quote" }}
      />

      <section className="section bg-background">
        <div className="container text-center">
          <p className="text-sm uppercase tracking-widest text-charcoal-500">
            More Resources
          </p>
          <h2 className="mt-3">Explore Related Guides</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {blogPosts
              .filter((item) => item.slug !== post.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-full border border-charcoal-200 px-4 py-2 text-sm text-charcoal-600 hover:border-gold-400 hover:text-gold-700"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
