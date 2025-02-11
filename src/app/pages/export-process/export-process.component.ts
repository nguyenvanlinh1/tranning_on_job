import { Component } from '@angular/core';
import { type ColDef } from 'ag-grid-community';
import { CellButtonComponent } from 'src/app/components/cell-button/cell-button.component';
import { IDossierData } from 'src/app/types/DataDossier';
import { IExportData } from 'src/app/types/DataExportProcess';

@Component({
  selector: 'app-export-process',
  templateUrl: './export-process.component.html',
  styleUrls: ['./export-process.component.css'],
})
export class ExportProcessComponent {
  rowData: IExportData[] = [
    {
      stt: 1,
      idCheck: '9704180420496706',
      idAnswer: '301 - Hoàn trả tra soát toàn phần',
      money: 100000000,
      typeMoney: 'VND',
      idTicket: '2463574684678',
      dateCreated: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 2,
      idCheck: '9704180420496706',
      idAnswer: '301 - Hoàn trả tra soát toàn phần',
      money: 100000000,
      typeMoney: 'VND',
      idTicket: '2463574684678',
      dateCreated: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 3,
      idCheck: '9704180420496706',
      idAnswer: '301 - Hoàn trả tra soát toàn phần',
      money: 100000000,
      typeMoney: 'VND',
      idTicket: '2463574684678',
      dateCreated: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 4,
      idCheck: '9704180420496706',
      idAnswer: '301 - Hoàn trả tra soát toàn phần',
      money: 100000000,
      typeMoney: 'VND',
      idTicket: '2463574684678',
      dateCreated: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 5,
      idCheck: '9704180420496706',
      idAnswer: '301 - Hoàn trả tra soát toàn phần',
      money: 100000000,
      typeMoney: 'VND',
      idTicket: '2463574684678',
      dateCreated: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 6,
      idCheck: '9704180420496706',
      idAnswer: '301 - Hoàn trả tra soát toàn phần',
      money: 100000000,
      typeMoney: 'VND',
      idTicket: '2463574684678',
      dateCreated: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 7,
      idCheck: '9704180420496706',
      idAnswer: '301 - Hoàn trả tra soát toàn phần',
      money: 100000000,
      typeMoney: 'VND',
      idTicket: '2463574684678',
      dateCreated: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
  ];

  rowDossier: IDossierData[] = [
    {
      stt: 1,
      idDossier: 'Mã CN_TransID_tenfile.docx',
      description: 'Hồ sơ/ chứng từ tra soát 1',
      idCheck: '2463574684678_12463574684678_3...',
      dateUpdated: '25/10/2024',
      download: true,
      delete: true,
    },
    {
      stt: 2,
      idDossier: 'Mã CN_TransID_tenfile.docx',
      description: 'Hồ sơ/ chứng từ tra soát 1',
      idCheck: '2463574684678_12463574684678_3...',
      dateUpdated: '25/10/2024',
      download: true,
      delete: true,
    },
  ];

  colDefs: ColDef[] = [
    { field: 'stt', headerName: 'STT' },
    { field: 'idCheck', headerName: 'Mã tra soát' },
    { field: 'idAnswer', headerName: 'Mã trả lời' },
    { field: 'money', headerName: 'Số tiền hoàn trả' },
    { field: 'typeMoney', headerName: 'Loại tiền hoàn trả' },
    { field: 'idTicket', flex: 2, headerName: 'Số phiếu xử lý' },
    { field: 'dateCreated', headerName: 'Ngày tạo phiếu xử lý' },
    { field: 'note', headerName: 'Ghi chú xử lý' },
  ];

  colDossier: ColDef[] = [
    { field: 'stt', headerName: 'STT' },
    { field: 'idDossier', headerName: 'Hồ sơ chứng từ' },
    { field: 'description', headerName: 'Mô tả' },
    { field: 'idCheck', headerName: 'Mã tra soát' },
    { field: 'dateUpdated', headerName: 'Ngày cập nhật' },
    {
      field: 'download',
      headerName: 'Tải về',
      cellRenderer: CellButtonComponent,
      cellRendererParams: {
        listIcon: ['@tui.download'],
      },
    },
    {
      field: 'delete',
      headerName: 'Xóa',
      cellRenderer: CellButtonComponent,
      cellRendererParams: {
        listIcon: ['@tui.trash-2'],
      },
    },
  ];
}
