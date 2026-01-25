import Link from "next/link";
import { Home, Building2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/data/services";

interface ServiceCardProps {
  service: Service;
  href?: string;
  variant?: "default" | "compact";
  className?: string;
}

const iconMap = {
  Home: Home,
  Building2: Building2,
};

export function ServiceCard({
  service,
  href,
  variant = "default",
  className,
}: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Home;
  const linkHref = href || `/services/${service.slug}`;

  if (variant === "compact") {
    return (
      <Link href={linkHref} className="block group">
        <Card className={cn("h-full transition-all hover:shadow-lg hover:border-gold-300", className)}>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700 group-hover:bg-gold-700 group-hover:text-white transition-colors">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-charcoal-900 group-hover:text-gold-700 transition-colors">
                {service.shortName}
              </h3>
              <p className="text-sm text-charcoal-500 truncate">
                {service.shortDescription}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-charcoal-400 group-hover:text-gold-700 transition-colors" />
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={linkHref} className="block group">
      <Card className={cn("h-full transition-all hover:shadow-xl hover:border-gold-300", className)}>
        <CardHeader className="pb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-100 text-gold-700 group-hover:bg-gold-700 group-hover:text-white transition-colors">
            <Icon className="h-7 w-7" />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors">
            {service.name}
          </h3>
          <p className="text-charcoal-600 leading-relaxed">
            {service.description}
          </p>
          <div className="pt-2">
            <p className="text-sm font-medium text-charcoal-900">Typical Investment:</p>
            <p className="text-lg font-bold text-gold-700">{service.priceRange.typical}</p>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 group-hover:gap-3 transition-all">
            Learn More <ArrowRight className="h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
