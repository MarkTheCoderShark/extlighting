import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { CTAButton } from "./cta-button";
import { locations, type Location } from "@/lib/data/locations";
import { cn } from "@/lib/utils";

interface ServiceAreasSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  maxLocations?: number;
  currentCity?: string;
  serviceType?: "residential" | "commercial";
  variant?: "grid" | "compact" | "inline";
}

function LocationCardCompact({ 
  location, 
  serviceType 
}: { 
  location: Location; 
  serviceType?: "residential" | "commercial";
}) {
  const href = serviceType 
    ? `/locations/${location.slug}/${serviceType}`
    : `/locations/${location.slug}`;

  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-lg border border-charcoal-200 bg-white p-4 transition-all hover:border-gold-300 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <MapPin className="h-4 w-4 text-gold-700" />
        <div>
          <span className="font-medium text-charcoal-900 group-hover:text-gold-700 transition-colors">
            {location.name}
          </span>
          <span className="text-sm text-charcoal-500 ml-2">{location.county}</span>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 text-charcoal-400 group-hover:text-gold-700 group-hover:translate-x-1 transition-all" />
    </Link>
  );
}

function LocationCardFull({ 
  location, 
  serviceType 
}: { 
  location: Location; 
  serviceType?: "residential" | "commercial";
}) {
  const href = serviceType 
    ? `/locations/${location.slug}/${serviceType}`
    : `/locations/${location.slug}`;

  return (
    <Link
      href={href}
      className="group block rounded-xl border border-charcoal-200 bg-white p-6 transition-all hover:border-gold-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors">
            {location.name}
          </h3>
          <p className="text-sm text-charcoal-500">{location.county}</p>
        </div>
        <MapPin className="h-5 w-5 text-gold-700" />
      </div>
      {location.neighborhoods.length > 0 && (
        <p className="mt-3 text-sm text-charcoal-600 line-clamp-2">
          Serving {location.neighborhoods.slice(0, 3).join(", ")}
          {location.neighborhoods.length > 3 && ` +${location.neighborhoods.length - 3} more`}
        </p>
      )}
    </Link>
  );
}

export function ServiceAreasSection({
  className,
  title = "Service Areas",
  subtitle = "Professional permanent lighting installation throughout the Sacramento region.",
  maxLocations = 6,
  currentCity,
  serviceType,
  variant = "grid",
}: ServiceAreasSectionProps) {
  const displayLocations = locations
    .filter((loc) => loc.slug !== currentCity)
    .slice(0, maxLocations);

  if (variant === "inline") {
    return (
      <section className={cn("py-8 bg-charcoal-50", className)}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <span className="font-semibold text-charcoal-700">Serving:</span>
            {displayLocations.map((location, i) => (
              <span key={location.slug}>
                <Link
                  href={serviceType ? `/locations/${location.slug}/${serviceType}` : `/locations/${location.slug}`}
                  className="text-charcoal-600 hover:text-gold-700 transition-colors"
                >
                  {location.name}
                </Link>
                {i < displayLocations.length - 1 && (
                  <span className="text-charcoal-300 ml-6">•</span>
                )}
              </span>
            ))}
            <Link
              href="/locations"
              className="font-medium text-gold-700 hover:text-gold-800 transition-colors"
            >
              View All →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "compact") {
    return (
      <section className={cn("section bg-background-alt", className)}>
        <div className="container">
          <SectionHeading title={title} subtitle={subtitle} align="left" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {displayLocations.map((location) => (
              <LocationCardCompact
                key={location.slug}
                location={location}
                serviceType={serviceType}
              />
            ))}
          </div>
          <div className="mt-8">
            <CTAButton href="/locations" variant="outline">
              View All Locations
            </CTAButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("section bg-background-alt", className)}>
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayLocations.map((location) => (
            <LocationCardFull
              key={location.slug}
              location={location}
              serviceType={serviceType}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="/locations" variant="outline">
            View All Service Areas
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
