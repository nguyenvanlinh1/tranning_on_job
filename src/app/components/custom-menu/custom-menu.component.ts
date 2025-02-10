import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
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
  @Input() title! : string

  @Input() dataMenu? : string[]

  // isCheck: boolean = false;
}
