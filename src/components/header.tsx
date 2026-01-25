"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/data/business";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-charcoal-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={cn(
              "text-xl font-bold md:text-2xl transition-colors duration-300",
              scrolled ? "text-charcoal-900" : "text-white"
            )}
          >
            EXT<span className="text-gold-400">Lighting</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-charcoal-700 hover:bg-charcoal-100 hover:text-charcoal-900"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.phoneRaw}`}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled
                ? "text-charcoal-700 hover:text-gold-700"
                : "text-white/90 hover:text-white"
            )}
          >
            <Phone className="h-4 w-4" />
            <span>{business.phone}</span>
          </a>
          <Button asChild className="btn-gold">
            <Link href="/quote">Get Free Quote</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700 text-white"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md transition-colors",
              scrolled ? "text-charcoal-700" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-charcoal-200 bg-background px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-3 text-base font-medium text-charcoal-700 hover:bg-charcoal-100 hover:text-charcoal-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4">
            <Button asChild className="btn-gold w-full">
              <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
