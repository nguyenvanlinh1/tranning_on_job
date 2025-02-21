import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ColDef } from 'ag-grid-community';
import { firstValueFrom, forkJoin, lastValueFrom } from 'rxjs';
import { CellButtonComponent } from 'src/app/components/cell-button/cell-button.component';
import { InspectService } from 'src/app/service/inspect.service';
import { IDossierData } from 'src/app/types/DataDossier';
import { IInspectData } from 'src/app/types/DataInspect';

@Component({
  selector: 'app-new-inspect',
  templateUrl: './new-inspect.component.html',
  styleUrls: ['./new-inspect.component.css']
})
export class NewInspectComponent {

  itemsReasonForInspection!: IInspectData[]
  itemsMoney! : IInspectData[]
  itemsReceivingBranch!: IInspectData[]
  inspectService = inject(InspectService)

  constructor(private cdr: ChangeDetectorRef){}

  query = injectQuery(() => ({
    queryKey: ['reason-for-inspection', 'money', 'receive-branch'],
    queryFn: async () => {
      const {dataReasonForInspection ,dataTypeMoney, dataReceivingBranch } = await firstValueFrom(
        forkJoin({
          dataReasonForInspection: this.inspectService.getReasonForInspection(),
          dataTypeMoney: this.inspectService.getTypeMoney(),
          dataReceivingBranch: this.inspectService.getReceivingBranch()
        })
      )
      if(dataTypeMoney) {
        this.itemsMoney = Array.isArray(dataTypeMoney) ? dataTypeMoney : [dataTypeMoney]
      }
      if(dataReasonForInspection) {
        this.itemsReasonForInspection = Array.isArray(dataReasonForInspection) ? dataReasonForInspection : [dataReasonForInspection]
      }
      if(dataReceivingBranch) {
        this.itemsReceivingBranch = Array.isArray(dataReceivingBranch) ? dataReceivingBranch : [dataReceivingBranch]
      }
    }
  }))

  createInspectForm = new FormGroup({
    reasonForInspection: new FormControl('', Validators.required),
    typeMoney: new FormControl('', Validators.required),
    receivingBranch: new FormControl('', Validators.required)
  })

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
