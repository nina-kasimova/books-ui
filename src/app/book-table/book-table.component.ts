import { Component, OnInit } from '@angular/core';
import { BOOKS} from "../mock-heroes";
import { Books } from '../books';
import { Router} from "@angular/router";

@Component({
  selector: 'book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  constructor(
    private router: Router
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
  }

  get books(): Books[] {
    return BOOKS;
  }

  onClick(book: Books) {
    this.router.navigate(['/details/', book.id]).then(r => console.log(r));
  }
}






