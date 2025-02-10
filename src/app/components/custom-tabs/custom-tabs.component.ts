import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { ITabsData } from 'src/app/types/DataTabs';

@Component({
  selector: 'app-custom-tabs',
  templateUrl: './custom-tabs.component.html',
  styleUrls: ['./custom-tabs.component.css'],
  imports: [NgFor, TuiIcon],
  standalone: true
})
export class CustomTabsComponent {
  @Input() tabsData! : ITabsData[];
  items = ['Edit', 'Download', 'Rename', 'Delete', 'Edit1', 'Download1', 'Rename1', 'Delete1'];
}
