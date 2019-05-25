import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { TipoperfilComponent } from './tipoperfil/tipoperfil.component';

@NgModule({
  declarations: [TipoperfilComponent],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastrosModule { }
