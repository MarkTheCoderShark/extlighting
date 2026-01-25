/**
 * Single source of truth for business information (NAP - Name, Address, Phone)
 * This data is used across all pages for consistency and local SEO
 */

export const business = {
  name: "EXT Lighting",
  legalName: "EXT Lighting LLC",
  phone: "(916) 555-0123", // PLACEHOLDER - Update before launch
  phoneRaw: "+19165550123",
  email: "info@extlighting.com",
  leadEmail: "leads@extlighting.com",
  address: {
    street: "123 Main Street", // PLACEHOLDER
    city: "Sacramento",
    state: "CA",
    zip: "95814",
    country: "US",
    full: "123 Main Street, Sacramento, CA 95814",
  },
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
    formatted: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
  },
  social: {
    facebook: "https://facebook.com/extlighting",
    instagram: "https://instagram.com/extlighting",
  },
  coordinates: {
    lat: 38.5816,
    lng: -121.4944,
  },
  serviceArea: {
    primary: "Greater Sacramento",
    counties: ["Sacramento County", "Placer County", "El Dorado County", "Nevada County"],
    radius: "50 miles",
  },
  warranty: {
    product: "Lifetime",
    labor: "Lifetime",
    description: "Our comprehensive lifetime warranty covers both parts and labor.",
  },
} as const;

export type Business = typeof business;
