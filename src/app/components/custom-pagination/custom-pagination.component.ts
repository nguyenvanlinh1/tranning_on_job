import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { TuiPagination } from '@taiga-ui/kit';
import { CustomSelectComponent } from '../custom-select/custom-select.component';
import { TuiIcon } from '@taiga-ui/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';

export enum Size {
  S = 's',
  M = 'm',
  L = 'l',
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
  @Input() length!: number;

  @Input() index!: number;

  totalValue!: string;

  items = [1, 2, 3, 4, 5, 6, 7];

  @Output() valueChanged = new EventEmitter<number>();

  // @Input() size!: Size;

  goToPage(index: number): void {
    this.index = index;
  }

  onPageSizeChange(newSize: number): void {
    this.items = Array.from({ length: newSize }, (_, i) => i + 1);
    this.valueChanged.emit(newSize);
  }
}
