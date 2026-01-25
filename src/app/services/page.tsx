import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading, HighlightedText } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatsSection } from "@/components/stats-section";
import { ProcessSection } from "@/components/process-section";
import { FAQSection } from "@/components/faq-section";
import { TeamSection } from "@/components/team-section";
import { CTASection } from "@/components/cta-section";
import { ServiceAreasSection } from "@/components/service-areas-section";
import { services } from "@/lib/data/services";
import { getFAQItems } from "@/lib/data/faq";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Permanent Exterior Lighting Services | Residential & Commercial",
  description:
    "Professional permanent LED lighting installation for homes and businesses in Sacramento. Year-round beauty, app control, lifetime warranty. Residential and commercial services available.",
};

const includedFeatures = [
  "Professional design consultation",
  "Custom lighting plan for your property",
  "Commercial-grade LED fixtures",
  "Complete professional installation",
  "App setup and training",
  "Lifetime warranty on parts and labor",
];

const comparisonData = [
  {
    feature: "Installation",
    permanent: "One-time professional install",
    temporary: "Annual setup and takedown",
  },
  {
    feature: "Control",
    permanent: "Smartphone app, anytime",
    temporary: "Manual only",
  },
  {
    feature: "Colors",
    permanent: "Unlimited, change instantly",
    temporary: "Fixed, requires new lights",
  },
  {
    feature: "Durability",
    permanent: "50,000+ hour LED lifespan",
    temporary: "1-3 seasons typical",
  },
  {
    feature: "Safety",
    permanent: "No ladders, no climbing",
    temporary: "Annual ladder risk",
  },
  {
    feature: "Total Cost (5 years)",
    permanent: "One investment",
    temporary: "Recurring annual expense",
  },
];

export default function ServicesPage() {
  const faqs = getFAQItems().slice(0, 6);

  return (
    <>
      <section className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 section pt-28 md:pt-36">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white mb-6">
              Professional Permanent Exterior Lighting Services
            </h1>
            <p className="text-lg text-charcoal-300 md:text-xl">
              From elegant residential installations to impactful commercial
              projects, we deliver stunning permanent lighting that transforms
              properties across the Sacramento region.
            </p>
          </div>
        </div>
      </section>

      <StatsSection variant="dark" />

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title={<>Our <HighlightedText>Services</HighlightedText></>}
            subtitle="Choose the service that fits your property and goals."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton href="/services/residential" variant="outline">
              Learn About Residential
            </CTAButton>
            <CTAButton href="/services/commercial" variant="outline">
              Learn About Commercial
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Full Service"
            title={<>What&apos;s <HighlightedText>Included</HighlightedText></>}
            subtitle="Every installation includes comprehensive service from start to finish."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm border border-charcoal-100"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700" />
                <span className="text-charcoal-700">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/quote">Get Your Free Quote</CTAButton>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Compare Options"
            title={<>Permanent vs. <HighlightedText>Temporary</HighlightedText> Lighting</>}
            subtitle="See why more Sacramento homeowners are making the switch to permanent lighting."
          />
          <div className="mt-12 hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-charcoal-200 p-4 text-left text-charcoal-900">
                    Feature
                  </th>
                  <th className="border-b-2 border-charcoal-200 bg-gold-50 p-4 text-left text-gold-900">
                    Permanent Lighting
                  </th>
                  <th className="border-b-2 border-charcoal-200 p-4 text-left text-charcoal-600">
                    Temporary Lights
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-charcoal-50" : ""}>
                    <td className="border-b border-charcoal-100 p-4 font-medium text-charcoal-900">
                      {row.feature}
                    </td>
                    <td className="border-b border-charcoal-100 bg-gold-50/50 p-4 text-charcoal-700">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-gold-700" />
                        {row.permanent}
                      </span>
                    </td>
                    <td className="border-b border-charcoal-100 p-4 text-charcoal-500">
                      {row.temporary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 space-y-4 md:hidden">
            {comparisonData.map((row) => (
              <div key={row.feature} className="rounded-lg border border-charcoal-200 overflow-hidden">
                <div className="bg-charcoal-100 px-4 py-2 font-medium text-charcoal-900">
                  {row.feature}
                </div>
                <div className="grid grid-cols-2 divide-x divide-charcoal-200">
                  <div className="bg-gold-50 p-4">
                    <p className="text-xs font-medium text-gold-800 mb-1">Permanent</p>
                    <p className="text-sm text-charcoal-700">{row.permanent}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-medium text-charcoal-500 mb-1">Temporary</p>
                    <p className="text-sm text-charcoal-500">{row.temporary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/quote" variant="outline">Ready to Make the Switch?</CTAButton>
          </div>
        </div>
      </section>

      <ProcessSection />

      <TeamSection />

      <FAQSection 
        faqs={faqs}
        title="Service FAQs"
        subtitle="Common questions about our permanent lighting services."
        showViewAll
        columns={2}
      />

      <ServiceAreasSection 
        title="Service Areas"
        subtitle="We proudly serve communities throughout the greater Sacramento region."
        maxLocations={12}
      />

      <CTASection 
        title="Ready to Get Started?"
        subtitle="Schedule your free consultation and discover how permanent exterior lighting can transform your property."
        variant="gold"
      />
    </>
  );
}
