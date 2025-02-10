import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-button',
  templateUrl: './cell-button.component.html',
  styleUrls: ['./cell-button.component.css']
})
export class CellButtonComponent implements ICellRendererAngularComp{
  
  value!: string
  
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

}
