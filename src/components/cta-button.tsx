import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
  isLoading = false,
  disabled = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2";

  const variants = {
    primary: "btn-gold",
    secondary:
      "bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-gold-700 text-gold-700 hover:bg-gold-50 hover:border-gold-800 hover:text-gold-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    (isLoading || disabled) && "opacity-50 pointer-events-none",
    className
  );

  const content = isLoading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {children}
    </>
  ) : (
    children
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        aria-disabled={isLoading || disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <Link 
      href={href} 
      className={buttonClasses}
      aria-disabled={isLoading || disabled}
    >
      {content}
    </Link>
  );
}
