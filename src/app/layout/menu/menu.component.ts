import { Component } from '@angular/core';
import { IMenuData } from 'src/app/types/DataMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuData: IMenuData[] = [
    {
      title: 'Danh mục',
      listSubTitle: [
        'Loại tiền',
        'Mã sản phẩm',
        'Tài khoản hoạch toán',
        'Mã hoạch toán',
        'Bút toán cơ bản',
        'Bút toán chi tiết',
      ],
    },
    {
      title: 'Đọc file quyết toán',
      listSubTitle: [
        'Loại tiền',
        'Mã sản phẩm',
        'Tài khoản hoạch toán',
        'Mã hoạch toán',
        'Bút toán cơ bản',
        'Bút toán chi tiết',
      ],
    },
    {
      title: 'Đối soát',
      listSubTitle: [
        'Loại tiền',
        'Mã sản phẩm',
        'Tài khoản hoạch toán',
        'Mã hoạch toán',
        'Bút toán cơ bản',
        'Bút toán chi tiết',
      ],
    },
    { title: 'Đối chiếu dữ liệu giao dịch' },
    {
      title: 'Báo cáo',
      listSubTitle: [
        'Loại tiền',
        'Mã sản phẩm',
        'Tài khoản hoạch toán',
        'Mã hoạch toán',
        'Bút toán cơ bản',
        'Bút toán chi tiết',
      ],
    },
  ];
}
