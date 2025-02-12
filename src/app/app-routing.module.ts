import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportProcessComponent } from './pages/export-process/export-process.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // {
  //   path: '', component: AppComponent, pathMatch: 'full'
  // },
  {
    path: '', component: HomeComponent
  },
  // {
  //   path: 'table', component: CustomTableComponent
  // },
  // {
  //   path: 'menu', component: CustomMenuComponent
  // },
  // {
  //   path: 'tabs', component: CustomTabsComponent
  // },
  {
    path: "export", component: ExportProcessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
