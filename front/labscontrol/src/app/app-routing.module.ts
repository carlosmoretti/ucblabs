import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamentoComponent } from './agenda/agendamento/agendamento.component';
import { AgendamentodetailComponent } from './agenda/agendamentodetail/agendamentodetail.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule' },
  { path: 'cadastros', loadChildren: './cadastros/cadastros.module#CadastrosModule'},
  { path: 'agenda', component: AgendamentoComponent},
  { path: 'agenda/cadastrar', component: AgendamentodetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
