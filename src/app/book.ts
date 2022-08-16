export interface Book {
  id: number;
  book_title: string;
  author?: string;
  description?: string;
  avg_rating?: number;
  review_count?: number;
  genre?: string;
  url?: string;
  shelves?: string[];
}
