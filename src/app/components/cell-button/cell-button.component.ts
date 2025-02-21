import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

interface CustomCellRendererParams extends ICellRendererParams {
  listIcon?: string[];
  iconSize?: string;
}

@Component({
  selector: 'app-cell-button',
  templateUrl: './cell-button.component.html',
  styleUrls: ['./cell-button.component.css'],
})
export class CellButtonComponent implements ICellRendererAngularComp {
  value!: string;
  listIcon: string[] = [];
  iconSize: string = '16px'; // Kích thước mặc định

  agInit(params: CustomCellRendererParams): void {

    this.value = params.value;
    this.listIcon = params.listIcon || [];
    this.iconSize = params.iconSize || '16px'; // Gán giá trị từ params
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }
}
