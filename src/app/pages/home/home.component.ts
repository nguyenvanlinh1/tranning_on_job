import { Component } from '@angular/core';
import { CellButtonComponent } from 'src/app/components/cell-button/cell-button.component';
import { IRowData } from 'src/app/types/DataRow';
import { type ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  rowData: IRowData[] = [
    {
      stt: 1,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1001,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: '',
    },
    {
      stt: 2,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1002,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: '',
    },
    {
      stt: 3,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1003,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: true,
    },
    {
      stt: 4,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1004,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: true,
    },
    {
      stt: 5,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1005,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: true,
    },
    {
      stt: 6,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1006,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: true,
    },
    {
      stt: 7,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1007,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: true,
    },
    {
      stt: 8,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1008,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: true,
    },
    {
      stt: 9,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1009,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: true,
    },
    {
      stt: 10,
      model: 'Model Y',
      roles: 'ACQ',
      payment: 'ATM',
      account: 1010,
      product: 'MASTER NH KHAC',
      money: 'VND',
      operation: true,
    },
  ];

  colDefs: ColDef[] = [
    { field: 'stt' },
    { field: 'model' },
    { field: 'roles' },
    { field: 'payment' },
    { field: 'account' },
    { field: 'product', flex: 2 },
    { field: 'money' },
    { field: 'operation', cellRenderer: CellButtonComponent, cellRendererParams: {
      listIcon: ['@tui.square-pen', '@tui.trash-2']
    }},
  ];
}
