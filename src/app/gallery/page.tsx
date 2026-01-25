import type { Metadata } from "next";
import { Sparkles, Users } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
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
      <section className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 section pt-28 md:pt-36">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white mb-6">Our Work: Permanent Lighting Gallery</h1>
            <p className="text-lg text-charcoal-300 md:text-xl">
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
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <BeforeAfterSlider
                beforeImage="/images/gallery/before-1.jpg"
                afterImage="/images/gallery/after-1.jpg"
                beforeAlt="Home before permanent lighting installation"
                afterAlt="Same home after permanent lighting installation"
              />
              <p className="mt-4 text-center text-sm text-charcoal-600">
                Roseville Residence - Roofline & Accent Lighting
              </p>
            </div>
            <div>
              <BeforeAfterSlider
                beforeImage="/images/gallery/before-2.jpg"
                afterImage="/images/gallery/after-2.jpg"
                beforeAlt="Restaurant before permanent lighting"
                afterAlt="Restaurant after permanent lighting"
              />
              <p className="mt-4 text-center text-sm text-charcoal-600">
                Sacramento Restaurant - Commercial Exterior
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center">
              <div className="text-center p-8">
                <Sparkles className="h-16 w-16 text-white mx-auto mb-4" />
                <p className="text-gold-100 text-sm">Transformation in progress</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center lg:order-1">
              <div className="text-center p-8">
                <Users className="h-16 w-16 text-gold-400 mx-auto mb-4" />
                <p className="text-charcoal-400 text-sm">Expert design consultation</p>
              </div>
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

      <section className="bg-gold-700 section">
        <div className="container text-center">
          <h2 className="text-white mb-4">Want Results Like These?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gold-100 mb-8">
            Your property could be our next stunning transformation. Schedule
            your free consultation and discover the possibilities.
          </p>
          <CTAButton href="/quote" variant="secondary" size="lg">
            Get Your Free Quote
          </CTAButton>
        </div>
      </section>
    </>
  );
}
