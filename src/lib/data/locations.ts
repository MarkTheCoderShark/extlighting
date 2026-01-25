export interface Location {
  slug: string;
  name: string;
  county: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  population?: number;
  neighborhoods: string[];
  nearbyAreas: string[];
  neighboringCities: string[];
  description: string;
  residentialFocus: string[];
  commercialFocus: string[];
}

export const locations: Location[] = [
  {
    slug: "sacramento",
    name: "Sacramento",
    county: "Sacramento County",
    coordinates: { lat: 38.5816, lng: -121.4944 },
    population: 525000,
    neighborhoods: [
      "Downtown Sacramento",
      "Midtown",
      "East Sacramento",
      "Land Park",
      "Natomas",
      "Pocket/Greenhaven",
      "Arden-Arcade",
      "Tahoe Park",
      "Curtis Park",
      "Oak Park",
      "College Glen",
    ],
    nearbyAreas: ["West Sacramento", "Elk Grove"],
    neighboringCities: ["rancho-cordova", "citrus-heights", "folsom"],
    description: "As California's capital city, Sacramento blends historic charm with modern growth. From the tree-lined streets of East Sacramento to the contemporary developments in Natomas, Sacramento homeowners take pride in their properties—and permanent exterior lighting is becoming the defining feature of the region's most stunning homes.",
    residentialFocus: [
      "Victorian and Craftsman homes in Midtown/East Sac",
      "Ranch-style homes in established neighborhoods",
      "New construction in Natomas",
      "Tree canopy considerations",
    ],
    commercialFocus: [
      "Downtown business district",
      "Restaurant scene (R Street, Midtown)",
      "Retail along Arden Way",
      "Office parks",
    ],
  },
  {
    slug: "rancho-cordova",
    name: "Rancho Cordova",
    county: "Sacramento County",
    coordinates: { lat: 38.5891, lng: -121.3027 },
    population: 80000,
    neighborhoods: [
      "Anatolia",
      "Sunridge",
      "Kavala Ranch",
      "Villages of Zinfandel",
      "Cordova Meadows",
      "Gold River",
      "Mather Field",
    ],
    nearbyAreas: ["Gold River", "Mather"],
    neighboringCities: ["sacramento", "folsom", "citrus-heights"],
    description: "Rancho Cordova has emerged as one of the Sacramento region's most dynamic cities, with family-friendly master-planned communities like Anatolia and Sunridge attracting homeowners who value modern amenities and community pride.",
    residentialFocus: [
      "Newer construction (2000s-2020s)",
      "Master-planned community aesthetics",
      "HOA compliance",
      "Family-oriented neighborhoods",
    ],
    commercialFocus: [
      "Highway 50 business corridor",
      "Retail centers",
      "Corporate offices",
    ],
  },
  {
    slug: "citrus-heights",
    name: "Citrus Heights",
    county: "Sacramento County",
    coordinates: { lat: 38.7071, lng: -121.2811 },
    population: 87000,
    neighborhoods: [
      "Sunrise Mall area",
      "Greenback Lane corridor",
      "Stock Ranch",
      "Rusch Park area",
      "Sylvan Old Auburn Road",
      "Antelope",
    ],
    nearbyAreas: ["Antelope", "Carmichael"],
    neighboringCities: ["sacramento", "orangevale", "fair-oaks", "roseville"],
    description: "Citrus Heights is a community that takes pride in its neighborhoods. Many homes were built in the 1960s through 1980s, featuring ranch homes with clean rooflines and classic California designs—ideal candidates for permanent lighting.",
    residentialFocus: [
      "Ranch and split-level homes",
      "Mature landscaping integration",
      "Security lighting for established neighborhoods",
      "Updating older homes with modern amenities",
    ],
    commercialFocus: [
      "Sunrise Mall area retail",
      "Greenback Lane businesses",
      "Restaurant and service businesses",
    ],
  },
  {
    slug: "orangevale",
    name: "Orangevale",
    county: "Sacramento County",
    coordinates: { lat: 38.6785, lng: -121.2258 },
    population: 36000,
    neighborhoods: [
      "Main Avenue corridor",
      "Hazel Avenue area",
      "Orangevale Village",
      "Oak Avenue area",
      "Twin Lakes area",
    ],
    nearbyAreas: ["Granite Bay"],
    neighboringCities: ["fair-oaks", "citrus-heights", "folsom"],
    description: "Orangevale stands apart with its unique blend of rural charm and suburban convenience. Here, you'll find larger lots, equestrian properties, and a community that values space and privacy.",
    residentialFocus: [
      "Large lot properties",
      "Multiple structures (barns, shops)",
      "Ranch and country-style homes",
      "Extensive rooflines",
    ],
    commercialFocus: [
      "Local businesses on Main Avenue",
      "Agricultural businesses",
      "Small commercial properties",
    ],
  },
  {
    slug: "fair-oaks",
    name: "Fair Oaks",
    county: "Sacramento County",
    coordinates: { lat: 38.6446, lng: -121.2722 },
    population: 32000,
    neighborhoods: [
      "Fair Oaks Village",
      "Fair Oaks Bluffs",
      "Phoenix Park",
      "Old Fair Oaks",
      "Winding Way corridor",
      "American River Canyon",
    ],
    nearbyAreas: ["Carmichael", "Gold River"],
    neighboringCities: ["orangevale", "citrus-heights", "rancho-cordova"],
    description: "Fair Oaks is a community that cherishes its unique character. From the historic charm of Fair Oaks Village to the natural beauty along the American River, this is a place where neighbors know each other and community events bring people together.",
    residentialFocus: [
      "Historic homes requiring sensitive design",
      "American River views and bluff properties",
      "Community character preservation",
      "Diverse architectural styles",
    ],
    commercialFocus: [
      "Fair Oaks Village shops",
      "Local restaurants",
      "Professional offices",
    ],
  },
  {
    slug: "roseville",
    name: "Roseville",
    county: "Placer County",
    coordinates: { lat: 38.7521, lng: -121.2880 },
    population: 150000,
    neighborhoods: [
      "West Roseville",
      "Sun City Roseville",
      "Woodcreek",
      "Blue Oaks",
      "Fiddyment Farm",
      "Highland Reserve",
      "Diamond Creek",
      "Westpark",
    ],
    nearbyAreas: ["Granite Bay", "Lincoln"],
    neighboringCities: ["rocklin", "citrus-heights", "folsom"],
    description: "Roseville has become one of Northern California's most desirable places to live. With top-rated schools, beautiful master-planned communities, and a thriving economy, Roseville attracts families and professionals who expect the best.",
    residentialFocus: [
      "Master-planned communities",
      "New construction optimization",
      "Family neighborhoods",
      "Active adult communities",
    ],
    commercialFocus: [
      "Galleria at Roseville area",
      "Highway 65 corridor",
      "Downtown Roseville",
      "Professional offices",
    ],
  },
  {
    slug: "rocklin",
    name: "Rocklin",
    county: "Placer County",
    coordinates: { lat: 38.7908, lng: -121.2358 },
    population: 70000,
    neighborhoods: [
      "Whitney Ranch",
      "Stanford Ranch",
      "Whitney Oaks",
      "Sunset Whitney",
      "Quarry District",
      "Spring Valley",
      "Clover Valley",
    ],
    nearbyAreas: ["Granite Bay", "Lincoln"],
    neighboringCities: ["roseville", "loomis", "auburn"],
    description: "Rocklin has experienced tremendous growth, transforming from a small railroad town into one of Placer County's most sought-after communities. Top-rated schools like Whitney High and beautiful master-planned communities draw families seeking quality of life.",
    residentialFocus: [
      "Family neighborhoods",
      "Newer construction",
      "School spirit displays",
      "Modern architecture",
    ],
    commercialFocus: [
      "Stanford Ranch retail",
      "Pacific Street corridor",
      "Sunset Boulevard businesses",
    ],
  },
  {
    slug: "loomis",
    name: "Loomis",
    county: "Placer County",
    coordinates: { lat: 38.8213, lng: -121.1930 },
    population: 7000,
    neighborhoods: [
      "Del Mar Estates",
      "Horseshoe Bar",
      "Sierra College area",
      "Historic Downtown",
      "Taylor Road corridor",
      "King Road area",
    ],
    nearbyAreas: ["Penryn", "Newcastle"],
    neighboringCities: ["rocklin", "auburn", "roseville"],
    description: "Loomis is one of the Sacramento region's hidden gems—a small town that's managed to preserve its rural character while offering proximity to everything the Placer County corridor provides. Estate properties and equestrian ranches define this community.",
    residentialFocus: [
      "Estate properties",
      "Multiple structures",
      "Equestrian properties",
      "Larger lot coverage",
    ],
    commercialFocus: [
      "Downtown Loomis",
      "Local businesses",
      "Agricultural businesses",
    ],
  },
  {
    slug: "auburn",
    name: "Auburn",
    county: "Placer County",
    coordinates: { lat: 38.8966, lng: -121.0769 },
    population: 15000,
    neighborhoods: [
      "Old Town Auburn",
      "North Auburn",
      "Downtown Auburn",
      "Lake of the Pines",
      "Bell Road corridor",
      "Auburn Ravine",
    ],
    nearbyAreas: ["Newcastle", "Meadow Vista"],
    neighboringCities: ["loomis", "grass-valley", "rocklin"],
    description: "Auburn is where the Sacramento suburbs meet Gold Country. As the Placer County seat, Auburn combines governmental importance with historic Old Town charm and access to world-class outdoor recreation.",
    residentialFocus: [
      "Historic home preservation",
      "Foothill properties and views",
      "Outdoor lifestyle",
      "Character homes",
    ],
    commercialFocus: [
      "Old Town Auburn businesses",
      "Downtown professional offices",
      "Highway 49 corridor",
    ],
  },
  {
    slug: "grass-valley",
    name: "Grass Valley",
    county: "Nevada County",
    coordinates: { lat: 39.2191, lng: -121.0614 },
    population: 13000,
    neighborhoods: [
      "Downtown Grass Valley",
      "Loma Rica area",
      "Brunswick Basin",
      "Penn Valley",
      "Lake Wildwood",
    ],
    nearbyAreas: ["Nevada City", "Penn Valley", "Rough and Ready"],
    neighboringCities: ["auburn"],
    description: "Grass Valley holds a special place in California history. As one of the richest gold mining towns of the 1850s, it developed a downtown filled with Victorian architecture. The community has a thriving arts scene and embraces four-season mountain living.",
    residentialFocus: [
      "Victorian architecture",
      "Historic homes",
      "Four-season climate",
      "Character preservation",
    ],
    commercialFocus: [
      "Downtown businesses",
      "Mill Street corridor",
      "Historic commercial buildings",
    ],
  },
  {
    slug: "folsom",
    name: "Folsom",
    county: "Sacramento County",
    coordinates: { lat: 38.6780, lng: -121.1761 },
    population: 82000,
    neighborhoods: [
      "Historic Folsom",
      "Broadstone",
      "Empire Ranch",
      "Folsom Ranch",
      "Prairie Oaks",
      "Briggs Ranch",
      "Willow Springs",
      "American River Canyon",
    ],
    nearbyAreas: ["Cameron Park"],
    neighboringCities: ["el-dorado-hills", "rancho-cordova", "orangevale"],
    description: "Folsom represents the best of Sacramento region living. Historic Sutter Street offers small-town charm with boutiques and restaurants, while master-planned communities like Empire Ranch and Folsom Ranch provide modern amenities and top-rated schools.",
    residentialFocus: [
      "Historic home preservation",
      "Master-planned modern",
      "Lake lifestyle",
      "Top school districts",
    ],
    commercialFocus: [
      "Historic Sutter Street",
      "Palladio shopping center",
      "East Bidwell corridor",
    ],
  },
  {
    slug: "el-dorado-hills",
    name: "El Dorado Hills",
    county: "El Dorado County",
    coordinates: { lat: 38.6857, lng: -121.0492 },
    population: 47000,
    neighborhoods: [
      "Serrano",
      "Blackstone",
      "Town Center",
      "Promontory",
      "Valley View",
      "Crown Valley",
      "Marble Valley",
      "Highland Hills",
    ],
    nearbyAreas: ["Cameron Park", "Shingle Springs", "Rescue"],
    neighboringCities: ["folsom"],
    description: "El Dorado Hills is the Sacramento region's crown jewel—an affluent community where property values consistently rank among the highest in Northern California. Master-planned developments like Serrano and Blackstone set standards for architectural quality.",
    residentialFocus: [
      "Premium properties",
      "High-end installations",
      "Master-planned excellence",
      "Property value enhancement",
    ],
    commercialFocus: [
      "Town Center businesses",
      "Professional offices",
      "Upscale retail",
    ],
  },
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find((location) => location.slug === slug);
};

export const getAllLocationSlugs = (): string[] => {
  return locations.map((location) => location.slug);
};

export const getNeighboringLocations = (slug: string): Location[] => {
  const location = getLocationBySlug(slug);
  if (!location) return [];
  return location.neighboringCities
    .map((citySlug) => getLocationBySlug(citySlug))
    .filter((loc): loc is Location => loc !== undefined);
};
