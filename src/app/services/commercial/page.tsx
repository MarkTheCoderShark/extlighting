import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Building2, TrendingUp, Shield, Users, Clock, ArrowRight, DollarSign } from "lucide-react";
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
  title: "Commercial Permanent Lighting Sacramento | Business LED Installation",
  description:
    "Enhance your Sacramento business with permanent exterior LED lighting. Reduce maintenance costs, increase visibility, and create a welcoming environment. Free commercial consultations.",
};

const propertyTypes = [
  {
    title: "Retail Storefronts",
    description: "Stand out on the street and draw customers in with eye-catching lighting that reinforces your brand identity.",
    icon: Building2,
  },
  {
    title: "Restaurants & Hospitality",
    description: "Create the perfect ambiance for outdoor dining and make your establishment a destination after dark.",
    icon: Users,
  },
  {
    title: "Office Buildings",
    description: "Professional lighting that enhances safety, improves visibility, and projects a modern, successful image.",
    icon: Building2,
  },
  {
    title: "HOA Common Areas",
    description: "Unified lighting solutions for community entrances, clubhouses, and shared spaces that residents love.",
    icon: Users,
  },
  {
    title: "Industrial & Warehouses",
    description: "Functional security lighting that also improves the appearance of industrial properties.",
    icon: Shield,
  },
  {
    title: "Multi-Family Properties",
    description: "Enhance apartment and condo buildings with lighting that improves resident satisfaction and property value.",
    icon: TrendingUp,
  },
];

const benefits = [
  {
    title: "Reduced Maintenance",
    description: "No more annual lighting contractor visits. Our permanent systems last 15-20 years with minimal upkeep.",
    icon: Clock,
  },
  {
    title: "Brand Visibility",
    description: "Match your brand colors, highlight signage, and create a memorable visual presence after dark.",
    icon: Building2,
  },
  {
    title: "Enhanced Security",
    description: "Well-lit properties deter crime and create safer environments for customers, employees, and visitors.",
    icon: Shield,
  },
  {
    title: "Customer Experience",
    description: "Beautiful lighting creates a welcoming atmosphere that draws people in and keeps them coming back.",
    icon: Users,
  },
  {
    title: "ROI & Value",
    description: "Permanent lighting is an investment that pays off through reduced costs and increased property value.",
    icon: TrendingUp,
  },
];

const roiItems = [
  { label: "Annual Temp Lighting Install", cost: "$2,500 - $5,000", type: "expense" },
  { label: "Storage & Replacements", cost: "$500 - $1,500", type: "expense" },
  { label: "Staff Coordination Time", cost: "10-20 hours/year", type: "expense" },
  { label: "Typical ROI Timeline", cost: "2-3 Years", type: "positive" },
];

export default function CommercialPage() {
  const service = getServiceBySlug("commercial");
  const testimonials = getTestimonials("commercial").slice(0, 2);
  const faqs = getFAQItems().filter(f => 
    ["pricing", "installation", "warranty"].includes(f.category)
  ).slice(0, 6);

  if (!service) return null;

  return (
    <>
      <section className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 section pt-28 md:pt-36">
        <div className="container">
          <BreadcrumbNav
            items={[
              { label: "Services", href: "/services" },
              { label: "Commercial" },
            ]}
            className="mb-8 text-charcoal-400"
          />
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Commercial Permanent Exterior Lighting
            </h1>
            <p className="text-lg text-charcoal-300 md:text-xl mb-6">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/quote" size="lg">
                Request Consultation
              </CTAButton>
              <CTAButton href="/gallery" variant="outline" size="lg">
                View Commercial Projects
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <StatsSection variant="dark" />

      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="mb-6">Elevate Your Business Presence</h2>
              <div className="prose prose-lg text-charcoal-700">
                <p>
                  In the competitive Sacramento business landscape, first impressions matter. Your building's exterior is often the first thing customers, clients, and partners see—and what they see after dark can make or break their perception of your business.
                </p>
                <p>
                  Commercial permanent lighting transforms how your property presents itself. Gone are the days of dark, uninviting storefronts or the hassle of coordinating annual holiday lighting installations. With our commercial-grade LED systems, your building becomes a beacon of professionalism every evening.
                </p>
                <p>
                  But it's not just about aesthetics. Permanent lighting delivers tangible business benefits: reduced maintenance costs, enhanced security, improved employee safety, and a visual presence that reinforces your brand around the clock.
                </p>
              </div>
              <div className="mt-8 p-6 rounded-xl bg-charcoal-900 text-white">
                <p className="text-sm text-charcoal-400 mb-2">Need residential service?</p>
                <Link href="/services/residential" className="font-semibold text-gold-400 hover:text-gold-300 inline-flex items-center gap-2">
                  View Residential Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-charcoal-50 p-8 border border-charcoal-200">
              <h3 className="font-bold text-charcoal-900 mb-6 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gold-700" />
                The ROI of Permanent Lighting
              </h3>
              <div className="space-y-4">
                {roiItems.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-charcoal-200 last:border-0">
                    <span className="text-charcoal-700">{item.label}</span>
                    <span className={item.type === "positive" ? "font-bold text-gold-700" : "text-charcoal-900 font-medium"}>
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-charcoal-600">
                Most commercial clients achieve full ROI within 2-3 years through eliminated recurring costs alone—not counting the value of year-round visibility and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            title="Benefits for Your Business"
            subtitle="Permanent lighting delivers measurable value beyond just looking good."
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

      <ProcessSection 
        title="Our Commercial Process"
        subtitle="From initial consultation to final installation, we handle everything professionally."
      />

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            title="Property Types We Serve"
            subtitle="Our commercial team has experience with properties of all types and sizes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map((type) => (
              <div
                key={type.title}
                className="group rounded-xl bg-white p-6 shadow-sm border border-charcoal-100 hover:shadow-md hover:border-gold-200 transition-all"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 text-gold-700 group-hover:bg-gold-700 group-hover:text-white transition-colors">
                  <type.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-charcoal-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-sm border border-charcoal-100">
              <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                Commercial Investment Range
              </h3>
              <p className="text-3xl font-bold text-gold-700 mb-2">
                {service.priceRange.typical}
              </p>
              <p className="text-charcoal-600 mb-6">
                Commercial pricing is customized based on building size, architectural complexity, and project requirements. We provide detailed proposals after an on-site consultation.
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
                Request Commercial Consultation
              </CTAButton>
            </div>
            <div>
              <h2 className="mb-6">Why Sacramento Businesses Choose Us</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-gold-700" />
                  <div>
                    <h4 className="font-bold text-charcoal-900">Local Commercial Expertise</h4>
                    <p className="text-charcoal-600 text-sm">We understand Sacramento's commercial landscape, zoning requirements, and business district aesthetics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-gold-700" />
                  <div>
                    <h4 className="font-bold text-charcoal-900">Minimal Business Disruption</h4>
                    <p className="text-charcoal-600 text-sm">We schedule installations around your business hours and complete most projects in 1-2 days.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-gold-700" />
                  <div>
                    <h4 className="font-bold text-charcoal-900">Comprehensive Warranty</h4>
                    <p className="text-charcoal-600 text-sm">Commercial installations include our full warranty coverage with priority service response times.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-gold-700" />
                  <div>
                    <h4 className="font-bold text-charcoal-900">Multi-Property Discounts</h4>
                    <p className="text-charcoal-600 text-sm">Managing multiple locations? We offer volume pricing for businesses with several properties.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection 
        title="Your Commercial Installation Team"
        subtitle="Experienced professionals specializing in commercial and multi-property installations."
      />

      {testimonials.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <SectionHeading
              title="What Business Owners Say"
              subtitle="Hear from Sacramento businesses that have invested in permanent lighting."
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
        title="Commercial Lighting FAQs"
        subtitle="Common questions from business owners considering permanent lighting."
        showViewAll
        columns={2}
      />

      <ServiceAreasSection 
        title="Commercial Lighting in Your Area"
        subtitle="We serve businesses throughout the greater Sacramento region."
        serviceType="commercial"
        maxLocations={8}
      />

      <CTASection 
        title="Ready to Discuss Your Project?"
        subtitle="Our commercial team is ready to assess your property and provide a customized proposal. Schedule your free consultation today."
        variant="gold"
        primaryCTA={{ text: "Request Commercial Consultation", href: "/quote" }}
      />
    </>
  );
}
