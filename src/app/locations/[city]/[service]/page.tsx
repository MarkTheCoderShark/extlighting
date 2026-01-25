import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Home, Building2, Sparkles } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { LocationCard } from "@/components/location-card";
import { locations, getLocationBySlug, getNeighboringLocations } from "@/lib/data/locations";
import { services, getServiceBySlug } from "@/lib/data/services";
import { business } from "@/lib/data/business";

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];

  locations.forEach((location) => {
    services.forEach((service) => {
      params.push({
        city: location.slug,
        service: service.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service: serviceSlug } = await params;
  const location = getLocationBySlug(city);
  const service = getServiceBySlug(serviceSlug);

  if (!location || !service) {
    return { title: "Page Not Found" };
  }

  const serviceLabel = service.slug === "residential" ? "Residential" : "Commercial";

  return {
    title: `${location.name} ${serviceLabel} Lighting | ${serviceLabel === "Residential" ? "Home" : "Business"} LED Installation`,
    description: `Professional ${serviceLabel.toLowerCase()} permanent LED lighting in ${location.name}, CA. ${service.shortDescription}. Lifetime warranty, free quotes!`,
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { city, service: serviceSlug } = await params;
  const location = getLocationBySlug(city);
  const service = getServiceBySlug(serviceSlug);

  if (!location || !service) {
    notFound();
  }

  const neighboringLocations = getNeighboringLocations(city);
  const serviceLabel = service.slug === "residential" ? "Residential" : "Commercial";
  const focusAreas = service.slug === "residential" 
    ? location.residentialFocus 
    : location.commercialFocus;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceLabel} Permanent Lighting - ${location.name}`,
    description: `${service.description} in ${location.name}, CA`,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phone,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    serviceType: `${serviceLabel} LED Lighting Installation`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 section pt-28 md:pt-36">
        <div className="container">
          <BreadcrumbNav
            items={[
              { label: "Locations", href: "/locations" },
              { label: location.name, href: `/locations/${location.slug}` },
              { label: serviceLabel },
            ]}
            className="mb-8 text-charcoal-400"
          />
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              {serviceLabel} Permanent Lighting in {location.name}, CA
            </h1>
            <p className="text-lg text-charcoal-300 md:text-xl mb-6">
              {service.description} We proudly serve {location.name} and surrounding areas with professional installation and lifetime warranty.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/quote" size="lg">
                Get Your Free Quote
              </CTAButton>
              <CTAButton href={`/services/${service.slug}`} variant="outline" size="lg">
                Learn More About {serviceLabel}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background overflow-hidden">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-6">{serviceLabel} Lighting for {location.name}</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                {location.name} {service.slug === "residential" ? "homeowners" : "businesses"} are 
                discovering the transformative power of permanent exterior lighting. Our 
                professional installation brings year-round beauty, convenience, and value to 
                properties throughout {location.county}.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Whether you&apos;re looking to enhance curb appeal, improve security, or simply 
                enjoy the convenience of app-controlled lighting, we have the expertise to 
                make it happen. Our team understands {location.name}&apos;s unique character and 
                will design a lighting solution that complements your property perfectly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gold-50 p-4 border border-gold-200">
                  <p className="font-semibold text-charcoal-900 text-sm">Year-Round Beauty</p>
                  <p className="text-xs text-charcoal-600">Every season, every occasion</p>
                </div>
                <div className="rounded-lg bg-gold-50 p-4 border border-gold-200">
                  <p className="font-semibold text-charcoal-900 text-sm">App Control</p>
                  <p className="text-xs text-charcoal-600">Change colors instantly</p>
                </div>
                <div className="rounded-lg bg-gold-50 p-4 border border-gold-200">
                  <p className="font-semibold text-charcoal-900 text-sm">Local Expertise</p>
                  <p className="text-xs text-charcoal-600">{location.name} specialists</p>
                </div>
                <div className="rounded-lg bg-gold-50 p-4 border border-gold-200">
                  <p className="font-semibold text-charcoal-900 text-sm">Lifetime Warranty</p>
                  <p className="text-xs text-charcoal-600">Full coverage included</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center mb-6">
                <div className="text-center p-8">
                  {service.slug === "residential" ? (
                    <Home className="h-16 w-16 text-white mx-auto mb-4" />
                  ) : (
                    <Building2 className="h-16 w-16 text-white mx-auto mb-4" />
                  )}
                  <p className="text-gold-100 text-sm">{serviceLabel} lighting in {location.name}</p>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-lg border border-charcoal-100">
                <h3 className="text-lg font-bold text-charcoal-900 mb-4">
                  {serviceLabel} Focus Areas
                </h3>
                <ul className="space-y-2 mb-6">
                  {focusAreas.slice(0, 4).map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-gold-700 mt-0.5" />
                      <span className="text-charcoal-700 text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-charcoal-100 pt-4">
                  <p className="text-xs text-charcoal-600 mb-1">Typical Investment:</p>
                  <p className="text-xl font-bold text-gold-700 mb-4">
                    {service.priceRange.typical}
                  </p>
                  <CTAButton href="/quote" className="w-full" size="sm">
                    Get Your Custom Quote
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            title={`${location.name} Neighborhoods We Serve`}
            subtitle={`Professional ${serviceLabel.toLowerCase()} lighting throughout ${location.name} and surrounding areas.`}
          />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {location.neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood}
                className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm border border-charcoal-100"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 text-gold-700" />
                <span className="text-charcoal-700 text-sm">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6">What&apos;s Included</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-lg bg-charcoal-50 p-4"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700" />
                  <span className="text-charcoal-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6">Applications for {location.name} {serviceLabel} Properties</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.applications.map((application) => (
                <div
                  key={application}
                  className="rounded-xl bg-white p-4 shadow-sm border border-charcoal-100 text-center"
                >
                  <p className="font-medium text-charcoal-900">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {neighboringLocations.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <SectionHeading
              title={`${serviceLabel} Lighting in Nearby Cities`}
              subtitle={`We also serve these communities near ${location.name}.`}
              align="left"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {neighboringLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}/${service.slug}`}
                  className="rounded-lg bg-white p-4 shadow-sm border border-charcoal-100 hover:border-gold-300 hover:shadow-md transition-all group"
                >
                  <span className="font-medium text-charcoal-900 group-hover:text-gold-700">
                    {loc.name} {serviceLabel}
                  </span>
                  <ArrowRight className="inline ml-2 h-4 w-4 text-charcoal-400 group-hover:text-gold-700" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gold-700 section">
        <div className="container text-center">
          <h2 className="text-white mb-4">
            Ready for {serviceLabel} Lighting in {location.name}?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gold-100 mb-8">
            Get a free quote for your {location.name} {service.slug === "residential" ? "home" : "business"} 
            and discover the difference permanent lighting can make.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/quote" variant="secondary" size="lg">
              Get Your Free Quote
            </CTAButton>
            <CTAButton
              href={`tel:${business.phoneRaw}`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gold-700"
            >
              Call {business.phone}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
