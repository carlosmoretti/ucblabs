import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { TipoperfilComponent } from './tipoperfil/tipoperfil.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ItensconfiguracaoComponent } from './itensconfiguracao/itensconfiguracao.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [TipoperfilComponent, FornecedorComponent, LaboratorioComponent, DisciplinaComponent, ItensconfiguracaoComponent, UsuarioComponent, UsuarioDetailComponent],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    BlockUIModule.forRoot()
  ]
})
export class CadastrosModule { }
