import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { AgendarComponent } from './agendar/agendar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent, AgendarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})

export class HomeModule { }
