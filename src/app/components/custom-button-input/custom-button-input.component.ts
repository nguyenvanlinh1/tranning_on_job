import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-custom-button-input',
  templateUrl: './custom-button-input.component.html',
  styleUrls: ['./custom-button-input.component.css'],
})
export class CustomButtonInputComponent {
  @Input() name!: string;
  @Input() selected: boolean = false;

  @Output() data = new EventEmitter<any>();

  @ViewChild('fileInput') fileInput!: ElementRef;

  openFileDialog() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.data.emit(input.files[0]);
    }
  }
}
