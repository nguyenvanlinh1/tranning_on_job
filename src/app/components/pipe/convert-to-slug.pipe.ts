import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSlug',
})
export class ConvertToSlugPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value
      .normalize('NFD') // Chuẩn hóa Unicode
      .replace(/[\u0300-\u036f]/g, '') // Xóa dấu tiếng Việt
      .toLowerCase() // Chuyển chữ thường
      .replace(/đ/g, 'd') // Chuyển "đ" thành "d"
      .replace(/\s+/g, '_'); // Thay khoảng trắng bằng "_"
  }
}
