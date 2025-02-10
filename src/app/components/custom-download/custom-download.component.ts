import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-download',
  templateUrl: './custom-download.component.html',
  styleUrls: ['./custom-download.component.css']
})
export class CustomDownloadComponent {

  @Input() title!: string
}
