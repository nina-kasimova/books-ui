import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router} from "@angular/router";
import { BookService } from '../book.service';
import booksData from '../books.json';

@Component({
  selector: 'book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  books: Book[] = booksData;

  constructor(
    private router: Router,
    private bookService: BookService
  ) {
  }

  title = 'Book Browser';

  headers = [
    {key: 'id', label: 'ID'},
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'description', label: 'Description' },
    { key: 'rating', label: 'Rating' }
  ];

  ngOnInit(): void {
    //this.getBooks();
    console.log(this.books);
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }


  onClick(book: Book) {
    this.router.navigate(['/details/', book.id]);//then(r => console.log(r));
  }
}






