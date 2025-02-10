import { Component } from '@angular/core';
import { IRowData } from './types/DataRow';
import { type ColDef } from 'ag-grid-community';
import { CellButtonComponent } from './components/cell-button/cell-button.component';
import { ITabsData } from './types/DataTabs';
import { IMenuData } from './types/DataMenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task_demo_angular';
  items = [1, 2, 3, 4, 5];
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
    { field: 'operation', cellRenderer: CellButtonComponent },
  ];

  tabsData: ITabsData[] = [
    { tabName: 'Trả Góp', iconTab: '@tui.circle-dollar-sign' },
    { tabName: 'Phát Hành Thẻ', iconTab: '@tui.building-2' },
    { tabName: 'Tra Soát Khiếu Nại', iconTab: '@tui.trello' },
    { tabName: 'Đối Soát', iconTab: '@tui.arrow-up-narrow-wide' },
    { tabName: 'Sao Kê', iconTab: '@tui.heart' },
    { tabName: 'Thu Nợ TTD', iconTab: '@tui.codesandbox' },
    { tabName: 'ATM', iconTab: '@tui.twitter' },
    { tabName: 'Tham Số PQS', iconTab: '@tui.chart-pie' },
    { tabName: 'Phân Bố Phí', iconTab: '@tui.pencil-ruler' },
    { tabName: 'Quản Trị', iconTab: '@tui.qr-code' },
  ];

  menuData: IMenuData[] = [
    {
      title: 'Danh mục',
      listSubTitle: [
        'Loại tiền',
        'Mã sản phẩm',
        'Tài khoản hoạch toán',
        'Mã hoạch toán',
        'Bút toán cơ bản',
        'Bút toán chi tiết',
      ],
    },
    {
      title: 'Đọc file quyết toán',
      listSubTitle: [
        'Loại tiền',
        'Mã sản phẩm',
        'Tài khoản hoạch toán',
        'Mã hoạch toán',
        'Bút toán cơ bản',
        'Bút toán chi tiết',
      ],
    },
    {
      title: 'Đối soát',
      listSubTitle: [
        'Loại tiền',
        'Mã sản phẩm',
        'Tài khoản hoạch toán',
        'Mã hoạch toán',
        'Bút toán cơ bản',
        'Bút toán chi tiết',
      ],
    },
    { title: 'Đối chiếu dữ liệu giao dịch'},
    {
      title: 'Báo cáo',
      listSubTitle: [
        'Loại tiền',
        'Mã sản phẩm',
        'Tài khoản hoạch toán',
        'Mã hoạch toán',
        'Bút toán cơ bản',
        'Bút toán chi tiết',
      ],
    },
  ];
}
