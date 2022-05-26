import { Component, OnInit } from '@angular/core';
import { BOOKS} from "../mock-heroes";
import { Books } from '../books';

@Component({
  selector: 'book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  constructor() {
  }

  title = 'Book Browser';

  headers = [
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'description', label: 'Description' },
    { key: 'rating', label: 'Rating' }
  ];

  ngOnInit(): void {
  }

  get books(): Books[] {
    return BOOKS;
  }

  onClick(book: Books) {
    console.log(book);
  }
}






