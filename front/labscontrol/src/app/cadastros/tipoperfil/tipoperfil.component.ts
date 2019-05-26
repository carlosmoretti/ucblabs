import { ViewChild, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2/swal.component'
import { AlertsComponent } from '../../alerts/alerts.component';

@Component({
  selector: 'app-tipoperfil',
  templateUrl: './tipoperfil.component.html',
  styleUrls: ['./tipoperfil.component.css']
})

export class TipoperfilComponent implements OnInit {

  config: any;

  constructor(private apiService: ApiService, private http: HttpClient) { }

  public titulo: string;

  public frm = new FormGroup({
    Nome: new FormControl('')
  });

  public registrosExistentes;
  public totalItens: number;
  
  ngOnInit() {

    this.apiService.GetAll()
      .subscribe(d=> {
        this.registrosExistentes = d["data"];
        this.totalItens = parseInt(d["total"]);
      })

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItens: this.totalItens
    }

    this.titulo = "Cadastrar Tipo de Perfíl";
  }

  addTipoPerfil(ret){
    const obj = {
      Nome: ret.value.Nome,
      id: 0
    }

    this.apiService.AddTipoPerfil(obj)
      .subscribe(d=> {
        new AlertsComponent().ShowSwalAlert(d);
        this.GetAll();
      });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  GetAll() {
    this.apiService.GetAll()
        .subscribe(d=> {
          this.registrosExistentes = d["data"];
          this.totalItens = parseInt(d["total"]);
        })
  }
}
