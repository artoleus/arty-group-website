export interface BusinessInfo {
  name: string;
  phone: string;
  mobile: string;
  email?: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    county: string;
  };
  serviceAreas: string[];
  established: string;
  credentials: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  pricing?: {
    from: string;
    description: string;
  };
  keywords: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'boiler' | 'heating' | 'plumbing' | 'emergency';
  title?: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  emergency?: boolean;
}