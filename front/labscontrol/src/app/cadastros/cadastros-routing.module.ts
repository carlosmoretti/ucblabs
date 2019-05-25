import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoperfilComponent } from './tipoperfil/tipoperfil.component';

const routes: Routes = [
  { path: 'tipoperfil', component: TipoperfilComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
