import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Location } from "@/lib/data/locations";

interface LocationCardProps {
  location: Location;
  className?: string;
  showNeighborhoods?: boolean;
}

export function LocationCard({
  location,
  className,
  showNeighborhoods = false,
}: LocationCardProps) {
  return (
    <Link href={`/locations/${location.slug}`} className="block group">
      <Card className={cn("h-full transition-all hover:shadow-lg hover:border-gold-300", className)}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700 group-hover:bg-gold-700 group-hover:text-white transition-colors">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-charcoal-900 group-hover:text-gold-700 transition-colors">
                {location.name}
              </h3>
              <p className="text-sm text-charcoal-500">{location.county}</p>
              
              {showNeighborhoods && location.neighborhoods.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-medium text-charcoal-400 uppercase tracking-wide mb-1">
                    Areas Served
                  </p>
                  <p className="text-sm text-charcoal-600 line-clamp-2">
                    {location.neighborhoods.slice(0, 4).join(", ")}
                    {location.neighborhoods.length > 4 && " & more"}
                  </p>
                </div>
              )}
            </div>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-charcoal-400 group-hover:text-gold-700 transition-colors mt-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface LocationGridProps {
  locations: Location[];
  className?: string;
  showNeighborhoods?: boolean;
}

export function LocationGrid({
  locations,
  className,
  showNeighborhoods = false,
}: LocationGridProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {locations.map((location) => (
        <LocationCard
          key={location.slug}
          location={location}
          showNeighborhoods={showNeighborhoods}
        />
      ))}
    </div>
  );
}
