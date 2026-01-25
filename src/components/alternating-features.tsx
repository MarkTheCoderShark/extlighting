import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Feature {
  title: string;
  description: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
}

interface AlternatingFeaturesProps {
  className?: string;
  features: Feature[];
  startReversed?: boolean;
}

function FeatureRow({
  feature,
  reversed,
  index,
}: {
  feature: Feature;
  reversed: boolean;
  index: number;
}) {
  return (
    <div
      className={cn(
        "grid gap-8 lg:gap-16 items-center",
        feature.image ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-3xl mx-auto"
      )}
    >
      <div className={cn(reversed && feature.image && "lg:order-2")}>
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gold-100 text-gold-700 text-sm font-bold mb-4">
          {index + 1}
        </span>
        <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
          {feature.title}
        </h3>
        <p className="text-charcoal-600 leading-relaxed mb-6">
          {feature.description}
        </p>
        {feature.bullets && feature.bullets.length > 0 && (
          <ul className="space-y-3">
            {feature.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                <span className="text-charcoal-700">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {feature.image && (
        <div className={cn("relative aspect-[4/3] rounded-2xl overflow-hidden", reversed && "lg:order-1")}>
          <Image
            src={feature.image}
            alt={feature.imageAlt || feature.title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

export function AlternatingFeatures({
  className,
  features,
  startReversed = false,
}: AlternatingFeaturesProps) {
  return (
    <section className={cn("section bg-background", className)}>
      <div className="container">
        <div className="space-y-16 lg:space-y-24">
          {features.map((feature, i) => (
            <FeatureRow
              key={feature.title}
              feature={feature}
              reversed={startReversed ? i % 2 === 0 : i % 2 === 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
