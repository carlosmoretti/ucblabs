import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  constructor(private api: ApiService) { }

  public titulo: string;

  public agendar = new FormGroup({
    disciplina: new FormControl(''),
    data: new FormControl(''),
    laboratorio: new FormControl(''),
    professor: new FormControl({ value: 'Carlos Moretti', disabled:'true'})
  });

  ngOnInit() {
    this.titulo = "Reservar um laboratório..."
    this.api.getAgenda();
  }

}
