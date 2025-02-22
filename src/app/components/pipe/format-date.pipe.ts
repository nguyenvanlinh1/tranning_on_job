import { Pipe, PipeTransform } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(date: TuiDay | null): string {
    if (!date) return '';

    const day = String(date.day).padStart(2, '0');
    const month = String(date.month + 1).padStart(2, '0');

    return `${day}-${month}-${date.year}`;
  }
}
