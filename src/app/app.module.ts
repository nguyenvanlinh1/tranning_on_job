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
import { ExportProcessComponent } from './pages/export-process/export-process.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CustomDownloadComponent } from './components/custom-download/custom-download.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { UploadComponent } from './components/custom-upload/upload.component';

ModuleRegistry.registerModules([AllCommunityModule]);

@NgModule({
  declarations: [
    AppComponent,
    CellButtonComponent,
    FormatDatePipe,
    ExportProcessComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    MenuComponent,
    UploadComponent,
    CustomDownloadComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TuiRoot, TuiIcon, TuiPagination, BrowserAnimationsModule, CustomTabsComponent, CustomTableComponent, CustomMenuComponent, TuiButton, CustomInputComponent, CustomButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
