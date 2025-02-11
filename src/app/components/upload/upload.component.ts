import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  isDisplayData = false;
  data: any

  onHandleData(file: File) {
    this.isDisplayData = true;
    this.data = URL.createObjectURL(file);
  }
}
