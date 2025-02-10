import { Component } from '@angular/core';
import { ITabsData } from 'src/app/types/DataTabs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  tabsData: ITabsData[] = [
    { tabName: 'Trả Góp', iconTab: '@tui.circle-dollar-sign' },
    { tabName: 'Phát Hành Thẻ', iconTab: '@tui.building-2' },
    { tabName: 'Tra Soát Khiếu Nại', iconTab: '@tui.trello' },
    { tabName: 'Đối Soát', iconTab: '@tui.arrow-up-narrow-wide' },
    { tabName: 'Sao Kê', iconTab: '@tui.heart' },
    { tabName: 'Thu Nợ TTD', iconTab: '@tui.codesandbox' },
    { tabName: 'ATM', iconTab: '@tui.twitter' },
    { tabName: 'Tham Số PQS', iconTab: '@tui.chart-pie' },
    { tabName: 'Phân Bố Phí', iconTab: '@tui.pencil-ruler' },
    { tabName: 'Quản Trị', iconTab: '@tui.qr-code' },
  ];
}
