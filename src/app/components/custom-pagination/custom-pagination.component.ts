import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { TuiPagination } from '@taiga-ui/kit';

export enum Size {
  S = 's',
  M = 'm',
  L = 'l'
}

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css'],
  imports: [TuiPagination],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPaginationComponent {
  @Input() length! : number;
 
  @Input() index! : number;
  

  // @Input() size!: Size;

  goToPage(index: number): void {
      this.index = index;
  }
}
