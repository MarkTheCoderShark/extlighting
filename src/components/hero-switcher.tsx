import Image from "next/image";
import { CTAButton } from "@/components/cta-button";
import { TrustBadges } from "@/components/trust-badge";

export function HeroSwitcher() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-home.png"
          alt="Beautiful home with warm white permanent LED exterior lighting"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

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
        </div>
      </div>
    </section>
  );
}
