import { NgModule } from '@angular/core';
import {
  provideRouter,
  RouterModule,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { ExportProcessComponent } from './pages/export-process/export-process.component';
import { HomeComponent } from './pages/home/home.component';
import { DifferenceProcessComponent } from './pages/difference-process/difference-process.component';
import { NewInspectComponent } from './pages/new-inspect/new-inspect.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  // {
  //   path: '', component: AppComponent, pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent,
    title: 'Trang chủ',
  },
  {
    path: 'chenh_lech_mgdtd',
    component: DifferenceProcessComponent,
    title: 'Chênh lệch đối soát',
  },
  {
    path: 'chenh_lech_mgdtd/create',
    component: NewInspectComponent,
    title: 'Tạo tra soát'
  },
  {
    path: 'nhan_offline_tu_nhtt',
    component: ExportProcessComponent,
    title: 'Màn Hình xuất hóa đơn',
  },
  { path: '**', component: NotFoundComponent, title: 'Trang không tồn tại' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
