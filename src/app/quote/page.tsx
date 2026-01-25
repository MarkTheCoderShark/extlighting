import type { Metadata } from "next";
import { CheckCircle, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { TrustBadges } from "@/components/trust-badge";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Get a Free Quote | Permanent Lighting Installation",
  description:
    "Request a free, no-obligation quote for permanent exterior LED lighting. Sacramento's premier lighting installation company. Response within 24 hours.",
};

const benefits = [
  "Free on-site consultation",
  "Custom lighting design",
  "Same-day quotes available",
  "No obligation to proceed",
  "Transparent pricing",
  "Financing options available",
];

export default function QuotePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 section pt-28 md:pt-36">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white mb-6">Get Your Free Quote</h1>
            <p className="text-lg text-charcoal-300 md:text-xl">
              Tell us about your project and we&apos;ll provide a customized quote
              within 24 hours. No obligation, no pressure—just honest answers
              and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">Request Your Free Quote</h2>
              <p className="text-charcoal-600 mb-8">
                Fill out the form below and one of our lighting specialists will
                contact you within 24 hours to discuss your project and schedule
                an on-site consultation.
              </p>

              <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg border border-charcoal-100">
                <QuoteForm />
              </div>
            </div>

            <div>
              <div className="lg:sticky lg:top-24">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                  What You&apos;ll Get
                </h3>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700" />
                      <span className="text-charcoal-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-charcoal-50 p-6 mb-8">
                  <h3 className="font-bold text-charcoal-900 mb-2">
                    Prefer to Talk?
                  </h3>
                  <p className="text-charcoal-600 mb-4 text-sm">
                    Call us directly and speak with a lighting specialist right
                    away.
                  </p>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-lg font-bold text-gold-700 hover:text-gold-800"
                  >
                    <Phone className="h-5 w-5" />
                    {business.phone}
                  </a>
                </div>

                <TrustBadges
                  badges={["warranty", "licensed", "reviews"]}
                  size="sm"
                  className="flex-col items-start"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center mb-6">What Happens Next?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-700 text-white font-bold">
                  1
                </div>
                <h3 className="font-bold text-charcoal-900 mb-2">We&apos;ll Call</h3>
                <p className="text-sm text-charcoal-600">
                  Within 24 hours, a lighting specialist will contact you to
                  discuss your project and answer any questions.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-700 text-white font-bold">
                  2
                </div>
                <h3 className="font-bold text-charcoal-900 mb-2">We&apos;ll Visit</h3>
                <p className="text-sm text-charcoal-600">
                  We&apos;ll schedule a free on-site consultation to take
                  measurements and discuss design options.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-700 text-white font-bold">
                  3
                </div>
                <h3 className="font-bold text-charcoal-900 mb-2">You&apos;ll Decide</h3>
                <p className="text-sm text-charcoal-600">
                  You&apos;ll receive a detailed proposal with pricing. Take your
                  time—there&apos;s no pressure to decide quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
