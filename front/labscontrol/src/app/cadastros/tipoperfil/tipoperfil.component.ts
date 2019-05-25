import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tipoperfil',
  templateUrl: './tipoperfil.component.html',
  styleUrls: ['./tipoperfil.component.css']
})
export class TipoperfilComponent implements OnInit {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  public titulo: string;

  public frm = new FormGroup({
    Nome: new FormControl('')
  });

  ngOnInit() {
    this.titulo = "Cadastrar Tipo de Perfíl";
  }

  addTipoPerfil(ret){
    const obj = {
      Nome: ret.value.Nome,
      id: 0
    }

    this.apiService.AddTipoPerfil(obj);
  }

}
