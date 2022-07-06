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

  defaultColDef = {
    sortable: true
  };

  columnDefs = [
    {headerName: 'ID', field: 'id'},
    {headerName: 'Title', field: 'book_title'},
    {headerName: 'Author', field: 'author'},
    {headerName: 'Rating', field: 'avg_rating'},
    {headerName: 'Reviews', field: 'review_count'}
  ];

  rowData = [];

  attributes = ['id', 'title', 'author', 'genre', 'rating'];

  ngOnInit(): void {
    this.getBooks();
    fetch('http://localhost:3000/books')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
    console.log(typeof this.rowData);
    //this.rowData = shortData;
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books)
  }

  onClick(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/details/', book.id]);//then(r => console.log(r));
  }
}
