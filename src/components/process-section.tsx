import type { LucideIcon } from "lucide-react";
import { Sparkles, Palette, Zap, Smartphone } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  duration?: string;
}

interface ProcessSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  variant?: "cards" | "timeline";
}

const defaultSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Consultation",
    description: "We visit your property to understand your vision, take measurements, and create a custom lighting plan.",
    icon: Sparkles,
    duration: "30-45 min",
  },
  {
    step: 2,
    title: "Custom Design",
    description: "Our designers create a detailed lighting layout that enhances your property's architecture.",
    icon: Palette,
    duration: "2-3 days",
  },
  {
    step: 3,
    title: "Professional Install",
    description: "Our certified technicians install your system with minimal disruption and maximum attention to detail.",
    icon: Zap,
    duration: "1 day",
  },
  {
    step: 4,
    title: "Enjoy Forever",
    description: "Control your lights from anywhere via our easy app. Change colors for any occasion.",
    icon: Smartphone,
    duration: "Lifetime",
  },
];

function ProcessCard({ step, isLast }: { step: ProcessStep; isLast: boolean }) {
  const Icon = step.icon;
  
  return (
    <div className="relative">
      <div className="rounded-xl bg-white p-6 shadow-sm border border-charcoal-100 h-full">
        <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gold-700 text-sm font-bold text-white">
          {step.step}
        </div>
        <div className="mt-4 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-charcoal-900 mb-2">
          {step.title}
        </h3>
        <p className="text-charcoal-600 text-sm leading-relaxed mb-3">
          {step.description}
        </p>
        {step.duration && (
          <p className="text-xs font-medium text-gold-700">
            {step.duration}
          </p>
        )}
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-charcoal-300" />
      )}
    </div>
  );
}

function TimelineStep({ step, isLast }: { step: ProcessStep; isLast: boolean }) {
  const Icon = step.icon;
  
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-700 text-white font-bold">
          {step.step}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gold-200 mt-4" />
        )}
      </div>
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="h-5 w-5 text-gold-700" />
          <h3 className="text-lg font-bold text-charcoal-900">{step.title}</h3>
          {step.duration && (
            <span className="text-xs font-medium text-gold-700 bg-gold-50 px-2 py-1 rounded-full">
              {step.duration}
            </span>
          )}
        </div>
        <p className="text-charcoal-600 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function ProcessSection({
  className,
  title = "How It Works",
  subtitle = "From consultation to installation, we make the process simple and stress-free.",
  steps = defaultSteps,
  variant = "cards",
}: ProcessSectionProps) {
  if (variant === "timeline") {
    return (
      <section className={cn("section bg-background", className)}>
        <div className="container">
          <SectionHeading title={title} subtitle={subtitle} />
          <div className="mt-12 max-w-2xl mx-auto">
            {steps.map((step, i) => (
              <TimelineStep
                key={step.step}
                step={step}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("section bg-background", className)}>
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <ProcessCard
              key={step.step}
              step={step}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
