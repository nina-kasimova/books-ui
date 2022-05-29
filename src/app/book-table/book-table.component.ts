import { Component, OnInit } from '@angular/core';
import { BOOKS} from "../mock-books";
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

  books: Book[] = BOOKS;

  title = 'Book Browser';

  headers = [
    {key: 'id', label: 'ID'},
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'description', label: 'Description' },
    { key: 'rating', label: 'Rating' }
  ];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }


  onClick(book: Book) {
    this.router.navigate(['/details/', book.id]);//then(r => console.log(r));
  }
}






