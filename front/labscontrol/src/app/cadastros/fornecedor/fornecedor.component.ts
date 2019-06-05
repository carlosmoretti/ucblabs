import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GridComponent } from '../../grid/grid.component';
import { ApiService } from './api.service';
import { AlertsComponent } from '../../alerts/alerts.component';
import Swal from 'sweetalert2';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  config: any;
  public registros:any;
  public totalItens: number;

  constructor(private api: ApiService) { }

  public titulo: string;

  public fornecedor = new FormGroup({
    Nome: new FormControl('')
  })

  ngOnInit() {
    this.GetAll();
    this.titulo = "Cadastrar Fornecedor"
    this.config = new GridComponent().GridConfiguration(this.totalItens);
  }

  AdicionarFornecedor(obj) {
    this.api.AdicionarFornecedor(obj)
      .subscribe(d=> {
        console.log(d);
        new AlertsComponent().ShowSwalAlert(d);
        this.GetAll();
      });
  }

  GetAll() {
    this.blockUI.start();
    return this.api.GetAll()
      .subscribe(d=> {
        this.blockUI.stop();
        console.log(d);
        this.registros = d["data"];
        this.totalItens = parseInt(d["total"]);
      });
  }

  RemoverFornecedor(obj) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você estará removendo este tipo de perfil.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, desejo remover.',
      cancelButtonText: "Cancelar",
    }).then(e=> {
      if(e.value) {
        this.api.RemoverFornecedor(obj)
        .subscribe(d=> {
          new AlertsComponent().ShowSwalAlert(d);
          this.GetAll();
        })
      }
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
