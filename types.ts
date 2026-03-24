
export interface Product {
  id: string;
  name: string;
  category: Category;
  priceRange: string;
  description: string;
  images: string[];
  externalLink?: string;
}

export type Category = 
  | 'Cement' 
  | 'Tiles' 
  | 'Timber & Boards' 
  | 'Sand & Aggregates' 
  | 'Steel & Metal' 
  | 'Other Materials';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}
