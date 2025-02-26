import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { ColDef } from 'ag-grid-community';
import { CellButtonComponent } from 'src/app/components/cell-button/cell-button.component';
import { IDifferenceData } from 'src/app/types/DataDifferenceProcess';
import { ITransactionData } from 'src/app/types/DataTransaction';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { InspectService } from 'src/app/service/inspect.service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { IInspectData } from 'src/app/types/DataInspect';
import { firstValueFrom, forkJoin, lastValueFrom } from 'rxjs';
import { IReceiveBranch } from 'src/app/types/DataReceiveBranch';
import { FormatDatePipe } from 'src/app/components/pipe/format-date.pipe';

@Component({
  selector: 'app-difference-process',
  templateUrl: './difference-process.component.html',
  styleUrls: ['./difference-process.component.css'],
})
export class DifferenceProcessComponent implements OnInit {
  rowData!: IDifferenceData[];
  items!: IInspectData[];
  items2!: IReceiveBranch[];
  items3!: IInspectData[];
  inspectService = inject(InspectService);

  query = injectQuery(() => ({
    queryKey: ['listInspect', 'receiveBranch', 'listDevice', 'allTransactions'],
    queryFn: async () => {
      const { data, data2, data3, dataTable } = await firstValueFrom(
        forkJoin({
          data: this.inspectService.getListInspect(),
          data2: this.inspectService.getReceiveBranch(),
          data3: this.inspectService.getListDevice(),
          dataTable: this.inspectService.getAllDataTransaction(),
        })
      );
      if (data) {
        this.items = Array.isArray(data) ? data : [data];
        this.useForm.patchValue({
          status: this.items[0]?.name || '',
        });
      }
      if (data2) {
        this.items2 = Array.isArray(data2) ? data2 : [data2];
        this.useForm.patchValue({
          cn_received: this.items2[0]?.name || '',
        });
      }
      if (data3) {
        this.items3 = Array.isArray(data3) ? data3 : [data3];
        this.useForm.patchValue({
          idDevice: this.items3[0]?.name || '',
        });
      }
      if (dataTable) {
        this.rowData = Array.isArray(dataTable) ? dataTable : [dataTable];
      }
      return {data, data2, data3, dataTable}
    },
  }));

  constructor(private route: Router, private formatDate: FormatDatePipe) {}

  ngOnInit(): void {
    // this.items.push(this.query.data)
  }

  // useForm = new FormGroup({
  //   fromTransactionDate: new FormControl<TuiDay | null>(
  //     null,
  //     Validators.required
  //   ),
  //   toTransactionDate: new FormControl<TuiDay | null>(
  //     null,
  //     Validators.required
  //   ),
  //   transId: new FormControl('', Validators.required),
  //   idCheck: new FormControl('', Validators.required),
  //   status: new FormControl('', Validators.required),
  //   card_number: new FormControl('', Validators.required),
  //   standard_number: new FormControl('', Validators.required),
  //   cn_received: new FormControl('', Validators.required),
  //   idDevice: new FormControl('', Validators.required),
  //   idTrace: new FormControl('', Validators.required),
  //   idTicket: new FormControl('', Validators.required),
  // });
  useForm = new FormGroup({
    fromTransactionDate: new FormControl<TuiDay | null>(null),
    toTransactionDate: new FormControl<TuiDay | null>(null),
    transId: new FormControl(''),
    idCheck: new FormControl(''),
    status: new FormControl(''),
    card_number: new FormControl(''),
    standard_number: new FormControl(''),
    cn_received: new FormControl(''),
    idDevice: new FormControl(''),
    idTrace: new FormControl(''),
    idTicket: new FormControl(''),
  });

  colDefs: ColDef[] = [
    {
      field: 'checkbox',
      headerName: 'Check',
      cellRenderer: CellButtonComponent,
      cellRendererParams: {
        listIcon: ['@tui.message-circle'],
        iconSize: '20px',
      },
      checkboxSelection: true,
      cellClass: 'custom-checkbox-cell',
    },
    { field: 'stt', headerName: 'STT' },
    { field: 'status', headerName: 'Trạng thái' },
    { field: 'cn_received', headerName: 'CN nhận' },
    { field: 'implementing_unit', headerName: 'Đơn vị đang thực hiện' },
    { field: 'idCheck', headerName: 'Mã tra soát' },
    { field: 'card_number', headerName: 'Số thẻ' },
    { field: 'transId', headerName: 'TransID' },
    { field: 'fromTransactionDate', headerName: 'Ngày giao dịch' },
    { field: 'idTrace', headerName: 'Số trace' },
    { field: 'transaction_amount', headerName: 'Số tiền giao dịch' },
    { field: 'currency', headerName: 'Loại tiền' },
    { field: 'standard_number', headerName: 'Số chuẩn chỉ' },
    { field: 'idDevice', headerName: 'Mã thiết bị' },
    { field: 'idTicket', headerName: 'Số phiếu xử lý' },
    { field: 'amount_checked', headerName: 'Số tiền tra soát' },
    { field: 'reason_inspection', headerName: 'Lý do tra soát' },
    { field: 'refund_amount', headerName: 'Số tiền hoàn trả' },
    {
      field: 'operation',
      headerName: 'Thao tác',
      cellRenderer: CellButtonComponent,
      cellRendererParams: {
        listIcon: ['@tui.eye'],
      },
    },
  ];

  onClick() {
    // if (this.useForm.invalid) {
    //   this.useForm.markAllAsTouched();
    //   return;
    // }
    const data: ITransactionData = {
      fromTransactionDate: this.formatDate.transform(
        this.useForm.get('fromTransactionDate')?.value || null
      ),
      toTransactionDate: this.formatDate.transform(
        this.useForm.get('toTransactionDate')?.value || null
      ),
      transId: this.useForm.get('transId')?.value ?? '',
      idCheck: this.useForm.get('idCheck')?.value ?? '',
      status: this.useForm.get('status')?.value ?? '',
      card_number: this.useForm.get('card_number')?.value ?? '',
      standard_number: this.useForm.get('standard_number')?.value ?? '',
      cn_received: this.useForm.get('cn_received')?.value ?? '',
      idDevice: this.useForm.get('idDevice')?.value ?? '',
      idTrace: this.useForm.get('idTrace')?.value ?? '',
      idTicket: this.useForm.get('idTicket')?.value ?? '',
    };
  }

  onNavigate() {
    const curUrl = this.route.url
    this.route.navigate([`${curUrl}/create`]);
  }

  onExport() {
    let textData =
      'STT |     Trạng thái     | CN Received | Đơn vị   |     ID Check     |      Số thẻ       |    Trans ID    |  Ngày GD  |  ID Trace  |     Số tiền GD     | Tiền tệ | Tiêu chuẩn |  ID Device |  ID Ticket  | Số tiền kiểm tra |     Lý do kiểm tra     |  Số tiền hoàn \n';
    textData +=
      '----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n';

    this.rowData.forEach((item) => {
      textData +=
        `${item.stt.toString().padEnd(4)} | ` +
        `${item.status.padEnd(20)} | ` +
        `${item.cn_received.toString().padEnd(10)} | ` +
        `${item.implementing_unit.padEnd(8)} | ` +
        `${item.idCheck.padEnd(15)} | ` +
        `${item.card_number.padEnd(18)} | ` +
        `${item.transId.padEnd(12)} | ` +
        `${item.fromTransactionDate.padEnd(10)} | ` +
        `${item.idTrace.padEnd(9)} | ` +
        `${item.transaction_amount.toString().padEnd(18)} | ` +
        `${item.currency.padEnd(6)} | ` +
        `${item.standard_number.padEnd(11)} | ` +
        `${item.idDevice.padEnd(9)} | ` +
        `${item.idTicket.padEnd(11)} | ` +
        `${item.amount_checked.toString().padEnd(17)} | ` +
        `${item.reason_inspection.padEnd(25)} | ` +
        `${item.refund_amount.toString().padEnd(12)}\n`;
    });

    const blob = new Blob([textData], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'export.txt');
  }

  onSearch() {
    const rawFormData = this.useForm.value;

    const formData: ITransactionData = {
      fromTransactionDate: this.formatDate.transform(
        rawFormData.fromTransactionDate || null
      ),
      toTransactionDate: this.formatDate.transform(
        rawFormData.toTransactionDate || null
      ),
      transId: rawFormData.transId ?? '',
      idCheck: rawFormData.idCheck ?? '',
      status: rawFormData.status || 'Tất cả trạng thái',
      card_number: rawFormData.card_number ?? '',
      standard_number: rawFormData.standard_number ?? '',
      cn_received: rawFormData.cn_received || 'Tất cả chi nhánh',
      idDevice: rawFormData.idDevice || 'Tất cả thiết bị',
      idTrace: rawFormData.idTrace ?? '',
      idTicket: rawFormData.idTicket ?? '',
    };

    this.inspectService
      .getDataTransactionbyOption(formData)
      .subscribe((data) => {
        console.log(data)
        this.rowData = data;
      });

  }
}
