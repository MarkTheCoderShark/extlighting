"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { CTAButton } from "./cta-button";
import { business } from "@/lib/data/business";
import { cn } from "@/lib/utils";

const DEFAULT_BG_IMAGE = "/images/gallery/residential-12.png";

interface CTASectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  variant?: "gold" | "dark" | "image";
  imageSrc?: string;
  showPhone?: boolean;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTASection({
  className,
  title = "Ready to Transform Your Property?",
  subtitle = "Get a free, no-obligation quote and see how permanent exterior lighting can enhance your home or business.",
  variant = "gold",
  imageSrc,
  showPhone = true,
  primaryCTA = { text: "Get Your Free Quote", href: "/quote" },
  secondaryCTA,
}: CTASectionProps) {
  const variants = {
    gold: {
      overlay: "bg-black/60",
      title: "text-white",
      subtitle: "text-white/90",
      primary: "primary" as const,
      secondary: "outline" as const,
      secondaryClass: "border-white text-white hover:bg-white hover:text-gold-700",
    },
    dark: {
      overlay: "bg-black/70",
      title: "text-white",
      subtitle: "text-charcoal-300",
      primary: "primary" as const,
      secondary: "outline" as const,
      secondaryClass: "border-white/30 text-white hover:bg-white/10",
    },
    image: {
      overlay: "bg-black/60",
      title: "text-white",
      subtitle: "text-white/90",
      primary: "primary" as const,
      secondary: "outline" as const,
      secondaryClass: "border-white/50 text-white hover:bg-white/10",
    },
  };

  const style = variants[variant];
  const bgImage = imageSrc || DEFAULT_BG_IMAGE;

  const content = (
    <div className="container text-center py-16 md:py-24 relative z-10">
      <h2 className={cn("mb-4", style.title)}>{title}</h2>
      <p className={cn("mx-auto max-w-2xl text-lg mb-8", style.subtitle)}>
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <CTAButton href={primaryCTA.href} variant={style.primary} size="lg">
          {primaryCTA.text}
        </CTAButton>
        {showPhone && (
          <CTAButton
            href={`tel:${business.phoneRaw}`}
            variant={style.secondary}
            size="lg"
            className={style.secondaryClass}
          >
            <Phone className="mr-2 h-4 w-4" />
            {secondaryCTA?.text || `Call ${business.phone}`}
          </CTAButton>
        )}
      </div>
    </div>
  );

  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Beautiful home with permanent LED lighting"
          fill
          className="object-cover"
        />
        <div className={cn("absolute inset-0", style.overlay)} />
      </div>
      {content}
    </section>
  );
}
