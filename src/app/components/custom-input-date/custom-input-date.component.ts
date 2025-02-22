import { NgClass, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';
import {
  TuiInputDateModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-custom-input-date',
  standalone: true,
  imports: [
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
export class CustomInputDateComponent{
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  
  @Input() name!: string
  @Input() control!: FormControl
  @Input() title!: string
}
