import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiDataList, TuiIcon } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import {
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { IInspectData } from 'src/app/types/DataInspect';

@Component({
  selector: 'app-custom-input-select',
  templateUrl: './custom-input-select.component.html',
  styleUrls: ['./custom-input-select.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiDataList,
    TuiDataListWrapper,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiIcon,
    NgIf,
  ],
})
export class CustomInputSelectComponent implements OnChanges {
  @Input() name!: string;
  @Input() control!: FormControl;
  @Input() title!: string;
  @Input() items!: IInspectData[];

  get itemNames(): string[] {
    return this.items?.map(item => item.name) || [];
  }  

  ngOnChanges(): void {
    if (!this.control.value && this.items?.length) {
      this.control.setValue(this.items[0].name, { emitEvent: false });
    }
    console.log(this.control.value)
  }
}
