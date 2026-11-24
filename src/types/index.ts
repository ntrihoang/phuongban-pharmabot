export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // In VND
  rating?: number;
  reviewsCount?: number;
  description: string;
  dosage?: string;
  tag?: string;
  inStock: boolean;
  imageEmoji: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  suggestedPrompts?: string[];
  recommendedProductIds?: string[];
}
