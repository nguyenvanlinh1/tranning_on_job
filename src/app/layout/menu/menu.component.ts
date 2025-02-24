import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SecondMenu } from 'src/app/types/DataCategory';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnChanges {
  @Input() sub!: SecondMenu[];
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.sub)
  }
}
