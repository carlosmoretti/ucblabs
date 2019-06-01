import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';

declare var multiselect:any

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
  

  dropdownTipoPerfil = [];
  dropdownTipoPerfilSel = [];

  public Pessoa = new FormGroup({
    Matricula: new FormControl(''),
    Login: new FormControl(''),
    Senha: new FormControl(''),
    Nome: new FormControl(''),
    Cpf: new FormControl(''),
    DataNascimento: new FormControl(''),
    CEP: new FormControl(''),
    TiposPerfis: new FormControl(''),
    Disciplinas: new FormControl('')
  });

  public titulo: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.titulo = "Cadastrar Pessoa";

    var tiposPerfis: any;
    this.api.GetAllTipoPerfil()
      .subscribe(d=> {
        tiposPerfis = d["data"]; 
          for(var i =0; i < parseInt(d["total"]); i++) {
            this.dropdownTipoPerfil.push({
              item_id: tiposPerfis[i]["id"], 
              item_text: tiposPerfis[i]["nome"],
              item_class: "badge-dark"
            })
          }
      })
  }

  toggle(e) {

    if(this.dropdownTipoPerfil.find(d=> d.item_id == e).item_class == "badge-success") {
      this.dropdownTipoPerfil.find(d=> d.item_id == e).item_class = "badge-dark";
      return;
    }
    
    if(this.dropdownTipoPerfil.find(d=> d.item_id == e).item_class == "badge-dark") {
      this.dropdownTipoPerfil.find(d=> d.item_id == e).item_class = "badge-success";
      return;
    }
  }
}
