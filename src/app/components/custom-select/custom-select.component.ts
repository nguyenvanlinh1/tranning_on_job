import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiDataList, TuiIcon } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import {
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiDataList,
    TuiDataListWrapper,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiIcon,
  ],
})
export class CustomSelectComponent {
  protected items = [7, 10, 15];

  protected testValue = new FormControl<number | null>(7);

  @Output() valueChanged = new EventEmitter<number>();

  constructor() {
    this.testValue.valueChanges.subscribe((value) => {
      if (value !== null) {
        this.valueChanged.emit(value);
      }
    });
  }
}
