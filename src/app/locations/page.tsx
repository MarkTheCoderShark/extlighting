import type { Metadata } from "next";
import { MapPin, Users, Shield, Clock } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { LocationGrid } from "@/components/location-card";
import { locations } from "@/lib/data/locations";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Service Areas | Permanent Lighting Sacramento Region",
  description:
    "EXT Lighting serves the greater Sacramento region including Roseville, Folsom, El Dorado Hills, Rocklin, and more. Professional permanent LED lighting installation.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 section pt-28 md:pt-36">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white mb-6">Our Service Areas</h1>
            <p className="text-lg text-charcoal-300 md:text-xl">
              EXT Lighting proudly serves the greater Sacramento region,
              bringing professional permanent exterior lighting to communities
              from downtown Sacramento to the Sierra foothills.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            title="Communities We Serve"
            subtitle="Click on your city to learn more about our services in your area."
          />
          <div className="mt-12">
            <LocationGrid locations={locations} showNeighborhoods />
          </div>
        </div>
      </section>

      <section className="section bg-background-alt overflow-hidden">
        <div className="container">
          <SectionHeading
            title="Sacramento Region's Premier Lighting Service"
            subtitle="From Midtown's historic homes to El Dorado Hills' modern estates, we bring expert permanent lighting to every community."
          />
          
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Built on Local Reputation
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                We&apos;ve built our reputation serving the diverse communities of the
                Sacramento region. From the historic neighborhoods of Midtown
                Sacramento to the modern master-planned communities of Roseville
                and El Dorado Hills, we bring the same level of expertise and
                care to every installation.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Our team knows the unique character of each community we serve.
                We understand the architectural styles, the HOA requirements,
                and the aesthetic preferences that make each neighborhood special.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-white mx-auto mb-4" />
                <p className="text-gold-100 text-sm">Serving the greater Sacramento area</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center lg:order-1">
              <div className="text-center p-8">
                <Users className="h-16 w-16 text-gold-400 mx-auto mb-4" />
                <p className="text-charcoal-400 text-sm">Your local lighting experts</p>
              </div>
            </div>
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Counties We Serve
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                This local knowledge helps us create lighting designs that truly 
                fit each property and community. We proudly serve:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {business.serviceArea.counties.map((county) => (
                  <div key={county} className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm border border-charcoal-100">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-gold-700" />
                    <span className="text-charcoal-700 text-sm font-medium">{county}</span>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-600 text-sm">
                Don&apos;t see your exact location? If you&apos;re within 50 miles of
                Sacramento, we can likely help.
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-2xl bg-gradient-to-r from-charcoal-900 to-charcoal-800 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Not Sure If We Serve Your Area?
                </h3>
                <p className="text-charcoal-300 leading-relaxed mb-4">
                  If you&apos;re within 50 miles of Sacramento, we can likely help. 
                  Contact us to discuss your project—we love bringing permanent 
                  lighting to new communities.
                </p>
                <CTAButton href="/quote" className="mt-4">
                  Check Availability
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <Shield className="h-8 w-8 text-gold-400 mx-auto mb-2" />
                  <p className="text-sm text-charcoal-300">Licensed & Insured</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <Clock className="h-8 w-8 text-gold-400 mx-auto mb-2" />
                  <p className="text-sm text-charcoal-300">Same-Week Quotes</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <MapPin className="h-8 w-8 text-gold-400 mx-auto mb-2" />
                  <p className="text-sm text-charcoal-300">12 Cities</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <Users className="h-8 w-8 text-gold-400 mx-auto mb-2" />
                  <p className="text-sm text-charcoal-300">Local Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold-700 section">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Transform Your Property?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gold-100 mb-8">
            No matter where you are in the Sacramento region, we&apos;re ready to
            bring permanent lighting excellence to your property.
          </p>
          <CTAButton href="/quote" variant="secondary" size="lg">
            Get Your Free Quote
          </CTAButton>
        </div>
      </section>
    </>
  );
}
