import type { Metadata } from "next";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, getFAQCategories } from "@/lib/data/faq";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Permanent Lighting FAQ | Pricing, Installation, Warranty",
  description:
    "Get answers to common questions about permanent exterior LED lighting. Learn about pricing, installation process, warranty coverage, and more.",
};

export default function FAQPage() {
  const categories = getFAQCategories();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 section pt-28 md:pt-36">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-charcoal-300 md:text-xl">
              Everything you need to know about permanent exterior lighting—from
              pricing and installation to warranty and maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {categories.map((category) => {
              const categoryItems = faqItems.filter(
                (item) => item.category === category.value
              );

              return (
                <div key={category.value} className="mb-12 last:mb-0">
                  <h2 className="text-2xl font-bold text-charcoal-900 mb-6">
                    {category.label}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {categoryItems.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.value}-${index}`}
                        className="rounded-lg border border-charcoal-200 bg-white px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold text-charcoal-900 hover:text-gold-700">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-charcoal-600 leading-relaxed pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Pricing Transparency"
              subtitle="We believe in honest, upfront pricing with no surprises."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-charcoal-100">
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                  Residential
                </h3>
                <p className="text-3xl font-bold text-gold-700 mb-2">
                  $3,000 - $6,000
                </p>
                <p className="text-charcoal-600 text-sm">
                  Most homes fall within this range. Larger homes or complex
                  rooflines may be higher. Pricing includes consultation,
                  materials, installation, and lifetime warranty.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-charcoal-100">
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                  Commercial
                </h3>
                <p className="text-3xl font-bold text-gold-700 mb-2">
                  Varies by Project
                </p>
                <p className="text-charcoal-600 text-sm">
                  Commercial pricing depends on building size, complexity, and
                  requirements. We provide detailed proposals after an on-site
                  assessment. Contact us for a free consultation.
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-charcoal-600">
              All quotes are free and come with no obligation. We provide
              detailed breakdowns so you know exactly what you&apos;re paying for.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container text-center">
          <h2 className="mb-4">Still Have Questions?</h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal-600 mb-8">
            We&apos;re happy to answer any questions you have. Reach out by phone,
            email, or schedule a free consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/quote" size="lg">
              Get Your Free Quote
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-gold-700 section">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gold-100 mb-8">
            Schedule your free consultation and get a personalized quote for
            your property.
          </p>
          <CTAButton
            href={`tel:${business.phoneRaw}`}
            variant="secondary"
            size="lg"
          >
            Call {business.phone}
          </CTAButton>
        </div>
      </section>
    </>
  );
}
