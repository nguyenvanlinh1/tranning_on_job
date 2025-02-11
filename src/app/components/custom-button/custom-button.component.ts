import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent{
  @Input() name!: string
  @Input() icon!: any
}
