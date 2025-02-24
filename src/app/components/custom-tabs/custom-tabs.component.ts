import { NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { Category } from 'src/app/types/DataCategory';

@Component({
  selector: 'app-custom-tabs',
  templateUrl: './custom-tabs.component.html',
  styleUrls: ['./custom-tabs.component.css'],
  imports: [NgFor, TuiIcon],
  standalone: true,
})
export class CustomTabsComponent {
  @Input() tabsData!: Category[]
  @Output() clicked = new EventEmitter();

  onClick(menu : string){
    this.clicked.emit(menu)
  }
}
