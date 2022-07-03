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
  selectedBook?: Book;
  books: Book[] = [];

  title = 'Book Browser';

  headers = [
    {key: 'id', label: 'ID'},
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'genre', label: 'Genre' },
    { key: 'rating', label: 'Rating' }
  ];

  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
  ];
  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
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
    this.router.navigate(['/details/', book.id]);//then(r => console.log(r));
  }
}






