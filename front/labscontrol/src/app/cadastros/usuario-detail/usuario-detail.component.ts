import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { AlertsComponent } from '../../alerts/alerts.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

declare var multiselect:any

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

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
    this.GetAllTiposPerfis();
    this.GetAllDisciplinas();
  }

  GetAllTiposPerfis() {
    var tiposPerfis: any;

    this.blockUI.start();
    this.api.GetAllTipoPerfil()
      .subscribe(d=> {
        this.blockUI.stop();
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

  GetAllDisciplinas() {
    this.blockUI.start();
    this.api.GetAllDisciplina()
      .subscribe(d=> {
        this.blockUI.stop();
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
    this.blockUI.start();
    var manda = obj.value;

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
      TipoPerfil: tipos,
      Disciplinas: manda.Disciplinas
    }

    this.api.CadastrarPessoa(objeto)
      .subscribe(data => {
        this.blockUI.stop();
        new AlertsComponent().ShowSwalAlert(data);
      }, e => {
        console.log(e);
        new AlertsComponent().ShowError(e);
      });
  }
}
