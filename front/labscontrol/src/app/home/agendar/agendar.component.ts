import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  constructor() { }

  public titulo: string;

  public agendar = new FormGroup({
    disciplina: new FormControl(''),
    data: new FormControl(''),
    laboratorio: new FormControl(''),
    professor: new FormControl({ value: 'Carlos Moretti', disabled:'true'})
  });

  ngOnInit() {
    this.titulo = "Reservar um laboratório..."
  }

}
