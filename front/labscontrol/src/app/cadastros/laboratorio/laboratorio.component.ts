import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { AlertsComponent } from '../../alerts/alerts.component';
import { GridComponent } from '../../grid/grid.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {

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
    this.api.GetAll()
      .subscribe(d=> {
        this.registros = d["data"];
        this.itensTotal = parseInt(d["total"]);
      })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
