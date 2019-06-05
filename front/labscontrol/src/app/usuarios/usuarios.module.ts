import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { IndexComponent } from './index/index.component';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    BlockUIModule.forRoot()
  ]
})
export class UsuariosModule { }
