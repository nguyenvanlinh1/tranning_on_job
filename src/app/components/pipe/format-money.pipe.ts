import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoney',
})
export class FormatMoneyPipe implements PipeTransform {
  transform(value: number | string | null): string {
    if (value === null || value === undefined) return '';

    const num = typeof value === 'string' ? Number(value) : value;
    if (isNaN(num)) return '';

    return num.toLocaleString('de-DE');
  }
}
