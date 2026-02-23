import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { business } from "@/lib/data/business";
import { locations } from "@/lib/data/locations";

const footerNavigation = {
  services: [
    { name: "Residential Lighting", href: "/services/residential" },
    { name: "Commercial Lighting", href: "/services/commercial" },
    { name: "All Services", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  locations: locations.slice(0, 6).map((loc) => ({
    name: loc.name,
    href: `/locations/${loc.slug}`,
  })),
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-200 bg-charcoal-50">
      <div className="container section">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-charcoal-900">
                EXT<span className="text-gold-700">Lighting</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-charcoal-600">
              Sacramento&apos;s premier permanent exterior LED lighting
              installation company. Transform your property with year-round
              elegance.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center gap-3 text-sm text-charcoal-700 hover:text-gold-700"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{business.phone}</span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 text-sm text-charcoal-700 hover:text-gold-700"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>{business.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-charcoal-700">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{business.address.full}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-charcoal-700">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{business.hours.formatted}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-200 text-charcoal-700 transition-colors hover:bg-gold-700 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-200 text-charcoal-700 transition-colors hover:bg-gold-700 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-900">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal-600 hover:text-gold-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-charcoal-900">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal-600 hover:text-gold-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-900">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.locations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal-600 hover:text-gold-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-sm font-medium text-gold-700 hover:text-gold-800"
                >
                  View All Locations &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-900">
              Get Started
            </h3>
            <p className="mt-4 text-sm text-charcoal-600">
              Ready to transform your property with permanent exterior lighting?
              Get a free, no-obligation quote today.
            </p>
            <Link
              href="/quote"
              className="btn-gold mt-4 inline-block text-center"
            >
              Get Free Quote
            </Link>

            {/* Trust Signals */}
            <div className="mt-8 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">
                Our Promise
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-800">
                  Lifetime Warranty
                </span>
                <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-800">
                  Licensed & Insured
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-charcoal-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-charcoal-500">
              &copy; {currentYear} {business.name}. All rights reserved.
            </p>
            <p className="text-sm text-charcoal-500">
              Serving {business.serviceArea.primary} and surrounding areas
            </p>
            <p className="text-sm text-charcoal-500">
              Designed by{" "}
              <a
                href="https://verlua.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-700 transition-colors"
              >
                Verlua
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
