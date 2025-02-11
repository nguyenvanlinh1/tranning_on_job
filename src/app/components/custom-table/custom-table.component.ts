import { Component, Input, OnInit } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { themeQuartz, type ColDef } from 'ag-grid-community';
import {
  CustomPaginationComponent,
  Size,
} from '../custom-pagination/custom-pagination.component';
import { NgIf } from '@angular/common';

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
  // pagination = true;
  // paginationPageSize = 7;
  // paginationPageSizeSelector = [7, 14, 21];

  defaultColDef: ColDef = {
    flex: 1,
    filter: true
  };

  @Input() rowData!: any
  @Input() colDefs!: ColDef[]
  @Input() isPanigation!: boolean
}
