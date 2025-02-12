import { Component, Input, ViewChild } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { themeQuartz, type ColDef } from 'ag-grid-community';
import {
  CustomPaginationComponent,
  Size,
} from '../custom-pagination/custom-pagination.component';
import { NgIf } from '@angular/common';
import { DEFAULT_PAGE_SIZE } from 'src/app/constant/common';

const myTheme = themeQuartz.withParams({
  spacing: 5,
  headerBackgroundColor: '#009688',
  headerTextColor: '#fff',
});

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
  imports: [AgGridAngular, AgGridModule, NgIf, CustomPaginationComponent],
  standalone: true,
})
export class CustomTableComponent {
  Size = Size;
  theme = myTheme;
  pagination: boolean = true;
  paginationPageSize: number = DEFAULT_PAGE_SIZE;
  @ViewChild(AgGridAngular, {static: false}) agGrid!: AgGridAngular;

  defaultColDef: ColDef = {
    flex: 1,
    filter: true
  };

  @Input() rowData!: any
  @Input() colDefs!: ColDef[]
  @Input() isPanigation!: boolean


  onPaginationSizeChange(newSize: any) {
    this.paginationPageSize = newSize;
  }

  onPanigationPage(newPage: number) {
    const gridApi = this.agGrid?.api;
    if (gridApi) {
      gridApi.paginationGoToPage(newPage)
    }
  }
}
