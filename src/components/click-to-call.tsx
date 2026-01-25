import { Phone } from "lucide-react";
import { business } from "@/lib/data/business";
import { cn } from "@/lib/utils";

interface ClickToCallProps {
  variant?: "button" | "link" | "floating";
  showNumber?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ClickToCall({
  variant = "button",
  showNumber = true,
  className,
  size = "md",
}: ClickToCallProps) {
  const sizeClasses = {
    sm: {
      button: "px-4 py-2 text-sm gap-2",
      icon: "h-4 w-4",
      floating: "h-12 w-12",
      floatingIcon: "h-5 w-5",
    },
    md: {
      button: "px-6 py-3 text-base gap-2",
      icon: "h-5 w-5",
      floating: "h-14 w-14",
      floatingIcon: "h-6 w-6",
    },
    lg: {
      button: "px-8 py-4 text-lg gap-3",
      icon: "h-6 w-6",
      floating: "h-16 w-16",
      floatingIcon: "h-7 w-7",
    },
  };

  const sizes = sizeClasses[size];

  if (variant === "floating") {
    return (
      <a
        href={`tel:${business.phoneRaw}`}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-gold-700 text-white shadow-lg hover:bg-gold-800 hover:shadow-xl transition-all md:hidden",
          sizes.floating,
          className
        )}
        aria-label={`Call ${business.phone}`}
      >
        <Phone className={sizes.floatingIcon} />
      </a>
    );
  }

  if (variant === "link") {
    return (
      <a
        href={`tel:${business.phoneRaw}`}
        className={cn(
          "inline-flex items-center gap-2 text-gold-700 hover:text-gold-800 font-medium transition-colors",
          className
        )}
      >
        <Phone className={sizes.icon} />
        {showNumber && <span>{business.phone}</span>}
      </a>
    );
  }

  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-charcoal-900 text-white font-semibold hover:bg-charcoal-800 transition-colors shadow-md hover:shadow-lg",
        sizes.button,
        className
      )}
    >
      <Phone className={sizes.icon} />
      {showNumber && <span>{business.phone}</span>}
    </a>
  );
}
