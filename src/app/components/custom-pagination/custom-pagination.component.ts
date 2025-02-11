import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { TuiPagination } from '@taiga-ui/kit';
import { CustomSelectComponent } from "../custom-select/custom-select.component";
import { TuiIcon } from '@taiga-ui/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';

export enum Size {
  S = 's',
  M = 'm',
  L = 'l'
}

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css'],
  imports: [CustomSelectComponent, TuiIcon, NgFor, NgIf, NgStyle],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPaginationComponent {
  @Input() length! : number;
 
  @Input() index! : number;
  
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // @Input() size!: Size;

  goToPage(index: number): void {
      this.index = index;
  }
}
