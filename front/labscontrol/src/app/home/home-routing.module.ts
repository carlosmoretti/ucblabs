import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../home/index/index.component';
import { AgendarComponent } from '../home/agendar/agendar.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'agendar', component: AgendarComponent },
  { path: 'agendar/:id', component: AgendarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
