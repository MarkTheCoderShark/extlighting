import type { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/residential-6.png",
    alt: "Two-story home with warm white eave and roofline lighting at dusk",
    category: "residential",
    location: "Folsom, CA",
  },
  {
    id: "2",
    src: "/images/gallery/residential-7.png",
    alt: "Ranch home with warm downlighting on front porch and entry",
    category: "residential",
    location: "Rocklin, CA",
  },
  {
    id: "3",
    src: "/images/gallery/holiday-4.png",
    alt: "Ranch home with colorful RGB rainbow trim lighting",
    category: "holiday",
    location: "Roseville, CA",
  },
  {
    id: "4",
    src: "/images/gallery/residential-8.png",
    alt: "Ranch home with cool blue accent lighting on roofline",
    category: "residential",
    location: "El Dorado Hills, CA",
  },
  {
    id: "5",
    src: "/images/gallery/residential-9.png",
    alt: "Ranch home exterior at twilight",
    category: "residential",
    location: "Sacramento, CA",
  },
  {
    id: "6",
    src: "/images/gallery/residential-10.png",
    alt: "Mid-century modern home with cool white roofline LED lighting",
    category: "residential",
    location: "Fair Oaks, CA",
  },
  {
    id: "7",
    src: "/images/gallery/residential-11.png",
    alt: "Modern farmhouse with pink and purple accent lighting",
    category: "residential",
    location: "Rocklin, CA",
  },
  {
    id: "8",
    src: "/images/gallery/residential-12.png",
    alt: "Bungalow home with cool blue perimeter lighting at dusk",
    category: "residential",
    location: "Citrus Heights, CA",
  },
  {
    id: "9",
    src: "/images/gallery/residential-13.png",
    alt: "Ranch home with colorful RGB roofline lighting at night",
    category: "residential",
    location: "Roseville, CA",
  },
  {
    id: "10",
    src: "/images/gallery/residential-14.png",
    alt: "Ranch home with subtle white roofline accent lighting",
    category: "residential",
    location: "Folsom, CA",
  },
  {
    id: "11",
    src: "/images/gallery/holiday-5.png",
    alt: "Ranch home with rainbow multicolor eave and landscape lighting",
    category: "holiday",
    location: "Sacramento, CA",
  },
  {
    id: "12",
    src: "/images/gallery/holiday-6.png",
    alt: "Large ranch with festive multicolor Christmas roofline lighting",
    category: "holiday",
    location: "El Dorado Hills, CA",
  },
  {
    id: "13",
    src: "/images/gallery/holiday-7.png",
    alt: "Ranch home aerial view with rainbow trim lighting",
    category: "holiday",
    location: "Rancho Cordova, CA",
  },
];

export const getGalleryImages = (category?: string) => {
  if (!category || category === "all") return galleryImages;
  return galleryImages.filter((img) => img.category === category);
};

export const getFeaturedGalleryImages = (count: number = 6) => {
  // Return a varied selection: mix of residential and holiday, different lighting styles
  const featuredIds = ["1", "6", "3", "7", "11", "12"];
  return featuredIds
    .map((id) => galleryImages.find((img) => img.id === id))
    .filter((img): img is GalleryImage => img !== undefined)
    .slice(0, count);
};
