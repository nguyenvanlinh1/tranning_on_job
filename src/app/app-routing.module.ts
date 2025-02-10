import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomMenuComponent } from './components/custom-menu/custom-menu.component';
import { CustomTabsComponent } from './components/custom-tabs/custom-tabs.component';
import { ExportProcessComponent } from './pages/export-process/export-process.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'table', component: CustomTableComponent
  },
  {
    path: 'menu', component: CustomMenuComponent
  },
  {
    path: 'tabs', component: CustomTabsComponent
  },
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
