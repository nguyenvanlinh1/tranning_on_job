import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButton, TuiIcon, TuiRoot } from '@taiga-ui/core';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { TuiPagination } from '@taiga-ui/kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomTabsComponent } from "./components/custom-tabs/custom-tabs.component";
import { CustomTableComponent } from "./components/custom-table/custom-table.component";
import { CustomMenuComponent } from "./components/custom-menu/custom-menu.component";
import { CellButtonComponent } from './components/cell-button/cell-button.component';
import { FormatDatePipe } from './components/pipe/format-date.pipe';

ModuleRegistry.registerModules([AllCommunityModule]);

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    CellButtonComponent,
    FormatDatePipe
  ],
  imports: [BrowserModule, AppRoutingModule, TuiRoot, TuiIcon, TuiPagination, BrowserAnimationsModule, CustomTabsComponent, CustomTableComponent, CustomMenuComponent, TuiButton],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
