import { NgClass, NgIf, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';


@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
  standalone: true,
  imports: [NgClass, NgIf, TuiIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent{
  @Input() name!: string
  @Input() icon!: any
  @Input() canInput: boolean = false
  @Output() data = new EventEmitter<any>();

  // click thay đổi background
  @Input() selected: boolean = false;
  @Input() isBtnSpecLeft: boolean = false;
  @Input() isBtnSpecRight: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  @ViewChild('fileInput') fileInput!: ElementRef;


  openFileDialog() {
    this.clicked.emit();
    if(this.canInput === false) return;
    this.fileInput.nativeElement.click();
  }


  onFileSelected(event: Event) {
    if(this.canInput === false) return;
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.data.emit(input.files[0]);
    }
  }
}
