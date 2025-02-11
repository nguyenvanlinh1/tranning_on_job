import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

interface CustomCellRendererParams extends ICellRendererParams {
  listIcon?: string[];
}

@Component({
  selector: 'app-cell-button',
  templateUrl: './cell-button.component.html',
  styleUrls: ['./cell-button.component.css'],
})
export class CellButtonComponent implements ICellRendererAngularComp {
  value!: string;
  listIcon: string[] = [];

  agInit(params: CustomCellRendererParams): void {
    console.log('listIcon received:', params.listIcon); // Kiểm tra giá trị đầu vào
    this.value = params.value;
    this.listIcon = params.listIcon || [];
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }
}
