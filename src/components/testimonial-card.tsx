import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  variant?: "default" | "featured";
}

export function TestimonialCard({
  testimonial,
  className,
  variant = "default",
}: TestimonialCardProps) {
  if (variant === "featured") {
    return (
      <Card className={cn("bg-charcoal-900 text-white border-0", className)}>
        <CardContent className="p-8 md:p-12">
          <Quote className="h-10 w-10 text-gold-500 mb-6" />
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-6">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gold-700 flex items-center justify-center text-white font-bold text-lg">
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-charcoal-400">{testimonial.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-gold-500 mb-4" />
        <blockquote className="text-charcoal-700 leading-relaxed mb-4">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 font-semibold">
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-charcoal-900">{testimonial.author}</p>
            <p className="text-sm text-charcoal-500">{testimonial.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
