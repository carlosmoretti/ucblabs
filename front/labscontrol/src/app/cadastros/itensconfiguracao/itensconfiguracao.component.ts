import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { AlertsComponent } from '../../alerts/alerts.component';
import { GridComponent } from 'src/app/grid/grid.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-itensconfiguracao',
  templateUrl: './itensconfiguracao.component.html',
  styleUrls: ['./itensconfiguracao.component.css']
})
export class ItensconfiguracaoComponent implements OnInit {

  constructor(private api: ApiService) { }

  public titulo: string;
  public TipoItens: any;
  public itens:number;
  public totalItens: any;
  public config:any;

  public cadastrarNovo: boolean;

  public Equipamento = new FormGroup({
    NumeroSerie: new FormControl(''),
    NotaFiscal: new FormControl(''),
    Serial: new FormControl(''),
    IdTipoEquipamento: new FormControl(''),
    cadastrarNovo: new FormControl(''),
    novoTipo: new FormControl('')
  });

  ngOnInit() {
    this.titulo = "Cadastro de Itens de Configuração";

    this.api.GetAllEquipamento()
      .subscribe(d=> { this.itens = d["data"]; console.log(d["data"]); this.totalItens =  d["total"]});

    this.api.GetAllTipos()
      .subscribe(d=> { 
        this.TipoItens = d["data"]; 
        console.log(this.TipoItens); 
      });

      this.config = new GridComponent().GridConfiguration(this.totalItens)
  }

  GetAllTipoConfiguracao() {
    return this.api.GetAllTipos()
      .subscribe(d=> {
        this.TipoItens = d["data"];
      })
  }

  GetAllEquipamentos() {
    return this.api.GetAllEquipamento()
      .subscribe(d=> {
        this.itens = d["data"];
        this.totalItens = d["total"];
      })
  }

  RemoverEquipamento(obj) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você estará removendo este equipamento.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, desejo remover.',
      cancelButtonText: "Cancelar",
    }).then(e=> {
      if(e.value) {
        this.api.RemoverEquipamento(obj)
          .subscribe(d=> {
            new AlertsComponent().ShowSwalAlert(d);
            this.GetAllEquipamentos();
          })
      }
    })
  }

  AddEquipamento(obj) {
    obj = obj.value;

    console.log(obj);

    var equipamento = {
      IdTipoEquipamento: obj.IdTipoEquipamento,
      NotaFiscal: obj.NotaFiscal,
      NumeroSerie: obj.NumeroSerie,
      Serial: obj.Serial,
      tipoEquipamento: null
    };

    if(obj.cadastrarNovo == true) {
      var novoTipo = {
        Nome: obj.novoTipo
      };

      equipamento.IdTipoEquipamento = 0;
      equipamento.tipoEquipamento = novoTipo;
    }

    console.log(equipamento);

    this.api.AddEquipamento(equipamento)
      .subscribe(d=> {
        new AlertsComponent().ShowSwalAlert(d);
        this.GetAllTipoConfiguracao();
        this.GetAllEquipamentos();
      });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
