import { cn } from "@/lib/utils";
import { HighlightedText } from "./highlighted-text";

interface SectionHeadingProps {
  title: string | React.ReactNode;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  eyebrowClassName?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  eyebrowClassName,
  as: Component = "h2",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl", alignmentClasses[align], className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-gold-600 font-bold tracking-widest uppercase text-sm mb-3",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </p>
      )}
      <Component
        className={cn(
          "text-charcoal-900",
          titleClassName
        )}
      >
        {title}
      </Component>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-charcoal-600 md:text-xl",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { HighlightedText };
