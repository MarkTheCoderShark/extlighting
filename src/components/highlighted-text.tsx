"use client";

import { cn } from "@/lib/utils";

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
}

export function HighlightedText({ children, className }: HighlightedTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span 
        className="relative z-10 text-[1.15em]"
        style={{ fontFamily: "var(--font-script)", fontWeight: 400 }}
      >
        {children}
      </span>
      <svg
        className="absolute -bottom-1 left-0 w-full h-3 text-gold-400"
        viewBox="0 0 200 12"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8.5C20 4 40 9 60 6.5C80 4 100 8.5 120 5.5C140 2.5 160 7 180 4.5C190 3 198 6 198 6"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

interface SectionTitleProps {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  eyebrowClassName?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({
  eyebrow,
  children,
  className,
  eyebrowClassName,
  align = "center",
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={cn(alignClass, className)}>
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
      <h2 className="text-charcoal-900">{children}</h2>
    </div>
  );
}
