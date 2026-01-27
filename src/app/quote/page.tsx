import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Shield, Star, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { SectionHeading, HighlightedText } from "@/components/section-heading";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Get a Free Quote | Permanent Lighting Installation",
  description:
    "Request a free, no-obligation quote for permanent exterior LED lighting. Sacramento's premier lighting installation company. Response within 24 hours.",
};

export default function QuotePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/residential-9.png"
            alt="Beautiful home with permanent LED lighting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/95 via-charcoal-900/85 to-charcoal-900/70" />
        </div>

        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-white mb-6">Get Your Free Quote</h1>
              <p className="text-lg text-charcoal-300 md:text-xl mb-8">
                Tell us about your project and we&apos;ll provide a customized quote
                within 24 hours. No obligation, no pressure—just honest answers
                and transparent pricing.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-charcoal-300 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold-500" />
                  <span>Response in 24hrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gold-500" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold-500" />
                  <span>5-star rated</span>
                </div>
              </div>

              <div className="hidden lg:block">
                <p className="text-charcoal-400 mb-2">Prefer to talk?</p>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xl font-bold text-gold-500 hover:text-gold-400"
                >
                  <Phone className="h-5 w-5" />
                  {business.phone}
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-xl bg-white p-6 md:p-8 shadow-2xl">
                <h2 className="text-xl font-bold text-charcoal-900 mb-6">
                  Request Your Free Quote
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center mb-10">What Happens Next?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-700 text-white font-bold">
                  1
                </div>
                <h3 className="font-bold text-charcoal-900 mb-2">We&apos;ll Call</h3>
                <p className="text-sm text-charcoal-600">
                  Within 24 hours, a lighting specialist will contact you to
                  discuss your project.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-700 text-white font-bold">
                  2
                </div>
                <h3 className="font-bold text-charcoal-900 mb-2">We&apos;ll Visit</h3>
                <p className="text-sm text-charcoal-600">
                  We&apos;ll schedule a free on-site consultation to take
                  measurements and discuss options.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-700 text-white font-bold">
                  3
                </div>
                <h3 className="font-bold text-charcoal-900 mb-2">You&apos;ll Decide</h3>
                <p className="text-sm text-charcoal-600">
                  You&apos;ll receive a detailed proposal with pricing. No pressure
                  to decide quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            eyebrow="See The Difference"
            title={<>Before & <HighlightedText>After</HighlightedText></>}
            subtitle="Real transformations from Sacramento homes."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <BeforeAfterSlider
                beforeImage="/images/gallery/before.png"
                afterImage="/images/gallery/after.png"
                beforeAlt="Home before permanent lighting"
                afterAlt="Home after permanent lighting installation"
              />
            </div>
            <div>
              <BeforeAfterSlider
                beforeImage="/images/gallery/before2.png"
                afterImage="/images/gallery/after2.png"
                beforeAlt="Home before permanent lighting"
                afterAlt="Home after permanent lighting installation"
              />
            </div>
            <div className="hidden lg:block">
              <BeforeAfterSlider
                beforeImage="/images/gallery/before3.png"
                afterImage="/images/gallery/after3.png"
                beforeAlt="Home before permanent lighting"
                afterAlt="Home after permanent lighting installation"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
