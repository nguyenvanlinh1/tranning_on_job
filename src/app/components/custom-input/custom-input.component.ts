import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiHint, TuiTextfield } from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  imports: [TuiHint, TuiTextfield, ReactiveFormsModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent {
  protected readonly testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });

  @Input() title!: string
  @Input() typeInput: string = "text"
}
