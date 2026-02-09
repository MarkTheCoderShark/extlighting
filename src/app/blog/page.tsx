import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { getBlogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Lighting Insights & Guides | EXT Lighting Blog",
  description:
    "Expert guides on permanent outdoor lighting, installation, pricing, and commercial strategy for Sacramento-area homeowners and businesses.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <section className="relative section pt-28 md:pt-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/residential-9.png"
            alt="Permanent outdoor lighting in Sacramento"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900/60" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-gold-300 uppercase tracking-widest text-xs mb-4">
              Lighting Insights
            </p>
            <h1 className="text-white mb-6">EXT Lighting Blog</h1>
            <p className="text-lg text-charcoal-200 md:text-xl">
              Deep guides on permanent outdoor lighting, installation planning,
              and commercial strategy for Sacramento-area property owners.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            title="Featured Guides"
            subtitle="Expert resources written for homeowners, property managers, and business owners."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-charcoal-200 bg-white shadow-sm overflow-hidden flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-widest text-gold-700">
                    {post.category}
                  </p>
                  <h2 className="mt-3 text-xl font-bold text-charcoal-900">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-charcoal-600">{post.description}</p>
                  <div className="mt-4 text-xs text-charcoal-500 flex items-center gap-4">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gold-800 font-semibold underline underline-offset-4"
                    >
                      Read the full guide
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to plan your lighting project?"
        subtitle="Get a tailored quote and a custom lighting plan for your property."
      />
    </>
  );
}
