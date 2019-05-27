import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoperfilComponent } from './tipoperfil/tipoperfil.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';

const routes: Routes = [
  { path: 'tipoperfil', component: TipoperfilComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: 'laboratorio', component: LaboratorioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
