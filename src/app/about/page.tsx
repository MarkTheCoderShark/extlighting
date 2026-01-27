import type { Metadata } from "next";
import { Shield, Users, Award, Heart, CheckCircle } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading, HighlightedText } from "@/components/section-heading";
import { TrustBadges } from "@/components/trust-badge";
import { StatsSection } from "@/components/stats-section";
import { TeamSection } from "@/components/team-section";
import { CTASection } from "@/components/cta-section";
import { ServiceAreaMap } from "@/components/service-area-map";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "About EXT Lighting | Sacramento's Trusted Lighting Experts",
  description:
    "Learn about EXT Lighting, Sacramento's premier permanent exterior LED lighting company. Local expertise, lifetime warranty, and a commitment to excellence.",
};

const values = [
  {
    title: "Quality First",
    description:
      "We use only commercial-grade LED fixtures and materials. If it's not good enough for our own homes, we won't install it on yours.",
    icon: Award,
  },
  {
    title: "Local Expertise",
    description:
      "We're not a national franchise—we're your neighbors. We understand Sacramento's climate, architecture, and communities.",
    icon: Heart,
  },
  {
    title: "Customer Focus",
    description:
      "From your first call to years after installation, we're here for you. Our lifetime warranty isn't just words—it's our commitment.",
    icon: Users,
  },
  {
    title: "Integrity",
    description:
      "Honest pricing, clear communication, and doing what we say. No hidden fees, no pressure tactics, no surprises.",
    icon: Shield,
  },
];

const promises = [
  "Free, no-obligation consultations",
  "Transparent pricing with no hidden fees",
  "Professional installation in one day",
  "Complete cleanup before we leave",
  "Thorough app training and walkthrough",
  "Lifetime warranty on parts and labor",
  "Responsive support when you need it",
  "Satisfaction guaranteed",
];

const credentials = [
  "Licensed and insured in California",
  "Manufacturer-certified installers",
  "BBB accredited business",
  "5-star Google rating",
  "Member of Sacramento Chamber of Commerce",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 section pt-28 md:pt-36">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white mb-6">About EXT Lighting</h1>
            <p className="text-lg text-charcoal-300 md:text-xl">
              Sacramento&apos;s trusted source for permanent exterior LED
              lighting. We&apos;re on a mission to transform how our community
              experiences their homes and businesses—one beautiful installation
              at a time.
            </p>
          </div>
        </div>
      </section>

      <StatsSection variant="dark" />

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Who We Are"
            title={<>Our <HighlightedText>Story</HighlightedText></>}
            subtitle="From frustrated homeowners to Sacramento's leading permanent lighting experts."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Born from Frustration
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                EXT Lighting was born from a simple frustration that every Sacramento homeowner knows too well: the annual ritual of holiday lights. Climbing ladders in the cold, wrestling with tangled strands, replacing burnt-out bulbs—and then doing it all in reverse a few weeks later.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                When permanent exterior lighting technology emerged, we saw an opportunity to change the game for our community. Not just to eliminate the hassle, but to help homeowners experience their properties in an entirely new way.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/gallery/hero christmas.png"
                alt="Beautiful holiday lighting on a Sacramento home"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="lg:order-1">
              <ServiceAreaMap />
            </div>
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Sacramento&apos;s Leading Installer
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Today, we&apos;re proud to be Sacramento&apos;s leading permanent lighting installer. We&apos;ve lit up hundreds of homes across the region, from the historic neighborhoods of Midtown to the new developments of Roseville and everywhere in between.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Each installation is custom work designed to enhance that property&apos;s unique character. We&apos;re not just installers; we&apos;re neighbors who take pride in our work and stand behind it with a lifetime warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            eyebrow="What Drives Us"
            title={<>Our <HighlightedText>Values</HighlightedText></>}
            subtitle="The principles that guide everything we do."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 shadow-sm border border-charcoal-100"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">Our Promise to You</h2>
              <p className="text-charcoal-700 mb-6">
                Every customer receives the same level of care and attention
                we&apos;d give our own family. Here&apos;s what you can expect when you
                work with EXT Lighting:
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                    <span className="text-charcoal-700">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6">Credentials & Trust</h2>
              <p className="text-charcoal-700 mb-6">
                We&apos;ve earned the trust of the Sacramento community through our
                commitment to excellence and accountability.
              </p>
              <ul className="space-y-3 mb-8">
                {credentials.map((credential) => (
                  <li key={credential} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                    <span className="text-charcoal-700">{credential}</span>
                  </li>
                ))}
              </ul>
              <TrustBadges badges={["warranty", "licensed", "reviews"]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      <TeamSection
        title="Meet the Team"
        subtitle="The local experts behind every beautiful installation."
      />

      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="mb-6">Serving the Sacramento Community</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Our service area spans the greater Sacramento region, including Sacramento, Roseville, Rocklin, Folsom, El Dorado Hills, Rancho Cordova, Citrus Heights, Orangevale, Fair Oaks, Loomis, Auburn, and Grass Valley.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                We take pride in knowing our communities—the Victorian homes of Midtown, the master-planned developments of West Roseville, the equestrian properties of Orangevale, the historic charm of Auburn. This local knowledge helps us create lighting designs that truly fit.
              </p>
              <CTAButton href="/locations" variant="outline">
                View All Service Areas
              </CTAButton>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gold-50 border border-gold-200 p-6 text-center">
                <p className="text-2xl font-bold text-gold-700">12+</p>
                <p className="text-sm text-charcoal-600">Cities Served</p>
              </div>
              <div className="rounded-xl bg-gold-50 border border-gold-200 p-6 text-center">
                <p className="text-2xl font-bold text-gold-700">50mi</p>
                <p className="text-sm text-charcoal-600">Service Radius</p>
              </div>
              <div className="rounded-xl bg-gold-50 border border-gold-200 p-6 text-center">
                <p className="text-2xl font-bold text-gold-700">2</p>
                <p className="text-sm text-charcoal-600">Counties</p>
              </div>
              <div className="rounded-xl bg-gold-50 border border-gold-200 p-6 text-center">
                <p className="text-2xl font-bold text-gold-700">100s</p>
                <p className="text-sm text-charcoal-600">Happy Neighbors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Us?"
        subtitle="Experience the EXT Lighting difference. Schedule your free consultation and discover how we can transform your property."
        variant="gold"
      />
    </>
  );
}
