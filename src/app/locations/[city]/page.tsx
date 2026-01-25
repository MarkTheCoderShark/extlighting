import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, CheckCircle, Home, Building2 } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ServiceCard } from "@/components/service-card";
import { LocationCard } from "@/components/location-card";
import { StatsSection } from "@/components/stats-section";
import { FAQSection } from "@/components/faq-section";
import { ProcessSection } from "@/components/process-section";
import { CTASection } from "@/components/cta-section";
import { TestimonialCard } from "@/components/testimonial-card";
import { locations, getLocationBySlug, getNeighboringLocations } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import { business } from "@/lib/data/business";
import { getFAQItems } from "@/lib/data/faq";
import { getFeaturedTestimonials } from "@/lib/data/testimonials";

// Hero background images that rotate based on location
const heroImages = [
  "/images/gallery/residential-6.png",
  "/images/gallery/residential-7.png",
  "/images/gallery/residential-8.png",
  "/images/gallery/residential-9.png",
  "/images/gallery/residential-10.png",
  "/images/gallery/residential-11.png",
  "/images/gallery/residential-12.png",
];

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: `Permanent Lighting ${location.name} CA | LED Installation`,
    description: `Professional permanent exterior LED lighting installation in ${location.name}, California. Residential and commercial services with lifetime warranty. Free quotes!`,
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  const neighboringLocations = getNeighboringLocations(city);
  const faqs = getFAQItems().slice(0, 4);
  const testimonials = getFeaturedTestimonials(2);

  // Get a consistent hero image based on location index
  const locationIndex = locations.findIndex(l => l.slug === city);
  const heroImage = heroImages[locationIndex % heroImages.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${business.name} - ${location.name}`,
    description: `Permanent exterior LED lighting installation in ${location.name}, CA`,
    url: `https://extlighting.com/locations/${location.slug}`,
    telephone: business.phone,
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.county,
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative section pt-28 md:pt-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`Permanent exterior lighting in ${location.name}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="container relative z-10">
          <BreadcrumbNav
            items={[
              { label: "Locations", href: "/locations" },
              { label: location.name },
            ]}
            className="mb-8 text-charcoal-400"
          />
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Permanent Exterior Lighting in {location.name}, CA
            </h1>
            <p className="text-lg text-charcoal-300 md:text-xl mb-6">
              {location.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/quote" size="lg">
                Get Your Free Quote
              </CTAButton>
              <CTAButton href="/gallery" variant="outline" size="lg">
                View Our Work
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <StatsSection variant="dark" />

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            title={`Our Services in ${location.name}`}
            subtitle="Professional permanent lighting for homes and businesses."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                href={`/locations/${location.slug}/${service.slug}`}
              />
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href={`/locations/${location.slug}/residential`}
              className="group flex items-center gap-4 rounded-xl bg-gold-50 border border-gold-200 p-6 hover:bg-gold-100 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-700 text-white">
                <Home className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors">
                  Residential in {location.name}
                </h3>
                <p className="text-sm text-charcoal-600">Home lighting solutions</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gold-700" />
            </Link>
            <Link
              href={`/locations/${location.slug}/commercial`}
              className="group flex items-center gap-4 rounded-xl bg-charcoal-50 border border-charcoal-200 p-6 hover:bg-charcoal-100 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-charcoal-900 text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors">
                  Commercial in {location.name}
                </h3>
                <p className="text-sm text-charcoal-600">Business lighting solutions</p>
              </div>
              <ArrowRight className="h-5 w-5 text-charcoal-700" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">Neighborhoods We Serve in {location.name}</h2>
              <div className="grid grid-cols-2 gap-3">
                {location.neighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 text-charcoal-700"
                  >
                    <MapPin className="h-4 w-4 flex-shrink-0 text-gold-700" />
                    <span>{neighborhood}</span>
                  </div>
                ))}
              </div>
              {location.nearbyAreas.length > 0 && (
                <div className="mt-6 p-4 rounded-lg bg-white border border-charcoal-200">
                  <p className="text-sm text-charcoal-500 mb-2">
                    Also serving nearby:
                  </p>
                  <p className="text-charcoal-700">
                    {location.nearbyAreas.join(", ")}
                  </p>
                </div>
              )}
            </div>

            <div>
              <h2 className="mb-6">Why {location.name} Chooses Us</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 rounded-lg bg-white border border-charcoal-100">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal-900">Local Expertise</span>
                    <p className="text-sm text-charcoal-600">We know {location.name}&apos;s unique architectural character</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-lg bg-white border border-charcoal-100">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal-900">Fast Response</span>
                    <p className="text-sm text-charcoal-600">Quick service times for {location.county} residents</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-lg bg-white border border-charcoal-100">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal-900">HOA Familiar</span>
                    <p className="text-sm text-charcoal-600">We understand local permitting requirements</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-lg bg-white border border-charcoal-100">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal-900">Lifetime Warranty</span>
                    <p className="text-sm text-charcoal-600">Backed by local service you can count on</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title={`How We Work in ${location.name}`}
        subtitle="From your first call to enjoying your new lighting, here's what to expect."
        variant="cards"
      />

      <section className="section bg-background-alt">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="mb-6">Permanent Lighting for {location.name} Properties</h2>
              <div className="prose prose-lg text-charcoal-700">
                <p>
                  {location.name} is home to diverse architectural styles and
                  property types, each with unique lighting opportunities. Whether
                  you own a modern home in a master-planned community or a
                  character property in an established neighborhood, permanent
                  exterior lighting can transform how you experience your property.
                </p>
                <p>
                  Our team has installed permanent lighting systems on hundreds of
                  properties throughout {location.county}, and we bring that expertise
                  to every {location.name} project. We understand the local climate,
                  HOA requirements, and architectural styles that make this area unique.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services/residential"
                  className="text-gold-700 hover:text-gold-800 font-medium inline-flex items-center gap-1"
                >
                  Learn about residential <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-charcoal-300">|</span>
                <Link
                  href="/services/commercial"
                  className="text-gold-700 hover:text-gold-800 font-medium inline-flex items-center gap-1"
                >
                  Learn about commercial <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 border border-charcoal-100">
                <h3 className="font-bold text-charcoal-900 mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5 text-gold-700" />
                  Residential Focus in {location.name}
                </h3>
                <ul className="space-y-2">
                  {location.residentialFocus.map((focus) => (
                    <li key={focus} className="flex items-start gap-2 text-charcoal-600">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-gold-700 mt-1" />
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-white p-6 border border-charcoal-100">
                <h3 className="font-bold text-charcoal-900 mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-gold-700" />
                  Commercial Focus in {location.name}
                </h3>
                <ul className="space-y-2">
                  {location.commercialFocus.map((focus) => (
                    <li key={focus} className="flex items-start gap-2 text-charcoal-600">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-gold-700 mt-1" />
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <SectionHeading
              title="What Sacramento Area Homeowners Say"
              subtitle="Join hundreds of satisfied customers throughout the region."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection
        faqs={faqs}
        title={`Common Questions in ${location.name}`}
        subtitle="Answers to frequently asked questions about permanent lighting."
        showViewAll
      />

      {neighboringLocations.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <SectionHeading
              title="Also Serving Nearby Cities"
              subtitle="We provide the same excellent service throughout the Sacramento region."
              align="left"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {neighboringLocations.map((loc) => (
                <LocationCard key={loc.slug} location={loc} />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/locations" className="text-gold-700 hover:text-gold-800 font-medium inline-flex items-center gap-1">
                View all service areas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to Transform Your ${location.name} Property?`}
        subtitle={`Join your neighbors in ${location.name} who have already discovered the beauty of permanent exterior lighting.`}
        variant="gold"
      />
    </>
  );
}
