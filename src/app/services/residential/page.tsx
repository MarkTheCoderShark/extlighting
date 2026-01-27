import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Home, Smartphone, Shield, Palette, Sun, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { TestimonialCard } from "@/components/testimonial-card";
import { TeamSection } from "@/components/team-section";
import { StatsSection } from "@/components/stats-section";
import { FAQSection } from "@/components/faq-section";
import { ProcessSection } from "@/components/process-section";
import { CTASection } from "@/components/cta-section";
import { ServiceAreasSection } from "@/components/service-areas-section";
import { getServiceBySlug } from "@/lib/data/services";
import { getTestimonials } from "@/lib/data/testimonials";
import { getFAQItems } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Residential Permanent Lighting Sacramento | Home LED Installation",
  description:
    "Transform your Sacramento home with permanent exterior LED lighting. App-controlled colors, lifetime warranty, professional installation. Free quotes for residential properties.",
};

const applications = [
  {
    title: "Roofline Lighting",
    description: "Elegant lighting along your roof's edge that defines your home's silhouette and creates stunning curb appeal day and night.",
  },
  {
    title: "Soffit & Trim",
    description: "Subtle accent lighting that highlights architectural details and adds depth to your home's facade.",
  },
  {
    title: "Accent Lighting",
    description: "Strategic lighting to emphasize columns, dormers, or unique architectural features that make your home special.",
  },
  {
    title: "Landscape Integration",
    description: "Coordinated lighting that extends from your home to your landscape, creating a cohesive outdoor environment.",
  },
];

const benefits = [
  {
    title: "Convenience",
    description: "Control everything from your phone. Change colors for holidays, set schedules, or adjust brightness—all without leaving your couch.",
    icon: Smartphone,
  },
  {
    title: "Safety",
    description: "No more climbing ladders to hang lights. Our system stays up year-round, professionally installed and maintained.",
    icon: Shield,
  },
  {
    title: "Curb Appeal",
    description: "Your home will stand out in the neighborhood. Permanent lighting adds elegance that temporary lights simply can't match.",
    icon: Home,
  },
  {
    title: "Endless Options",
    description: "Choose from millions of colors and countless patterns. Match any holiday, team, or mood with a few taps.",
    icon: Palette,
  },
  {
    title: "Year-Round Enjoyment",
    description: "Why limit beautiful lighting to one season? Enjoy your illuminated home every evening of the year.",
    icon: Sun,
  },
];

const idealFor = [
  "Homeowners tired of annual light installation hassle",
  "Families who love decorating for every holiday",
  "Properties with HOAs that allow tasteful permanent lighting",
  "Homes with challenging rooflines that make temporary lights difficult",
  "Anyone who values curb appeal and property presentation",
];

export default function ResidentialPage() {
  const service = getServiceBySlug("residential");
  const testimonials = getTestimonials("residential").slice(0, 2);
  const faqs = getFAQItems().filter(f =>
    ["pricing", "installation", "product"].includes(f.category)
  ).slice(0, 6);

  if (!service) return null;

  return (
    <>
      <section className="relative section pt-28 md:pt-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/residential-11.png"
            alt="Beautiful home with permanent LED lighting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900/60" />
        </div>
        <div className="container relative z-10">
          <BreadcrumbNav
            items={[
              { label: "Services", href: "/services" },
              { label: "Residential" },
            ]}
            className="mb-8 text-charcoal-400"
          />
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Residential Permanent Exterior Lighting
            </h1>
            <p className="text-lg text-charcoal-300 md:text-xl mb-6">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/quote" size="lg">
                Get Your Free Quote
              </CTAButton>
              <CTAButton href="/gallery" variant="outline" size="lg">
                View Our Work
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <StatsSection variant="dark" />

      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="mb-6">Transform Your Home with Permanent Lighting</h2>
              <div className="prose prose-lg text-charcoal-700">
                <p>
                  Every homeowner knows the routine: November arrives, and it's time to drag out the tangled lights from the garage, climb ladders in the cold, and spend hours making your home look festive. Then January comes, and it all comes down again—only to repeat the cycle next year.
                </p>
                <p>
                  Permanent exterior lighting changes everything. Our professionally installed LED systems stay up year-round, becoming a seamless part of your home's architecture. When you want to light up for the holidays, you simply open an app on your phone and choose your colors.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl bg-gold-50 border border-gold-200 p-6">
                <h3 className="font-bold text-charcoal-900 mb-2">Holiday Ready, Anytime</h3>
                <p className="text-charcoal-600 text-sm">Switch to festive colors with a tap. Christmas red and green, Halloween orange, Valentine's pink—or your team's colors for game day.</p>
              </div>
              <div className="rounded-xl bg-gold-50 border border-gold-200 p-6">
                <h3 className="font-bold text-charcoal-900 mb-2">Security & Ambiance</h3>
                <p className="text-charcoal-600 text-sm">Schedule lights to turn on at sunset automatically. A well-lit home deters intruders and welcomes you home every evening.</p>
              </div>
              <div className="rounded-xl bg-gold-50 border border-gold-200 p-6">
                <h3 className="font-bold text-charcoal-900 mb-2">Property Value Boost</h3>
                <p className="text-charcoal-600 text-sm">Permanent lighting is a sought-after feature that enhances curb appeal and adds value when it's time to sell.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            title="Why Homeowners Choose Permanent Lighting"
            subtitle="The benefits go far beyond just avoiding the ladder."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl bg-white p-6 shadow-sm border border-charcoal-100 hover:shadow-md hover:border-gold-200 transition-all"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-charcoal-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection variant="timeline" />

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            title="Lighting Applications"
            subtitle="We customize every installation to enhance your home's unique architecture."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {applications.map((app, i) => (
              <div
                key={app.title}
                className="rounded-xl bg-white p-6 shadow-sm border border-charcoal-100 flex gap-4"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                    {app.title}
                  </h3>
                  <p className="text-charcoal-600">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">Ideal For</h2>
              <ul className="space-y-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                    <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 rounded-xl bg-charcoal-900 text-white">
                <p className="text-sm text-charcoal-400 mb-2">Also considering commercial?</p>
                <Link href="/services/commercial" className="font-semibold text-gold-400 hover:text-gold-300 inline-flex items-center gap-2">
                  View Commercial Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm border border-charcoal-100">
              <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                Typical Investment
              </h3>
              <p className="text-3xl font-bold text-gold-700 mb-2">
                {service.priceRange.typical}
              </p>
              <p className="text-charcoal-600 mb-6">
                Most residential installations fall within this range. Final pricing depends on your home's size, roofline complexity, and desired features.
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-charcoal-600">
                    <CheckCircle className="h-4 w-4 text-gold-700" />
                    {feature}
                  </li>
                ))}
              </ul>
              <CTAButton href="/quote" className="w-full">
                Get Your Custom Quote
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <TeamSection
        title="Your Local Installation Experts"
        subtitle="Our factory-trained team brings years of experience to every residential project."
      />

      {testimonials.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <SectionHeading
              title="What Homeowners Say"
              subtitle="Hear from Sacramento families who made the switch to permanent lighting."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection
        faqs={faqs}
        title="Residential Lighting FAQs"
        subtitle="Common questions from homeowners considering permanent lighting."
        showViewAll
        columns={2}
      />

      <ServiceAreasSection
        title="Residential Lighting in Your Area"
        subtitle="We serve homeowners throughout the greater Sacramento region."
        serviceType="residential"
        maxLocations={8}
      />

      <CTASection
        title="Ready to Transform Your Home?"
        subtitle="Join hundreds of Sacramento homeowners who've made the switch to permanent lighting. Get your free, no-obligation quote today."
        variant="gold"
      />
    </>
  );
}
