import { Shield, Star, Award, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type BadgeType = "warranty" | "reviews" | "certified" | "experience" | "licensed";

interface TrustBadgeProps {
  type: BadgeType;
  value?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "inline";
}

const badgeConfig: Record<BadgeType, { icon: React.ElementType; label: string; defaultValue: string }> = {
  warranty: {
    icon: Shield,
    label: "Warranty",
    defaultValue: "Lifetime",
  },
  reviews: {
    icon: Star,
    label: "Reviews",
    defaultValue: "5.0 Stars",
  },
  certified: {
    icon: Award,
    label: "Certified",
    defaultValue: "Pro Installer",
  },
  experience: {
    icon: Clock,
    label: "Experience",
    defaultValue: "10+ Years",
  },
  licensed: {
    icon: CheckCircle,
    label: "Licensed",
    defaultValue: "& Insured",
  },
};

export function TrustBadge({
  type,
  value,
  className,
  size = "md",
  variant = "default",
}: TrustBadgeProps) {
  const config = badgeConfig[type];
  const Icon = config.icon;
  const displayValue = value || config.defaultValue;

  if (variant === "inline") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Icon className="h-4 w-4 text-gold-400" />
        <span className="text-sm font-medium">
          {displayValue} {config.label}
        </span>
      </div>
    );
  }

  const sizeClasses = {
    sm: {
      container: "gap-2 p-3",
      icon: "h-5 w-5",
      value: "text-sm",
      label: "text-xs",
    },
    md: {
      container: "gap-3 p-4",
      icon: "h-6 w-6",
      value: "text-base",
      label: "text-sm",
    },
    lg: {
      container: "gap-4 p-5",
      icon: "h-8 w-8",
      value: "text-lg",
      label: "text-base",
    },
  };

  const sizes = sizeClasses[size];

  return (
    <div
      className={cn(
        "flex items-center rounded-xl bg-white border border-charcoal-200 shadow-sm",
        sizes.container,
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
        <Icon className={cn("text-gold-700", sizes.icon)} />
      </div>
      <div>
        <p className={cn("font-bold text-charcoal-900", sizes.value)}>
          {displayValue}
        </p>
        <p className={cn("text-charcoal-500", sizes.label)}>{config.label}</p>
      </div>
    </div>
  );
}

interface TrustBadgesProps {
  badges?: BadgeType[];
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "inline";
}

export function TrustBadges({
  badges = ["warranty", "reviews", "licensed"],
  className,
  size = "md",
  variant = "default",
}: TrustBadgesProps) {
  if (variant === "inline") {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-x-6 gap-y-2", className)}>
        {badges.map((badge, i) => (
          <div key={badge} className="flex items-center gap-6">
            <TrustBadge type={badge} variant="inline" />
            {i < badges.length - 1 && (
              <span className="hidden sm:inline text-white/30">|</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap justify-center gap-4", className)}>
      {badges.map((badge) => (
        <TrustBadge key={badge} type={badge} size={size} />
      ))}
    </div>
  );
}
