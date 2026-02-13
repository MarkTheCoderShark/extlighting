import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { CTASection } from "@/components/cta-section";
import { getBlogPosts } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
  title: "Lighting Guides & Resources",
  description:
    "Practical, local lighting advice for Sacramento homeowners and businesses. Explore pricing, safety, maintenance, and commercial lighting best practices.",
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <section className="section pt-28 md:pt-36 bg-background-alt">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-700">
              Lighting Guides
            </p>
            <h1 className="mt-4">Lighting Advice for Sacramento Properties</h1>
            <p className="mt-4 text-lg text-charcoal-600">
              In‑depth, practical guidance on permanent exterior lighting—pricing,
              safety, design, and commercial applications—written for Sacramento‑area
              homeowners and business owners.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="/services" variant="outline">
                Explore Services
              </CTAButton>
              <CTAButton href="/quote">Get a Free Quote</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-charcoal-500">
                  <span>{post.category}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-charcoal-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-gold-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-charcoal-600">{post.description}</p>
                <div className="mt-4 text-xs text-charcoal-500">{post.readTime}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <CTAButton href={`/blog/${post.slug}`} variant="outline" size="sm">
                    Read the Guide
                  </CTAButton>
                  <CTAButton href="/quote" size="sm">
                    Get a Quote
                  </CTAButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="image"
        title="Ready to Transform Your Property?"
        subtitle="Get a free, no‑obligation lighting quote and a custom plan for your home or business."
        primaryCTA={{ text: "Get Your Free Quote", href: "/quote" }}
      />
    </>
  );
}
