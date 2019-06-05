import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { AlertsComponent } from '../../alerts/alerts.component';
import { GridComponent } from '../../grid/grid.component';
import Swal from 'sweetalert2';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  public config: any;
  public registros:any;
  public itensTotal: number;

  constructor(private api: ApiService) { }

  public titulo: string;

  public laboratorio = new FormGroup({
    Sala: new FormControl(''),
    Capacidade: new FormControl('')
  })

  ngOnInit() {
    this.GetAll();

    this.config = new GridComponent().GridConfiguration(this.itensTotal);
    this.titulo = "Cadastrar laboratório"
  }

  AddLaboratorio(obj) {

    if(obj.value.Sala == "" || obj.value.Capacidade == "")
      new AlertsComponent().AlertError("Todos os campos são obrigatórios");

    this.api.AddLaboratorio(obj)
      .subscribe(d=> {
        new AlertsComponent().ShowSwalAlert(d);
        this.GetAll();
      })
  }

  GetAll() {
    this.blockUI.start();
    this.api.GetAll()
      .subscribe(d=> {
        this.blockUI.stop();
        this.registros = d["data"];
        this.itensTotal = parseInt(d["total"]);
      })
  }

  RemoverLaboratorio(id) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você estará removendo este laboratório.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, desejo remover.',
      cancelButtonText: "Cancelar",
    }).then(e=> {
      if(e.value) {
        this.api.RemoverLaboratorio(id)
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
