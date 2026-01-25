"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading, HighlightedText } from "@/components/section-heading";

const themes = [
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

interface ThemeShowcaseProps {
  className?: string;
}

export function ThemeShowcase({ className }: ThemeShowcaseProps) {
  const [activeTheme, setActiveTheme] = useState("warm");

  return (
    <section className={`section bg-charcoal-900 ${className || ""}`}>
      <div className="container">
        <SectionHeading
          eyebrow="One System, Endless Possibilities"
          title={<>See the <HighlightedText>Magic</HighlightedText> in Action</>}
          subtitle="The same permanent lights transform for any occasion—holidays, parties, or everyday elegance. Just tap your phone."
          titleClassName="text-white"
          subtitleClassName="text-charcoal-300"
        />

        <div className="mt-12">
          {/* Image Display */}
          <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            {themes.map((theme) => (
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
          </div>

          {/* Theme Buttons */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {themes.map((theme, index) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`
                    relative py-4 px-4 rounded-xl
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
                      className="absolute -top-10 left-1/2 -translate-x-1/2 text-gold-400 text-4xl flex items-center gap-2 whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-caveat), Caveat, cursive' }}
                    >
                      Try me!
                      <svg
                        className="w-6 h-6 animate-bounce -rotate-45"
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
