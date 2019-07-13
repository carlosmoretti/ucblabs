import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AlertsComponent } from './alerts/alerts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GridComponent } from './grid/grid.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { BlockUIModule } from 'ng-block-ui';
import { AgendamentoComponent } from './agenda/agendamento/agendamento.component';
import { AgendamentodetailComponent } from './agenda/agendamentodetail/agendamentodetail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    GridComponent,
    AgendamentoComponent,
    AgendamentodetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    BlockUIModule.forRoot(),
    ReactiveFormsModule,
    NgxTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
