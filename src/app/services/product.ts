export interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  badge_color?: string;
  description: string;
  weight: string;
  serving: string;
  calories: string;
  ingredients: string[];
  allergens: string[];
}
