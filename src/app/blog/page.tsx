import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { SectionHeading, HighlightedText } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog | Permanent Outdoor Lighting Tips & Guides",
  description:
    "Expert guides on permanent outdoor lighting costs, ROI, durability, and installation tips for Sacramento homeowners. Get the answers to your biggest questions.",
};

export default function BlogPage() {
  return (
    <>
      <section className="section pt-28 md:pt-36 bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Expert Guides"
            title={
              <>
                The EXT Lighting <HighlightedText>Blog</HighlightedText>
              </>
            }
            subtitle="Honest answers to the questions Sacramento homeowners ask most about permanent outdoor lighting."
          />

          <div className="mt-12 grid gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl bg-white border border-charcoal-100 shadow-sm hover:shadow-md hover:border-gold-200 transition-all overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-800">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-500">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span className="text-xs text-charcoal-400">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors mb-3">
                    {post.title}
                  </h2>

                  <p className="text-charcoal-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 group-hover:gap-3 transition-all">
                    Read Full Guide
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Question We Haven't Covered?"
        subtitle="Our team is happy to answer your questions about permanent outdoor lighting. Reach out for a free, no-obligation consultation."
      />
    </>
  );
}
