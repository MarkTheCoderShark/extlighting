"use client";

import { motion } from "motion/react";
import { TestimonialsColumn, TestimonialItem } from "@/components/blocks/testimonials-columns-1";
import { SectionHeading, HighlightedText } from "@/components/section-heading";

const testimonials: TestimonialItem[] = [
  {
    text: "EXT Lighting transformed our home completely. We used to spend hours every holiday putting up and taking down lights. Now we just pull out our phone and pick a color scheme. It's been a game-changer for our family.",
    name: "Jennifer M.",
    role: "Roseville, CA",
  },
  {
    text: "As a restaurant owner, first impressions matter. The permanent lighting on our building has increased our visibility and created a welcoming atmosphere that customers love. Best investment we've made in years.",
    name: "Marco R.",
    role: "Sacramento, CA",
  },
  {
    text: "I was skeptical about permanent lighting until I saw my neighbor's installation. Now I can't imagine our home without it. The security aspect alone is worth it, and my wife loves changing colors for every season.",
    name: "David K.",
    role: "Folsom, CA",
  },
  {
    text: "The team at EXT was professional from start to finish. They helped us design a lighting plan that highlighted our home's architecture. Every night feels like coming home to something special.",
    name: "Sarah L.",
    role: "El Dorado Hills, CA",
  },
  {
    text: "Our HOA was initially hesitant about permanent lighting, but after seeing the tasteful installation and how it enhanced property values in our neighborhood, they now recommend EXT to all homeowners.",
    name: "Robert T.",
    role: "Rocklin, CA",
  },
  {
    text: "We manage several commercial properties in the Sacramento area. EXT has handled lighting for three of our buildings now. Their consistency, professionalism, and quality are unmatched.",
    name: "Amanda C.",
    role: "Rancho Cordova, CA",
  },
  {
    text: "The installation was quick and clean. The crew was respectful of our property and explained everything clearly. We've already recommended EXT to several friends.",
    name: "Michael P.",
    role: "Granite Bay, CA",
  },
  {
    text: "Having permanent lighting has made our home the centerpiece of the neighborhood during the holidays. The app control is so easy even my kids can change the colors.",
    name: "Lisa W.",
    role: "Lincoln, CA",
  },
  {
    text: "We were tired of dealing with burnt out bulbs and tangled wires every year. This solution is elegant, efficient, and actually saves us money in the long run.",
    name: "James H.",
    role: "Auburn, CA",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

interface TestimonialsSectionProps {
  className?: string;
}

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <section className={`section bg-background relative overflow-hidden ${className || ""}`}>
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Testimonials"
            title={<>What Our Customers <HighlightedText>Say</HighlightedText></>}
            subtitle="Don't just take our word for it—hear from homeowners and businesses across Sacramento."
          />
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
