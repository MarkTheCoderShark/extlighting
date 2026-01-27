"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  address: z.string().optional(),
  serviceType: z.enum(["residential", "commercial"], {
    message: "Please select a service type",
  }),
  honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formStartTime] = useState(Date.now());

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      honeypot: "",
    },
  });

  const serviceType = watch("serviceType");

  const onSubmit = async (data: ContactFormData) => {
    const timeTaken = Date.now() - formStartTime;
    if (timeTaken < 3000 || data.honeypot) {
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
          city: data.address || "Not provided",
          serviceType: data.serviceType,
          message: data.address ? `Address: ${data.address}` : "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSuccess(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={cn("text-center py-8", className)}>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-light">
          <CheckCircle className="h-6 w-6 text-success" />
        </div>
        <h3 className="text-xl font-bold text-charcoal-900 mb-2">
          Thank You!
        </h3>
        <p className="text-charcoal-600 text-sm">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", className)}>
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="John Smith"
          className="mt-1.5"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="(916) 555-0123"
          className="mt-1.5"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          className="mt-1.5"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="address">
          Address <span className="text-charcoal-400 font-normal">(optional)</span>
        </Label>
        <Input
          id="address"
          {...register("address")}
          placeholder="123 Main St, Sacramento"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label>Property Type</Label>
        <div className="mt-1.5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setValue("serviceType", "residential")}
            className={cn(
              "rounded-lg border-2 p-3 text-center transition-all text-sm font-medium",
              serviceType === "residential"
                ? "border-gold-700 bg-gold-50 text-gold-800"
                : "border-charcoal-200 hover:border-charcoal-300 text-charcoal-700"
            )}
          >
            Residential
          </button>
          <button
            type="button"
            onClick={() => setValue("serviceType", "commercial")}
            className={cn(
              "rounded-lg border-2 p-3 text-center transition-all text-sm font-medium",
              serviceType === "commercial"
                ? "border-gold-700 bg-gold-50 text-gold-800"
                : "border-charcoal-200 hover:border-charcoal-300 text-charcoal-700"
            )}
          >
            Commercial
          </button>
        </div>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-error">{errors.serviceType.message}</p>
        )}
      </div>

      {error && (
        <div className="rounded-lg bg-error-light p-3 text-sm text-error">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full h-11"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Get Your Free Quote"
        )}
      </Button>

      <p className="text-center text-xs text-charcoal-500">
        No obligation • Response within 24 hours
      </p>
    </form>
  );
}
