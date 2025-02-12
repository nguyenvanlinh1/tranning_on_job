import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CustomSelectComponent } from '../custom-select/custom-select.component';
import { TuiIcon } from '@taiga-ui/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { TOTAL_ITEMS_PANIGATION } from 'src/app/constant/common';

export enum Size {
  S = 's',
  M = 'm',
  L = 'l',
}

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css'],
  imports: [
    CustomSelectComponent,
    TuiIcon,
    NgFor,
    NgIf,
    NgStyle,
    NgClass
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPaginationComponent {

  @Input() length!: number;

  @Input() index!: number;

  totalItemsPanigation = TOTAL_ITEMS_PANIGATION

  totalValue!: string;
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  selectedIndex: number = 0; // Lưu vị trí button được chọn
  selectButton(index: number) {
    this.selectedIndex = index;
    this.pageValue.emit(this.selectedIndex)
  }
  @Output() pageValue =  new EventEmitter()

  onNextButton(){
    if(this.selectedIndex >= this.items.length) return
    this.selectedIndex += 1
    this.pageValue.emit(this.selectedIndex)
  }
  onPrevButton(){
    if(this.selectedIndex < 0) return
    this.selectedIndex -= 1
    this.pageValue.emit(this.selectedIndex)
  }
  onStartButton(){
    this.selectedIndex = 0
    this.pageValue.emit(this.selectedIndex)
  }
  onEndButton(){
    this.selectedIndex = this.items.length - 1
    this.pageValue.emit(this.selectedIndex)
  }

  getSliceRange() {
    if(this.selectedIndex > this.items.length - this.totalItemsPanigation){
      const start = this.items.length - this.totalItemsPanigation;
      return start
    }
    return this.selectedIndex
  }


  @Output() valueChanged = new EventEmitter<number>();

  onPageSizeChange(newSize: number): void {
    this.items = Array.from({ length: newSize }, (_, i) => i + 1);
    this.valueChanged.emit(newSize)
  }
}
