import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { ExportProcessComponent } from './pages/export-process/export-process.component';
import { HomeComponent } from './pages/home/home.component';
import { DifferenceProcessComponent } from './pages/difference-process/difference-process.component';
import { NewInspectComponent } from './pages/new-inspect/new-inspect.component';

const routes: Routes = [
  // {
  //   path: '', component: AppComponent, pathMatch: 'full'
  // },
  {
    path: '', component: HomeComponent, title: "Trang chủ"
  },
  {
    path: 'difference', component: DifferenceProcessComponent, title: "Chênh lệch đối soát"
  },
  {
    path: 'inspect', component: NewInspectComponent
  },
  // {
  //   path: 'tabs', component: CustomTabsComponent
  // },
  {
    path: "export", component: ExportProcessComponent, title: "Màn Hình xuất hóa đơn"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule {
}
