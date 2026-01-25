/**
 * Service definitions for EXT Lighting
 * Two main service categories: Residential and Commercial
 */

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  features: string[];
  priceRange: {
    min: number;
    max: number;
    typical: string;
  };
  applications: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "residential",
    slug: "residential",
    name: "Residential Permanent Lighting",
    shortName: "Residential",
    description: "Transform your home with permanent exterior LED lighting that stays up year-round. Control colors and patterns from your smartphone for any occasion—holidays, parties, or everyday elegance.",
    shortDescription: "Permanent LED lighting for homes with app control",
    features: [
      "Year-round installation",
      "App-controlled colors and patterns",
      "Roofline, trim, and accent lighting",
      "Landscape lighting integration",
      "Lifetime warranty",
      "Professional installation",
    ],
    priceRange: {
      min: 3000,
      max: 6000,
      typical: "$3,000 - $6,000",
    },
    applications: [
      "Roofline lighting",
      "Soffit and trim",
      "Accent lighting",
      "Landscape integration",
      "Architectural highlights",
    ],
    icon: "Home",
  },
  {
    id: "commercial",
    slug: "commercial",
    name: "Commercial Permanent Lighting",
    shortName: "Commercial",
    description: "Enhance your business visibility and brand presence with professional permanent exterior lighting. Reduce maintenance costs while creating a welcoming, safe environment for customers and employees.",
    shortDescription: "Professional LED lighting for businesses",
    features: [
      "Year-round brand visibility",
      "Reduced maintenance costs",
      "Enhanced safety and security",
      "Custom color programming",
      "Multi-zone control",
      "Commercial-grade durability",
    ],
    priceRange: {
      min: 5000,
      max: 25000,
      typical: "Varies by project",
    },
    applications: [
      "Building outline",
      "Signage accent",
      "Parking area lighting",
      "Storefront enhancement",
      "Restaurant ambiance",
    ],
    icon: "Building2",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
