import { Injectable } from '@angular/core';
import { Book } from "./book";
import {catchError, Observable, of, tap} from "rxjs";
import booksData from './books_info.json';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  temp_books: Book[] = booksData;

  getBooks(): Observable<Book[]> {
    const books = of(this.temp_books)
    console.log(books);
    return books;
  }

  getBook(id: number): Observable<Book> {
    // const book = of(BOOKS.find(book => book.id === id)).pipe(
    //   catchError(this.handleError<Book>(`getBook id=${id}`))
    // );
    const book = this.temp_books.find(book => book.id === id)!;
    return of(book);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
