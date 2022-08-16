import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { ColDef, GridOptions, RowClickedEvent } from "ag-grid-community";
import { BookService} from "../book.service";


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

  title = 'Book Browser';
  rowData = [];
  serverBooks: any;

  private api: any;
  private columnApi: any;

  columnDefs: ColDef[] = [
    {headerName: 'ID', field: 'id'},
    {headerName: 'Title', field: 'book_title', filter: 'agTextColumnFilter'},
    {headerName: 'Author', field: 'author', filter: 'agTextColumnFilter'},
    {headerName: 'Rating', field: 'avg_rating', filter: 'agNumberColumnFilter'},
    {headerName: 'Reviews', field: 'review_count', filter: 'agNumberColumnFilter'}
  ];

  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true
    },
    onRowClicked: event => this.onRowClick(event),
    rowHeight: 50,
    columnDefs: this.columnDefs,
    rowData: null
  }

  onGridReady = (params: { api: any; columnApi: any; }) => {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.gridOptions.api?.sizeColumnsToFit();
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(books => {
      this.serverBooks = books;
    });
  }

  onRowClick(event: RowClickedEvent) {
    this.router.navigate(['/details/', event.data['id']]);
  }
}
