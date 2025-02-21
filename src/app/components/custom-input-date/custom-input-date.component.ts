import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiError, TuiIcon } from '@taiga-ui/core';
import { TuiFieldErrorPipe, TuiUnfinishedValidator } from '@taiga-ui/kit';
import {
  TuiInputDateComponent,
  TuiInputDateModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-custom-input-date',
  standalone: true,
  imports: [
    // AsyncPipe,
    ReactiveFormsModule,
    NgIf,
    TuiIcon,
    TuiInputDateModule,
    TuiTextfieldControllerModule,
    NgClass
],
  templateUrl: './custom-input-date.component.html',
  styleUrls: ['./custom-input-date.component.css'],
})
export class CustomInputDateComponent {

  @Input() name!: string
  @Input() control!: FormControl
  @Input() title!: string

}
