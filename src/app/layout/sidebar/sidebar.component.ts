import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/types/DataCategory';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() tabsData!: Category[];
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(menu: string) {
    this.categorySelected.emit(menu);
  }
}
