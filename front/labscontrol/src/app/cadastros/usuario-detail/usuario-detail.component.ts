import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { AlertsComponent } from '../../alerts/alerts.component';

declare var multiselect:any

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
  

  dropdownTipoPerfil = [];
  dropdownTipoPerfilSel = [];
  listadisciplina = [];
  listaDisciplinaSel = [];

  public Pessoa = new FormGroup({
    Matricula: new FormControl(''),
    Login: new FormControl(''),
    Senha: new FormControl(''),
    Nome: new FormControl(''),
    Cpf: new FormControl(''),
    DataNascimento: new FormControl(''),
    CEP: new FormControl(''),
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

    this.api.GetAllDisciplina()
      .subscribe(d=> {
        this.listadisciplina = d["data"];
        console.log(d["data"]);
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

  CadastrarPessoa(obj) {
    var manda = obj.value;
    var perfsTest = this.dropdownTipoPerfil.find(d=> d.item_class == "badge-success");

    // Monta Tipos de Pessoa
    var tipos = [];
    for(var i =0; i < this.dropdownTipoPerfil.length; i++) {
      if(this.dropdownTipoPerfil[i].item_class == "badge-success") {
        var item = {
            Nome: this.dropdownTipoPerfil[i].item_text,
            Id: this.dropdownTipoPerfil[i].item_id
          }
          tipos.push(item);
      }
    }

    var objeto = {
      Pessoa: manda,
      TipoPerfil: tipos
    }

    this.api.CadastrarPessoa(objeto)
      .subscribe(data => {
        new AlertsComponent().ShowSwalAlert(data);
      }, e => {
        console.log(e);
        new AlertsComponent().ShowError(e);
      });
  }
}
