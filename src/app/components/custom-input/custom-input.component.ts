import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TuiHint, TuiTextfield } from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  imports: [TuiHint, TuiTextfield, ReactiveFormsModule, NgIf],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent {
  protected readonly testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });

  @ViewChild("fileInput") fileInput!: ElementRef

  @Input() title!: string
  @Input() typeInput: string = "text"

  openFileDialog() {
    this.fileInput.nativeElement.click();
  }
}
