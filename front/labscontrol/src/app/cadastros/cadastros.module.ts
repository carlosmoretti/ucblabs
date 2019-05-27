import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { TipoperfilComponent } from './tipoperfil/tipoperfil.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';

@NgModule({
  declarations: [TipoperfilComponent, FornecedorComponent, LaboratorioComponent],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxPaginationModule
  ]
})
export class CadastrosModule { }
