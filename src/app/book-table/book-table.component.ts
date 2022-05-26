import { Component, OnInit } from '@angular/core';
import { Book } from './data-source';

@Component({
  selector: 'book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  title = 'Book Browser';

  headers = [
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'description', label: 'Description' },
    { key: 'rating', label: 'Rating' }
  ];
  get books(): Book[] {
    return [
      {
        id: 1,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        description: 'The Lord of the Rings.',
        rating: 4.5},
      {
        id: 2,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'The Hobbit.',
        rating: 4.5},
      {
        id: 3,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description: 'The Catcher in the Rye.',
        rating: 4.5},
      ];
}}





