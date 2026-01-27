import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, ClipboardList, FileText, CheckCircle } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { business } from "@/lib/data/business";
import { locations } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Contact EXT Lighting | Sacramento Permanent Lighting Experts",
  description: `Contact EXT Lighting for permanent exterior LED lighting in Sacramento. Call ${business.phone} or request a free quote online. Serving the greater Sacramento region.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 section pt-28 md:pt-36">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white mb-6">Contact Us</h1>
            <p className="text-lg text-charcoal-300 md:text-xl">
              Ready to transform your property with permanent exterior lighting?
              We&apos;re here to answer your questions and help you get started.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">Get in Touch</h2>
              <p className="text-charcoal-700 mb-8">
                Whether you&apos;re ready for a quote or just have questions, we&apos;re
                happy to help. Reach out by phone, email, or use our online
                quote form for the fastest response.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-900">Phone</h3>
                    <a
                      href={`tel:${business.phoneRaw}`}
                      className="text-lg text-gold-700 hover:text-gold-800 font-medium"
                    >
                      {business.phone}
                    </a>
                    <p className="text-sm text-charcoal-500 mt-1">
                      Call or text for fastest response
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-900">Email</h3>
                    <a
                      href={`mailto:${business.email}`}
                      className="text-lg text-gold-700 hover:text-gold-800 font-medium"
                    >
                      {business.email}
                    </a>
                    <p className="text-sm text-charcoal-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-900">Address</h3>
                    <p className="text-charcoal-700">{business.address.full}</p>
                    <p className="text-sm text-charcoal-500 mt-1">
                      By appointment only
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-900">Hours</h3>
                    <p className="text-charcoal-700">
                      Monday - Friday: {business.hours.weekdays}
                    </p>
                    <p className="text-charcoal-700">
                      Saturday: {business.hours.saturday}
                    </p>
                    <p className="text-charcoal-700">
                      Sunday: {business.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg border border-charcoal-100">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                Request a Free Quote
              </h3>
              <p className="text-charcoal-600 mb-6 text-sm">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background-alt">
        <div className="container">
          <SectionHeading
            title="Service Areas"
            subtitle="We proudly serve communities throughout the greater Sacramento region."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="rounded-lg bg-white p-4 shadow-sm border border-charcoal-100 hover:border-gold-300 hover:shadow-md transition-all group"
              >
                <span className="font-medium text-charcoal-900 group-hover:text-gold-700">
                  {location.name}
                </span>
                <ArrowRight className="inline ml-2 h-4 w-4 text-charcoal-400 group-hover:text-gold-700" />
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-charcoal-600">
            Don&apos;t see your city? If you&apos;re within 50 miles of Sacramento,
            we can likely help. <Link href="/quote" className="text-gold-700 hover:text-gold-800 font-medium">Contact us</Link> to find out.
          </p>
        </div>
      </section>

      <section className="section bg-background overflow-hidden">
        <div className="container">
          <SectionHeading
            title="Our Consultation Process"
            subtitle="From first contact to final proposal, here's what to expect when you reach out."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
                Simple, Transparent, No Pressure
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg bg-charcoal-50 p-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold-700 text-white text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">Initial Contact</h4>
                    <p className="text-sm text-charcoal-600">We&apos;ll reach out within 24 hours to discuss your project and schedule an on-site consultation at a time that works for you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-charcoal-50 p-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold-700 text-white text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">On-Site Visit</h4>
                    <p className="text-sm text-charcoal-600">One of our lighting specialists will visit your property to take measurements, discuss your vision, and answer any questions. This typically takes 30-45 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center">
              <div className="text-center p-8">
                <ClipboardList className="h-16 w-16 text-white mx-auto mb-4" />
                <p className="text-gold-100 text-sm">Professional consultation</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center lg:order-1">
              <div className="text-center p-8">
                <FileText className="h-16 w-16 text-gold-400 mx-auto mb-4" />
                <p className="text-charcoal-400 text-sm">Detailed custom proposal</p>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 rounded-lg bg-charcoal-50 p-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold-700 text-white text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">Custom Proposal</h4>
                    <p className="text-sm text-charcoal-600">Within 2-3 business days, you&apos;ll receive a detailed proposal with pricing, design recommendations, and timeline.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-charcoal-50 p-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold-700 text-white text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">No Pressure Decision</h4>
                    <p className="text-sm text-charcoal-600">We&apos;ll never pressure you to make a quick decision. Take your time, ask questions, and reach out when you&apos;re ready.</p>
                  </div>
                </div>
              </div>
              <p className="text-charcoal-600 text-sm italic">
                There&apos;s absolutely no obligation at any point. Our goal is to
                help you understand your options and make the best decision
                for your property.
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-2xl bg-gradient-to-r from-charcoal-900 to-charcoal-800 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  What You&apos;ll Get in Your Proposal
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-charcoal-300">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-400" />
                    <span>Detailed lighting design customized to your property</span>
                  </li>
                  <li className="flex items-center gap-3 text-charcoal-300">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-400" />
                    <span>Transparent, all-inclusive pricing</span>
                  </li>
                  <li className="flex items-center gap-3 text-charcoal-300">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-400" />
                    <span>Installation timeline and process overview</span>
                  </li>
                  <li className="flex items-center gap-3 text-charcoal-300">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-400" />
                    <span>Lifetime warranty details</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">24hr</p>
                  <p className="text-sm text-charcoal-400">Response Time</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">30-45</p>
                  <p className="text-sm text-charcoal-400">Min Consultation</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">2-3</p>
                  <p className="text-sm text-charcoal-400">Days to Proposal</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 text-center">
                  <p className="text-3xl font-bold text-gold-400">$0</p>
                  <p className="text-sm text-charcoal-400">Obligation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold-700 section">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gold-100 mb-8">
            Schedule your free consultation today and discover how permanent
            lighting can transform your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/quote" variant="secondary" size="lg">
              Get Your Free Quote
            </CTAButton>
            <CTAButton
              href={`tel:${business.phoneRaw}`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gold-700"
            >
              Call {business.phone}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
