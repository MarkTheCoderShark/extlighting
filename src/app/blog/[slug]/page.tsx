import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { CTASection } from "@/components/cta-section";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/data/blog";
import { business } from "@/lib/data/business";

interface BlogPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://extlighting.com/blog/${post.slug}`,
      images: [{ url: `https://extlighting.com${post.heroImage}` }],
    },
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: business.name,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
    },
    image: [`https://extlighting.com${post.heroImage}`],
    mainEntityOfPage: `https://extlighting.com/blog/${post.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <section className="relative section pt-28 md:pt-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900/60" />
        </div>
        <div className="container relative z-10">
          <BreadcrumbNav
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
            className="text-white/80"
          />
          <div className="mt-6 max-w-3xl">
            <p className="text-gold-300 uppercase tracking-widest text-xs mb-3">
              {post.category}
            </p>
            <h1 className="text-white mb-6">{post.title}</h1>
            <p className="text-lg text-charcoal-200 md:text-xl">{post.description}</p>
            <div className="mt-6 text-sm text-charcoal-300 flex flex-wrap gap-4">
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>{post.readTime}</span>
              <span>Primary keyword: {post.primaryKeyword}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="space-y-10">
            <div className="rounded-2xl border border-charcoal-200 bg-white p-6 md:p-8">
              <h2 className="text-xl font-semibold text-charcoal-900">Table of Contents</h2>
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

            {post.content}

            <section className="rounded-2xl border border-charcoal-200 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-bold text-charcoal-900">FAQ</h2>
              <div className="mt-6 space-y-6">
                {post.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold text-charcoal-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-charcoal-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-sm text-charcoal-500">
              <Link href="/blog" className="text-gold-800 font-semibold underline underline-offset-2">
                Back to all blog posts
              </Link>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-charcoal-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-charcoal-900">Need a quote?</h3>
              <p className="mt-2 text-sm text-charcoal-600">
                Get a custom lighting plan and a clear proposal tailored to your
                property in the Sacramento region.
              </p>
              <Link
                href="/quote"
                className="mt-4 inline-block text-gold-800 font-semibold underline underline-offset-2"
              >
                Start a free estimate
              </Link>
            </div>
            <div className="rounded-2xl border border-charcoal-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-charcoal-900">Explore services</h3>
              <ul className="mt-3 space-y-2 text-sm text-charcoal-600">
                <li>
                  <Link href="/services/residential" className="hover:text-gold-700">
                    Residential permanent lighting
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial" className="hover:text-gold-700">
                    Commercial permanent lighting
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="hover:text-gold-700">
                    View service areas
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title="Ready to upgrade your exterior lighting?"
        subtitle="Get expert design guidance and a clear plan for your property."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
