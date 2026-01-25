import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "EXT Lighting transformed our home completely. We used to spend hours every holiday putting up and taking down lights. Now we just pull out our phone and pick a color scheme. It's been a game-changer for our family.",
    author: "Jennifer M.",
    location: "Roseville, CA",
    serviceType: "residential",
  },
  {
    id: "2",
    quote:
      "As a restaurant owner, first impressions matter. The permanent lighting on our building has increased our visibility and created a welcoming atmosphere that customers love. Best investment we've made in years.",
    author: "Marco R.",
    location: "Sacramento, CA",
    serviceType: "commercial",
  },
  {
    id: "3",
    quote:
      "I was skeptical about permanent lighting until I saw my neighbor's installation. Now I can't imagine our home without it. The security aspect alone is worth it, and my wife loves changing colors for every season.",
    author: "David K.",
    location: "Folsom, CA",
    serviceType: "residential",
  },
  {
    id: "4",
    quote:
      "The team at EXT was professional from start to finish. They helped us design a lighting plan that highlighted our home's architecture. Every night feels like coming home to something special.",
    author: "Sarah L.",
    location: "El Dorado Hills, CA",
    serviceType: "residential",
  },
  {
    id: "5",
    quote:
      "Our HOA was initially hesitant about permanent lighting, but after seeing the tasteful installation and how it enhanced property values in our neighborhood, they now recommend EXT to all homeowners.",
    author: "Robert T.",
    location: "Rocklin, CA",
    serviceType: "residential",
  },
  {
    id: "6",
    quote:
      "We manage several commercial properties in the Sacramento area. EXT has handled lighting for three of our buildings now. Their consistency, professionalism, and quality are unmatched.",
    author: "Amanda C.",
    location: "Rancho Cordova, CA",
    serviceType: "commercial",
  },
];

export const getTestimonials = (serviceType?: "residential" | "commercial") => {
  if (!serviceType) return testimonials;
  return testimonials.filter((t) => t.serviceType === serviceType);
};

export const getFeaturedTestimonials = (count: number = 3) => {
  return testimonials.slice(0, count);
};
