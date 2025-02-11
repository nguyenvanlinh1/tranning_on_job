import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent{
  @Input() name!: string
  @Input() icon!: any
  @Input() canInput: boolean = false
  @Output() data = new EventEmitter<any>();

  @ViewChild('fileInput') fileInput!: ElementRef;


  openFileDialog() {
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
