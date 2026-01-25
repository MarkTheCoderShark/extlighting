export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  certifications?: string[];
  yearsExperience: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: "mike-rodriguez",
    name: "Mike Rodriguez",
    role: "Lead Installer",
    bio: "With over 12 years in exterior lighting, Mike leads our installation teams with precision and care. He's completed over 500 installations across the Sacramento region.",
    yearsExperience: 12,
    certifications: ["Certified Low Voltage Technician", "OSHA Safety Certified"],
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Design Consultant",
    bio: "Sarah brings an architect's eye to every project. She works with homeowners to create custom lighting designs that enhance each property's unique character.",
    yearsExperience: 8,
    certifications: ["Lighting Design Certification", "Color Theory Specialist"],
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Senior Technician",
    bio: "James specializes in commercial installations and complex residential projects. His attention to detail ensures every installation meets our exacting standards.",
    yearsExperience: 10,
    certifications: ["Commercial Lighting Specialist", "Electrical Safety Certified"],
  },
];

export const companyStats = {
  installationsCompleted: 1200,
  yearsInBusiness: 10,
  fiveStarReviews: 450,
  citiesServed: 12,
  warrantyYears: "Lifetime",
  averageInstallTime: "1 Day",
};
