import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { AppComponent } from './app.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomMenuComponent } from './components/custom-menu/custom-menu.component';
import { CustomTabsComponent } from './components/custom-tabs/custom-tabs.component';

const routes: Routes = [
  // {
  //   path:"/button", loadComponent: () => import("./components/custom-button/custom-button.component").then((m) => m.CustomButtonComponent)
  // }
  {
    path: '', component: AppComponent, pathMatch: 'full'
  },
  {
    path: 'abc', component: CustomButtonComponent
  },
  {
    path: 'table', component: CustomTableComponent
  },
  {
    path: 'menu', component: CustomMenuComponent
  },
  {
    path: 'tabs', component: CustomTabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
