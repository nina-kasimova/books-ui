import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Book } from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
  ) { }

  private heroesUrl = 'http://localhost:3000/books';

  getBooks(): Observable<any> {
    return  this.http.get('http://localhost:3000/books');
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Book>(url);
  }

}
