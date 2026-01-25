"use client";

import { useState } from "react";
import Image from "next/image";
import { CTAButton } from "@/components/cta-button";
import { TrustBadges } from "@/components/trust-badge";

const heroThemes = [
  {
    id: "warm",
    label: "Warm White",
    image: "/images/hero-home.png",
  },
  {
    id: "christmas",
    label: "Christmas",
    image: "/images/gallery/hero christmas.png",
  },
  {
    id: "halloween",
    label: "Halloween",
    image: "/images/gallery/herohalloween.png",
  },
  {
    id: "july4",
    label: "4th of July",
    image: "/images/gallery/herofourthofjuly.png",
  },
];

export function HeroSwitcher() {
  const [activeTheme, setActiveTheme] = useState("warm");

  const currentTheme = heroThemes.find((t) => t.id === activeTheme) || heroThemes[0];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Images - all preloaded, opacity controlled */}
      {heroThemes.map((theme) => (
        <div
          key={theme.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            activeTheme === theme.id ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={theme.image}
            alt={`Beautiful home with ${theme.label} permanent LED exterior lighting`}
            fill
            className="object-cover"
            priority={theme.id === "warm"}
            quality={90}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 font-bold tracking-wider uppercase text-sm mb-4 drop-shadow-lg">
            Sacramento&apos;s #1 Rated
          </p>
          <h1 className="text-white mb-6 leading-[1.1] drop-shadow-xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)]">
            Permanent Outdoor Lights
          </h1>
          <p className="text-lg text-white/90 md:text-xl mb-8 leading-relaxed drop-shadow-md [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">
            Professional LED lighting installation for Sacramento, Roseville &amp; Rocklin homes.
            App-controlled permanent house lights that stay up year-round—no ladders, no hassle,
            just beautiful lighting at the touch of a button.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <CTAButton href="/quote" size="lg">
              Get Your Free Quote
            </CTAButton>
            <CTAButton
              href="/gallery"
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white"
            >
              View Our Work
            </CTAButton>
          </div>
          <TrustBadges
            badges={["warranty", "reviews", "licensed"]}
            variant="inline"
            className="text-white/90"
          />

          {/* Theme Switcher */}
          <div className="mt-12 w-full max-w-5xl mx-auto px-4">
            {/* Theme Buttons - Full width grid with gaps */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroThemes.map((theme, index) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`
                    relative py-6 px-4 rounded-xl
                    transition-all duration-300
                    border-2
                    ${
                      activeTheme === theme.id
                        ? "bg-gold-500 text-white border-gold-400 shadow-lg shadow-gold-500/30 scale-105"
                        : "bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm border-white/30 hover:border-white/50"
                    }
                  `}
                >
                  {/* Try Me label on first box */}
                  {index === 0 && (
                    <span
                      className="absolute -top-7 left-3 text-gold-400 text-2xl flex items-center gap-1"
                      style={{ fontFamily: 'var(--font-caveat), Caveat, cursive' }}
                    >
                      Try me!
                      <svg
                        className="w-5 h-5 animate-bounce rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </span>
                  )}
                  <span
                    style={{ fontFamily: 'var(--font-caveat), Caveat, cursive' }}
                    className="text-2xl"
                  >
                    {theme.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
