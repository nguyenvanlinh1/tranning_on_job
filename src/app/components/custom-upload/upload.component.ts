import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  isDisplayData = false;
  data: any
  isDragging = false;

  onHandleData(file: File) {
    this.isDisplayData = true;
    this.data = URL.createObjectURL(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  // Khi chuột rời khỏi vùng drop
  onDragLeave() {
    this.isDragging = false;
  }

  // Khi file được thả vào vùng drop
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.onHandleData(file);
    }
  }
}
