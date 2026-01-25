"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { locations } from "@/lib/data/locations";
import { services } from "@/lib/data/services";

const quoteSchema = z.object({
  serviceType: z.enum(["residential", "commercial"], {
    message: "Please select a service type",
  }),
  city: z.string().min(1, "Please select your city"),
  message: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  honeypot: z.string().max(0),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function QuoteForm({ className, onSuccess }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formStartTime] = useState(Date.now());

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    watch,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      honeypot: "",
    },
  });

  const serviceType = watch("serviceType");
  const city = watch("city");

  const handleNextStep = async () => {
    const isValid = await trigger(["serviceType", "city"]);
    if (isValid) {
      setStep(2);
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    const timeTaken = Date.now() - formStartTime;
    if (timeTaken < 3000) {
      setIsSuccess(true);
      return;
    }

    if (data.honeypot) {
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          city: data.city,
          serviceType: data.serviceType,
          message: data.message || "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

      setIsSuccess(true);
      onSuccess?.();
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={cn("text-center py-12", className)}>
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success-light">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
          Thank You!
        </h3>
        <p className="text-charcoal-600 max-w-md mx-auto">
          We&apos;ve received your quote request and will get back to you within
          24 hours. Check your email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("", className)}>
      <div 
        className="mb-8 flex items-center justify-center gap-4"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={2}
        aria-label={`Step ${step} of 2`}
      >
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full font-bold transition-colors",
            step >= 1
              ? "bg-gold-700 text-white"
              : "bg-charcoal-200 text-charcoal-500"
          )}
          aria-current={step === 1 ? "step" : undefined}
        >
          1
        </div>
        <div
          className={cn(
            "h-1 w-16 rounded-full transition-colors",
            step >= 2 ? "bg-gold-700" : "bg-charcoal-200"
          )}
          aria-hidden="true"
        />
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full font-bold transition-colors",
            step >= 2
              ? "bg-gold-700 text-white"
              : "bg-charcoal-200 text-charcoal-500"
          )}
          aria-current={step === 2 ? "step" : undefined}
        >
          2
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("honeypot")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="serviceType" className="text-base font-medium">
                What type of property?
              </Label>
              <div className="mt-3 grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() =>
                      setValue("serviceType", service.id as "residential" | "commercial")
                    }
                    className={cn(
                      "rounded-lg border-2 p-4 text-left transition-all",
                      serviceType === service.id
                        ? "border-gold-700 bg-gold-50"
                        : "border-charcoal-200 hover:border-charcoal-300"
                    )}
                  >
                    <p className="font-semibold text-charcoal-900">
                      {service.shortName}
                    </p>
                    <p className="mt-1 text-sm text-charcoal-500">
                      {service.shortDescription}
                    </p>
                  </button>
                ))}
              </div>
              {errors.serviceType && (
                <p className="mt-2 text-sm text-error" role="alert">
                  {errors.serviceType.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="city" className="text-base font-medium">
                Where is your property located?
              </Label>
              <Select
                value={city}
                onValueChange={(value) => setValue("city", value)}
              >
                <SelectTrigger className="mt-2 h-12">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location.slug} value={location.name}>
                      {location.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="Other">Other (within 50 miles)</SelectItem>
                </SelectContent>
              </Select>
              {errors.city && (
                <p className="mt-2 text-sm text-error" role="alert">{errors.city.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-base font-medium">
                Tell us about your project (optional)
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Describe your property, what you're looking for, or any questions you have..."
                className="mt-2 min-h-[100px]"
              />
            </div>

            <Button
              type="button"
              onClick={handleNextStep}
              className="btn-gold w-full h-12"
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-base font-medium">
                Your Name
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="John Smith"
                className="mt-2 h-12"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-error" role="alert">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-base font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="john@example.com"
                className="mt-2 h-12"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-error" role="alert">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone" className="text-base font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="(916) 555-0123"
                className="mt-2 h-12"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-error" role="alert">{errors.phone.message}</p>
              )}
            </div>

            {error && (
              <div className="rounded-lg bg-error-light p-4 text-sm text-error" role="alert">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="h-12"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold flex-1 h-12"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get My Free Quote"
                )}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
