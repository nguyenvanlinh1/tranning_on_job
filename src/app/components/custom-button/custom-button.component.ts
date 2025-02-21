import { NgClass, NgIf, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';


@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
  standalone: true,
  imports: [NgClass, TuiIcon, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent{
  @Input() name!: string
  @Input() icon!: any

  // click thay đổi background
  @Input() selected: boolean = false;
  @Input() isBtnSpecLeft: boolean = false;
  @Input() isBtnSpecRight: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    console.log('Custom button clicked!');
    this.clicked.emit()
  }
}
