import {Component, OnInit, ViewChild} from '@angular/core';
import { Book } from '../book';
import { Router} from "@angular/router";
import { BookService } from '../book.service';
import {ColDef, GridOptions} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";


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

  private api: any;
  private columnApi: any;

  columnDefs: ColDef[] = [
    {headerName: 'ID', field: 'id'},
    {headerName: 'Title', field: 'book_title'},
    {headerName: 'Author', field: 'author'},
    {headerName: 'Rating', field: 'avg_rating', filter: 'agNumberColumnFilter'},
    {headerName: 'Reviews', field: 'review_count', filter: 'agNumberColumnFilter'}
  ];

  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true
    },
    rowHeight: 50,
    columnDefs: this.columnDefs,
    rowData: null
  }
  onGridReady = (params: { api: any; columnApi: any; }) => {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.gridOptions.api?.sizeColumnsToFit();
  }

  selectedBook?: Book;
  books: Book[] = [];

  title = 'Book Browser';

  rowData = [];

  ngOnInit(): void {
    this.getBooks();
    fetch('http://localhost:3000/books')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
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
