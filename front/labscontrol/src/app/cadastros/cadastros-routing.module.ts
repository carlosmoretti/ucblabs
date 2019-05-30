import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoperfilComponent } from './tipoperfil/tipoperfil.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ItensconfiguracaoComponent } from './itensconfiguracao/itensconfiguracao.component';

const routes: Routes = [
  { path: 'tipoperfil', component: TipoperfilComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: 'laboratorio', component: LaboratorioComponent },
  { path: 'disciplina', component: DisciplinaComponent },
  { path: 'itensconfiguracao', component: ItensconfiguracaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CadastrosRoutingModule { }
