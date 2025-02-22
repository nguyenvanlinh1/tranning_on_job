import { Pipe, PipeTransform } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(date: TuiDay | null): string {
    return date ? `${date.day}/${date.month + 1}/${date.year}` : '';
  }
}
