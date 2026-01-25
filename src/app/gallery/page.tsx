import type { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "@/components/cta-button";
import { CTASection } from "@/components/cta-section";
import { SectionHeading, HighlightedText } from "@/components/section-heading";
import { ImageGallery } from "@/components/image-gallery";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { galleryImages } from "@/lib/data/gallery";

export const metadata: Metadata = {
  title: "Permanent Lighting Gallery | Before & After Photos",
  description:
    "See stunning before and after photos of permanent exterior LED lighting installations in Sacramento. Real homes and businesses transformed with professional lighting.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/residential-11.png"
            alt="Modern farmhouse with pink and purple accent lighting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white mb-6">Our Work: Permanent Lighting Gallery</h1>
            <p className="text-lg text-white/80 md:text-xl">
              Explore real installations from homes and businesses across the
              Sacramento region. See how permanent exterior lighting transforms
              properties from ordinary to extraordinary.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="See The Difference"
            title={<>Before &amp; After <HighlightedText>Transformations</HighlightedText></>}
            subtitle="Drag the slider to see the dramatic difference permanent lighting makes."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <BeforeAfterSlider
                beforeImage="/images/gallery/before.png"
                afterImage="/images/gallery/after.png"
                beforeAlt="Ranch home at dusk before permanent lighting installation"
                afterAlt="Same ranch home with warm white roofline lighting installed"
              />
              <p className="mt-4 text-center text-sm text-charcoal-600">
                Sacramento Ranch - Warm White Roofline
              </p>
            </div>
            <div>
              <BeforeAfterSlider
                beforeImage="/images/gallery/before2.png"
                afterImage="/images/gallery/after2.png"
                beforeAlt="Cape cod home at dusk before lighting installation"
                afterAlt="Same cape cod home with colorful RGB trim lighting"
              />
              <p className="mt-4 text-center text-sm text-charcoal-600">
                Roseville Cape Cod - RGB Color-Changing
              </p>
            </div>
            <div>
              <BeforeAfterSlider
                beforeImage="/images/gallery/before3.png"
                afterImage="/images/gallery/after3.png"
                beforeAlt="Modern luxury home at dusk before roofline lighting"
                afterAlt="Same modern home with sleek white roofline accent lighting"
              />
              <p className="mt-4 text-center text-sm text-charcoal-600">
                El Dorado Hills Modern - White Roofline Accents
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <SectionHeading
            eyebrow="Our Portfolio"
            title={<>Project <HighlightedText>Gallery</HighlightedText></>}
            subtitle="Browse our portfolio of residential and commercial installations."
          />
          <div className="mt-12">
            <ImageGallery images={galleryImages} showFilters columns={3} />
          </div>
        </div>
      </section>

      <section className="section bg-background overflow-hidden">
        <div className="container">
          <SectionHeading
            eyebrow="Real Results"
            title={<>Every Project Tells a <HighlightedText>Story</HighlightedText></>}
            subtitle="Behind every installation is a homeowner or business owner who chose to transform their property."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Real Transformations, Real Results
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Each installation in our gallery represents a homeowner or
                business owner who made the decision to transform their
                property. Some were tired of the annual holiday lighting
                hassle. Others wanted to enhance security or curb appeal.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Many simply wanted to enjoy their property in a new way—
                beautifully illuminated every evening, ready for any occasion
                at the touch of a button.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/residential-8.png"
                alt="Stunning home transformation with permanent LED lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden lg:order-1">
              <Image
                src="/images/gallery/residential-9.png"
                alt="Professional lighting design with attention to detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Care & Attention in Every Detail
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                What all these projects have in common is the care and
                attention we bring to every installation. We work with each
                client to understand their vision, their property&apos;s unique
                architecture, and their goals.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                The result is always a custom lighting design that looks like
                it was always meant to be there—enhancing, not competing with,
                your property&apos;s natural beauty.
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-2xl bg-gradient-to-r from-charcoal-900 to-charcoal-800 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Your Story Could Be Next
                </h3>
                <p className="text-charcoal-300 leading-relaxed mb-4">
                  We&apos;re constantly updating our gallery with new projects from
                  across the Sacramento region. If you&apos;re considering permanent
                  lighting for your property, we&apos;d be honored to add your
                  transformation to our portfolio.
                </p>
                <CTAButton href="/quote" className="mt-4">
                  Start Your Transformation
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">1200+</p>
                  <p className="text-sm text-charcoal-400">Installations</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">12</p>
                  <p className="text-sm text-charcoal-400">Cities Served</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">4.9</p>
                  <p className="text-sm text-charcoal-400">Star Rating</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">10+</p>
                  <p className="text-sm text-charcoal-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        subtitle="Your property could be our next stunning transformation. Schedule your free consultation and discover the possibilities."
      />
    </>
  );
}
