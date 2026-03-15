export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  features: string[];
  inStock: boolean;
  badge?: "new" | "sale" | "bestseller";
  rating: number;
  reviews: number;
  material?: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  purchase: string;
  date: string;
  verified: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  popular: boolean;
  features: string[];
}

export interface ConsultationSlot {
  time: string;
  available: boolean;
}

export interface Brand {
  name: string;
  tagline: string;
}
