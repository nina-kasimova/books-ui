import { MatTableDataSource} from "@angular/material/table";

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  rating: number;
}

const BOOKS: Book[] = [
  {
    id: 1,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description:
      'The Hobbit, or There and Back Again, is a children\'s fantasy novel written by English author J. R. R. Tolkien. It was published on 21 September 1937, consisting of three volumes, and is generally considered one of the best-selling novels in English literature.',
    rating: 4.5
  }];
