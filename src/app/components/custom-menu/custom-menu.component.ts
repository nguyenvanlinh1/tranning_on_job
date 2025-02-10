import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TuiIcon } from '@taiga-ui/core';
import { TuiAccordion } from '@taiga-ui/kit';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.css'],
  imports: [NgForOf, TuiAccordion, TuiIcon, NgIf],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CustomMenuComponent {

  constructor(private route: Router){}
  @Input() title! : string

  @Input() dataMenu? : string[]

  handleClick() {
    this.route.navigate([`/export`])
  }

  // isCheck: boolean = false;
}
