export type { Location } from '@/lib/data/locations';
export type { Service } from '@/lib/data/services';
export type { Business } from '@/lib/data/business';

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  serviceType: 'residential' | 'commercial';
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'residential' | 'commercial' | 'holiday' | 'security';
  location?: string;
  isBefore?: boolean;
  afterImage?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  serviceType?: 'residential' | 'commercial';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'pricing' | 'installation' | 'product' | 'warranty' | 'service-area';
}
