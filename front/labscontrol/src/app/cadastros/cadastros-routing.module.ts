import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoperfilComponent } from './tipoperfil/tipoperfil.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ItensconfiguracaoComponent } from './itensconfiguracao/itensconfiguracao.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

const routes: Routes = [
  { path: 'tipoperfil', component: TipoperfilComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: 'laboratorio', component: LaboratorioComponent },
  { path: 'disciplina', component: DisciplinaComponent },
  { path: 'itensconfiguracao', component: ItensconfiguracaoComponent},
  { path: 'pessoa', component: UsuarioComponent },
  { path: 'pessoa/cadastrar', component: UsuarioDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CadastrosRoutingModule { }
