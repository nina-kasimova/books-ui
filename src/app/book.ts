export interface Book {
  id: number;
  title: string;
  author?: string;
  description?: string;
  rating?: number;
  reviewCount?: number;
  genre?: string;
  shelves?: string[];
  url?: string;
}
