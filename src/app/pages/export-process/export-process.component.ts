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
    { field: 'stt', headerName: 'STT', flex: 0.5 },
    { field: 'idCheck', headerName: 'Mã tra soát', flex: 1.5 },
    { field: 'idAnswer', headerName: 'Mã trả lời', flex: 1.5 },
    { field: 'money', headerName: 'Số tiền hoàn trả', valueFormatter: p => p.value.toLocaleString()},
    { field: 'typeMoney', headerName: 'Loại tiền hoàn trả', flex: 0.5 },
    { field: 'idTicket', flex: 1, headerName: 'Số phiếu xử lý', },
    { field: 'dateCreated', headerName: 'Ngày tạo phiếu xử lý', flex: 1 },
    { field: 'note', headerName: 'Ghi chú xử lý', flex: 2.5 },
  ];

  colDossier: ColDef[] = [
    { field: 'stt', headerName: 'STT', flex: 1 },
    { field: 'idDossier', headerName: 'Hồ sơ chứng từ', flex:3 },
    { field: 'description', headerName: 'Mô tả', flex: 3 },
    { field: 'idCheck', headerName: 'Mã tra soát', flex: 2 },
    { field: 'dateUpdated', headerName: 'Ngày cập nhật', flex: 2 },
    {
      field: 'download',
      headerName: 'Tải về',
      cellRenderer: CellButtonComponent,
      cellRendererParams: {
        listIcon: ['@tui.download'],
      },
      flex: 1
    },
    {
      field: 'delete',
      headerName: 'Xóa',
      cellRenderer: CellButtonComponent,
      cellRendererParams: {
        listIcon: ['@tui.trash-2'],
      },
      flex: 1
    },
  ];
}
