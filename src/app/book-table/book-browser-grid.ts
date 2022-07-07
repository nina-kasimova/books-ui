import {
  ColDef,
  ColumnResizedEvent,
  Grid,
  GridOptions,
} from 'ag-grid-community';


export class BookBrowserGrid {

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
    columnDefs: this.columnDefs,
    rowData: null
  }

  sizeToFit() {
    this.gridOptions.api!.sizeColumnsToFit();
  }

}
