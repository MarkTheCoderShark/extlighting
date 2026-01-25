import Image from "next/image";
import {
  Sparkles,
  Smartphone,
  Shield,
  Clock,
  ArrowRight,
  Sun,
  Moon,
  Palette,
  Zap,
  CheckCircle,
  Home,
  Users,
  Camera,
} from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading, HighlightedText } from "@/components/section-heading";
import { TrustBadges } from "@/components/trust-badge";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { LocationGrid } from "@/components/location-card";
import { HeroSwitcher } from "@/components/hero-switcher";
import { ThemeShowcase } from "@/components/theme-showcase";
import { CTASection } from "@/components/cta-section";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { getFeaturedTestimonials } from "@/lib/data/testimonials";
import { getFeaturedGalleryImages } from "@/lib/data/gallery";
import { business } from "@/lib/data/business";

const howItWorks = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "We visit your property to understand your vision, take measurements, and create a custom lighting plan tailored to your home or business.",
    icon: Sparkles,
  },
  {
    step: 2,
    title: "Professional Design",
    description:
      "Our designers create a detailed lighting layout that enhances your property's architecture while meeting your aesthetic and functional goals.",
    icon: Palette,
  },
  {
    step: 3,
    title: "Expert Installation",
    description:
      "Our certified technicians install your system in just one day, with minimal disruption and maximum attention to detail.",
    icon: Zap,
  },
  {
    step: 4,
    title: "Enjoy Forever",
    description:
      "Control your lights from anywhere via our easy app. Change colors for any occasion—holidays, parties, or everyday elegance.",
    icon: Smartphone,
  },
];

const benefits = [
  {
    title: "Year-Round Beauty",
    description:
      "No more climbing ladders or storing tangled lights. Your home looks stunning every day of the year with just a tap on your phone.",
    icon: Sun,
  },
  {
    title: "App-Controlled",
    description:
      "Change colors, set schedules, and create custom patterns from anywhere. Works with Alexa and Google Home for voice control.",
    icon: Smartphone,
  },
  {
    title: "Lifetime Warranty",
    description:
      "Our comprehensive warranty covers parts and labor for as long as you own your home. If something fails, we fix it free.",
    icon: Shield,
  },
  {
    title: "Enhanced Security",
    description:
      "Well-lit homes deter intruders. Schedule lights to turn on at sunset automatically, even when you're away on vacation.",
    icon: Moon,
  },
  {
    title: "Increased Property Value",
    description:
      "Permanent lighting is a sought-after feature that adds curb appeal and value. It's an investment that pays dividends.",
    icon: Sparkles,
  },
  {
    title: "Energy Efficient",
    description:
      "Our LED technology uses a fraction of the energy of traditional lighting, keeping your electricity bills low while looking amazing.",
    icon: Clock,
  },
];

export default function HomePage() {
  const featuredTestimonials = getFeaturedTestimonials(3);
  const featuredLocations = locations.slice(0, 6);
  const featuredGalleryImages = getFeaturedGalleryImages(6);

  return (
    <>
      <HeroSwitcher />

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Simple Process"
            title={<>How It <HighlightedText>Works</HighlightedText></>}
            subtitle="From consultation to installation, we make the process simple and stress-free."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl bg-white p-6 shadow-sm border border-charcoal-100"
              >
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gold-700 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div className="mt-4 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ThemeShowcase />

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title={<>Our <HighlightedText>Services</HighlightedText></>}
            subtitle="Professional permanent lighting solutions for homes and businesses throughout the Sacramento region."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/services" variant="outline">
              Learn More About Our Services
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="The EXT Difference"
            title={<>Why Choose <HighlightedText>EXT Lighting</HighlightedText>?</>}
            subtitle="We're not just lighting experts—we're your neighbors, committed to making Sacramento properties shine."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm border border-charcoal-100"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/images/gallery-parallax.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">
              Our Portfolio
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)]">
              See the <HighlightedText className="text-white">Transformation</HighlightedText>
            </h2>
            <p className="text-lg text-white/80 md:text-xl max-w-2xl mx-auto">
              Real homes and businesses in the Sacramento area, transformed with
              permanent exterior lighting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGalleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-charcoal-800/50 backdrop-blur-sm border border-white/10 hover:border-gold-400/50 transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton href="/gallery" variant="outline" className="border-white/50 text-white hover:bg-white/10 hover:border-white">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4 inline" />
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title={<>What Our Customers <HighlightedText>Say</HighlightedText></>}
            subtitle="Don't just take our word for it—hear from homeowners and businesses across Sacramento."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Service Areas"
            title={<>Serving the Greater <HighlightedText>Sacramento</HighlightedText> Area</>}
            subtitle="From downtown Sacramento to the Sierra foothills, we bring permanent lighting excellence to your neighborhood."
          />
          <div className="mt-12">
            <LocationGrid locations={featuredLocations} showNeighborhoods />
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/locations" variant="outline">
              View All Service Areas
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section bg-background overflow-hidden">
        <div className="container">
          <SectionHeading
            eyebrow="Why Permanent Lighting"
            title={<>The <HighlightedText>Smart Choice</HighlightedText> for Permanent Exterior Lighting</>}
            subtitle="Transform how you experience your home—every evening, every season."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                End the Annual Ladder Struggle
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                For years, Sacramento homeowners faced the same frustrating choice every holiday season: spend hours on a ladder hanging temporary lights, or pay someone else to do it year after year. Either way, the lights came down in January, leaving homes dark and uninspiring.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Permanent exterior lighting changes everything. Our professionally installed LED systems stay up year-round, ready to illuminate your home for any occasion at the touch of a button.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/residential-6.png"
                alt="Two-story home with warm white eave and roofline lighting at dusk"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden lg:order-1">
              <Image
                src="/images/app-control.png"
                alt="Hand holding smartphone with lighting control app in front of illuminated home"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Complete Control at Your Fingertips
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Imagine driving up to your property every evening and seeing it beautifully lit, welcoming you home. Want warm white for an elegant dinner party? Done. Red and green for Christmas? Easy. Team colors for game day? You got it.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gold-50 p-4 border border-gold-200">
                  <p className="font-semibold text-charcoal-900 text-sm">Holiday Ready</p>
                  <p className="text-xs text-charcoal-600">Any color, any occasion</p>
                </div>
                <div className="rounded-lg bg-gold-50 p-4 border border-gold-200">
                  <p className="font-semibold text-charcoal-900 text-sm">Voice Control</p>
                  <p className="text-xs text-charcoal-600">Alexa & Google Home</p>
                </div>
                <div className="rounded-lg bg-gold-50 p-4 border border-gold-200">
                  <p className="font-semibold text-charcoal-900 text-sm">Scheduling</p>
                  <p className="text-xs text-charcoal-600">Sunset automation</p>
                </div>
                <div className="rounded-lg bg-gold-50 p-4 border border-gold-200">
                  <p className="font-semibold text-charcoal-900 text-sm">Remote Access</p>
                  <p className="text-xs text-charcoal-600">Control from anywhere</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Why Sacramento Chooses EXT Lighting
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                We&apos;re not a national franchise or distant corporation. We&apos;re your neighbors, serving the Sacramento region with the same care and attention we&apos;d give our own homes—from the Victorian homes of Midtown to the modern developments of West Roseville.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal-900">Local Expertise</span>
                    <p className="text-sm text-charcoal-600">We understand Sacramento&apos;s climate, styles, and HOA requirements</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal-900">Premium Quality</span>
                    <p className="text-sm text-charcoal-600">Commercial-grade LED fixtures rated for 50,000+ hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal-900">Lifetime Warranty</span>
                    <p className="text-sm text-charcoal-600">Comprehensive coverage for as long as you own your home</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-700 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal-900">One-Day Installation</span>
                    <p className="text-sm text-charcoal-600">Most projects completed in a single day</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/residential-10.png"
                alt="Mid-century modern home with cool white roofline LED lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 rounded-2xl bg-gradient-to-r from-charcoal-900 to-charcoal-800 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  An Investment in Your Property
                </h3>
                <p className="text-charcoal-300 leading-relaxed mb-4">
                  Permanent lighting isn&apos;t just an expense—it&apos;s an investment that pays dividends. Enhanced curb appeal, improved security, and the elimination of annual lighting costs add up over time.
                </p>
                <p className="text-charcoal-300 leading-relaxed">
                  Many customers tell us their neighbors started asking about permanent lighting within weeks of their installation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">$0</p>
                  <p className="text-sm text-charcoal-400">Annual maintenance</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">15+</p>
                  <p className="text-sm text-charcoal-400">Year lifespan</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">100%</p>
                  <p className="text-sm text-charcoal-400">Warranty coverage</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">365</p>
                  <p className="text-sm text-charcoal-400">Days of beauty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
