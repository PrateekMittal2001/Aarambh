export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  bestseller?: boolean;
}

export interface Book extends Product {
  author: string;
  ageGroup: string;
  pages: number;
  language: string;
  isbn: string;
  publisher: string;
}

export interface FoodProduct extends Product {
  weight: string;
  ingredients: string[];
  nutritionalInfo: NutritionalInfo;
  certifications: string[];
  allergens: string[];
  shelfLife: string;
}

export interface NutritionalInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  sugar: string;
}

export interface VedicProgram {
  id: string;
  title: string;
  slug: string;
  description: string;
  ageGroup: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  mantras: Mantra[];
  benefits: string[];
  image: string;
  price: number;
  enrolledCount: number;
}

export interface Mantra {
  id: string;
  name: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  benefits: string[];
  audioUrl?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  image: string;
  featured?: boolean;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
  childAge: string;
}

export interface CartItem {
  id: string;
  productId: string;
  productType: 'book' | 'food' | 'program';
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
