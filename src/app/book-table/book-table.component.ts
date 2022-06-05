import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router} from "@angular/router";
import { BookService } from '../book.service';

@Component({
  selector: 'book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  constructor(
    private router: Router,
    private bookService: BookService
  ) {
  }

  books: Book[]=[]
  selectedBook?: Book;

  title = 'Book Browser';

  headers = [
    {key: 'id', label: 'ID'},
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'genre', label: 'Genre' },
    { key: 'rating', label: 'Rating' }
  ];

  attributes = ['id', 'title', 'author', 'genre', 'rating'];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  onClick(book: Book) {
    this.selectedBook = book;
    console.log("book is selected",this.selectedBook);
    this.router.navigate(['/details/', book.id]);//then(r => console.log(r));
  }
}






